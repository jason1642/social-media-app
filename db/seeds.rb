# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Post.destroy_all
Comment.destroy_all
User.destroy_all

User.create(username: "user1", email: "user1@email.com", password: "pass123")
User.create(username: "userTwo", email: "usertwo@email.com", password: "password222")
User.create(username: "bryon", email: "bryon@email.com", password: "password333")
User.create(username: "flip", email: "flip@email.com", password: "password444")






p "#{User.count} user(s) created"

Post.create(title: "Beach", description: "Palm trees, sand, and the ocean", image_url: "https://wallpaperaccess.com/full/1275976.jpg", user_id: 4) 

Post.create(title: "Cave", description: "A cave in the forest", image_url: "https://i.pinimg.com/originals/72/a5/47/72a547cca0f6c30e4d0e521fb4116d2e.jpg", user_id: 2)



Post.create(title: "Pharoh Tomb", description: "", image_url: "https://preview.redd.it/2kbhga2phbz41.jpg?width=960&crop=smart&auto=webp&s=82728f642d30b29fa005b196140da22bdaa86b05", user_id: 2)



p "#{Post.count} posts created"


Comment.create(comment_text: "this is so cool!", user_id: 1, post_id: 1)
Comment.create(comment_text: "8765432", user_id: 1, post_id: 1)
Comment.create(comment_text: "tkjhgfds", user_id: 2, post_id: 1)
Comment.create(comment_text: "This is why we never win!!!", user_id: 3, post_id: 3)



p "#{Comment.count} comments created"


