import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '_components/Card';
import Resume from '_components/Resume';
import Button from '_components/Button';
import Section from '_components/Section';
import Typography from '_components/Typography';
import { useBagContext } from '_context/BagContext/hooks/useBagContext';

const Confirmation: React.FC = (): React.ReactElement => {
  const { state } = useBagContext();
  const navigate = useNavigate();

  return (
    <>
      <Section align="center">
        <Typography padding={{ top: '25px' }} type='TitleUpper' value="Compra efetuada com sucesso" />
        <Typography padding={{ top: '8px' }} type='Label' value={state.payment.paymentNumber} />
        <Typography padding={{ top: '8px' }} type='Label' value={state.payment.paymentName} />
        <Typography padding={{ top: '8px', bottom: '25px' }} type='Label' value={state.payment.paymentValid} />
      </Section>

      <Section>
        <Typography padding={{ left: '20px', top: '16px' }} type='Title' value="Produtos" />
        {state.responseBag.items?.map((item) => <Card key={item.product.sku} {...item.product} />)}
      </Section>

      <Resume
        {...state.responseBag}
        action={<Button color='secondary' onClick={() => navigate('/bag')}>Voltar ao inicio do protótipo</Button>}
      />
    </>
  );
};

export default Confirmation;
