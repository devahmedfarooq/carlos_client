import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/analyzify.webflow.css'
import './css/normalize.css'
import './index.css'

import MainLayout from './layout/Main.layout.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 5,
      retryDelay: 1000
    }
  }
})


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <App />
      </MainLayout>
{/*       <ReactQueryDevtools client={queryClient} initialIsOpen={false} />
 */}    </QueryClientProvider>
  </StrictMode>,
)
