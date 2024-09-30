import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import AppRoutes from './routes/AppRoutes';
import GlobalStyled from './config/GlobalStyled';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyled/>
        <AppRoutes />
      </PersistGate>
    </Provider>
  );
};

export default App;
