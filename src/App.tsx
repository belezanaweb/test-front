import Router from './routes/Routes';
import { CartProvider } from './context/cart.context';
import { AppContainer, Base } from './stitches.config';
import { TrackingStepContainer } from './components/tracking-step/tracking-step.styled';
import TrackingStep from './components/tracking-step/tracking-step';
import { BrowserRouter } from 'react-router-dom';

const App = (): JSX.Element => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContainer>
          <TrackingStepContainer>
            <Base>
              <TrackingStep />
            </Base>
          </TrackingStepContainer>
          <Router />
        </AppContainer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
