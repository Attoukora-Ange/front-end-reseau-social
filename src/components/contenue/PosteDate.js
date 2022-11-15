import React from "react";

const PosteDate = ({ post }) => {
  return (
    <div className="post_contenue_date">
      <div className="post_date">{post.createdAt.split('T')[0] + " publié à " + post.createdAt.split('T')[1].split('.')[0]}</div>
    </div>
  );
};

export default PosteDate;
