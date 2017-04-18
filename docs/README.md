# KeepScrolling

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/VDUbWkif/keepscrolling

## Minimum Viable Product

KeepScrolling is a web application inspired by 'tumblr' built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at least, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Post form for various post types
- [ ] Feed
- [ ] Follows
- [ ] Likes
- [ ] [README][Production_README]

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes/
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md
[Production_README]: docs/production_readme.md

# Implementation Timeline


#### Backend setup and Front End User Auth (2 days)
  - Functioning rails project with front-end Authentication


#### Posts Model, API, and components (3 days)
  - Posts can be created, read, edited and destroyed through
  the API.


#### Follows (1 day)
  - Be able to follow and unfollow blogs.


#### Feed (1 day)
  - See feed from those you follow.


#### Likes (1 day)
  - Be able to like posts, which are then stored in a 'likes' dashboard.

#### Blogs (2 days)
  - Posts belong to Blogs that can be created, read, edited and destroyed through the API.
  
---

### Bonus Features (TBD)
- [ ] Reblogging
- [ ] Tags
- [ ] User show page (blog)
- [ ] Allow user to style their blog
- [ ] Blog preview on sidebar
- [ ] Live chat with other users
- [ ] Schedule posts for a later date
