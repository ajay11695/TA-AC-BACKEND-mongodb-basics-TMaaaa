use mountains

db.createCollection('himalayas')

db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'})

var many=[
    {name: 'Dhauldhar range', height: '4000 mtrs'},
    {name: 'k2 range', height: '4400 mtrs'},
    {name: 'everest range', height: '8848 mtrs'},
    {name: 'kanchanjanga range', height: '5000 mtrs'}
]
db.himalayas.insertMany(many)

db.himalayas.find().pretty()

db.himalayas.findOne({name:'k2 range'})