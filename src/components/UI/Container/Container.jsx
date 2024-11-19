import styles from './style.module.scss'

const Container = ({ children }) => {
	return <div className={styles.card}>{children}</div>
}

export default Container
