import styles from './style.module.scss'

import { useContext } from 'react'
import CardContext from '../../../store/ctx-card.jsx'
import CartIcon from './CartIcon.jsx'

const HeaderCartButton = ({ showModalHandler }) => {
	const ctx = useContext(CardContext)

	const cardNumberItems = ctx.items.reduce((currentValue, item) => {
		return currentValue + item.amount
	}, 0)

	return (
		<button className={styles.button} onClick={showModalHandler}>
			<span className={styles.icon}>
				<CartIcon />
			</span>

			<span>Корзина</span>
			<span className={styles.badge}>{cardNumberItems}</span>
		</button>
	)
}

export default HeaderCartButton
