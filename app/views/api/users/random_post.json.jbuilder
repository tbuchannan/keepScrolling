json.post_id @post.id
json.id @post.author_id
json.username @post.author.username
json.content @post.content
json.avatar asset_path(@post.author.avatar.url)
json.image_url asset_path(@post.image.url)
