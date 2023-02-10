// use blog
db.createCollection('articles')

// articles
db.articles.insertMany(articles)
db.articles.find()
db.articles.findOne({ _id: ObjectId("63e69ec78057912a1308ef96")})
db.articles.findOne({title: 'movie'})
db.articles.findOne({"author.name":"sanjay"})
db.articles.findOne({tags:'red'})
db.articles.update({_id: ObjectId("63e69ec78057912a1308ef97")},{$set:{title:'colour'}})
db.articles.update({ _id: ObjectId("63e69ec78057912a1308ef96")},{$set:{'author.name':'vijay'}})
db.articles.update({  title: 'movie'},{$set:{'author.name':'dom'}})
db.articles.update({},{$rename:{details:"description"}})
db.articles.update({},{$rename:{details:"description"}},{multi:true})
db.articles.update({  title: 'movie'},{$push:{tags:"mp4"}})

db.articles.update({  title: 'movie'},{$set:{'author.age':25}})
db.articles.update({  title: 'movie'},{$inc:{'author.age':5}})

db.articles.remove({ _id: ObjectId("63e69ec78057912a1308ef96")})
db.articles.count()


// Find all males who play cricket.
db.users.find({gender:'Male'},{sports:"cricket"})

// Update user with extra golf field in sports array whose name is "Steve Ortega".
db.users.update({   name: "Steve Ortega"},{$push:{sports:"golf"}})

// Find all users who play either 'football' or 'cricket'.
db.users.find({$or:[{sports:"football"},{sports:"cricket"}]})

// Find all users whose name includes 'ri' in their name.
db.users.find({name:/ri/i})