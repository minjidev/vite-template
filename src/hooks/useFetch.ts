import { useState, useEffect } from 'react';

function useFetch<T>(
  url: string,
  { method, body }: { method: string; body?: XMLHttpRequestBodyInit },
) {
  const [result, setResult] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ok, setOk] = useState<boolean | undefined>(); // 2xx 3xx 정상 여부
  const [status, setStatus] = useState<number | undefined>(); // HTTP status

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      setIsLoading(true);

      const response = await fetch(url, {
        method,
        body,
        signal: abortController.signal,
      });

      setOk(response.ok);
      setStatus(response.status);

      if (response.ok) {
        const apiResult = await response.json();
        setResult(apiResult);
      }

      setIsLoading(false);
    })();

    return () => {
      abortController.abort();
    };
  }, [url, method, body]);

  return { ok, result, isLoading, status };
}

export default useFetch;
