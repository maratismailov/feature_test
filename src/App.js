import React, { Component } from 'react';
import axios from "axios";

// import SearchInput from './components/SearchInput'
import './App.css';


// var axiosTest = axios.get('https://api.github.com/repos/regfe89/keyboardnoble').data.forks_url;
// const axiosTest = async () => {
//   try {
//     const preResult = await axios.get('https://api.github.com/repos/regfe89/keyboardnoble');
//     console.log('inside', preResult.data.id);
//     this.setState({ axios: preResult.data.id })
//   } catch (error) {
//     console.error(error);
//   }
// }
// const axiosResult = async () => {
//   return await Promise axiosTest()
// }




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      querie: '',
      search: '',
      result: '',
      result2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleChange(event) {
    this.setState({ querie: event.target.value });
  }


  handleSearch(event) {
    // this.setState({ search: this.state.value });
    let preQuerie = this.state.querie.replace(/ /g, "+");
    const searchQuerie = 'https://flibustasearch.herokuapp.com/http://flibusta.is/booksearch?ask=' + preQuerie + '&chs=on&cha=on&chb=on';
    const searchFullResult = axios.get(searchQuerie).then(response => this.setState({ result: response.data }))
    // const searchFullResult = axios.get(searchQuerie);
    // console.log(this.state.result);
    this.setState({ result: searchFullResult });
    const result0 = String(this.state.result)
    const result1 = result0.substring(this.state.result.indexOf('<ul><li>') + 8);
    const result2 = result1.substring(0, result1.indexOf('</ul><br>'));
    this.setState({ result2: result2 });
    // console.log(this.state.result2);
    const array1 = result2.split('\n');
    const array2 = array1.filter(String)
    console.log(array2)
  }

  render() {

    return (
      <div className='App'>
        <input placeholder='Enter book name' type="text" value={this.state.value} onChange={this.handleChange} />

        {/* <SearchInput
          placeholder='Enter book name' /> */}
        <button onClick={this.handleSearch}>Search</button>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
// export { querie } 