import styled from 'styled-components';
import Tags from './components/Tags';
import Timer from './components/Timer';

function App() {
	return (
		<>
			<Title>Pomodoro</Title>
			{/* Tags */}
			<Tags />
			{/* Timer */}
			<Timer />
			{/* setting */}
		</>
	);
}

export default App;

const Title = styled.h1`
	font-size: 3rem;
	padding: 2rem 0;
	text-align: center;
`;
