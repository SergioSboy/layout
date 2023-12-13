const Models = require("../models/articleModel.js");
exports.getArticleAll = async function (req, res) {
    let m = await Models.getAll();
    res.render('home', { data: m });

};