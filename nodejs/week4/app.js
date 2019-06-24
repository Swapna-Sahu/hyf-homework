/************* Development file      ************* */
/****       1.Express library        
 *          2.Router 
 *          3.HTTP
       */
const http = require('http');
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 8001;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())    // parse application/json


/***************************    main work area    ************************* */


app.get('/', (req, res) => res.send('Welcome to HYF Course App - using expressJS!'));


const routers = [
    require("./routes/mentors"),
    require("./routes/courses")
  ]
  
  for (const router of routers) {
    app.use('/api', router);
  }
  
  // initialise Port
  const port = process.env.PORT || 3000;
  
  app.get('/', (req, res) => res.send('Welcome to HYF Course App - using expressJS!'));
  app.get('/api', (req, res) => res.send('HYF Course App - API'));
  


/***************************    main work area    ************************* */


app.listen(port, () => console.log(`HYF course app listening on port ${port}!`))
