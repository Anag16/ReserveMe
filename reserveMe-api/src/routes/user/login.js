const router = require("express").Router();

module.exports = () => {
  router.post("/", (req, res) => {
    if(req.body.username == 'test2'){
      res.send({
        token: 'test123'
      });
    }
  });
  
  return router;
};
