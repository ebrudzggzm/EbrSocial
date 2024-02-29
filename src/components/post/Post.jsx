import {useState} from "react";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Users} from "../../dummyData";
 
export default function Post({post}) {
const [like,setLike] = useState(post && post.like);
const [isLiked,setIsLiked] = useState(false)
const likeHandler =() =>{
  setLike(isLiked ? like-1 : like+1)
  setIsLiked(!isLiked);
}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.find(u => u.id === post?.userId)?.profilePicture}
              className="postProfileImg"
              alt=""
            />
            <span className="postUserName">{Users.find(u => u.id === post?.userId)?.username }</span>
            {/*  */}
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.desc}
            <img className="postImg" src={post?.photo}alt="" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
