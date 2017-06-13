import React from 'react';
import { Link } from 'react-router';

const PostItem = (props) => {
  if (!props.currentUser){return null;}
  let currUserPost = "";
  let editAvatar = "";
  if (props.post.author === props.currentUser.id){
    currUserPost = "curr";
    editAvatar = "edit_avatar";
  } else {
     currUserPost = "hidden";
  }
  if (props.post.content === 'link'){
    let externalLink = props.post.source.includes("://") ? props.post.source : 'https://' + props.post.source;
    return (
      <li className="li-post">
      <div className={'user-avatar ' + editAvatar}>
          <div className="user-image-stick">
            <img src={props.post.avatar_url} />
          </div>
          <div className="edit_profile"><span className="change">Change</span></div>
      </div>
      <div className={"post"}>
        <div className="post-header">
          <span>{props.post.username}</span>
        </div>
        <div className="link-container">
          <a className= "link-post-link" target="_blank" href={externalLink} >{props.post.source}
            <div>
              <div className="link-title">
                <span>{props.post.title}
                  <span className='huge-pointer'>  ></span>
                </span>
              </div>
              <div className="link-summary">
                <span>{props.post.summary}</span>
              </div>
            </div>
          </a>
        </div>
          <div className = "indiv-post-description">
            {props.post.body}
          </div>
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

  }else if (props.post.content === 'audio') {
    return(
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
          <div className="indiv-post-title">
            <span>{props.post.title}</span>
          </div>
          <div className="indiv-post-body">

            <div className="audio-post-audio">
              <audio controls>
                <source src={props.post.image_url} type="audio/mp3"></source>
                <source src={props.post.image_url} type="audio/ogg"></source>
                <source src={props.post.image_url} type="audio/wav"></source>
              </audio>
            </div>
            <div className = "body-caption">
              <span>{props.post.body}</span>
            </div>
          </div>
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
  } else if (props.post.content === "photo"){

    let picture = props.post.content === "photo" ? props.post.image_url : null;
    return(
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
          <div className="indiv-post-title">
            <span>{props.post.title}</span>
          </div>
          <div className="indiv-post-body">

            <div className="picture-post-photo">
              <img src={props.post.image_url} />
            </div>
            <div className = "body-caption">
              <span>{props.post.body}</span>
            </div>
          </div>
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
  } else if (props.post.content === "video") {
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
          <div className="indiv-post-title">
            <span>{props.post.title}</span>
          </div>
          <div className="indiv-video-body">
            <div className="video-post-video">
              <video width="540" height="360" controls>
                <source src={props.post.image_url} type="video/mp4" />
                <source src={props.post.image_url} type="video/ogg" />
              </video>
            </div>

            <div className = "body-caption">
              <span>{props.post.body}</span>
            </div>
          </div>
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
  } else if (props.post.content === "quote"){
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
            <div className="indiv-post-title">
            <span>{props.post.body}</span>
          </div>
          <div className="indiv-post-body">

            <div className = "body-caption">
              <span>{props.post.title}</span>
            </div>
          </div>
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
  }
    else {
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
          <div className="indiv-post-title">
            <span>{props.post.title}</span>
          </div>
          <div className="indiv-post-body">

            <div className = "body-caption">
              <span>{props.post.body}</span>
            </div>
          </div>
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
    }
  };
export default PostItem;
