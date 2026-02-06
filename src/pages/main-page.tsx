import AuthModal from '../components/auth-modal';
import { useAppSelector, useAppDispatch } from '../hooks/useStore';
import { toggleOpenModal } from '../store/actions';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const.ts';


export default function MainPage() {
  const isOpenModal = useAppSelector((state) => state.isModalOpen);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(toggleOpenModal(false))
  }

  const handleOpenModal = () => {
    dispatch(toggleOpenModal(true))
  }

  return (
    <div className="container">
      {isOpenModal && <AuthModal onClose={handleCloseModal} />}
      <section className='hero'>
        <div className="hero__title-container">
          <div className="title-wrapper">
            <h1 className="hero__title">
              Место для получения медицинской помощи
            </h1>
            <div className="hero__actions">
              <button className="button button--primary" onClick={handleOpenModal}>Войти</button>
              <Link to={AppRoute.CONTACTS} className="button">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card__icon"></div>
            <h5 className="card__title">Онлайн-прием</h5>
            <div className="card__line"></div>
            <p className="card__text">Рыба текст</p>
          </div>
          <div className="card">
            <div className="card__icon"></div>
            <h5 className="card__title">Экстренный случай</h5>
            <div className="card__line"></div>
            <p className="card__text">Рыба текст</p>
          </div>
          <div className="card">
            <div className="card__icon"></div>
            <h5 className="card__title">Лечение рака</h5>
            <div className="card__line"></div>
            <p className="card__text">Рыба текст</p>
          </div>

        </div>
      </section>


    </div >
  )
}