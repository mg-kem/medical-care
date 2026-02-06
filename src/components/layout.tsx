import { Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { toggleOpenModal } from '../store/actions';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const.ts';

export default function Layout() {
  const isOpenModal = useAppSelector((state) => state.isModalOpen);
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    dispatch(toggleOpenModal(true));
  };

  const handleCloseModal = () => {
    if (isOpenModal) {
      dispatch(toggleOpenModal(false));
    }
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header__inner">
          <div className="logo">
            <Link to={AppRoute.ROOT} onClick={handleCloseModal} >
              <img src='../../public/img/logo.png' alt="logo" />
            </Link>
          </div>
          <nav className="nav">
            <Link to={AppRoute.CONTACTS} className="nav__link" >Контакты</Link>
            <Link to='#' className="nav__link button button--header" onClick={handleOpenModal}>Войти</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </div >
  )
}