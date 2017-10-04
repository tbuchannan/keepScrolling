# keepScrolling [![Build Status](https://travis-ci.org/tbuchannan/keepScrolling.svg?branch=master)](https://travis-ci.org/tbuchannan/keepScrolling)

[keepScrolling live][heroku]

[heroku]:https://keep-scrolling.herokuapp.com

keepScrollig is a fullstack web application inspired by tumblr. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

### Post Rendering and Deleting
  On the database the posts are stored in one table, containing the columns for `id`,`title`,`content`,
`body`,`author_id`,`created_at`,`updated_at`,`summary`,`source`,`image_file_name`,`image_content_type`,
`image_file_size`, `image_updated_at`. Upon login  an API call is made to the database which grabs all of the posts from all of the users, and displays them. They are then held in a slice of the state named posts until the user's session is destroyed.

Posts are rendered in one component, the PostItem component, which displays the author of the post, their profile picture, the post and options to delete the post. The PostItem Component is rendered on the, PostItemIndex Component which is rendered on the Dashboard component upon login. The UI is taken directly from tumblr, for a clean minimalist look.

![image of dashboard](/docs/wireframes/loggedInDash.png)

## Future Directions for the Project
In addition to the features already implemented, The next steps for keepScrolling are outlined below.

### Search

Searching notes is a standard feature of tumblr.  I plan to utilize the pgsearch library to create a search of posts and tags.  This search will look go through tags, posts, title, body, and content.  

### Direct Messaging

Although this is less essential functionality, I also plan to implement messaging between keepScrolling users.  To do this, I will use websocket integration so that notifications of messages happens seamlessly.
