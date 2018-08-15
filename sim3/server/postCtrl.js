const getPosts = (req, res) => {
    const db = req.app.get('db');
  
    db.get_posts()
    .then(response => {
      console.log('posts: ', response)
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }

  module.exports = {
      getPosts
  }