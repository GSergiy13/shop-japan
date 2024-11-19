import styles from './style.module.scss'

import { useContext } from 'react'
import { DUMMY_MEALS } from '../../constant/data'
import CardContext from '../../store/ctx-card'
import Container from '../UI/Container/Container'
import MealList from './MealList/MealList'

const Meals = () => {
	const ctx = useContext(CardContext)

	return (
		<section className={styles.meals}>
			<h1>Meals</h1>

			<Container>
				<MealList data={DUMMY_MEALS} />
			</Container>
		</section>
	)
}

export default Meals
