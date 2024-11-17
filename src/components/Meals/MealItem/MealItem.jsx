import MealForm from '../MealForm/MealForm'
import styles from './style.module.scss'

const MealItem = ({ id, content, name, price }) => {
	return (
		<li className={styles['meal']}>
			<div>
				<h3>{name}</h3>
				<div className={styles.description}>{content}</div>
				<div className={styles.price}>{price}</div>
			</div>
			<div>
				<MealForm id={id} />
			</div>
		</li>
	)
}

export default MealItem
