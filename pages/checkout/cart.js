import Layout from '../../components/templates/layout';
import Header from '../../components/templates//header';
import CheckoutFlow from '../../components/templates/checkoutFlow'
import Head from 'next/head';

const Cart = () => {


    return (
		<>
			<Head>
				<title>Carrinho</title>
			</Head>
			<Header page={1}/>
			<Layout>
				  <CheckoutFlow startPage={1} />
			</Layout>
		</>
	)
}

export default Cart

