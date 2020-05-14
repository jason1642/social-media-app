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
# User.create(username: "jason16qdqqwwqd42", email: "smallfry19112qwdqwdqwdq@email.com", password: "edp4qwdqw45")
# User.create(username: "jasqwfqwdszvon1642", email: "smallfry19zXV112@email.com", password: "zxVedp445")



comment1 = Comment.create(comment_text: "this is so cool!")

p "#{User.count} user(s) created"



Post.create(title: "My first post", description: "This is a summary of my post belonging to jason1642", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 1)


Post.create(title: "post number one", description: "This is a summary of my post belonging to jason1642", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 2) 


Post.create(title: "post number two", description: "This is a summary of my post belonging to user2", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 3) 


Post.create(title: "post number three", description: "This is a summary of my post belonging to user3", image_url: "https://cdn.mos.cms.futurecdn.net/XFL6HquyTYfQH5L7ztttp3.jpg", user_id: 4) 
p "#{Post.count} posts created"

