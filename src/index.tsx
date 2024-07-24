import React, { useEffect } from "react"
import SearchInput from "./components/SearchInput"
import useDebouncing from "./hooks/useDebounce"
export * from "./components/SearchInput"
export * from "./hooks/useDebounce"

const Search = (props: {
  placeholder?: string;
  className?: string;
  maxLength?: number;
  minCharacterCount?: number;
  func?: Function;
  setResponse?: Function;
  setError?: Function;
}) => {

  const {
    placeholder = 'Enter Search Value',
    className = '',
    maxLength = 100,
    minCharacterCount = 0,
    func = (apiSearchValue: any) => { },
    setResponse = (res: any) => { },
    setError = (err: any) => { }
  } = props

  const { searchValue, apiSearchValue, handleSearchInput } = useDebouncing();

  useEffect(() => {
    if (apiSearchValue?.length > minCharacterCount) {
      (async () => {
        try {
          const response = await func(apiSearchValue);
          setResponse(response)
        } catch (error) {
          setError(error)
        }
      })();
    } else {
      setResponse("")
    }
  }, [apiSearchValue]);


  return (
    <SearchInput
      placeholder={placeholder}
      value={searchValue}
      handleChange={handleSearchInput}
      className={className}
      maxLength={maxLength}
    />
  )
}

export default Search