import Layout from '../../components/templates/layout';
import Header from '../../components/templates/header';

import Head from 'next/head';

const Cart = () => {
    return (
		<>
			<Head>
				<title>Carrinho</title>
			</Head>
			<Header page={1}/>
			<Layout>
				  Carrinho
			</Layout>
		</>
	)
}

export default Cart

