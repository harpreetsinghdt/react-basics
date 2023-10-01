import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './header/Main';
import Nav from './nav/Main';
import Footer from './footer/Main';
import Main from './manage_state/Main';
import ModeToggler from './components/ModeToggler';
import Cards from './cards-app/Main';
import Events from './events-app/Main';
import Components from './components-app/Main';
import Customizing from './customizing-app/Main';
import Guessnumber from './guess-number/Main';
import Usinghooks from './using-hooks/Inputcomponent';
import Propdrilling from './components/Propdrilling';
import Displayimages from './displaying-images/Main';

function App() {
	return (
		<div class='container'>
			<Header />
			<Nav />
			<main class='main'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/modetoggler' element={<ModeToggler />} />
					<Route path='/cards' element={<Cards />} />
					<Route path='/events' element={<Events />} />
					<Route path='/components' element={<Components />} />
					<Route path='/customizing' element={<Customizing />} />
					<Route path='/guess-number' element={<Guessnumber />} />
					<Route path='/using-hooks' element={<Usinghooks />} />
					<Route path='/prop-drilling' element={<Propdrilling />} />
					<Route path='/display-images' element={<Displayimages />} />
				</Routes>
			</main>
			{/* <div class='sidebar right'> Sidebar 2</div> */}
			<Footer />
		</div>
	);
}

export default App;
