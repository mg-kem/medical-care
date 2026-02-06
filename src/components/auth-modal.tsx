interface AuthModalProps {
  onClose: () => void;
}

export default function AuthModal({ onClose }: AuthModalProps) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="button--close" onClick={onClose}></button>
        <h3 className="modal__title">Войти</h3>
        <form action="" className="form">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="password">Пароль</label>
          <input type="password" placeholder="Пароль" />
          <button type="submit" className="button">Войти</button>
        </form>
      </div>
    </div>
  )
}