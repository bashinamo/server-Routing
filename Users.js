let users = [
    { id: 1, name: 'Josef Dal' },
    { id: 2, name: 'Mikke Norm' }
];

// alla användare som finns
app.get('/users', (req, res) => {
    res.json(users);
});

// få en enskild användare med id
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// skapa nya användare 
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Uppdatera en befintlig användare
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// radera användare 
app.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});
