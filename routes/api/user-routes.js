// GIVE THE USERS SOME REST!

//We're going to create five routes that will work with the User model to perform CRUD operations.

// The express. Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests
const router = require('express').Router();
const { User } = require('../../models');

//GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
    //findAll() = SELECT * FROM users;
  User.findAll()
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Get /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
      //SELECT * FROM users WHERE id = '1'
        where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//POST /api/users
router.post('/', (req, res) => {
//   INSERT INTO users
//   (username, email, password)
//   VALUES
//   ("Lernantino", "lernantino@gmail.com", "password1234");
    //expects  {username: 'Lernantino', email: 'lernantino@gmail.com, password: 'password1234'}
    User.create({
    username: 'Lernantino', 
    email: 'lernantino@gmail.com', 
    password: 'password1234', 
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })});


//POST users /api/users/1
router.post('/:id', (req, res) => {});

//PUT /api/users
router.put('/', (req, res) => {});

// PUT /api/users/1
router.put('/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}
  
    // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData[0]) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
//DELETE /api/users/1
router.delete('/:id', (req, res) => {});

mosule.exports = router;

// the user object would get whatever is being exported from the module in user.js. So in user.js, the module.exports=router is mapping a router and all logic that's required to map /user (along with the right callbacks etc...)

// If you remove it, your require statement can't acquire an exported object from that module, which is why it would fail. Your user object will be nullified effectively.