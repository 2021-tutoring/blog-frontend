import {Link} from "react-router-dom";

const PostList = () => {

    let a = [
        {id: 'zero', subject: 'one', title: 'tow', commentNo: 'tow', user: 'tow', views: 'tow', createdDate: 'tow'},
        {id: 'zero', subject: 'one', title: 'tow', commentNo: 'tow', user: 'tow', views: 'tow', createdDate: 'tow'},
        {id: 'zero', subject: 'one', title: 'tow', commentNo: 'tow', user: 'tow', views: 'tow', createdDate: 'tow'}];


    let postInfo = (contents) => {
        return contents.map(content => (
            <tr>
                <th>{content.id}</th>
                <th>{content.subject}</th>
                <th><Link to={`/posts/${content.id}`}>{content.title}</Link></th>
                <th>{content.commentNo}</th>
                <th>{content.user}</th>
                <th>{content.views}</th>
                <th>{content.createdDate}</th>
            </tr>
        ))
    }

    return (
        <table border="1">
            <thead>
            <tr>
                <th>ID</th>
                <th>카테고리</th>
                <th>제목</th>
                <th>댓글수</th>
                <th>글쓴이</th>
                <th>조회수</th>
                <th>작성일</th>
            </tr>
            </thead>
            <tbody>
                {postInfo(a)}
            </tbody>
        </table>
    )
}

export default PostList;