import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './app';

window.DiagramDesigner = {
	init: ()=> {
		const rootEl = document.getElementById('root');
		const render = Component => {
			ReactDOM.render(
				<Provider store={store}>
					<AppContainer>
						<Component />
					</AppContainer>
				</Provider>,
				rootEl
			);
		};
		render(App);
	},

	getShema: () => {}
};

//
// window.onload = () => {
//
//
// 	if (module.hot) module.hot.accept('./app', () => render(App));
// };
