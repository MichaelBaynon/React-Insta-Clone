import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer'



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
        <PostContainer posts={this.state.posts} />
        Hello world
    </div>



    )
  }




}

export default App;
