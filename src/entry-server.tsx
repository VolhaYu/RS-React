import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { Location } from 'react-router-dom';
import App from './App';
import { setypStore } from './redux/store/store';

const store = setypStore();

function render(url: string | Partial<Location>, opts: object) {
  const html = renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  return { html };
}

export default render;
