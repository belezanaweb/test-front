import Layout from '../../components/templates/layout';
import Header from '../../components/templates/header';
import Head from 'next/head';
import CheckoutFlow from '../../components/templates/checkoutFlow'

//TESTAR SE TEM ALGO NO CARRINHO
const Payment = () => {
    return (
		<>
			<Head>
				<title>Pagamento Feito com Sucesso</title>
			</Head>
			<Header page={3}/>
			<Layout>
				<CheckoutFlow startPage={3} />
			</Layout>
		</>
	)
}

export default Payment


