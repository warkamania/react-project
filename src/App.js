import React, {  useState } from 'react'
import PostList from './components/PostList'
//import ClassCounter from './components/ClassCounter'
//import Counter from './components/Counter'
import './styles/App.css'
//import MyButton from './components/UI/Button/MyButton'
//import MyInput from './components/UI/Input/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/Select/MySelect'

function App() {
   const [posts, setPosts] = useState([
    {id: 1, title: 'aaa 1',body: 'sds'},
    {id: 2, title: 'sds 2',body: 'vlkdd'},
    {id: 3, title: 'sdssd 3',body: 'fgf'}
   ])
   const [selectedSort, setSelectedSort] = useState('')

   const createPost = (newPost) =>{
     setPosts([...posts,newPost])
   } 
   
   const removePost = (post) =>{
     setPosts(posts.filter(p =>p.id !== post.id))
   }
   
   const sortPost = (sort) =>{
     setSelectedSort(sort)
     setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))

   }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !==0
        ? <PostList remove={removePost} posts={posts} title="Список постов"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
      
    </div>
  )
}

export default App;
