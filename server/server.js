const express = require('express');
const app = express();
var router = express.Router();
router.get('/', (req, res, next) => {
  res.send('API WORKING PROPERLY');
});
app.listen(3000, () => {
  console.log('Server started at port http://localhost:3000');
});
module.exports = router;
