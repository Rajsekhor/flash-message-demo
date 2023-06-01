module.exports.home = (req, res) => {
    req.flash('success','This is the flash message');
    return res.render('home')
};