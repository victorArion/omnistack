const axios = require('axios');
const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {

    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {

 
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){
                
            const apiResponse = await axios.get('https://api.github.com/users/'+github_username)
        
            const {name = login, avatar_url, bio} = apiResponse.data;
        
            const techArray = ParseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates:[longitude,latitude],
            }
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techArray,
                location,
            })
        }
        
    
        return response.json(dev);
    },
/*
    async destroy(request, response){
        console.log("asadas")

        //const { github_username } = request.params;

        console.log(request.params.id)
        let dev = await Dev.findByIdAndRemove(request.params.id);
        
        // if(dev){
        //     const deleteUser = await axios.send(github_username);

        //     return response.json(deleteUser);
        // }

        return response.json({message});
    }*/
/*
    async update(request, response){
        const { techs, name, bio, github_username } = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){
            

            return response.json(deleteUser);
        }
    }*/
}