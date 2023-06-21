import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultList from './components/SearchResultList';

function App() {

  const [ searchText, setSearchText ] = useState("")
  const [ matchedUsers, setMatchedUsers ] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar 
          searchText={searchText} 
          setSearchText={setSearchText} 
          setMatchedUsers={setMatchedUsers}/>
        <SearchResultList 
          users={matchedUsers}
          text={searchText}/>
      </div>
    </div>
  )
}

export default App
