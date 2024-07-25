import React from "react"

const SearchInput = (props: any) => {

    const { placeholder = '', value = '', handleChange, onfocusFunc, className = 'search-input', maxLength } = props
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={className}
            onFocus={onfocusFunc}
            type='search'
            aria-label='Search'
            maxLength={maxLength}
        />
    )
};


export default SearchInput;
