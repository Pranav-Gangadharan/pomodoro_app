import React from 'react';
import styled from 'styled-components';
import Progress from './Progress';

const Timer = () => {
	return (
		<TimerContainer>
			<Progress />
		</TimerContainer>
	);
};

export default Timer;

const TimerContainer = styled.div`
	background: conic-gradient(
		${(props) => props.theme.colors.primary},
		${(props) => props.theme.colors.bg}150deg,
		${(props) => props.theme.colors.primary}
	);
	width: 35rem;
	height: 35rem;
	margin: 1.5rem auto;
	border-radius: 50%;
	display: grid;
	place-items: center;
	box-shadow: rgba(144, 144, 151, 0.25) 0px 50px 100px -20px,
		rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
