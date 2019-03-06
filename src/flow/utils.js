export const handleInput = change => event => change(event.target.value);

export const dynamicApiRequest = 
  ({api, trans, changeResult, changeSearchText}) =>
  searchValue => {
    changeSearchText(searchValue);
    searchValue
      && searchValue.length > 2 
        ? api((json = {}) => changeResult(json))(searchValue)
        : changeResult({})
  }
;