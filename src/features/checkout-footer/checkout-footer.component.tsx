import { PriceItem } from '../../ui/price-item/price-item.component';
import { CheckoutStepEnum, CheckoutSteps } from '../../widgets/checkout/useCheckoutForm';
import './checkout-footer.styles.css';
import clsx from 'clsx';

interface CheckoutSummaryProps {
  totalWithoutFreight: number;
  shippingTotal: number;
  discount: number;
  total: number;
  itemCount: number;
  onProceed: () => void;
  currentStep: CheckoutSteps
}

const STEP_BUTTON_LABELS: Record<CheckoutStepEnum, string> = {
  [CheckoutStepEnum.CART]: "Seguir para o pagamento",
  [CheckoutStepEnum.PAYMENT]: "Finalizar pedido",
  [CheckoutStepEnum.CONFIRMATION]: "Voltar ao inicio do protótipo",
};

export const CheckoutFooter = ({
  totalWithoutFreight,
  shippingTotal,
  discount,
  total,
  itemCount,
  currentStep,
  onProceed,
}: CheckoutSummaryProps) => {
  const isConfirmation = currentStep === CheckoutStepEnum.CONFIRMATION
  return (
    <footer className="footer">
      <div className="summary">
        <PriceItem title={`Produtos: (${itemCount}) itens`} price={totalWithoutFreight.toFixed(2)} />
        <PriceItem title="Frete:" price={shippingTotal.toFixed(2)} />
        <PriceItem title="Desconto:" price={discount.toFixed(2)} isDiscount />
        <PriceItem title="Subtotal" price={total.toFixed(2)} />


        <button className={clsx('button', { confirmation: isConfirmation })} onClick={onProceed}>
          {STEP_BUTTON_LABELS[currentStep]}
        </button>
      </div>
    </footer>
  );
};
