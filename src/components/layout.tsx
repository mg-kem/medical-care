import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './hooks/useStore';
import { toggleOpenModal } from '../store/actions';

export default function Layout() {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(toggleOpenModal(true));
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__inner">
          <div className="logo">logo</div>
          <nav className="nav">
            <a href="#" className="nav__link">Контакты</a>
            <a href="#" className="nav__link button button--header" onClick={handleOpenModal}>Войти</a>
          </nav>
        </div>
      </header>
      <Outlet />
    </div >

  )
}