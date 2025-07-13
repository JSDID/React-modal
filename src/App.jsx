import './App.css'
import { useState } from 'react'

// Модальное окно с темным фоном по стандартам React и БЭМ
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Кнопка для открытия модального окна */}
      <button className="button" onClick={() => setModalOpen(true)}>
        Открыть модальное окно
      </button>
      {/* Модальное окно с темным фоном */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="modal__title">Модальное окно</h2>
        <p className="modal__text">Это пример модального окна с темным фоном по БЭМ.</p>
      </Modal>
    </>
  )
}

export default App
