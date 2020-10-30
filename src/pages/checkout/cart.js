import Layout from '../../components/templates/layout';
import Header from '../../components/templates/header';
// import dynamic from 'next/dynamic';

// const CartTemplate = dynamic(() => import('../../components/templates/cart'),{
// 	ssr: false,
// 	loading: () => <div>...loading</div>
// });

import CartTemplate from '../../components/templates/cart'
import Head from 'next/head';

const Cart = () => {
    return (
		<>
			<Head>
				<title>Carrinho</title>
			</Head>
			<Header page={1}/>
			<Layout>
				  <CartTemplate />
			</Layout>
		</>
	)
}

export default Cart

