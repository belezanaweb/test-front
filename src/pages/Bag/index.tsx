import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Section from '_components/Section';
import Card from '_components/Card';
import Resume from '_components/Resume';
import Button from '_components/Button';
import Typography from '_components/Typography';
import { useFetchBag } from '_hooks/useFetchBag';
import { useBagContext } from '_context/BagContext/hooks/useBagContext';

const Bag: React.FC = (): React.ReactElement => {
  const { isLoading, data } = useFetchBag();
  const { actions } = useBagContext();
  const navigate = useNavigate();

  useEffect(() => {
    actions.setResponseBagData(data?.data ?? {});
  }, [data]);

  return (
    <>
      <Section>
        {isLoading && <Typography align='center' type='MenuDisabled' value='carregando...' />}
        {!!data && data.data.items?.map((item) => <Card key={item.product.sku} {...item.product} />)}
      </Section>

      <Resume
        {...data?.data}
        action={<Button color='primary' onClick={() => navigate('/payment')}>Seguir para o pagamento</Button>}
      />
    </>
  );
};

export default Bag;
