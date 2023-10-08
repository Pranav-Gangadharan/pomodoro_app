import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import { StateProvider } from './context/StateContext';


const Progress = () => {
	const { progressBar, setProgressbar, time, initTime } =
		useContext(StateProvider);

	useEffect(() => {
		setProgressbar(time / (initTime / 100));
	}, [setProgressbar, time]);

	return (
		<OuterCircle progressBar={progressBar}>
			<InnerCircle>
				<Clock />
			</InnerCircle>
		</OuterCircle>
	);
};

export default Progress;

const OuterCircle = styled.div`
	width: 30rem;
	height: 30rem;
	border-radius: 50%;
	display: grid;
	place-items: center;
	background: conic-gradient(
		${(props) => props.theme.colors.secondary} ${({ progressBar }) => progressBar}%,
		transparent ${({ progressBar }) => progressBar}%
	);
`;

const InnerCircle = styled.div`
	width: 28rem;
	height: 28rem;
	background: ${(props) => props.theme.colors.primary};
	border-radius: 50%;
	display: grid;
	place-items: center;
`;
