import React, { useState } from "react";
import "../../assets/css/poste.css";
import PostCommentaire from "./PostCommentaire";
import PosteBas from "./PosteBas";
import PosteDate from "./PosteDate";
import PosteImage from "./PosteImage";
import PosteTexte from "./PosteTexte";
import PosteUtilisateur from "./PosteUtilisateur";
import PosteVideo from "./PosteVideo";
import VuCommentaire from "./VuCommentaire";

const Post = ({ post }) => {
  const [visibleCommentaire, setVisibleCommentaire] = useState(false);
  const [visibleLike, setVisibleLike] = useState(false);
  return (
    <div className="poste">
      <div className="post_utilisateur">
        <PosteUtilisateur post={post} />
        <PosteDate post={post} />
        {post.postTexte && <PosteTexte post={post} />}
        {post.postPhoto && <PosteImage post={post} />}
        {post.postVideo && <PosteVideo post={post} />}
        <PosteBas
          vuePostBas={{
            visibleCommentaire,
            setVisibleCommentaire,
            visibleLike,
            setVisibleLike,
            post,
          }}
        />
        {visibleCommentaire && (
          <>
            <div className="grand_contenue_commentaire">
              {post.postCommentaire?.map((comment) => {
                return (
                  <div key={comment._id}>
                    <VuCommentaire comment={{post, comment: comment}} />
                  </div>
                );
              })}
            </div>
            <PostCommentaire post={post} />
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
