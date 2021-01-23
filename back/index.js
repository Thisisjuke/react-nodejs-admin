import express from 'express';
import bodyParser from 'body-parser';
import registerRoutes from './routes'

const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api', (req, res) => {
    res.json({ status: 'up' });
})

registerRoutes(app);

app.listen(process.env.SERVER_PORT, err => {
    if (err) console.error(err);
    else console.log(`APP Listen to port : ${process.env.SERVER_PORT}`);
});