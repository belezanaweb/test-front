import React from 'react';
import Section from '_components/Section';
import Card from '_components/Card';
import Resume from '_components/Resume';
import Button from '_components/Button';
import Typography from '_components/Typography';
import { useFetchBag } from '_hooks/useFetchBag';

const Bag: React.FC = (): React.ReactElement => {
  const { isLoading, data } = useFetchBag();

  return (
    <>
      <Section>
        {isLoading && <Typography align='center' type='MenuDisabled' value='carregando...' />}
        {!!data && data.data.items?.map((item) => <Card key={item.product.sku} {...item.product} />)}
      </Section>

      <Resume
        {...data?.data}
        action={<Button color='primary'>Seguir para o pagamento</Button>}
      />
    </>
  );
};

export default Bag;
