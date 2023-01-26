import { useState } from "react";
import Comment from "./Comment";

const WolfGuyImg = "/assets/image/wolfguyfeather.jpg";

const CommentSec = () => {
  const [comm, setComm] = useState([
    {
      author: "Leo - Art Joourney",
      comment:
        "Wonder working everything about this piece is epic, expecting more from the creator",
    },
    {
      author: "Jay Don - Oak Land",
      comment: `Wonder working everything about this piece
         is epic, expecting more from the creator
         Wonder working everything about this piece is epic, expecting more from the creator
         `,
    },

    {
      author: "Nelson Gimberson - ailey hills",
      comment:
        "This epic details the exudance of great artistry the landmark of Da vinci Larrison fame and Gentility",
    },
    {
      author: "Jay Don - Silvey Pearls",
      comment: "mad piece Gentlelady",
    },
  ]);
  return (
    <div className="buy__comments-main-container">
      <div className="buy__send-comment-container">
        <img
          className="buy__user-profile-img"
          src={WolfGuyImg}
          alt="user profile"
        />

        <form style={{ width: "100%" }} className="buy__copy-url-form">
          <div style={{ width: "100%" }} className="buy__copy-url-form-group">
            <input
              placeholder="write your comment"
              className="buy__copy-url-form-control"
            />
            <button className="buy__copy-url-btn">
              <span className="buy__copy-url-btn-text">Send</span>
            </button>
          </div>
        </form>
      </div>

      <div className="buy__comments-listing-container">
        {comm.map((cm) => {
          return <Comment comment={cm.comment} author={cm.author} />
        })}
      </div>
    </div>
  );
};

export default CommentSec;
