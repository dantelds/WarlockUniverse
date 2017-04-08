var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/warlockUniverse', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/warlock')(app, mongoose);
var WarlockCtrl = require('./controllers/warlocks');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var api = express.Router();

api.route('/warlock')
   .get(WarlockCtrl.findAllWarlocks)
   .post(WarlockCtrl.addWarlock);

api.route('/warlock/:id')
  .get(WarlockCtrl.findWarlock)
  .put(WarlockCtrl.updateWarlock)
  .delete(WarlockCtrl.deleteWarlock);

app.use('/api', api);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
