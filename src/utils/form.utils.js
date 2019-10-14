import { useSelector, useDispatch } from 'react-redux'
import { Types } from 'store/duck/form'

export function useForm(formName) {

  const inputs = useSelector(state => state.form[formName]) || {}
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    event.persist()
    const { target: { name, value } } = event
    dispatch({ type: Types.CHANGE_INPUT, formName, name, value })
  }

  return {
    handleInputChange,
    inputs
  }
}
