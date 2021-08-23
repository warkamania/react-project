import React from 'react'
import MySelect from './UI/Select/MySelect'
import MyInput from './UI/Input/MyInput'

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
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
    ) 
}

export default PostFilter
