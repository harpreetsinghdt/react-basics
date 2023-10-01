import logo from '../../assets/images/logo.png';

function App() {
	const styles = {
		width: '100%',
	};
	const profileImg = 'https://picsum.photos/400/265';
	return (
		<>
		<img style={styles} src={logo} alt='Logo' />

		<img style={styles} src={profileImg} alt='Logo' />
		</>
	);
}

export default App;
