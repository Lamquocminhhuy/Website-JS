import db from '../models/index';




let getHomePage = async (req, res) => {
   
        return res.render('homepage/homepage.ejs')
            
  
}



let getAbout = (req, res) => {
    return res.render('test/about')
}






module.exports = {
    getHomePage: getHomePage,
    getAbout:getAbout,

}