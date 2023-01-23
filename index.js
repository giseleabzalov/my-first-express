import express from 'express';

const app = express();
app.use(express.json());

let instructors = ['Jiho', 'Todd'];

app.post('/instructors', (req, res) => {
    // take an array of new instructors and merge with existing
    const newInstructors = req.body.instructors
    instructors = [...instructors, ...newInstructors] // merging two arrays with spread operator ...spreading array
    res.send(instructors)
});

// now we just need to list some valid requests
app.get('/test', (request, response) => {
    console.log('Test Request Made');
    response.send('Our API fricken works! 😀')
});

app.get('/instructors', (request, response) => {
    response.json(instructors)
});

app.get('/secure', (request, response) => {
    // No users are allowed here
    response.status(401).send('Not authorized.')
});

app.post('/students', (req, res) => {
    // we need to handle the post request (body)
    const newStudent = req.body
    console.log(newStudent) // just to see how looks like
    res.send(newStudent)
});

app.listen(3030, () => { 
    console.log('listening on https://localhost:3030...')
})