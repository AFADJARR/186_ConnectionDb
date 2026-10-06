import express from 'express';
import pg from 'pg';
const  app= express();
const port = 3000;
const { Pool } = pg;

app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Mahasiswa',
    password: 'Afdjr6768',
    port: 5432,
}); 

app.get('/', async (req, res, next) => {
    console.log ('TEST DATA : ');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
