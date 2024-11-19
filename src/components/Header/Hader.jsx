import HeaderCartButton from './HeaderCartButton/HeaderCartButton'
import styles from './styles.module.scss'

const Header = ({ showModalHandler }) => {
	return (
		<header className={styles.header}>
			<h1>Logo</h1>

			<HeaderCartButton showModalHandler={showModalHandler} />
		</header>
	)
}

export default Header
