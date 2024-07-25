import { useCallback, useState } from "react"
import debounce from "lodash/debounce";
const useDebouncing = (delay: any) => {
    const [searchValue, setSearchValue] = useState("");
    const [apiSearchValue, setApiSearchValue] = useState("");

    const handleApiSearchInput = useCallback(debounce((value) => {
        setApiSearchValue(value);
    }, delay, { trailing: true }), []);

    const handleSearchInput = (e: any) => {
        const value = e.target.value;
        setSearchValue(value);
        handleApiSearchInput(value?.trim?.());
    }

    return {
        searchValue,
        apiSearchValue,
        handleSearchInput,
        setSearchValue,
        setApiSearchValue
    }

}

export default useDebouncing