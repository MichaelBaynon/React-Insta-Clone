import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <div>

        <SearchBar posts={this.state.posts} />
        <PostContainer posts={this.state.posts} />


      </div>



    )
  }




}

export default App;
