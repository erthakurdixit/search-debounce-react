import React from "react"

const SearchInput = ({ placeholder = '', value = '', handleChange = (e:any) => { }, className = '', maxLength = 100 }) => {

    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            className={className}
            type='search'
            aria-label='Search'
            maxLength={maxLength}
        />
    )
};


export default SearchInput;
