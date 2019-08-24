info = require("./testModel"); //import test model

exports.index = function(req, res){ //handle all index actions
    info.get(function(err, contacts){
        if(err){
            res.json({
                status: "error",
                message: err
            }) 
         }
     
         res.json({
             status: "ok",
             message: "Contacts retrieved",
             data: contacts
         });
    });
    
};



//create contact saving action
exports.new = function(req, res){
    var contact = new info();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    //save the contact and run error check
    contact.save(function(err){
        res.json({
            message : contact + " Saved",
            data: contact
        });
    });
};


//contact viewing action
exports.view = function(req, res){
    //console.log(req.params);
    info.findById(req.params.info_id, function(err,contact){
        if(err) res.send(err);
        res.json({
            message: "Contact details reading",
            data: contact
        });
    });
};


// update function to handle contact info
exports.update = function(req, res){
    info.findById(req.params.info_id, function(err, contact){
        if(err) res.send(err);

        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;

        //save the updated details
        contact.save(function(err){
            if(err) res.json(err);
            res.json({
                message: "Contact detail updated successfully",
                data: contact 
            });
        });
        
    });
};


//function to handle delete
exports.delete = function(req, res){
    info.remove({_id: req.params.info_id}, function(err, contact){
        if(err) res.json(err);
            res.json({
                message: "Contact deleted",
                status: "OK" 
            });
    });
};
