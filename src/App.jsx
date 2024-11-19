import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Hader'
import Meals from './components/Meals/Meals'
import Promo from './components/Promo/Promo'

import { useState } from 'react'
import CardContextRouter from './store/CardContextRouter'

function App() {
	const [isShowModal, setShowModal] = useState(false)

	const showModalHandler = () => {
		setShowModal(true)
	}

	const hiddenModalHandler = () => {
		setShowModal(false)
	}

	return (
		<CardContextRouter>
			{isShowModal && <Card onCloseModal={hiddenModalHandler} />}

			<Header showModalHandler={showModalHandler} />
			<Promo />
			<Meals />
		</CardContextRouter>
	)
}

export default App
