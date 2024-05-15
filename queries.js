db.movies.aggregate({$sort:{'awars.wins':-1}},{$limit:5})
db.movies.aggregate({$sort:{'awards.wins':-1}},{$limit:5})
db.movies.aggregate(
    { $unwind: "$languages"},
    {
        $group: {
            _id: "$languages",
            numberOfFilms: { $sum: 1 },
        }
    }
);

db.movies.aggregate(
    { $match: { title: "Secret Agent" } },
    { $unwind: "$languages" },
    { $project: { title: 1, language: "$languages"
    } }
);

db.movies.aggregate(
    {
        $match: {
            "type": "movie"
        }
    },
    {
        $group: {
            _id: "$year",
            numberOfFilms: { $sum: 1 },
            avgRating: { $avg: "$imdb.rating" }
        }
    },
    {
        $project: {
            _id: 0,
            year: "$_id",
            numberOfFilms: 1,
            avgRating: 1,
        }
    }
);


db.movies.aggregate({$sort:{year:1}})
db.movies.aggregate({$sort:{year:-1}})

db.movies.aggregate({
$group: {
    _id: "$year",
    numberOfFilms: {$sum: 1},
    avgRating: {$avg: "$imdb.rating"}
}
})


db.movies.aggregate(
    {
        $group: {
            _id: null,
            numberOfFilms: { $sum: 1 }
        }
    }
);




db.movies.aggregate(
    {$match: {languages:'English'}},
    {$project: {title:1,imdbRating: '$imdb.rating'
    }}
)



db.movies.aggregate(
    {$match: {languages:'English'}}
)