# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Follow.destroy_all

User.create(email: 'guest@guest.com', username: 'guest', password: 'guest1234');
User.create(email: 'tj.buchannan@gmail.com', username: 'tnice01', password: 'password123');
User.create(email: 'number1detective@gmail.com', username: 'jon', password: 'password123');
User.create(email: 'aksheathsheath420@gmail.com', username: 'sheath', password: 'password123');
User.create(email: 'rkimthunkmaster@gmail.com', username: 'royce', password: 'password123');
User.create(email: 'mokmok@gmail.com', username: 'moktar', password: 'password123');
User.create(email: 'rauhfkjs@gmail.com', username: 'rahul', password: 'password123');
User.create(email: 'test@test.com', username: 'test', password: 'tester123');

# text = Post.create(author_id: User.first.id, title: "Mars", body: "Good old Bruce, the man is a beast.", content: "text")
# photo = Post.create(author_id: User.last.id, body: "Should I add a description?",  content: "http://farm4.staticflickr.com/3826/12897959993_a654e00dd2.jpg")
# quote = Post.create(author_id: User.second.id, title: "source information here?", body: "quote text will go in here", source: "source users", content: "quote")
# link = Post.create(author_id: User.third.id, title: "this will be on the link itself", body: "this is just a description", content: "https://github.com/thfxdszunanjfgfg", summary: "this is just a summary")
# chat = Post.create(author_id: User.fourth.id, title: "title of the chat", body: "chat text", content: "chat")
# audio = Post.create(author_id: User.fifth.id, body: " song description, def not a youtube link AUDIO ONLY", content: "https://soundcloud.com/radio1stories/future-rnb")
# video = Post.create(author_id: User.first.id, body: "Good old Bruce, the man is a beast.", content: "https://www.youtube.com/watch?v=S7OCzDNeENg")
