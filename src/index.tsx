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
  callbackFunc?: Function;
  onfocusFunc?: Function;
  setResponse?: Function;
  setError?: Function;
  delay?: number;
}) => {

  const {
    placeholder = 'Enter Search Value',
    className = '',
    maxLength = 100,
    minCharacterCount = 0,
    callbackFunc = (apiSearchValue: any) => { },
    onfocusFunc = (e: any) => { },
    setResponse = (res: any) => { },
    setError = (err: any) => { },
    delay = 500
  } = props

  const { searchValue, apiSearchValue, handleSearchInput } = useDebouncing(delay);

  useEffect(() => {
    if (apiSearchValue?.length > minCharacterCount) {
      (async () => {
        try {
          const response = await callbackFunc(apiSearchValue);
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
      onfocusFunc={onfocusFunc}
    />
  )
}

export default Search