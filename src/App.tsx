import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import Layout from './components/layout';
import { AppRoute } from './const';
import ContactsPage from './pages/contacts-page';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.ROOT} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.CONTACTS} element={<ContactsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

