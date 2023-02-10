Write code to:-
>mongod
>mongosh

create a database named sports.
>use sports

list all databases present in local mongod server.
>show dbs
>db

create 3 collections named cricket, football, TT in sports databse.
>db.createCollection('cricket')
>db.createCollection('football')
>db.createCollection('TT')
>show collections


add multiple players in those collections which should have fields like name, age and email and bid_price.
>var players=[
    {
        name:'player1',
        email:'p1@gmail.com',
        age:12,
        bid_price:'$20k'
    }
    {
        name:'player2',
        email:'p2@gmail.com',
        age:16,
        bid_price:'$40k'
    }
    {
        name:'player3',
        email:'p3@gmail.com',
        age:20,
        bid_price:'$40k'
    },
    {
        name:'player4',
        email:'p4@gmail.com',
        age:15,
        bid_price:'$30k'
    }
]
>db.cricket.insertMany(Players)
>db.football.insertMany(Players)
>db.TT.insertMany(Players)
>db.cricket.find().pretty()

list all collections in sports database.
>show collections

rename TT collection to tennis.
>db.TT.renameCollection('tennis')

create a capped collection called khokho which should have max 3 documents. Try inserting more than 3 and see what happens?
>db.createCollection('khokho',{capped:true,size:2048,max:3})
>var players=[{name:'player1',email:'p1@gamil.com',age:12,bid_price:'$20k'},{name:'player2',email:'p2@gmail.com',age:14,bid_price:'$30k'},{name:'player3',email:'p3@gmail.com',age:23,bed_price:'$40k'},{name:'player4',email:'p4@gmail.com',age:20,bed_price:'$30k'}]

> db.khokho.insertMany(players)
>db.khokho.find().pretty()   {only three player show because limit is 3}
> db.khokho.count()

check whether a collection is capped or not?
>db.khokho.isCapped()

drop all documents from football collection.
> db.football.remove({})

delete cricket collection completely.
>db.cricket.drop()

delete sports database.
>db.dropDatabase()

check which database you are connected to ?
>db
>show collections

connect to test database
>use test