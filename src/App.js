import { Component } from 'react';
import './App.css';
import Category from './components/Category';
import CategoryList from './components/CategoryList';



class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       selectedCategory: null
    }
  }

  handleSelectedCategories = (category) => {
    this.setState({selectedCategory: category})
  }
  
  render() {
    return (
      <div className="App">
        <CategoryList handleSelectedCategories={this.handleSelectedCategories}/>
        <Category category={this.selectedCategory} />
      </div>
    );
  }
  
}

export default App;
