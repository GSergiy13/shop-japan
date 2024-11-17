import Input from '../../UI/Input/Input'
import styles from './style.module.scss'

const MealForm = ({ id }) => {
	return (
		<form className={styles.form}>
			<Input
				label={'Кількість'}
				label_id={id}
				setting={{
					id: id,
					name: 'counter',
					type: 'number',
					min: '1',
					step: '1',
					max: '100',
				}}
			/>
			<button>Додати</button>
		</form>
	)
}

export default MealForm
