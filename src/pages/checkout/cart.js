import Layout from '../../components/templates/layout';
import Header from '../../components/templates/header';
import dynamic from 'next/dynamic';

const CartContainer = dynamic(() => import('../../components/organism/cart'),{
	ssr: false,
	loading: () => <div>...loading</div>
});

import Head from 'next/head';

const Cart = () => {
    return (
		<>
			<Head>
				<title>Carrinho</title>
			</Head>
			<Header page={1}/>
			<Layout>
				  <CartContainer />
			</Layout>
		</>
	)
}

export default Cart

