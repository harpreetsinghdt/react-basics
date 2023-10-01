import { Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Header from './components/header/Main';
import Footer from './components/footer/Main';
import Home from './components/home/Main';
import Managestate from './components/manage_state/Main';
import ModeToggler from './components/modetoggler/ModeToggler';
import Cards from './components/cards-app/Main';
import Events from './components/events-app/Main';
import Components from './components/components-app/Main';
import Customizing from './components/customizing-app/Main';
import Guessnumber from './components/guess-number/Main';
import Usinghooks from './components/using-hooks/Inputcomponent';
import Propdrilling from './components/propdrilling/Propdrilling';
import Displayimages from './components/displaying-images/Main';
import Reactplayer from './components/react-player/Main';
import Audioplayer from './components/song-selection/Main';

function App() {
	return (
		<div class='container'>
			<Header />
			<nav className='nav sidebar left'>
				<ul>
					<li>
						<Link to='/' className='nav-item'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/react-player' className='nav-item'>
							React Player
						</Link>
					</li>
					<li>
						<Link to='/audio-player' className='nav-item'>
							Audio Player
						</Link>
					</li>
					<li>
						<Link to='/modetoggler' className='nav-item'>
							Mode Toggler
						</Link>
					</li>
					<li>
						<Link to='/manage-state' className='nav-item'>
							Manage State
						</Link>
					</li>
					<li>
						<Link to='/cards' className='nav-item'>
							Cards
						</Link>
					</li>
					<li>
						<Link to='/events' className='nav-item'>
							Events
						</Link>
					</li>
					<li>
						<Link to='/components' className='nav-item'>
							Components
						</Link>
					</li>
					<li>
						<Link to='/customizing' className='nav-item'>
							Customizing
						</Link>
					</li>
					<li>
						<Link to='/guess-number' className='nav-item'>
							Guess Number
						</Link>
					</li>
					<li>
						<Link to='/using-hooks' className='nav-item'>
							Using Hooks
						</Link>
					</li>
					<li>
						<Link to='/prop-drilling' className='nav-item'>
							Prop Drilling
						</Link>
					</li>
					<li>
						<Link to='/display-images' className='nav-item'>
							Displaying Images
						</Link>
					</li>
				</ul>
			</nav>
			<main class='main'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/manage-state' element={<Managestate />} />
					<Route path='/modetoggler' element={<ModeToggler />} />
					<Route path='/cards' element={<Cards />} />
					<Route path='/events' element={<Events />} />
					<Route path='/components' element={<Components />} />
					<Route path='/customizing' element={<Customizing />} />
					<Route path='/guess-number' element={<Guessnumber />} />
					<Route path='/using-hooks' element={<Usinghooks />} />
					<Route path='/prop-drilling' element={<Propdrilling />} />
					<Route path='/display-images' element={<Displayimages />} />
					<Route path='/react-player' element={<Reactplayer />} />
					<Route path='/audio-player' element={<Audioplayer />} />
				</Routes>
			</main>
			{/* <div class='sidebar right'> Sidebar 2</div> */}
			<Footer />
		</div>
	);
}

export default App;
