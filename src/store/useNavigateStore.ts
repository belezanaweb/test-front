import { create } from 'zustand'
export type screens = 'Sacola' | 'Pagamento' | 'Confirmação'

interface NavigateState {
  screen: screens;
  navigate: (screen: screens) => void;
}

const useNavigateStore =
  create <
  NavigateState >
  ((set) => ({
    screen: 'Sacola',
    navigate: (view) => {
      set(() => ({ screen: view }))
    }
  }))

export default useNavigateStore
