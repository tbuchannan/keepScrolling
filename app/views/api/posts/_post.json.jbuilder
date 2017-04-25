json.set! post.id do
  json.post_id post.id
  json.author post.author_id
  json.title post.title
  json.body  post.body
  json.summary post.summary
  json.source post.source
  json.content post.content
end
