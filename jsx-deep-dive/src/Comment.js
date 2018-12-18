import React from "react";

//conditional rendering using a function
function isDirtyWords(input) {
  return input.match(/banana/);
}

const Comment = props => {
  if (!isDirtyWords(props.text)) {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img src={props.avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.name}
          </a>
          <p className="date">{props.date}</p>
          <p className="text">{props.text}</p>
        </div>
        <hr />
      </div>
    );
  }

  return null; //if words is banana return null
};

export default Comment;
