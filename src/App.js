import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './store/AppStore';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
      <Provider store={appStore}>
        <Toaster position='top-center' />
        <Body />
      </Provider>
  );
};

export default App;