const express=require('express');
const morgan = require('morgan');
const cors=require('cors');
const { default: mongoose } = require('mongoose');


const userRouter=require('./user-routes');

const URI=`mongodb+srv://nithishgsn000:kgUskVeHHstmTrSW@portfolio.81e7ult.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio`


mongoose.connect(URI);
mongoose.connection.on('connected',()=>{
    console.log('MongoDB is Connected');
});

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/user', userRouter);

module.exports = app;

