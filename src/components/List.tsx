import { AppContext } from "@/ContextProvider"
import { FC, ReactNode, useContext, useEffect } from "react"
import { toast } from "react-toastify"

const List: FC = (): ReactNode => {
  const { list, setDetail } = useContext(AppContext)
  useEffect(() => {
    onRowClick(8)
  }, [])
  const onRowClick = async (id: number) => {
    try {
      const res = await fetch('https://dummyjson.com/products/' + id)
      const resData = await await res.json()
      setDetail!(resData)
    } catch (err) {
      let errMsg = 'Unknow error'
      if (err instanceof Error)
        errMsg = err.message
      toast.error(errMsg)
    }
  }

  return (
    <div className="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              品名
            </th>
            <th scope="col" className="px-6 py-3">
              ブランド
            </th>
            <th scope="col" className="px-6 py-3">
              価格
            </th>
            <th scope="col" className="px-6 py-3">
              評価
            </th>
          </tr>
        </thead>
        <tbody>
          {
            list.map(_ => (
              <tr key={_.id} onClick={() => onRowClick(_.id)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {_.title}
                </th>
                <td className="px-6 py-4">
                  {_.brand}
                </td>
                <td className="px-6 py-4">
                  {_.price}
                </td>
                <td className="px-6 py-4">
                  {_.rating}
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default List