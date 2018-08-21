import * as React from 'react';
import { render } from 'react-dom';
import  '../styles/less/app.bundle.less';


const renderApp = () => {
    const ClientView = require('./ClientView').default;
    render(<ClientView />, document.getElementById('mount'));
}

renderApp();

if (module.hot) {
    module.hot.accept('./ClientView', renderApp);
}
