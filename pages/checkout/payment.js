import Layout from '../../components/templates/layout';
import Header from '../../components/templates//header';
import Head from 'next/head';
import CheckoutFlow from '../../components/templates/checkoutFlow'

//TESTAR SE TEM ALGO NO CARRINHO
const Payment = () => {
    return (
		<>
			<Head>
				<title>Payment</title>
			</Head>
			<Header page={2}/>
			<Layout>
				<CheckoutFlow startPage={2} />
			</Layout>
		</>
	)
}

export default Payment

