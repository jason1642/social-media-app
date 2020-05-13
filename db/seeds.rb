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

User.create(username: "jason1642", email: "smallfry19112@email.com", password: "edp445")
# User.create(username: "jason16qdqqwwqd42", email: "smallfry19112qwdqwdqwdq@email.com", password: "edp4qwdqw45")
# User.create(username: "jasqwfqwdszvon1642", email: "smallfry19zXV112@email.com", password: "zxVedp445")



comment1 = Comment.create(comment_text: "this is so cool!")

p "#{User.count} user(s) created"
Post.create(title: "My first post", description: "This is a summary of my post belonging to jason1642", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 1)


Post.create(title: "post number one", description: "This is a summary of my post belonging to jason1642", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 1) 


Post.create(title: "post number two", description: "This is a summary of my post belonging to user2", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 1) 


Post.create(title: "post number three", description: "This is a summary of my post belonging to user3", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 1) 





# post1
# post2
# post3.posts.push(comment1)
p "#{Post.count} posts created"

# 
# sushi.flavors.push(umami, sweet, salty)
# taco.flavors.push(salty, sweet, umami, sour)
