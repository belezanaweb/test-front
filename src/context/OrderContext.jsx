import React, { createContext, useState, useEffect, useContext } from 'react';
import { getOrderData } from '../service/api';

const OrderContext = createContext();

export default  function OrderProvider ({ children }) {
  const [ order, setOrder ] = useState({});
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    getOrderData().then((res) => {
      // try uncomment me and comment the line 14
      // setTimeout(() => setLoading(false) , 3000)
      setLoading(false)
      return setOrder(res.data)
    })
  }, [])

  return (
    <OrderContext.Provider value={{
      order,
      loading,
    }}>
      { children }
    </OrderContext.Provider>
  )
}

export const useOrder = function() {
   const orderContext = useContext(OrderContext);
   const { order, loading } = orderContext;

   return { order, loading }
}