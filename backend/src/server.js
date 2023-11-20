const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

// Routes
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}/`);
});