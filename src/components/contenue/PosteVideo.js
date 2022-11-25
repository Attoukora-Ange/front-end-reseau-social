import React from "react";
const PosteVideo = ({ post }) => {
  const url = `${post.postVideo}`;
  return (
    <div className="poste_contenue_video">
      <video
        src={url}
        width="100%"
        muted
        controls
      ></video>
    </div>
  );
};

export default PosteVideo;
