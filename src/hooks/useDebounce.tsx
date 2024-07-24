import debounce from "lodash.debounce";
import { useCallback, useState } from "react"

const useDebouncing = (delay = 600) => {

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