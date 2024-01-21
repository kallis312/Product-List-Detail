import { createContext, FC, ReactNode, useState } from "react"
import { Thing } from "./types/define"

type Context = {
  categories: string[],
  setCategories?: React.Dispatch<React.SetStateAction<string[]>>,
  list: Thing[],
  setList?: React.Dispatch<React.SetStateAction<Thing[]>>,
  detail?: Thing,
  setDetail?: React.Dispatch<React.SetStateAction<Thing | undefined>>
}

type Props = {
  children: ReactNode
}
// "id":6,"title":"MacBook Pro","description":"MacBook Pro 2021 with mini-LED display may launch between September, November","price":1749,"discountPercentage":11.02,"rating":4.57,"stock":83,"brand":"Apple","category":"laptops","thumbnail":"https://cdn.dummyjson.com/product-images/6/thumbnail.png","images":["https://cdn.dummyjson.com/product-images/6/1.png","https://cdn.dummyjson.com/product-images/6/2.jpg","https://cdn.dummyjson.com/product-images/6/3.png","https://cdn.dummyjson.com/product-images/6/4.jpg"]}
export const AppContext = createContext<Context>({
  categories: [],
  list: []
})

const ContextProvider: FC<Props> = ({
  children
}): ReactNode => {
  const [categories, setCategories] = useState<string[]>([])
  const [list, setList] = useState<Thing[]>([])
  const [detail, setDetail] = useState<Thing>()
  return (
    <AppContext.Provider value={{
      categories, setCategories,
      list, setList,
      detail, setDetail
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider