const addUser = (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body

    db.add_user([username, password])
    .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
}

const getUser = (req, res) => {
    const db = req.app.get('db');
    const {username, password} = req.body

    db.get_user_by_username([username, password])
    .then(response => {
        res.status(200).send(response);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
}

module.exports = {
    addUser,
    getUser
}