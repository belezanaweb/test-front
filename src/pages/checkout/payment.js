import Layout from '../../components/templates/layout';
import Header from '../../components/templates/header';
import Head from 'next/head';

//TESTAR SE TEM ALGO NO CARRINHO
const Payment = () => {
    return (
		<>
			<Head>
				<title>Payment</title>
			</Head>
			<Header page={2}/>
			<Layout>
				Payment
			</Layout>
		</>
	)
}

export default Payment

