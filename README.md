# 4AIW3_mongodb

## MONGODB

[MongoDB Documentation](https://docs.mongodb.com/)


- Se co `$ mongo -u root -p password`
- Se co via docker `$ docker-compose exec mongo mongo -u root -p password`
- Affiche toutes les bdd `$ show databases`
- Créer une base/utiliser une base `$ use databasename`
- Insérer de la donnée `$ bd.createCollection('firstColl')`
- Faire tout en même temps : `$ db.firstColl.insert({lastname: "Claude", firstname: "Jean"});`
- restore une bdd avec des dump : `$ docker-compose exec mongo mongorestore -u root -p password`

[mongo Shell Quick Reference — MongoDB Manual](https://docs.mongodb.com/manual/reference/mongo-shell/)

#### Collection: Sakila_
###### 1. Rechercher tous les films avec l'acteur ED CHASE
```
db.Sakila_films.find({ 
  "Actors": { 
    $elemMatch: { 
      "First name": "ED", 
      "Last name": "CHASE" 
    } 
  }
}).count();
```
result: 22

###### 2. Rechercher tous les films dont la description comprend "documentary" et de type "horror"
```
db.Sakila_films.find(
  {
    "Description" : /documentary/i,
    "Category": "Horror"
  }
).count();
```
result: 5

###### 3. Donner le nombre de films en rating "G"
```
db.Sakila_films.find(
  {
    "Rating": "G"
  }
).count();
```
ou plus opti
```
db.Sakila_films.count(
  {
    "Rating": "G"
  }
);
```
result: 178

#### Collection: movies_
###### 4.
```
db.getCollection('video_movieDetails').find({
    $and: [{
            $or: [{
                year: 2013
            }, {
                year: 2012
            }]
        },
        {
            $and: [{
                runtime: {
                    $lte: 150
                },
                runtime: {
                    $gte: 60
                }
            }]
        }
    ]
});
```
ou plus simple:
```
db.video_movieDetails.find({ 
  year : {$in : [2012, 2013] }, 
  runtime : { $gte: 60, $lte : 150}
})
```
###### 5. 
```
db.video_movieDetails.find({ 
  "tomato.image":"certified"
})
```
###### 6. 
```
db.video_movieDetails.aggregate([
  { $group : 
    { _id: “$rated”, count: { $sum: 1 } 
  }
}]);
```