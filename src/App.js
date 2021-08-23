import React, {  useMemo, useState } from 'react'
import PostList from './components/PostList'
//import ClassCounter from './components/ClassCounter'
//import Counter from './components/Counter'
import './styles/App.css'
//import MyButton from './components/UI/Button/MyButton'
//import MyInput from './components/UI/Input/MyInput'
import PostForm from './components/PostForm'

import PostFilter from './components/PostFilter'

function App() {
   const [posts, setPosts] = useState([
    {id: 1, title: 'aaa 1',body: 'sds'},
    {id: 2, title: 'sds 2',body: 'vlkdd'},
    {id: 3, title: 'sdssd 3',body: 'fgf'}
   ])
   const [filter, setFilter] = useState({sort: '', query: ''})
    
  

   const sortedPost = useMemo(() =>{
    if(filter.sort){
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts

   },[filter.sort,posts])

   const sortedAndSearchedPosts = useMemo(() =>{
      return sortedPost.filter(post =>post.title.toLowerCase().includes(filter.query))
   },[folter.query,sortedPost])
    
   const createPost = (newPost) =>{
     setPosts([...posts,newPost])
   } 
   
   const removePost = (post) =>{
     setPosts(posts.filter(p =>p.id !== post.id))
   }
   
   const sortPost = (sort) =>{
     setSelectedSort(sort)
   }
  return (
    <div className= "App">

      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter/>
      
      {sortedAndSearchedPosts.length !==0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
      
    </div>
  )
}

export default App;
