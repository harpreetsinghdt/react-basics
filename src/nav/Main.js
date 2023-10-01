import {  Link } from 'react-router-dom';

export default function Main() {
	return (
		<nav className='nav sidebar left'>
			<ul>
				<li>
					<Link to='/' className='nav-item'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/modetoggler' className='nav-item'>
						Mode Toggler
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
	);
}
