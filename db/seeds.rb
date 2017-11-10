# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
# Post.create(author_id: User.third.id, title: "Winter is Coming", body: "Game of Thrones news source", content: "https://winteriscoming.net/", summary: "")
# Post.create(author_id: User.fourth.id, title: "How I Met Your Mother Opening", body: "", content: "https://www.youtube.com/watch?v=ZPLOsabhQSM", summary: "")



# 50 users, 10-20 posts each

User.destroy_all
Post.destroy_all
Follow.destroy_all



User.create(email: 'guest@guest.com', username: 'guest', password: 'guest1234');
User.create(email: 'tj.buchannan@gmail.com', username: 'tnice01', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/10389538_10205830560710800_963345743579597519_n.jpg');
User.create(email: 'gotfanboy@gmail.com', username: 'JonSnow', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/gotavatar.jpg');
mother = User.create(email: 'himym@gmail.com', username: 'HowIMetYourMother', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/himym-min.png');
User.create(email: 'dwight@gmail.com', username: 'DKSchrute', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/avatar_47daeec01aae_512-min.png');
User.create(email: 'jerome@gmail.com', username: 'Playa4rmHimalayas', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/jerome.jpg');
User.create(email: 'teemo@gmail.com', username: 'Teemo', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/Teemo_square.png');
naruto = User.create(email: 'ramen@gmail.com', username: 'Naruto Uzumaki', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/naruto-min.png');
User.create(email: 'wethebest@gmail.com', username: 'DJ Khaled', password: 'password123', avatar: 'https://s3.amazonaws.com/keepscrolling-pro/khaled.jpg');

family_guy_avatars = [
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyBrianBanana.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyCrazyStewie.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyFancyStewie.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyMocking.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyQuagmire.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyQuagmireGiggity.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyMayor.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyMocking.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyQuagmire.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyQuagmireGiggity.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuySickChris.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyStewiePres.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyStewieStare.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/avatars/familyGuyupsideDown.jpg"
].shuffle

family_guy_users = []

family_guy_avatars.each do |image|
  person = Faker::FamilyGuy.unique.character
  family_guy_users << User.create(email: Faker::Internet.unique.safe_email, username: person, password: Faker::Internet.password(8), avatar: image )
end

family_guy_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/posts/familyGuyHuddle.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/posts/familyGuyStewieLoveMe.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/posts/familyGuychinDance.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/posts/familyGuyPortait.jpg"
]

family_guy_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/video_posts/familyGuyCoolWhip.mp4",
  "https://s3.amazonaws.com/keepscrolling-pro/familyGuy/video_posts/familyGuyStewieSinging.mp4"
]

family_guy_pic_posts.each do |pic|
  Post.create(author_id: family_guy_users.sample.id, title: Faker::FamilyGuy.unique.location, body: Faker::FamilyGuy.unique.quote, content: "photo", image: pic)
end

family_guy_video_posts.each do |vid|
  Post.create(author_id: family_guy_users.sample.id, title: Faker::FamilyGuy.unique.location, body: Faker::FamilyGuy.unique.quote, content: "video", image: vid)
end


# Post.create(author_id: naruto.id, title: "Naruto Opening 2", body: "Dope track", content: "audio", image: "https://s3.amazonaws.com/keepscrolling-pro/naruto/narutoOpening2.mp3")

naruto_audio_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/naruto/audio_posts/narutoOpening2.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/naruto/audio_posts/narutoOpening3.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/naruto/audio_posts/narutoOpening8.mp3",
].shuffle

naruto_audio_posts.each do |audio|
  post_number = audio.split(/[\/.]/)[-2][-1]
  Post.create(author_id: naruto.id, title: "Naruto Opening #{post_number}", body: "I beat #{Faker::DragonBall.character} to this", content: "audio", image: audio)
end

# Post.create(author_id: User.fourth.id, title: "Barneys Blog", body: "The most seductive man in all of manhattan", content: "https://www.barneystinsonblog.com/", summary: "")

# users = [guest, tj, jonSnow, himym, dwight, jerome, teemo, naruto, khaled]

50.times do |index|
  Post.create(author_id: User.all.sample.id, title: Faker::HowIMetYourMother.quote, body:Faker::ChuckNorris.fact)
end
