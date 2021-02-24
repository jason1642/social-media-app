# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all
Avatar.destroy_all
# User.create(username: "skip", email: "skip@email.com", password: "pass123", posts_made: Post.where(user_id: 1))



Avatar.create(source: "https://visualidentity.columbia.edu/sites/default/files/styles/cu_crop/public/content/Colors/pms285e.jpg?itok=5OGYBqMQ", name: "blue")
Avatar.create(source: "https://www.dictionary.com/e/wp-content/uploads/2016/01/paris-green-color-paint-code-swatch-chart-rgb-html-hex.png", name:"green")
Avatar.create(source: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAASFBMVEWAAIB7AHu9fb3EjMTMm8zUq9R4AHjauNrbudu/gb/s2exzAHO5dLm6eLr+/P738/fw5PDmz+biyOLXstfHkcfOoM7FjsXNns3XZWcaAAABgElEQVR4nO3dy0orURBA0c6rExO9vqL+/5+q4EC5A0UQXaf3+oLa1LSgpn/XN8fbu7vD/nC/e7F9c958sP62i82nztsveNh9xf4/x+n+NL+3+rPmbzldTrt5GtlqvYDCh+ELt6vfHuJHVeir0Fehr0Jfhb5FFJ6HL9xUaKvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0LaJwXaGtQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb5FFF4MXzj+xVCFuAp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6FlH4OHzh+H9mKsRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0LaLwafjC3fzbQ/yoCn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQl+Fvgp9FfpeCvfDFx6GLxx/hxXiKvRV6KvQV6GvQl+FvtfC02pk89V0vFyP7OrwDHCREUKpwRRWAAAAAElFTkSuQmCC", name: "purple")
Avatar.create(source: "https://professionals.tarkett.com/media/img/M/TH_3917013_3707013_3708013_3912013_3914013_800_800.jpg", name: "Yellow")
Avatar.create(source: "https://www.mandlpaints.com/wp-content/uploads/2018/09/Lead-Gray-600x600.jpg", name: "grey")
Avatar.create(source: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUVFRUXFxUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKystLTctLS0tLS0rLSstNystNzcrKy0rLTctLS0tNy0tLSsrLS0rLTctLS03Ky0rK//AABEIAOEA4QMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EAB0QAQEBAAICAwAAAAAAAAAAAAABERKRQYECIWH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APH9TU0AKgC6WgBoaAaaixQNNQF1UgCiQoKalNBpEiyAsIRaByLUi0F5DKwFlXUNBdGMUGBF1ATTQFEgARUAVFUQoALAABQGYqaCqALIQAUqALCCQFVIUAQBlCiCLhAAWoC6gAGmgAi6oKACoAUhABYQAxSFAqooAagLFxmKBgAOYEQRcKoCAABgBQANCqKUAUgQEABYGICrGcWAqs61ASKmAKrMUBTiA54iiCAACoBCKkAAwBagooiwAEgKCghVSgspAgKuJhoNIrINCSiDWjOqDnUgUCrKyQFIIC0KQALABUwBQFCioCKYAIoAoAsEi2gqasSgKiwGuhkBjUoIBQ0DEXQEioQCVYiwC1UMUU0IgUIVRKACriLQRYEgLiCgFNAI1GZGqACg4lKiABABUAAAAAiwFF1ABSgAgUCLEaA1Yw1KCrqQ0AIoItolBelTiIOS0KAilAQMBUAACUCrqEUWFE0GiIAqEKCiLAFokBqVNRZQWKkAKUkIBoaA5mlMQAhgAAAJAWIChFgYChqAoAKhQBcTVBFABWVBopAAiRoEDBBzoqAioUBQBBaQECkUUNANVFARYgLBIqAqVVA1AFCkAq0AIqQtBrf0TAGEBBKLUAAAWRCAWkKmKNCFBYABQQBqMrKCrKzVoBAAqxJFAUKAGgLoaA5FBBRIUAAAKKJGmVBbEVICgAWmhgGGJFoKJAFgAKCAsLAgKqANehPsByMDUClADRFBAVRFTSgsEIDQIAomAoigYolAWJKSgoigosAFhADAUHFIoBEUQKeFAZICgUAVFAFoAJABasQAWADNPiANNQEFiTyCjTQAAA//2Q==", name: "black")
Avatar.create(source: "https://lh3.googleusercontent.com/proxy/Mqif72B2QjKyDc00FoTURDESMI-xTTMgxkKe35F3WdlWX4cyWzkpFCuQz8kDBpozn86giDmw6N0TFPV42AqJeklBqvyIUZHwJ6hb3TGV", name: "red")


p "#{Avatar.count} avatars created"





User.create(username: "Karethel", email: "karethel@email.com", password: "pass123")
User.create(username: "Flip82", email: "flip@email.com", password: "password222")
User.create(username: "BryonSH321", email: "bryon@email.com", password: "password333")
User.create(username: "Lorinda", email: "lorinda@email.com", password: "password444")
User.create(username: "Alianda191", email: "jason@email.com", password: "password444")
User.create(username: "Brand", email: "brand@email.com", password: "password444")
User.create(username: "Exit", email: "exit@email.com", password: "password444")




    

p "#{User.count} user(s) created"


Post.create(title: "What life changing item can you buy for less than $100?",
 description: "",
   user_id: 7) 

# Post 1 Comments
Comment.create(comment_text: "Another monitor. Your productivity will increase dramatically.",
user_id: 1,
 post_id: 1)
Comment.create(comment_text: "A nasal irrigation kit - either the electronic pump or simply the squeeze bottles. I started using them both leading up to surgery on my sinuses, and I haven't stopped using them since. It takes some getting used to, but the relief and clean feeling is amazing.",
user_id: 2,
 post_id: 1)
Comment.create(comment_text: "AeroPress coffee maker. The thing broke my wife of her $200(?) monthly Starbucks habit. The unit costs maybe $25 or so.",
user_id: 3,
 post_id: 1)
Comment.create(comment_text: "House plants. They will make you happy looking after them. I recently bought a venus fly trap, she caught her first fly today. So proud.",
user_id: 4,
 post_id: 1)


# Post 2
Post.create(title: "What is something free from the internet everyone should take advantage of?",
 description: "",
   user_id: 3) 

Comment.create(comment_text: "Libby is an app you can use to borrow audiobooks and ebooks for free as long as you have a library card (also free).",
 user_id: 5,
  post_id: 2)
Comment.create(comment_text: "Stackoverflow because I wouldn’t be a developer without it",
user_id: 6,
 post_id: 2)
Comment.create(comment_text: "If you’re a student or are really trying to stay focused at work there’s and app called The Forest: Stay Focused (I could be wrong but it’s definitely The Forest). It’s a free app that’s available as an extension on Google Chrome or the Apple AppStore. Basically, you plant a tree, set a time limit and you can only go on the sites that you’ve added to the whitelist or your tree will die. It’s designed to stop you from always being in social media while you’re supposed to be studying or doing something productive.",
user_id: 7,
 post_id: 2)


# Post 3
Post.create(title: "What do you use to remind yourself that everything isn't that bad?",
 description: "",
   user_id: 6) 
Comment.create(comment_text: "I remember that Yahoo hasn't given up, so why should I?",
 user_id: 5,
  post_id: 3)
Comment.create(comment_text: "I text a friend and see if they want to have dinner. We plan something and cook it with a good drink, then another, repeat as necessary. Life feels pretty good after a few drinks and dinner with friends. Also I get to try out a lot of new recipes.",
 user_id: 2,
  post_id: 3)
Comment.create(comment_text: "I think of the soldiers in the trenches in WWI. It puts things in perspective on when I'm getting up early for a stressful day in the office.",
 user_id: 3,
  post_id: 3)

# Post 4
Post.create(title: "What is the fastest you have ever seen a new co-worker get fired?",
 description: "",
   user_id: 4) 
Comment.create(comment_text: "During their onboarding training, they stole my bosses wallet on camera.... 1 hour in..",
   user_id: 1,
    post_id: 4)
Comment.create(comment_text: "This is the opposite route here but I found it amusing. My boss was out of town and I managed a tea shop near a Starbucks years ago. This kid came in (foreign) and said he was supposed to start today. We were hiring and I trained him etc. My boss came back two days later and had no idea. The kid was in the wrong place but he stayed with us. Hired on the spot without even applying.",
   user_id: 3,
    post_id: 4)
Comment.create(comment_text: "I work construction. We had 2 new hires that were friends starting the same day. Boss told one take a coffee order and come back. Took everyone's money and said he needed his friend to go with him cause it was a big order. They never came back.",
   user_id: 2,
    post_id: 4)









p "#{Post.count} posts created"

p "#{Comment.count} comments created"


