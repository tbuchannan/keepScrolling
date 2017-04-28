import React from 'react';
import { Link } from 'react-router';

const PostItem = ({ post, router }) => {
  if (post.content === 'link'){
    let externalLink = "http://" + post.source;
    return (
      <li className="li-post">
      <div className="user-avatar">
        <div className="user-image-stick">
          <img src={post.avatar_url} />
        </div>
      </div>
      <div className={"post"}>
        <div className="post-header">
          <span>{post.username}</span>
        </div>
        <div className="link-container">
          <a className= "link-post-link" href={externalLink} >{post.source}
            <div>
              <div className="link-title">
                <span>{post.title}
                  <span className='huge-pointer'>  ></span>
                </span>
              </div>
              <div className="link-summary">
                <span>{post.summary}</span>
              </div>
            </div>
          </a>
        </div>
          <div className = "indiv-post-description">
            {post.body}
          </div>
          <div className="post-footer">
            <div className="cog-div">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <div className = "edit_delete_drop hidden">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
      </div>
      </li>
    );

  }else if (post.content === 'audio') {
    return(
      <li className="li-post">
        <div className="user-avatar">
          <div className="user-image-stick">
            <img src={post.avatar_url} />
          </div>
        </div>
        <div className={"post"}>
          <div className="post-header">
            <span>{post.username}</span>
          </div>
          <div className="indiv-post-title">
            <span>{post.title}</span>
          </div>
          <div className="indiv-post-body">

            <div className="audio-post-audio">
              <audio controls>
                <source src={post.image_url} type="audio/mp3"></source>
                <source src={post.image_url} type="audio/ogg"></source>
                <source src={post.image_url} type="audio/wav"></source>
              </audio>
            </div>
            <div className = "body-caption">
              <span>{post.body}</span>
            </div>
          </div>
          <div className="post-footer">
            <div className="cog-div">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <div className = "edit_delete_drop hidden">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  } else if (post.content === "photo"){

    let picture = post.content === "photo" ? post.image_url : null;
    return(
      <li className="li-post">
        <div className="user-avatar">
          <div className="user-image-stick">
            <img src={post.avatar_url} />
          </div>
        </div>
        <div className={"post"}>
          <div className="post-header">
            <span>{post.username}</span>
          </div>
          <div className="indiv-post-title">
            <span>{post.title}</span>
          </div>
          <div className="indiv-post-body">

            <div className="picture-post-photo">
              <img src={post.image_url} />
            </div>
            <div className = "body-caption">
              <span>{post.body}</span>
            </div>
          </div>
          <div className="post-footer">
            <div className="cog-div">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <div className = "edit_delete_drop hidden">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </li>

    );
  } else if (post.content === "video") {
    return (
      <li className="li-post">
        <div className="user-avatar">
          <div className="user-image-stick">
            <img src={post.avatar_url} />
          </div>
        </div>
        <div className={"post"}>
          <div className="post-header">
            <span>{post.username}</span>
          </div>
          <div className="indiv-post-title">
            <span>{post.title}</span>
          </div>
          <div className="indiv-video-body">
            <div className="video-post-video">
              <video width="540" height="360" controls>
                <source src={post.image_url} type="video/mp4" />
                <source src={post.image_url} type="video/ogg" />
              </video>
            </div>

            <div className = "body-caption">
              <span>{post.body}</span>
            </div>
          </div>
          <div className="post-footer">
            <div className="cog-div">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <div className = "edit_delete_drop hidden">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
          </div>
      </li>
    );
  } else {
      return (
      <li className="li-post">
        <div className="user-avatar">
          <div className="user-image-stick">
            <img src={post.avatar_url} />
          </div>
        </div>
        <div className={"post"}>
          <div className="post-header">
            <span>{post.username}</span>
          </div>
          <div className="indiv-post-title">
            <span>{post.title}</span>
          </div>
          <div className="indiv-post-body">

            <div className = "body-caption">
              <span>{post.body}</span>
            </div>
          </div>
          <div className="post-footer">
            <div className="cog-div">
              <i className="fa fa-cog" aria-hidden="true"></i>
              <div className = "edit_delete_drop hidden">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
          </div>
        </li>
      );
    }
  };
export default PostItem;
