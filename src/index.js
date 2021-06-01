import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
