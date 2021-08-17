import React, { useState } from 'react'
import PostList from './components/PostList'
//import ClassCounter from './components/ClassCounter'
//import Counter from './components/Counter'
import './styles/App.css'
function App() {
   const [posts, setPots] = useState([
    {id: 1, title: 'Javascript 1',body: 'Description'},
    {id: 2, title: 'Javascript 2',body: 'Description'},
    {id: 3, title: 'Javascript 3',body: 'Description'}
   ])

  
  
  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  )
}

export default App;
