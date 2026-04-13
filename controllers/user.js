const User = require("../models/user.js");

module.exports.renderSignup = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body
        let newUser = new User({ username, email });
        let registerUser = await User.register(newUser, password);
        req.login(registerUser,(err)=>{
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLogin = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login =  async (req, res) => {
    req.flash("success","Welcome back to Wanderlust!");
    const redirectUrl = res.locals.redirectUrl || "/listings"; 
    // we have done this because isloggedin function willnot trigger while we are at home page.
    res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if (err) {
            return next(err);
        }
        req.flash("success","You are successfully LoggedOut");
        res.redirect("/listings");
    })
};