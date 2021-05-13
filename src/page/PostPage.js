import PostList from "../component/PostList";

const PostPage = (props) => {
    console.log(props.match)
    return(
        <div>
            <PostList/>
            {props.match.params.postId}
        </div>
    )
}

export default PostPage;