import { Suspense } from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Example from './components/Example';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading..</div>}>
        <Example />
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
