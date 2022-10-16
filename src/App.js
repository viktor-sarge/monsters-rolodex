import CardList from './components/card-list/card-list.component';
import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((data) => this.setState(
        () => {return {monsters: data, filteredMonsters: data};}
      ));
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState( () => {
      return { searchField }
    }
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
    <div className="App"> 
      <h1>Monsters rolodex</h1>
      <input className='search-box' type='search' placeholder='Monster name' onChange={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  ); 

  }
}

export default App;
