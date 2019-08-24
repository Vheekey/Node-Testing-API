// This is a routing file
let router = require('express').Router(); //initialise express router

router.get('/', function(req, res){
    res.json({
        status: "OK",
        message: "API is working"
    });
}); //default api message


//import contact controller
var infoController = require('./testController');

//info routes
router.route('/info').get(infoController.index).post(infoController.new);

router.route('/info/:info_id').get(infoController.view)
                            .patch(infoController.update)
                            .put(infoController.update)
                            .delete(infoController.delete);


//Export API
module.exports = router; //export api routes