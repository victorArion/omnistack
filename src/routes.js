const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SeachController = require('./controllers/SeachController')

const routes = Router();

routes.get('/devs',DevController.index);
routes.post('/devs', DevController.store);  
routes.delete('/devs/:id', 
    function (req, res) {
        let id = parseInt(req.params.id);
        
        delete articles[id];
            
        delayedSend(res, '');
}); 

routes.get('/search',SeachController.index);


module.exports = routes;