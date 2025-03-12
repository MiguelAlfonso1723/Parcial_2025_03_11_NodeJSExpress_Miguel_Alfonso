import express from 'express';
import 'dotenv/config'
import path from 'node:path'
import exp from 'node:constants'
import routes from './routes/index.js'

const app = new express();



//const PORT = process.env.PORT || 2000

app.set('PORT', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.urlencoded({extended:false}));



app.use(express.static('public'));

app.use('/', routes);


app.listen(app.get('PORT'), ()=> console.log(`server Ready ${app.get('PORT')}..`));