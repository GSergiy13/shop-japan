import { useContext } from 'react'
import CardContext from '../../store/ctx-card'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'
import styles from './style.module.scss'

const Card = ({ onCloseModal }) => {
	const ctx = useContext(CardContext)

	const summCards = ctx.items.reduce(
		(currentValue, item) => currentValue + item.price * item.amount,
		0
	)

	const cardItems = (
		<ul className={styles['cart-items']}>
			{ctx.items.map(item => (
				<li key={item.id}>{item.name}</li>
			))}
		</ul>
	)

	return (
		<Modal className={styles['cart-items']} onCloseModal={onCloseModal}>
			{cardItems}
			<div className={styles.total}>
				<span>Всього:</span>
				<span>${summCards}</span>
			</div>
			<div className={styles.actions}>
				<Button
					setting={{
						type: 'button',
						onClick: onCloseModal,
						className: styles['button--alt'],
					}}
				>
					Close
				</Button>

				<Button setting={{ className: styles.button, type: 'button' }}>
					Замовити
				</Button>
			</div>
		</Modal>
	)
}

export default Card
