import express from 'express';
import fs from 'fs';



const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send('Hello world from the server!')
    console.log(req.method);
    console.log(req.headers);
    console.log(req.url);
})

app.get("/products", (req,res) => {
    res.send('Hello World from the products endpoint!')
})

app.get('/number', (req,res)=> {
    res.send('555')
})

// -------------------------------------------------------
app.get('/reviews', (req, res) => {
    try{
        const reviews = fs.readFileSync('reviews.txt', 'utf-8');
        res.send(reviews);
    }
    catch(err){
        console.log(err.message)
        res.send('No reviews yet')
    }
    
})

app.post('/reviews', (req,res)=> {
    const movie = req.body.movie;
    const rating = req.body.rating;

    let oldContent = '';

    try {
        oldContent = fs.readFileSync('reviews.txt', 'utf-8');
    }
    catch (err){
        // console.log(err.message)
    }
    const newContent = oldContent + `Movie: ${movie}, Rating: ${rating}\n`;
    fs.writeFileSync('reviews.txt', newContent, 'utf-8')
    res.send('Reviews added');
})

app.listen(4000, ()=> console.log('Server is running on port 4000'))