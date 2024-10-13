import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import { GlobalStyle } from './styles';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Rotas />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
