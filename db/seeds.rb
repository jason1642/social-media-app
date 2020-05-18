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



Post.create(title: "My first post", description: "This is a summary of my post belonging to jason1642", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 1)


Post.create(title: "post number one", description: "This is a summary of my post belonging to jason1642", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 2) 


Post.create(title: "post number two", description: "This is a summary of my post belonging to user2", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 3) 


Post.create(title: "post number three", description: "This is a summary of my post belonging to user3Core Features
A user can create a post,containing a title, description, and an optional image. That post will be added to the home page global post section, where any other user can see the post aswell. Users can also add comments to a post, but only the person who created the post is able to delete any comment. A post can also be edited or deleted. All of the users posts will be saved on their account, they can view a list of all their posts on the 'my posts' page

Posts using crud
Comment section
Users personal list of post
Goals", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 4) 
p "#{Post.count} posts created"


Comment.create(comment_text: "this is so cool!", user_id: 1, post_id: 1)
Comment.create(comment_text: "8765432", user_id: 1, post_id: 1)
Comment.create(comment_text: "tkjhgfds", user_id: 2, post_id: 1)
Comment.create(comment_text: "t12312weqweq12312qweqweqw!", user_id: 3, post_id: 4)



p "#{Comment.count} comments created"


