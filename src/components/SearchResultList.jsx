import { useEffect, useState } from "react"
import { getIndicesOf } from "../util/utilityFunctions";
import "./SearchResultList.css"

const SearchResultList = ({ text, users }) => {

  const [ searchResults, setSearchResults ] = useState("")

  const generateResults = () => {
     
    let listItemsString = "";

    users.forEach(user => {

      let singleItemString = "";
      let leftIndex = 0;
      let indeces = getIndicesOf(text, user);

      indeces.forEach(index => {
        singleItemString += user.slice(leftIndex, index);
        singleItemString += `<mark>${user.slice(index, index+text.length)}</mark>`
        leftIndex = index+text.length;
      })

      singleItemString += user.slice(leftIndex);
      listItemsString += `<div class='result'>${singleItemString}</div>`
    });

    return listItemsString;
  }

  useEffect(() => {
    setSearchResults(generateResults)
  }, [text, users])

  if(!users.length) return <></>

  return (
    <div 
      className="results-list"
      dangerouslySetInnerHTML={{__html: searchResults}}>
    </div>
  )
}

export default SearchResultList
