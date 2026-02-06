import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import Layout from './components/layout';
import { AppRoute } from './const';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

