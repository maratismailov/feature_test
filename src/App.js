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
      search: ''
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
    const searchQuerie = 'http://flibusta.is/booksearch?ask=' + preQuerie + '&chs=on&cha=on&chb=on';
    const searchFullResult = fetch(searchQuerie, {
      mode: 'no-cors'
    });
    console.log(searchFullResult);
    // console.log(searchQuerie)
  }

  prepareQuerie() {
    let preQuerie = this.state.querie.replace(/ /g, "+");
    const searchQuerie = 'http://flibusta.is/booksearch?ask=' + preQuerie + '&chs=on&cha=on&chb=on';
  }
  // var querie = prepareQuerie();

  render() {

    return (
      <div className='App'>
        <input placeholder='Enter book name' type="text" value={this.state.value} onChange={this.handleChange} />

        {/* <SearchInput
          placeholder='Enter book name' /> */}
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default App;
// export { querie } 