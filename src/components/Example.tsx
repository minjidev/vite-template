import useFetch from '#hooks/useFetch';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Example = () => {
  const { ok, result, isLoading } = useFetch<Array<Post>>(url, {
    method: 'GET',
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {ok ? (
        <>
          <h1>Posts</h1>
          <ul>
            {result?.map(({ title, body }) => (
              <li key={title}>
                <p>{title}</p>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default Example;
