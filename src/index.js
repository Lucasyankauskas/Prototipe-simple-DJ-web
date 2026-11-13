import 'dotenv/config';
import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';


import indexRouter from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
app.use(express.static(join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
});