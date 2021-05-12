import {Link} from "react-router-dom";

const PostList = () => {

    let a = [{a: 'zero', b: 'one', c: 'tow'}, {a: 'zero1', b: 'one2', c: 'tow3'}, {a: 'zero1', b: 'one2', c: 'tow3'}];


    let postInfo = (contents) => {
        return contents.map(content => (
            <tr>
                <th>{content.a}</th>
                <th>{content.b}</th>
                <th><Link to={`/${content.a}`}>{content.c}</Link></th>
                <th>{content.a}</th>
                <th>{content.b}</th>
                <th>{content.c}</th>
                <th>{content.a}</th>
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