
# search-debounce-react

This is a react component which will render a search input with debounced onchange function. 




## Demo

https://codesandbox.io/p/sandbox/debounced-search-input-p8ft3n?file=%2Fsrc%2Fstyles.css%3A13%2C2


## Installation

The easiest way to use search-debounce-react is to install it from npm and build it into your app

```bash
 npm i search-debounce-react
```
    
## Usage/Examples

```javascript
import { useState } from 'react'
import Search from "search-debounce-react"
import './App.css'
function App() {
  const [response, setResponse] = useState()
  const [error, setError] = useState()

  const myCallbackFunction = async (searchValue: string) => {
    // Here you can call any api and return the response 
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(searchValue.length);
      }, 100);
    });
  };

  return (
    <div className='search-container'>
      <Search
        placeholder='Enter Search Value'
        className='search-input '
        maxLength={10}
        minCharacterCount={2}
        callbackFunc={myCallbackFunction}
        setResponse={setResponse}
        setError={setError}
        delay={500}
        onfocusFunc={() => console.log("onfocus")}
      />
      <p>Debounced Text length : {response}</p>
      <p>error : {error}</p>
    </div>
  )
}

export default App

```


## Props

You can control the following props by providing values for them. 

- ### placeholder 
    specify the placeholder value of the input. Default value: "Enter Search Value"
- ### className - 
    classname value will define the className of the input and can be used to styling the component
- ### maxLength -
    specify the maximum length of the input value. Default value will be 100
- ### delay -
    specify the delay time after which the callbackFunc will execute.
- ### minCharacterCount -
    specify the minimum length of the search value after which the callback will be executed. Default value will be 0.
- ### callbackFunc -
    callbackFunc is the function which will be executed on debounced search. This function takes search value as a parameters. 
- ### onfocusFunc -
    onfocusFunc is the function which will be executed on onFocus event.
- ### setResponse -
    setResponse is the setState function which will be get the response of callbackFunc.
- ### setError -
    setError is the setState function which will be get the error of callbackFunc if any error occurs.

## Authors

- [Dixit Thakur](https://github.com/erthakurdixit)

