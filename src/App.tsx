// 外部からimport
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// 内部で自分で作ったものをimport
import theme from "./theme/theme"
import { Router } from './router/Router'

// queryClientをインスタンス化してキャッシュ情報のやりとりに使用
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 300000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
