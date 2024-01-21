import ContextProvider from '@/ContextProvider'
import Category from '@/components/Category'
import Detail from '@/components/Detail'
import './App.css'
import List from '@/components/List'
import { FC } from 'react'
import { ToastContainer } from 'react-toastify'


const App: FC = () => {
  return (
    <ContextProvider>
      <Category />
      <List />
      <Detail />
      <ToastContainer />
    </ContextProvider>
  )
}

export default App