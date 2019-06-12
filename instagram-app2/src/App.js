import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import Comment from './components/CommentSection/CommentSection'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      search: '',
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData,

    })
  }

  onchange = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Input label='Search' icon='search' onChange={this.onchange} />
        <SearchBar posts={this.state.posts} />
        <PostContainer posts={this.state.posts} />
        {/* <Comment /> */}


      </div>



    )
  }




}

export default App;
