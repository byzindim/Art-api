
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let art = [
    {
        id: 1,
        name: 'Echakov Denis',
    },
    {
        id: 2,
        name: 'Echakov Danil',
    },
    {
        id: 3,
        name: 'Налиткина',
    },
]
app.get('/art', function (req, res) {
    res.send(art);
})
app.get('/art/:id', function (req, res) {
    let artbest = art.find(function (artbest) {
        return artbest.id === Number(req.params.id)
    });
    res.send(artbest);
})
app.get('/', function (req, res) {
    res.send('Hello started')
});

app.post('/art', function (req, res) {
    let artbest = {
        id: Date.now(),
        name: req.body.name
    };
    art.push(artbest)
    res.send(artbest);
});
app.delete('/art/:id', function (req, res) {
    art = art.filter(function (artbest) {
        return artbest.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});
app.put('/art/:id', function (req, res) {
    let artbest = art.find(function (artbest) {
        return artbest.id === Number(req.params.id)
    });
    artbest.name = req.body.name;
    res.send(artbest);
})
app.listen(3012, function () {
    console.log('API started');
})