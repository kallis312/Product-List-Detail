import { AppContext } from "@/ContextProvider"
import { FC, ReactNode, useContext } from "react"

const Detail: FC = (): ReactNode => {

  const { detail } = useContext(AppContext)
  return (
    detail && (
      <div className="py-10 font-poppins dark:bg-gray-800 text-left">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap mb-24 -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="sticky top-0 overflow-hidden ">
                <div className="relative mb-6 lg:mb-10 lg:h-96">
                  <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.7  07 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                      </path>
                    </svg>
                  </a>
                  <img className="object-contain w-full lg:h-full" src={detail.thumbnail} alt="" />
                  <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                      </path>
                    </svg>
                  </a>
                </div>
                <div className="flex-wrap hidden -mx-2 md:flex">

                  {
                    detail.images.map((_, i) => (
                      <div key={i} className="w-1/2 p-2 sm:w-1/4">
                        <a className="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300" href="#">
                          <img className="object-contain w-full lg:h-28" src={_} alt="" />
                        </a>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="lg:pl-20">
                <div className="mb-6 ">
                  <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    {detail.title}
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      {
                        Array.from({ length: detail.rating }).map((_, i) => (
                          <li key={i}>
                            <a href="#">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z">
                                </path>
                              </svg>
                            </a>
                          </li>
                        ))
                      }
                    </ul>
                    <span className="ml-3 text-base font-normal text-gray-500 dark:text-gray-400"> {detail.rating}</span>
                  </div>
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    価格:
                    <span>{detail.price}</span>
                    <span className="ml-3 text-base font-normal text-gray-500 dark:text-gray-400"> {detail.discountPercentage}</span>
                  </p>
                </div>

                <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                  <span className="text-base text-gray-600 dark:text-gray-400">説明</span>
                  <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                    <span className="text-gray-600 dark:text-gray-400">
                      {detail.description}
                    </span>
                  </p>
                </div>
                <div className="mb-6 "></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Detail