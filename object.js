const express = require('express');
const app = express();

app.get('/user', (req, res) => {
    const user = {
      name: req.query.name,
      age: req.query.age,
      sex: req.query.sex
    };
    req.user = user;
    res.send(`User added to request: ${JSON.stringify(user)}`);
  });
  

  app.listen(3000, () => console.log('Server listening on port 3000'));

  import json 
  from flaskimportjsonify

user = {"id": 1, "name": "Theresa" , "sex": "Female"}

user_json = json.dumps(user)

return jsonify(user_json)