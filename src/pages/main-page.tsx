export default function MainPage() {
  return (
    <div className="container">
      <header className="header">
        <div className="header__inner">
          <div className="logo">logo</div>
          <nav className="nav">
            <a href="#" className="nav__link">Контакты</a>
            <a href="#" className="nav__link button button--header">Войти</a>
          </nav>
        </div>
      </header>

      <section className='hero'>
        <div className="hero__title-container">
          <div className="title-wrapper">
            <h1 className="hero__title">
              Место для получения медицинской помощи
            </h1>
            <div className="hero__actions">
              <button className="button button--primary">Войти</button>
              <button className="button">Контакты</button>
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