import actionsTypes from '../../actionTypes/menu'

export function handlSelectedMenu(selected) {
  return {
    type: actionsTypes.HANDLESELECTEDMENU,
    selected
  }
}
