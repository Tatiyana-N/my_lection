import React, { useState, useMemo } from 'react';
import './App.css';

import PostList from './components/PostList';
import PostForm from './components/PostForm';

import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';


function App() {
  const [posts, setPosts] = useState(initialState: [
    { id: 1, title: 'Aa', body: 'Description' },
    { id: 2, title: 'Bb', body: 'Description' },
    { id: 3, title: 'Cc', body: 'Description' },

  ])

  const [filter, setFilter] = useState(initialState:{sort:'', query: ''})
  const [modal, setModal] = useState(initialState: false);



  const sortedPosts = useMemo(() => {
    console.log('AAAAAA')
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(filter.query))

  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts(value[...posts, newPost])
    setModal(value: false)

  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }

 

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(value: true)}>
        Создать пользователя
        </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter
                filter={filter}
                setFilter={setFilter} 
      />
    
         <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
       

    </div>
  );
}

export default App;
