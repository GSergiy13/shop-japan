import styles from './style.module.scss'

import CartIcon from './CartIcon.jsx'

const HeaderCartButton = () => {
	return (
		<button className={styles.button}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Корзина</span>
			<span className={styles.badge}>1</span>
		</button>
	)
}

export default HeaderCartButton