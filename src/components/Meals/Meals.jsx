import styles from './style.module.scss'

import { DUMMY_MEALS } from '../../constant/data'
import Card from '../UI/Card/Card'
import MealList from './MealList/MealList'

const Meals = () => {
	return (
		<section className={styles.meals}>
			<h1>Meals</h1>

			<Card>
				<MealList data={DUMMY_MEALS} />
			</Card>
		</section>
	)
}

export default Meals
