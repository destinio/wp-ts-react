import React, { createContext, useContext, useReducer } from 'react'

interface StateInterface {
  data: string[]
}

interface Actions {
  type: string
  payload: any
}

type AppContextType = {
  state: StateInterface
  dispatch: React.Dispatch<Actions>
}

const AppContext = createContext<AppContextType>(null!)

export function useAppContext(): AppContextType {
  return useContext(AppContext)
}

const initState = {
  data: []
}

function appReducer(state: StateInterface, action:Actions) {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, data: [...state.data, action.payload]}
    default:
      return state
  }
}

type Props = {
  children: React.ReactNode
}

export default function AppContextProvider({children}: Props): React.ReactElement {
  const [state, dispatch] = useReducer(appReducer, initState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}