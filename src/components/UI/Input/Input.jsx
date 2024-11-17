import styles from './style.module.scss'

const Input = ({ label, label_id, setting }) => {
	return (
		<div className={styles.input}>
			<label htmlFor={label_id}>{label}</label>

			<input {...setting} />
		</div>
	)
}

export default Input
