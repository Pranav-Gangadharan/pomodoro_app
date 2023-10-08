import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import StateContext from './components/context/StateContext.jsx';


const GlobalStyle = createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

	html,body{
		background: ${(props) => props.theme.colors.bg};
		font-size: 62.5%;
	}

	body{
		font-size: 1.6rem;
		color: white;
	}
`;

const theme = {
	colors: {
		primary: '#868686',
		secondary: '#F05454',
		bg: '#3C3C3C',
	},
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<StateContext>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</StateContext>
	</React.StrictMode>
);
