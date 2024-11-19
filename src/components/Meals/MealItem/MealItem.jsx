import { useContext } from 'react'
import CardContext from '../../../store/ctx-card'
import MealForm from '../MealForm/MealForm'
import styles from './style.module.scss'

const MealItem = ({ id, content, name, price }) => {
	const ctx = useContext(CardContext)

	const addItemCardHandler = total => {
		ctx.addItem({
			id: id,
			name: name,
			amount: total,
			price: price,
		})
	}

	return (
		<li className={styles['meal']}>
			<div>
				<h3>{name}</h3>
				<div className={styles.description}>{content}</div>
				<div className={styles.price}>${price}</div>
			</div>

			<div>
				<MealForm id={id} addItemCardHandler={addItemCardHandler} />
			</div>
		</li>
	)
}

export default MealItem
