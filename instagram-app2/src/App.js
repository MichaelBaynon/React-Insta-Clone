import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import Comment from './components/CommentSection/CommentSection'
import { filter } from 'rsvp';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
      filteredObjects: [],
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,
    })
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  filterSearch = e => {
    e.preventDefault()
    this.handleChange(e)
    const filteredPosts = this.state.posts.filter(post => post.username.includes(this.state.search))
    this.setState({
      filteredObjects: filteredPosts,
    })
  }



  render() {
    return (
      <div>

        <SearchBar filterSearch={this.filterSearch} search={this.state.search} />
        <PostContainer posts={this.state.filteredObjects.length > 0 ? this.state.filteredObjects : this.state.posts} />




      </div>



    )
  }




}

export default App;
