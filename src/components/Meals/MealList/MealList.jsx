import MealItem from '../MealItem/MealItem'

import styles from './style.module.scss'

const MealList = ({ data }) => {
	return (
		<ul className={styles.list}>
			{data.map(meal => {
				return (
					<MealItem
						key={meal.id}
						id={meal.id}
						name={meal.name}
						content={meal.description}
						price={meal.price}
					/>
				)
			})}
		</ul>
	)
}

export default MealList
