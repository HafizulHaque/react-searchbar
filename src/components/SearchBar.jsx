import { useEffect } from "react";
import { FaSearch } from "react-icons/fa"
import './SearchBar.css';

const SearchBar = ({ searchText, setSearchText, setMatchedUsers }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResults(searchText)
    }, 1000);
    return () => {
      clearTimeout(timer);
    }
  }, [searchText])

  const fetchResults = (text) => {
    if(!text){
      setMatchedUsers([]);
      return;
    }
    fetch(`https://user-server-naqy.onrender.com/users?search=${text}`)
      .then(response => response.json())
      .then(users => {
        setMatchedUsers(users.map(user => user.name))
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon"/>
      <input 
        type="text" 
        placeholder="Type to search..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}/>
    </div>
  )
}

export default SearchBar
