exports.search = (req, res) => {
  console.log(req.body.budget, req.body.location);
  res.send('HERE ARE SOME PHOTOS!!');
};
