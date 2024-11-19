import { useRef, useState } from 'react'
import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import styles from './style.module.scss'

const MealForm = ({ id, addItemCardHandler }) => {
	const [isValidInput, setValidInput] = useState(true)
	const currentRef = useRef()

	const addCardHandler = event => {
		event.preventDefault()

		const inputAmount = currentRef.current.value
		if (
			inputAmount.trim().length === 0 ||
			+inputAmount < 1 ||
			+inputAmount > 10
		) {
			setValidInput(false)
			return
		}

		setValidInput(true)
		addItemCardHandler(+inputAmount)
	}

	return (
		<form className={styles.form}>
			<Input
				ref={currentRef}
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
			<Button setting={{ type: 'submit', onClick: addCardHandler }}>
				Додати
			</Button>

			{!isValidInput && 'Не пройшла валідація валідацію'}
		</form>
	)
}

export default MealForm
