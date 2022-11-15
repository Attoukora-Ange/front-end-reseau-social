import React from "react";
import TexteCourt from "./TexteCourt";
import TexteLong from "./TexteLong";

const PosteTexte = ({ post }) => {
  return (
    <div className="post_contenue_poster">
      <div className="poster">
        {post.postTexte.length > 200 ? (
          <TexteLong PosterTexte={post.postTexte} />
        ) : (
          <TexteCourt PosterTexte={post.postTexte} />
        )}
      </div>
    </div>
  );
};

export default PosteTexte;
