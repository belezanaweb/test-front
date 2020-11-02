import TotalTable from '../../molecules/totalTable';
import ProductsList from '../../molecules/productsList';
import Container from '../../atoms/container'
import SuccessPayment from '../../molecules/successPayment'
const SuccessTemplate = ({children, handleSubmit}) => {

	return (
		<Container>
            <SuccessPayment />
			<ProductsList />
			<TotalTable  />
		</Container>
	)

}
export default SuccessTemplate
