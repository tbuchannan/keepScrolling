# Schema Information
---

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## posts
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    |  
content_type |           |
body         | text      |
photo_url    | string    |
link_url     | string    |
audio_url    | string    |
video_url    | string    |
quote_url    | string    |
author_id    | integer   | not null, foreign key (references author), indexed

## blogs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts), indexed, unique [tag_id]

## follow
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references user), indexed
followee_id | integer   | not null, foreign key (references blog), indexed


# Bonus
---

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

<!-- TODO: format this table if you are able to get to it. -->
## reblog
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
blog_id     | integer   | not null, foreign key (references blog where post will be sent)
post_id     | integer   | not null, foreign key (references posts), indexed, unique [tag_id]
