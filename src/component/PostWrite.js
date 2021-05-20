import React, {useEffect, useState} from "react";
import axios from "axios";


const PostWrite = (props) => {
    const [post, setPost] = useState({
        id: '',
        subject: '',
        title: '',
        commentNo: '',
        user: '',
        views: '',
        createdDate: ''
    });

    useEffect(()=>{
        axios.get("https://blog-tutoring.herokuapp.com/boards/1/posts/1")
            .then(post=> {
                console.log(post)
                setPost(post)
            })
            .catch(e=> {
                const status  =e.response.status;
                console.log(e.response)
                console.log(e.response.status)
                if(status===404){
                    console.log("redirect")
                    // 뒤로 이동
                }
                else{
                    // unhandled exception
                }
                alert(e.response.data.message)
            });
    },[])
    let updatePostTitle = e => {
        console.log(e.target.value);
        setPost({
                ...post,
                title: e.target.value
            }
        )
    }
    let updatePostSubject = e => {
        console.log(e.target.value);
        setPost({
                ...post,
                subject: e.target.value
            }
        )
    }
    let addPost = () => {
        alert(`게시글 ${post.title}를 등록합니다.`);
    }

    let keyPressEnter = e => {
        if (e.key === 'Enter') addPost();
    }
    return (
        <div style={{width: "80%", margin: "3rem auto"}}> {/* 수정된 부분*/}
            <a href="/">
                <button type="primary">←-</button>
            </a>
            <form onSubmit={addPost}>
                <br/>
                <div style={{width: "80%", margin: "2rem auto"}}> {/* 수정된 부분*/}
                    <label>Title: </label>
                    {/*<Input onChange={params.} value={PostDetail.} type="text" name="title" />*/}
                    <input type="text" placeholder="제목을 입력해주세요" value={post.title} onChange={updatePostTitle}
                           onKeyPress={keyPressEnter}/>
                    <hr></hr>
                    {/*<TextArea rows="30" onChange={props.handleContentChange} value={props.contentValue} name="content" />*/}
                    <input type="text" rows="30" placeholder="댓글을 입력해주세요" value={post.subject}
                           onChange={updatePostSubject} onKeyPress={keyPressEnter}/>
                </div>
                <button type="primary" onClick={addPost}> {addPost ? "수정" : "등록"}
                </button>
            </form>
        </div>
    );
}
export default PostWrite;