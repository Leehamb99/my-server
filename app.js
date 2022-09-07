const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

let cats = [
    { id: 1, name: 'Zelda', age: 3, adopted: false},
    { id: 2, name: 'Tigerlily', age: 10, adopted: false },
    { id: 3, name: 'Rumble', age: 12, adopted: false },
  ];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/cats", (req, res) => {
    res.json(cats)
    

})

app.get("/cats/:id", (req, res) => {

    try {
        const catId = parseInt(req.params.id)

        const selectedCat = cats.find(cat => cat.id === catId)
        if (!selectedCat) {
            throw new Error('This cat does not exist!')
        }
        res.send(selectedCat)

    } catch(err) {
        res.status(404).send({message: err.message })
    }
})

app.post("/cats", (req, res) => {

    console.log("line 42", req.body)
    const newName = req.body.name
    const newAge = req.body.age
    const newId = cats[cats.length - 1].id + 1
    let newCat = { name :newName, age:newAge, adopted: false}
    newCat = {...newCat , id : newId}
    cats.push(newCat);
    res.send(newCat);
})

app.delete("/cats", (req, res) => {
    while (cats.length) cats.pop()

    res.status(204).end()
})

module.exports = app;



app.get("/cats/:id/adopted", (req, res) => {
    const catId = parseInt(req.params.id) - 1
    cats[catId].adopted = true;
    cats = cats.splice(catId)
    res.send(`Thanks for adopting ${cats[catId].name}`)
    console.log(cats)



})


app.put('/cats/:id', (req, res, next) => {
    console.log(req.body)
    const catId = parseInt(req.params.id) 
    const selectedCat = cats.findIndex(cat => cat.id === catId)
    // if ((!req.body)){
    //     let updatedCat = {id: catId, name: cats[catId - 1].name, age: cats[catId- 1].age, adopted: cats[catId - 1].adopted}
    //     cats[selectedCat] = updatedCat;
    //     res.send(updatedCat)
    // }
    if ((!req.body.name && !req.body.age)){
        let updatedCat = {id: catId, name: cats[catId - 1].name, age: cats[catId- 1].age, ...req.body}
        cats[selectedCat] = updatedCat;
        res.send(updatedCat)

    }else if ((!req.body.name && !req.body.adopted)){
       let updatedCat = {id: catId, name: cats[catId - 1].name, adopted: cats[catId - 1].adopted, ...req.body}
       cats[selectedCat] = updatedCat;
       res.send(updatedCat)

    }else if ((!req.body.age && !req.body.adopted)){
        let updatedCat = {id: catId, age: cats[catId - 1].age, adopted: cats[catId - 1].adopted, ...req.body}
        cats[selectedCat] = updatedCat;
        res.send(updatedCat)

    }else if ((!req.body.adopted)){
        let updatedCat = {id: catId, adopted: cats[catId -1].adopted, ...req.body}
        cats[selectedCat] = updatedCat;
        res.send(updatedCat)

    }else if ((!req.body.age)){
        let updatedCat = {id: catId, age: cats[catId -1].age, ...req.body}
        cats[selectedCat] = updatedCat;
        res.send(updatedCat)

    }else if ((!req.body.name)){
        let updatedCat = {id: catId, name: cats[catId - 1].name, ...req.body}
        cats[selectedCat] = updatedCat;
        res.send(updatedCat)
    }
})
