# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
# Post.create(author_id: User.third.id, title: "Winter is Coming", body: "Game of Thrones news source", content: "https://winteriscoming.net/", summary: "")
# Post.create(author_id: User.fourth.id, title: "How I Met Your Mother Opening", body: "", content: "https://www.youtube.com/watch?v=ZPLOsabhQSM", summary: "")
# Post.create(author_id: User.fourth.id, title: "Barneys Blog", body: "The most seductive man in all of manhattan", content: "https://www.barneystinsonblog.com/", summary: "")



# 50 users, 10-20 posts each

User.destroy_all
Post.destroy_all
Follow.destroy_all

User.create(email: 'guest@guest.com', username: 'guest', password: 'guest1234');
User.create(email: 'tj.buchannan@gmail.com', username: 'tnice01', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/10389538_10205830560710800_963345743579597519_n.jpg');
User.create(email: 'gotfanboy@gmail.com', username: 'JonSnow', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/gotavatar.jpg');
User.create(email: 'himym@gmail.com', username: 'HowIMetYourMother', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/himym-min.png');
User.create(email: 'dwight@gmail.com', username: 'DKSchrute', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/avatar_47daeec01aae_512-min.png');
User.create(email: 'jerome@gmail.com', username: 'Playa4rmHimalayas', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/jerome.jpg');
User.create(email: 'teemo@gmail.com', username: 'Teemo', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/Teemo_square.png');
User.create(email: 'ramen@gmail.com', username: 'Naruto Uzumaki', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/naruto-min.png');
User.create(email: 'wethebest@gmail.com', username: 'DJ Khaled', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/khaled.jpg');
