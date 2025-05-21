import { CheckoutStepEnum, CheckoutSteps } from "../../widgets/checkout/useCheckoutForm";
import { TabItem } from "../../ui/tab-item/tab-item.component";

import './checkout-header.styles.css'

interface CheckoutHeaderProps {
  handleTab: (key: CheckoutStepEnum) => void;
  currentStep: CheckoutSteps
}

const steps: { key: any; label: string }[] = [
  { key: 'cart', label: 'Sacola' },
  { key: 'payment', label: 'Pagamento' },
  { key: 'confirmation', label: 'Confirmação' },
];

export const CheckoutHeader = ({
  handleTab,
  currentStep
}: CheckoutHeaderProps) => {
  return (
    <header className="header">
      <div className="header-container">
        {steps.map(({ key, label }) => (
          <TabItem label={label} isCurrentTab={currentStep === key} onClick={() => handleTab(key)} key={key} />
        ))}
      </div>
    </header>

  );
};
