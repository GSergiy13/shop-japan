import styles from './style.module.scss'

import ReactDOM from 'react-dom'

const BackDrop = ({ onCloseModal }) => {
	return <div className={styles.backdrop} onClick={onCloseModal}></div>
}
const ModalContent = ({ children }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

const getElemRenderModal = document.querySelector('#overlay')

const Modal = ({ children, onCloseModal }) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onCloseModal={onCloseModal} />,
				getElemRenderModal
			)}

			{ReactDOM.createPortal(
				<ModalContent>{children}</ModalContent>,
				getElemRenderModal
			)}
		</>
	)
}

export default Modal
