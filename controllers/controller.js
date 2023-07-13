const path = require("path");
exports.getContactController = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "Views", "contactus.html"));
};
exports.postContactController = (req, res, next) => {
  res.redirect("/success");
};

exports.getStatusController = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "Views", "pageNotFound.html"));
};
