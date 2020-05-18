# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all
Comment.destroy_all

User.create(username: "jason1642", email: "smallfrmjrhefgy19112@email.com", password: "edp445")
User.create(username: "jason11231231642", email: "smallfry19muynhrbgv112@email.com", password: "edp123123445")
User.create(username: "jasoasczxn1642", email: "smallfry19112@email.com", password: "edp41232rqwas45")
User.create(username: "jason16umjthnbgvr42", email: "smallfrytbvrce19112@email.com", password: "edp4,mjynrhbgef45")






p "#{User.count} user(s) created"

Post.create(title: "The Promised Neverland Review", description: "
The first episode clearly defines the characters for you, and gives you a glimpse into their world. A world which is relatively peaceful and happy, but something seems a little off. Near the end of the first episode, you learn the horrible truth about their world, at the same time as the characters. That they are cattle waiting to be slaughtered, and death is coming for them. This will be a dark tale of survival. The drawing is a little unique, but is well done. The animation quality is good as well. It's very well written and worth watching.", image_url: "https://eric-koenig.com/wp-content/uploads/2019/01/e102393ffa754c90b919e01c3a194091.jpg", user_id: 4) 

Post.create(title: "The eagles draft Jalen Hurts....", description: "WTF are the eagles doing!!!!!!????????!!!!!!!!", image_url: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.15752-9/95392787_255676968966630_7495242548890304512_n.jpg?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=I15wsCmU278AX_zB3WX&_nc_ht=scontent-ort2-2.xx&oh=e1b4dc0f10a659fe2690096a7ff158d5&oe=5EE6FD0A", user_id: 1)



Post.create(title: "The Tomb of Ramesses VI, The Valley of Kings, Egypt", description: "", image_url: "https://preview.redd.it/2kbhga2phbz41.jpg?width=960&crop=smart&auto=webp&s=82728f642d30b29fa005b196140da22bdaa86b05", user_id: 1)



p "#{Post.count} posts created"


Comment.create(comment_text: "this is so cool!", user_id: 1, post_id: 1)
Comment.create(comment_text: "8765432", user_id: 1, post_id: 1)
Comment.create(comment_text: "tkjhgfds", user_id: 2, post_id: 1)
Comment.create(comment_text: "This is why we never win!!!", user_id: 3, post_id: 3)



p "#{Comment.count} comments created"


