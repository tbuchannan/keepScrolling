# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
# Post.create!(author_id: User.third.id, title: "Winter is Coming", body: "Game of Thrones news source", content: "https://winteriscoming.net/", summary: "")
# Post.create!(author_id: User.fourth.id, title: "How I Met Your Mother Opening", body: "", content: "https://www.youtube.com/watch?v=ZPLOsabhQSM", summary: "")

# 50 users, 10-20 posts each

User.destroy_all
Post.destroy_all
Follow.destroy_all

guest = User.create!(email: 'guest@guest.com', username: 'guest', password: 'guest1234');
tj = User.create!(email: 'tj.buchannan@gmail.com', username: 'tnice01', password: Faker::Internet.password, avatar: 'https://s3.amazonaws.com/keepscrolling-pro/10389538_10205830560710800_963345743579597519_n.jpg');
User.create!(email: 'jerome@gmail.com', username: 'Playa4rmHimalayas', password: Faker::Internet.password, avatar: 'https://s3.amazonaws.com/keepscrolling-pro/jerome.jpg');
User.create!(email: 'teemo@gmail.com', username: 'Teemo', password: Faker::Internet.password, avatar: 'https://s3.amazonaws.com/keepscrolling-pro/Teemo_square.png');

posts = []
custom_posts = []


################################## Family Guy ##################################
family_guy_avatars = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyBrianBanana.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyCrazyStewie.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyDeath.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyEvilMonkey.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyFancyStewie.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyMayor.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyMocking.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyQuagmire.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyQuagmireGiggity.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuySickChris.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyStewiePres.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyStewieStare.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/avatars/familyGuyupsideDown.png"
].shuffle

family_guy_users = []

family_guy_avatars.each do |image|
  person = Faker::FamilyGuy.unique.character
  family_guy_users << User.create!(
    email: Faker::Internet.unique.safe_email(person),
    username: person,
    password: Faker::Internet.password(8),
    avatar: image
  )
end

family_guy_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/posts/familyGuyHuddle.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/posts/familyGuyStewieLoveMe.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/posts/familyGuychinDance.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/posts/familyGuyPortait.jpg"
]

family_guy_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/video_posts/familyGuyCoolWhip.mp4",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/familyGuy/video_posts/familyGuyStewieSinging.mp4"
]

family_guy_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: family_guy_users.sample.id,
    title: Faker::FamilyGuy.unique.location,
    body: Faker::FamilyGuy.unique.quote,
    content: "photo",
    image: pic
  )
end

family_guy_video_posts.each do |vid|
  custom_posts << Post.new(
    author_id: family_guy_users.sample.id,
    title: Faker::FamilyGuy.unique.location,
    body: Faker::FamilyGuy.unique.quote,
    content: "video",
    image: vid
  )
end

#################################### Naruto ####################################
naruto = User.create!(
  email: Faker::Internet.safe_email('Naruto Uzumaki'),
  username: 'Naruto Uzumaki',
  password: Faker::Internet.password,
  avatar: 'https://s3.amazonaws.com/keepscrolling-pro/naruto-min.png'
)
naruto_strings =[
  "Man I love this song — ",
  "Get Hype! — ",
  "This is the best opening IMO — "
]
naruto_audio_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/audio_posts/narutoOpening2.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/audio_posts/narutoOpening3.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/audio_posts/narutoOpening8.mp3",
]

naruto_audio_posts.each do |audio|
  post_number = audio.split(/[\/.]/)[-2][-1]
  custom_posts << Post.new(
    author_id: naruto.id,
    title: "#{naruto_strings.pop} Naruto Opening #{post_number}",
    body: "I beat #{Faker::DragonBall.character} to this",
    content: "audio",
    image: audio
  )
end

naruto_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/video_posts/narutoFacesPain.mp4"
]

naruto_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/posts/boruto.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/posts/narutoFox.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/posts/narutoPowerUp.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/posts/narutoSageBijuu.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/naruto/posts/narutoSasuke.jpg"
]

villages = [
  "Amegakure", "Bamboo Village", "Ceramic Village", "Genjutsu Tree Village",
  "Getsugakure", "Hachō Village", "Hoshigakure", "Howling Wolf Village", "Inaho Village",
  "Ishigakure", "Jōmae Village", "Kagerō Village", "Kirigakure", "Kisaragi Village",
  "Konohagakure", "Kumogakure", "Kusagakure", "Mount Katsuragi", "Mount Myōboku",
  "Nadeshiko Village", "Otogakure", "Ryūchi Cave", "Shimogakure", "Sugi Village",
  "Sunagakure", "Takigakure", "Takumi Village", "Tanigakure", "Tonika Village",
  "Tsuchigumo Village", "Tsukigakure", "Uzushiogakure", "Yugakure", "Yukigakure",
  "Yumegakure"
]

naruto_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: naruto.id,
    title: villages.sample,
    body: "BELIEVE IT#{"!" * rand(6)}",
    content: "photo",
    image: pic
  )
end

naruto_video_posts.each do |video|
  custom_posts << Post.new(
    author_id: naruto.id,
    title: "He wasn't ready, BELIEVE IT",
    content: "video",
    image: video
  )
end

################################ Dwight Schrute ################################
dwight = User.create!(
  email: Faker::Internet.safe_email('DwightSchrute'),
  username: 'DKSchrute',
  password: Faker::Internet.password,
  avatar: 'https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/stare.png'
)

dwight_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/dwightSchruteFarm.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/dwightSmile.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/dwightfarm.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/fakeCrying.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/hired.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/dwight/posts/stare.png"
]

dwight_posts.each do |pic|
  custom_posts << Post.new(
    author_id: dwight.id,
    title: "I am..." ,
    body: "#{Faker::Ancient.god}",
    content: "photo",
    image: pic
  )
end

################################ Game Of Thrones ###############################
got = User.create!(
  email: Faker::Internet.safe_email('GameOfThrones'),
  username: 'GoTFanBoy',
  password: Faker::Internet.password,
  avatar: 'https://s3.amazonaws.com/keepscrolling-pro/gotavatar.jpg'
)

got_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/gameOfThrones/video_posts/gameOfHodor.mp4",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/gameOfThrones/video_posts/nightKingDrake.mp4"
]

got_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/gameOfThrones/posts/jonSnow.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/gameOfThrones/posts/tyrionLanister.png"
]

got_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: got.id,
    title: "Time to destroy",
    body: "House #{Faker::GameOfThrones.house}",
    content: "photo",
    image: pic)
end

got_video_posts.each do |video|
  custom_posts << Post.new(
    author_id: got.id,
    title: "#{Faker::GameOfThrones.character} would enjoy this",
    content: "video",
    image: video
  )
end

############################ How I Met Your Mother #############################
himym = User.create!(
  email: Faker::Internet.safe_email("HowIMetYourMother"),
  username: 'HowIMetYourMother',
  password: Faker::Internet.password,
  avatar: 'https://s3.amazonaws.com/keepscrolling-pro/himym-min.png'
)

himym_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/himym/video_posts/barneysResumeVideo.mp4",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/himym/video_posts/himymSinging.mp4"
]

himym_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/himym/posts/highFive.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/himym/posts/marshal.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/himym/posts/suitup.jpg"
]

himym_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: himym.id,
    title: "#{Faker::HowIMetYourMother.catch_phrase}",
    body: "#{Faker::HowIMetYourMother.quote} - #{Faker::HowIMetYourMother.character}",
    content: "photo",
    image: pic
  )
end

himym_video_posts.each do |video|
  custom_posts << Post.new(
    author_id: himym.id,
    title: "#{Faker::GameOfThrones.character} would enjoy this",
    content: "video",
    image: video
  )
end



################################## DJ Khaled ###################################
khaled = User.create!(
  email: Faker::Internet.safe_email("DJKhaled"),
  username: 'DJ Khaled',
  password: Faker::Internet.password,
  avatar: 'https://s3.amazonaws.com/keepscrolling-pro/khaled.jpg'
)

khaled_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/khaled/video_posts/congratsYouJustPlayedYourself.mp4"
]

khaled_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/khaled/posts/majorKey.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/khaled/posts/yesBoyYesBoy.gif"
]

khaled_strings = [
  "Major Key Alert", "Another One", "Cloth Talk", "Yes Boy! Yes Boy!", "Lion!",
  "They don't want you to have stars on your roof, so I got stars on my roof", "Fan Love",
  "Bless Up", "Major Key", "Sty away from 'They'"
]

khaled_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: khaled.id,
    title: "#{khaled_strings.sample}",
    body: "#{khaled_strings.sample}",
    content: "photo",
    image: pic
  )
end

khaled_video_posts.each do |video|
  custom_posts << Post.new(
    author_id: khaled.id,
    title: "#{khaled_strings.sample}",
    content: "video",
    image: video
  )
end

#################################### Anime #####################################
anime = User.create!(
  email: Faker::Internet.safe_email("anime"),
  username: 'Anime4Lyfe',
  password: Faker::Internet.password,
  avatar: 'https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/obito.jpg'
)

anime_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/dekuArm.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/dekuFace.png",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/goku.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/gon.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/itachi.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/magicbeast.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/onePunchMan.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/pizzadesopixl.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/purplecity.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/sakura.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/sasuke.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/ssj.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/ssjBlue.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/titan.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/titans.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/tokyo.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/posts/youjousenki.gif"
]

anime_video_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/video_posts/bokuNoHeroFight.mp4",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/anime/video_posts/bokuNoHeroSaveUraraka.mp4"
]

anime_strings = [
  "Which is your favorite gif?", "This gave me goosebumps!", "So Sick!!!",
  "Saitama would still win", "Dope!", "Sick!!"
]

anime_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: anime.id,
    title: "#{anime_strings.sample}",
    body: "#{Faker::OnePiece.quote}",
    content: "photo",
    image: pic
  )
end

anime_video_posts.each do |video|
  custom_posts << Post.new(
    author_id: anime.id,
    title: "Deku#{"!" * rand(9)}",
    content: "video",
    image: video
  )
end

#################################### MFDOOM ####################################
doom = User.create!(
  email: Faker::Internet.safe_email("doom"),
  username: 'MFDoom',
  password: Faker::Internet.password,
  avatar: "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/doomAvi.png"
)

doom_songs = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Black_Star_Re_Definition.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Bruno+Mars+-+24K_Magic.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Bruno+Mars+-+Thats_What_I_Like.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Chance+The+Rapper+-+Cocoa_Butter_Kisses.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Chance+the+Rapper+-+Same_Drugs.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Chance+the+Rapper+-+Sunday_Candy.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Childish+Gambino+-+Break.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Childish+Gambino+-+So+Into+You.mp3",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/mfDoom/song_posts/Kanye+West+-+Through_The_Wire.mp3"
]

adjectives = ["Classic", "Dope", "Dirty", "Chill", "Sleek", "Clean"]

sentences = [
  "Nothing to say but this is a ", "Where were you when this came out?",
  "This is a ", "Sometimes you just need a beer and a "
]

song_synonym = [ "banger", "track", "song" ]


doom_songs.each do |audio|
  custom_posts << Post.new(
    author_id: doom.id,
    title: "#{adjectives.sample} AF",
    body: "#{sentences.sample} #{adjectives.sample} #{song_synonym.sample}",
    content: "audio",
    image: audio
  )
end

#################################### Supreme ###################################

supreme = User.create!(
  email: Faker::Internet.safe_email("HypeBeast"),
  username: 'Hyp3B3ast',
  password: Faker::Internet.password,
  avatar: "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/supremeAvatar.png"
)
supreme_pic_posts = [
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeAsapRocky.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeBen.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeBiggie.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeCamo.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeHawaii.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeKYS.gif",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeMarilynMonroe.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeMoney.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeMoneyGun.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremeNewYork.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/supremePool.jpg",
  "https://s3.amazonaws.com/keepscrolling-pro/seeds/hypebeast/posts/bapeCamo.jpg"
]

supreme_strings = [
  "Trend Monster", "Swagbeast", "Fashion Killa", "#HypeBeast", "Swag", "Hypebeast",
  "Fit"
]

supreme_pic_posts.each do |pic|
  custom_posts << Post.new(
    author_id: supreme.id,
    title: supreme_strings.sample,
    body: "",
    content: "photo",
    image: pic
  )
end


################################ Faker Arrays ##################################

cities = [Faker::Address, Faker::GameOfThrones]

# god, primordial, titan, hero
gods= [Faker::Ancient]

# title, author, publisher, genre
faker_books = []

locations = [
  Faker::Friends, Faker::HarryPotter, Faker::HeyArnold, Faker::Hobbit,
  Faker::HitchhikersGuideToTheGalaxy, Faker::LeagueOfLegends, Faker::LordOfTheRings,
  Faker::Lovecraft, Faker::OnePiece, Faker::Overwatch, Faker::Pokemon, Faker::RickAndMorty,
  Faker::Simpsons, Faker::StarTrek, Faker::Witcher, Faker::Zelda
]

villain = [Faker::StarTrek]

faker_name = [
  Faker::Cat, Faker::Company, Faker::Pokemon, Faker::ProgrammingLanguage,
  Faker::RockBand, Faker::Superhero, Faker::Team, Faker::University
]

faker_catch_phrase = [Faker::DrWho, Faker::HowIMetYourMother]

faker_fact = [Faker::ChuckNorris]

faker_chars = [
  Faker::BackToTheFuture, Faker::DragonBall, Faker::DrWho,
  Faker::FamilyGuy, Faker::Friends, Faker::GameOfThrones, Faker::HarryPotter, Faker::HeyArnold, Faker::Hobbit,
  Faker::HowIMetYourMother, Faker::HitchhikersGuideToTheGalaxy, Faker::LordOfTheRings,
  Faker::OnePiece, Faker::RickAndMorty, Faker::SiliconValley,
  Faker::Simpsons, Faker::TheFreshPrinceOfBelAir
]
quotes = [
  Faker::HarryPotter, Faker::LeagueOfLegends, Faker::Friends, Faker::HitchhikersGuideToTheGalaxy,
  Faker::FamilyGuy, Faker::BackToTheFuture, Faker::HeyArnold, Faker::Hobbit, Faker::HowIMetYourMother,
  Faker::Matz, Faker::MostInterestingManInTheWorld, Faker::Movie, Faker::OnePiece, Faker::Overwatch,
  Faker::RickAndMorty, Faker::Robin, Faker::RuPaul, Faker::Seinfeld, Faker::SiliconValley,
  Faker::Simpsons, Faker::StarWars, Faker::TheFreshPrinceOfBelAir
]

entries = [
  "A Story about #{User.all.sample.username} and their journey to defeat #{faker_chars.sample.character}",
  "Did you know that #{Faker::ChuckNorris.fact}",
  "It was #{faker_chars.sample.character} in the city of #{cities.sample.city} with the power of #{Faker::Ancient.god}",
  "#{faker_chars.sample.character} got a degree in #{Faker::Educator.course} while in #{locations.sample.location}",
  "Would you rather have the ability of #{Faker::Superhero.power} or #{Faker::Superhero.power}?",
  "If I was a superhero I think I would want to be called #{Faker::Superhero.prefix} #{Faker::Superhero.name}"
]

############################## Create Users ####################################

50.times do |x|
  username = faker_chars.sample.character + " #{x}"
  user = User.create!(
    email: Faker::Internet.email(username),
    username: Faker::Internet.user_name(username).capitalize,
    password: Faker::Internet.password,
    avatar: Faker::Avatar.image(username, "64x64", "png", "set#{rand(1..4)}", "bg1")
  )

  posts << Post.new(
    author_id: user.id,
    title: Faker::Book.title,
    body: entries.sample
  )

  posts << Post.new(
    author_id: user.id,
    title: faker_chars.sample.character,
    body: entries.sample
  )

  posts << Post.new(
    author_id: user.id,
    title: "— #{faker_chars.sample.character}",
    content: "quote",
    body: quotes.sample.quote
  )
end

################################# Save Posts ###################################
custom_posts.shuffle.each do |post|
  post.save
end

posts.shuffle.each do |post|
  post.save
end

############################### Create Follows #################################

Follow.create!(follower_id: guest.id, followee_id: anime.id)
Follow.create!(follower_id: guest.id, followee_id: supreme.id)
Follow.create!(follower_id: guest.id, followee_id: naruto.id)

#################################### TODOS #####################################

# pgSearch
# pagination
