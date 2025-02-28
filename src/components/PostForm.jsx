import React, {useState} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/Mybutton';

const  PostForm = ({create}) => {

    const [post,setPost]= useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
       const newPost = {
        ...post, id: Date.now()
       
       }
       create(newPost)
       setPost({title:'', body: ''})

    }

    return(
        <form>
            <MyInput 
                    value={post.title}
                    onChange = {e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder='Название поста'/>
                {/* <input ref = {bodyInputRef} type="text"/> */}
            <MyInput 
                    value ={post.body}
                    onChange = {e => setPost({...post, body: e.target.value})}
                    type="text" 
                    placeholder='Описания поста'/>
              <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    )
}

export default PostForm;
