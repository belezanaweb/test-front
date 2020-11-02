import styled from 'styled-components';
import Skeletons from '../atoms/skeletons';
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
import {headerPage, cartData} from '../../store/cart'
import { useEffect, useState } from 'react';

const PaymentTemplate = dynamic(() => import('../organism/payment/index'),{
	ssr: false,
	loading: () => <Skeletons />
});
const CartTemplate = dynamic(() => import('../organism/cart/index'),{
	ssr: false,
	loading: () => <Skeletons />
});
const SuccessTemplate = dynamic(() => import('../organism/success'),{
	ssr: false,
	loading: () => <Skeletons />
});


const CheckoutFlow = ({children, startPage}) => {

    const [header, setChangeHeader] = useRecoilState(headerPage);
    const [page, setPage] = useState(startPage);
	const [data, setData] = useRecoilState(cartData);
//	const [loading, setLoading] = useState(true)

	const fetchData = async () => {
		const urlApi = 'http://www.mocky.io/v2/5b15c4923100004a006f3c07'
		await fetch(urlApi)
		.then(function(res) {
			return res.json();
		}).then(function(data) {
			//data to (recoil) state to maintain persistence of data
			//could also alocate to localstore, for not have a need to fetch again in case of ssr
			setData(data)
			//setLoading(false)
		});
	}

	useEffect(()=>{
		if(!data.id){
            fetchData()
        }
    },[])
    
    //handle submit
	const handleSubmit = (e) =>{
        e.preventDefault();
        const target = e.target.id
        if(target == 'cart'){
            setChangeHeader(2);
            setPage(2);
            history.pushState({}, 'Pagamento', '/carrinho/pagamento');
        }else if(target == 'pay'){
            setChangeHeader(3);
            setPage(3);
            history.pushState({}, 'Pagamento', '/carrinho/sucesso');
        }
    }

    //handle popstate
    useEffect(()=>{
        if(typeof window){
            //backbutton return to initialPage
            window.onpopstate = function(event) {
                setPage(1)
                setChangeHeader(1);
                history.pushState({}, 'Carrinho', '/carrinho');
            };
        }
    },[])


    if(page == 1){
        return <CartTemplate handleSubmit={handleSubmit}/>
    }
    if(page == 2){
        return <PaymentTemplate  handleSubmit={handleSubmit} />
    }else if(page == 3){
        return <SuccessTemplate />
    }else{
       return <div>ops, erro</div>   
    }
	
    
}
export default CheckoutFlow
