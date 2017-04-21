json.set! post.id do
  json.post_id post.id
  json.author post.author_id
  json.title post.title
  json.body  post.body
  json.summary post.summary
  json.source post.source
  json.content_type post.content_type
  json.url do
    json.photo_url post.photo_url
    json.link_url post.link_url
    json.audio_url post.audio_url
    json.video_url post.video_url
    json.quote_url post.quote_url
  end
end
