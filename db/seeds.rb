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


