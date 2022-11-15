import React from "react";

const PosteImage = ({post}) => {
  return (
    <div className="post_contenue_image">
      <div className="image_post">
        <img src={`/assets/images/post/${post.postPhoto}`} alt="poste" />
      </div>
    </div>
  );
};

export default PosteImage;
