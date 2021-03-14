import React, { Component } from 'react';
import axios from 'axios';

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selectedCategory: null,
    };
  }

  componentDidMount() {
    axios
      .get('https://api.chucknorris.io/jokes/categories')
      .then((response) => {
        console.log(response);
        this.setState({ categories: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="sidebar">
        <h2 className="category-title">Jokes Categories</h2>
        <ul className="categories">
          {categories.length
            ? categories.map((category, index) => (
                <li
                  key={index}
                  className="item"
                  onClick={() => this.handleSelectedCategories(category)}
                >
                  {category}
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
