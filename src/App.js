import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {lazy} from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
//direct import for children pages for preventing rerender
import Allocation from 'routes/Allocation'; 
import Nth from 'routes/Nth'; 
import ScrollToTop from 'components/ScrollToTop';
const Main = lazy(() => import('routes/Main.js'));
const Info = lazy(() => import('routes/Info.js'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime : 1000 * 60,
      cacheTime : 1000 * 60 * 5
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} >
            <Route index element={<Allocation />} />
            <Route path="Allocation" element={<Allocation />} />
            <Route path="Nth" element={<Nth />} />
          </Route>
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
