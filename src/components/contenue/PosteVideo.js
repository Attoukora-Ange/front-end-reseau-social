import React from "react";
const PosteVideo = ({ post }) => {
  const url = `/assets/images/post/${post.postVideo}`;
  return (
    <div className="poste_contenue_video">
      <video
        src={url}
        width="100%"
        height="100%"
        // autoPlay
        muted
        controls
      ></video>
    </div>
  );
};

export default PosteVideo;
