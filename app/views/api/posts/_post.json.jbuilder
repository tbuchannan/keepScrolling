json.set! post.id do
  json.post_id post.id
  json.author post.author_id
  json.username post.author.username
  json.title post.title
  json.body  post.body
  json.summary post.summary
  json.source post.source
  json.content post.content
  json.avatar_url asset_path(post.author.avatar.url)
  json.image_url asset_path(post.image.url)
end
