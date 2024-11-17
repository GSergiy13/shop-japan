import HeaderCartButton from './HeaderCartButton/HeaderCartButton'
import styles from './styles.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>Logo</h1>

			<HeaderCartButton />
		</header>
	)
}

export default Header
