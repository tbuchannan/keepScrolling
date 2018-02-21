import React from 'react';
import { Link } from 'react-router';
import LinkPost from '../indiv_posts/link_post.jsx';
import AudioPost from '../indiv_posts/audio_post.jsx';
import PhotoPost from '../indiv_posts/photo_post.jsx';
import VideoPost from '../indiv_posts/video_post.jsx';
import QuotePost from '../indiv_posts/quote_post.jsx';
import TextPost from '../indiv_posts/text_post.jsx';

const PostItem = (props) => {
  if (!props.currentUser){ return null; }
  const isCurrUser = props.post.author === props.currentUser.id;
  const currUserPost = isCurrUser ? "curr" : "hidden";
  const editAvatar = isCurrUser ? "edit_avatar" : "";

  let postBody;
  switch (props.post.content) {
    case "link":
      postBody = <LinkPost post={ props.post }/>;
      break;
    case "audio":
      postBody = <AudioPost post = { props.post } audio={ props.post.image_url }/>;
      break;
    case "photo":
      postBody = <PhotoPost image = {props.post.image_url} post={ props.post }/>;
      break;
    case "video":
      postBody = <VideoPost video={ props.post.image_url } post={ props.post } />;
      break;
    case "quote":
      postBody = <QuotePost post = { props.post } />;
      break;
    default:
      postBody = <TextPost post = { props.post }/>;
      break;
  }
    return (
      <li className="li-post">
        <div className={'user-avatar ' + editAvatar}>
          <div className="user-image-stick">
            <img src={props.post.avatar_url} />
          </div>
        </div>
        <div className={"post"}>
          <div className="post-header">
            <span>{props.post.username}</span>
          </div>
          { postBody }
          <div className="post-footer">
              <div className={'cog-div ' + currUserPost}>
                <i className="fa fa-cog" aria-hidden="true"></i>
                <div className ="edit_delete_drop hidden">
                  <button>Edit</button>
                  <button onClick={() => props.removeOnePost(props.post.post_id)}>Delete</button>
                </div>
              </div>
            </div>
        </div>
      </li>
    );
  };
export default PostItem;
