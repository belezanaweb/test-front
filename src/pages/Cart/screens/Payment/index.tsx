import React, { useCallback } from 'react'
import PaymentForm, { FormProps } from '../../../../components/PaymentForm'
import PaymentResume from '../../../../components/PaymentResume'
import useFormStore from '../../../../store/useFormStore'
import useNavigateStore from '../../../../store/useNavigateStore'
import useBagStore from '../../../../store/useBagStore'

const Payment = () => {
  const addForm = useFormStore((state) => state.addForm)
  const bag = useBagStore((state) => state.bag)
  const navigate = useNavigateStore((state) => state.navigate)

  const handleSubmitForm = useCallback((data: FormProps) => {
    addForm(data)
    navigate('Confirmação')
  }, [])

  return (
    <PaymentForm onSubmit={handleSubmitForm}>
      <PaymentResume
        rowStart={1}
        buttonLable="Finalizar pedido"
        discount={bag.discount}
        itemsQuantity={bag.items.length}
        shippingTotal={bag.shippingTotal}
        subTotal={bag.subTotal}
        total={bag.total}
      />
    </PaymentForm>
  )
}

export default Payment
