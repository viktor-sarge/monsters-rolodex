import logo from './logo.svg';
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
    const filteredMonsters = this.state.monsters.filter(
      monster => monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );

    return (
    <div className="App"> 
      <input className='search-box' type='search' placeholder='Monster name' onChange={this.onSearchChange} />
      {filteredMonsters.map((monster)=>{
        return <div key={monster.id}><h1>{monster.name}</h1></div>})}
    </div>
  ); 

  }
}

export default App;
