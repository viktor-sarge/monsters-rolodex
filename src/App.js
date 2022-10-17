import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter(
      monster => monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App"> 
      <h1 className="app-title">Monsters rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search yer monsters' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
