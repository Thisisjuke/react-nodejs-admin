import express from 'express';
import bodyParser from 'body-parser';
import registerRoutes from './routes'

const app = express();
app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({ status: 'up' });
})

registerRoutes(app);

app.listen(process.env.SERVER_PORT, err => {
    if (err) console.error(err);
    else console.log(`APP Listen to port : ${process.env.SERVER_PORT}`);
});