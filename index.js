const express = require('express');
const app  = express();
const fetch = require('node-fetch');


app.get('/api', async function(req, res) {

	const data = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await data.json();

	res.json(posts);

});




app.get('/api/:id', async function(req, res) {

	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/` + req.params.id);
	const posts = await data.json();

	res.json(posts);

});


app.get('/api/:limit', async function(req, res) {

	const data = await fetch(`https://jsonplaceholder.typicode.com/posts/` + req.params.limit);
	const posts = await data.json();

	res.json(posts);

});


app.listen(3000, () => console.log(`Listening on port 3000...`));