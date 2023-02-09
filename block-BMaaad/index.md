Write command to

(db)
List collections from a database.
>(show dbs)

create a new collection in your country database which you created recently.
>(db.collection('india'))
>(show collections)

Write code to:-

crate a database named weather
>(use weather)

create a capped collection named temperature with maximum of 3 documents and try inserting more than 3 to see the result.
>(db.createCollection>('temperature',{capped:true,size:1024,max:3}))
>(db.temperature.insertMany([{delhi:23},{rath:43},{kanpur:54}]))
>db.temperature.find()

create a simple collection named humidity
>db.createCollection('humidity')
>show collection

check whether temperature collection is capped or 
not ?
>db.temperature.iscapped()
>db.humidity.iscapped()

Delete humidity collection and then the entire database(weather).
>db.humidity.drop()
>db.dropDatabase()