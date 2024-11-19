import React from 'react'
import styles from './style.module.scss'

const Input = React.forwardRef(({ label, label_id, setting }, ref) => {
	return (
		<div className={styles.input}>
			<label htmlFor={label_id}>{label}</label>

			<input ref={ref} {...setting} />
		</div>
	)
})

export default Input
