import { FormProvider } from 'react-hook-form';

import { useWatch } from 'react-hook-form';
import { CheckoutStepEnum, useCheckoutForm } from './useCheckoutForm';
import { CheckoutHeader } from '../../features/checkout-header/checkout-header.component';
import { CheckoutFooter } from '../../features/checkout-footer/checkout-footer.component';
import { useGetBagProducts } from '../../services/bag-products/use-get-bag-products.services.hook';
import { BagProductList } from '../../features/bag-product-list/bag-product-list.component';
import { BagProductResponse } from '../../services/bag-products/bag-products.services.types';
import { PaymenteForm } from '../../features/payment-form/payment-form.component';
import { Confirmation } from '../../features/confirmation/confirmation.component';


const STEP_COMPONENTS: Record<CheckoutStepEnum, React.FC<BaseStepProps>> = {
  [CheckoutStepEnum.CART]: BagProductList,
  [CheckoutStepEnum.PAYMENT]: PaymenteForm,
  [CheckoutStepEnum.CONFIRMATION]: Confirmation,
};

type BaseStepProps = {
  bag: BagProductResponse;
  cardNumber?: string;
  expiryDate?: string;
  cardHolder?: string
};

export const CheckoutWidget = () => {
  const form = useCheckoutForm();
  const step = useWatch({ control: form.control, name: 'step' });
  const cardNumber = useWatch({ control: form.control, name: 'payment.cardNumber' });
  const expiryDate = useWatch({ control: form.control, name: 'payment.expiryDate' });
  const cardHolder = useWatch({ control: form.control, name: 'payment.cardHolder' });

  const { data } = useGetBagProducts()

  const StepComponent = STEP_COMPONENTS[step];

  if (!data) return null

  const handleStep = (value: CheckoutStepEnum) => form.setValue("step", value)
  const handleResetFlow = () => {
    handleStep(CheckoutStepEnum.CART)
    form.reset()
  }

  const STEP_HANDLERS: Record<CheckoutStepEnum, () => void> = {
    [CheckoutStepEnum.CART]: () => handleStep(CheckoutStepEnum.PAYMENT),
    [CheckoutStepEnum.PAYMENT]: form.handleSubmit(() => handleStep(CheckoutStepEnum.CONFIRMATION), console.log),
    [CheckoutStepEnum.CONFIRMATION]: handleResetFlow,
  };

  const handleTab = (key: CheckoutStepEnum) => {
    if (key === CheckoutStepEnum.CONFIRMATION) return
    handleStep(key)
  }

  return (
    <FormProvider {...form}>
      <CheckoutHeader handleTab={handleTab} currentStep={step} />
      <main className='container'><StepComponent bag={data} cardHolder={cardHolder} cardNumber={cardNumber} expiryDate={expiryDate} /></main>
      <CheckoutFooter
        currentStep={step}
        totalWithoutFreight={data.totalWithoutFreight}
        shippingTotal={data.shippingTotal}
        discount={data.discount}
        total={data.total}
        itemCount={data.items.length}
        onProceed={STEP_HANDLERS[step]}
      />
    </FormProvider>
  );
};
