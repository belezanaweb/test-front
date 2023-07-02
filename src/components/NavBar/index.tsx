import React from 'react'
import { NavHeader } from './styles'
import NavItem from './NavItem'
import Text from '../Text'
import useBagStore from '../../store/useBagStore'
import useNavigateStore, { screens } from '../../store/useNavigateStore'
import useFormStore from '../../store/useFormStore'

const NavBar = () => {
  const bag = useBagStore((state) => state.bag)
  const form = useFormStore((state) => state.form)

  const navigate = useNavigateStore((state) => state.navigate)
  const screen = useNavigateStore((state) => state.screen)

  const routes: screens[] = ['Sacola', 'Pagamento', 'Confirmação']

  const handleClick = (nextScreen: screens) => {
    switch (nextScreen) {
      case 'Sacola':
        navigate(nextScreen)
        break
      case 'Pagamento':
        if (bag.items.length > 0) {
          navigate(nextScreen)
        }
        break
      case 'Confirmação':
        if (bag.items.length > 0 && form.cardNumber != '') {
          navigate(nextScreen)
        }
        break
    }
  }

  return (
    <NavHeader>
      {routes.map((view) => {
        return (
          <NavItem key={view} selected={view === screen} onClick={() => handleClick(view)}>
            <Text color="mediumGray" fontSize="medium" fontWeight="normal" textAlign="center">
              {view}
            </Text>
          </NavItem>
        )
      })}
    </NavHeader>
  )
}

export default NavBar
