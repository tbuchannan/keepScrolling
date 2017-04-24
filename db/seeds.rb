# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Post.destroy_all

User.create(email: 'tj.buchannan@gmail.com', username: 'tnice01', password: 'password123');
User.create(email: 'number1detective@gmail.com', username: 'jon', password: 'password123');
User.create(email: 'aksheathsheath420@gmail.com', username: 'sheath', password: 'password123');
User.create(email: 'rkimthunkmaster@gmail.com', username: 'royce', password: 'password123');
User.create(email: 'mokmok@gmail.com', username: 'moktar', password: 'password123');
User.create(email: 'phillyphil@gmail.com', username: 'philip', password: 'password123');

# text = Post.create(author_id: User.first.id, title: "Mars", body: "Good old Bruce, the man is a beast.", content_type: "text")
# photo = Post.create(author_id: User.last.id, title: "", body: "Should I add a description?", photo_url: "www.external_photo_link.com", content_type: "photo")
# quote = Post.create(author_id: User.second.id, title: "source information here?", body: "quote text will go in here", content_type: "photo", source: "source users")
# link = Post.create(author_id: User.third.id, title: "this will be on the link itself", body: "this is just a description", content_type: "link", summary: "this is just a summary")
# chat = Post.create(author_id: User.fourth.id, title: "title of the chat", body: "chat text", content_type: "chat")
# audio = Post.create(author_id: User.fifth.id, title: "", body: " song description, def not a youtube link AUDIO ONLY", content_type: "chat")
# video = Post.create(author_id: User.first.id, title: "", body: "Good old Bruce, the man is a beast.", content_type: "video")
