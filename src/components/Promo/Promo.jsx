import styles from './style.module.scss'

import promoImg from '../../../public/sushi.jpg'

const Promo = () => {
	return (
		<section className={styles.promo}>
			<div className={styles['promo-text']}>
				<h2>Онлайн Суши Ресторан Япона Кухня</h2>
				<p>
					Япона Кухня - это онлайн суши-ресторан, в котором любимые суши и
					сашими, роллы и другие блюда национальной японской кухни делает
					команда профессиональных поваров.
				</p>
				<p>
					Быстрая работа и качественная продукция, а также самые настоящие
					компоненты придают хороший вкус блюдам, дарят наслаждение от трапезы.
				</p>
			</div>

			<img src={promoImg} alt='sushi' />
		</section>
	)
}

export default Promo
