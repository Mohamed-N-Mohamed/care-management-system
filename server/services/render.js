exports.homeRoute = (req,res) => {
  res.render("index");
}

exports.addClient = (req,res) => {
  res.render("add-client");
}

exports.updateClient = (req,res) => {
  res.render("update-client");
}