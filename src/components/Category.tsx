import { AppContext } from '@/ContextProvider'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { FC, Fragment, ReactNode, useContext, useEffect, useState } from 'react'

import { toast } from 'react-toastify'

//Category.

const Category: FC = (): ReactNode => {
  const { categories, setCategories, setList } = useContext(AppContext)
  const [selected, setSelected] = useState<string>('')
  const [query, setQuery] = useState('')

  useEffect(() => {
    loadCategories()
    onCategorySelect('laptops')
  }, [])

  const loadCategories = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products/categories')
      const resData = await await res.json()
      setCategories!(resData || [])
      toast.success("Categories loaded successfully")
    } catch (err) {
      let errMsg = 'Unknow error'
      if (err instanceof Error)
        errMsg = err.message
      toast.error(errMsg)
    }
  }

  const filteredCategories =
    query === ''
      ? categories
      : categories.filter((categorie) =>
        categorie
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )

  const onCategorySelect = async (v: string) => {
    try {
      setSelected(v)
      const res = await fetch('https://dummyjson.com/products/category/' + v)
      const resData = await await res.json()
      setList!(resData.products)
    } catch (err) {
      let errMsg = 'Unknow error'
      if (err instanceof Error)
        errMsg = err.message
      toast.error(errMsg)
    }
  }
  return (
    <div className="w-64">
      <Combobox value={selected} onChange={onCategorySelect}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg border bg-white text-left  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(person: string) => person}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 ">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {!filteredCategories.length && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredCategories.map((categorie) => (
                  <Combobox.Option
                    key={categorie}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={categorie}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block text-left truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {categorie}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default Category