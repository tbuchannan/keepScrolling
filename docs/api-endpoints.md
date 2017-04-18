# API Endpoints

## HTML API

### Root

  - `GET /` - loads React web app

## JSON API

### Users
  - `GET /api/users/new`
  - `POST /api/users`
  - `PATCH /api/users`

### Session
  - `GET /api/session/new`
  - `POST /api/session`
  - `DELETE /api/session`

### Posts
  - `GET /api/posts`
  - `POST /api/posts`
  - `GET /api/posts/:id`
  - `PATCH /api/posts/:id`
  - `DELETE /api/posts/:id`

### Follows
  - `GET /api/follows`
  - `POST /api/follows`
  - `DELETE /api/follows/:id`


<!--
Alex: You could have a GET to /blogs/cashcats that routes to the UsersController and finds a user with username cashcats, for example
  BONUS
### Blogs
  - `GET /api/blogs/:title`
  - `POST /api/blogs/:title`
  - `GET /api/blogs/:title`
  - `DELETE /api/blogs/:title`
  -->
