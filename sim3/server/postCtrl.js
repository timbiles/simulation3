const getPosts = (req, res) => {
    const db = req.app.get('db');
  
    db.get_posts()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }

  const addPost = (req, res) => {
    const db = req.app.get('db');
    // const {img, content} = req.body
    const {title, img, content} = req.query
    console.log(req.query)
    // console.log(req.body)
  
    db.add_post([title, img, content])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
  }

  module.exports = {
      getPosts,
      addPost
  }