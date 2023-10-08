import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { StateProvider } from './context/StateContext';


const Clock = () => {
	const { time, setTime, isActive, setIsActive, initTime } =
		useContext(StateProvider);

	useEffect(() => {
		if (isActive && time > 0) {
			const interval = setInterval(() => {
				setTime((time) => time - 1);
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [time, isActive]);

	const toggleClock = () => {
		setIsActive(!isActive);
	};

	const resetTime = () => {
		setTime(initTime);
		setIsActive(false);
	};

	const getTime = (time) => {
		const min = Math.floor(time / 60);
		const sec = time % 60;
		return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
	};

	return (
		<ClockContainer>
			<TimerText>{getTime(time)}</TimerText>
			{time === 0 ? (
				<ResetButton onClick={resetTime}>Reset</ResetButton>
			) : (
				<StartPauseButton onClick={toggleClock}>
					{isActive ? 'Pause' : 'Start'}
				</StartPauseButton>
			)}
		</ClockContainer>
	);
};

export default Clock;

const ClockContainer = styled.div`
	display: grid;
	place-items: center;
`;

const TimerText = styled.h3`
	font-size: 8rem;
`;

const StartPauseButton = styled.button`
	all: unset;
	text-align: center;
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 1rem;
	color: #eefe55;
	font-weight: 700;
	cursor: pointer;
`;

const ResetButton = styled(StartPauseButton)`
	color: #eefe55;
`;
