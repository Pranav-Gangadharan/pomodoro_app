import React, { createContext, useEffect, useState } from 'react';

export const StateProvider = createContext(null);
const StateContext = ({ children }) => {
	const [workTime, setWorkTime] = useState(25 * 60);
	const [shortBreak, setShortBreak] = useState(5 * 60);
	const [longBreak, setLongBreak] = useState(15 * 60);

	const [initTime, setInitTime] = useState(0);

	const [activeTag, setActiveTag] = useState(0);
	const [progressBar, setProgressbar] = useState(10);
	const [time, setTime] = useState(500);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		switch (activeTag) {
			case 0:
				setTime(workTime);
				setInitTime(workTime);
				break;

			case 1:
				setTime(shortBreak);
				setInitTime(shortBreak);
				break;

			case 2:
				setTime(longBreak);
				setInitTime(longBreak);
				break;

			default:
				break;
		}
	}, [activeTag, activeTag, shortBreak, longBreak]);

	return (
		<StateProvider.Provider
			value={{
				activeTag,
				setActiveTag,
				progressBar,
				setProgressbar,
				time,
				setTime,
				isActive,
				setIsActive,
				initTime,
				setInitTime,
				workTime,
				setWorkTime,
				shortBreak,
				setShortBreak,
				longBreak,
				setLongBreak,
			}}
		>
			{children}
		</StateProvider.Provider>
	);
};

export default StateContext;
