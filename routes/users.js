var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  if (req.params.id == '123'){
    res.json({
      "id": 123,
      "name": "Jane Doe",
      "phones": {
        "home": "800-123-4567",
        "mobile": "877-123-1234"
      },
      "email": [
        "jd@example.com",
        "jd@example.org"
      ],
      "dateOfBirth": "1980-01-02T00:00:00.000Z",
      "registered": true
    });
  }else 
    res.status(404).send('Sorry, item not found!');
});

router.post('/', function(req, res, next) {
  var new_user = req.body;
  //ToDo with new user
  //res.status(200).send('User '+ req.body.name + ' has been successfully added');
  res.sendStatus(200);
});

/* PUT user by Id */
router.put('/:id', function(req, res, next) {
  var updated_user = req.body;
  //ToDo user id
  res.status(200).send('User '+ req.body.name + 'has been successfully updated');
});

/* DELETE user by Id */
router.delete('/:id', function(req, res, next) {
  //ToDo user id
  res.status(200).send('User with id'+ req.params.id + 'has been successfully removed');
});

module.exports = router;
