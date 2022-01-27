const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    //if theres no id in the path parameters 
    if(!event.pathParameters || !event.pathParameters.ID){
        //Failed without an ID
        return Responses._400({message:'Missing the ID from the path'})
    }

    let ID = event.pathParameters.ID;

    const user = JSON.parse(event.body);
    user.ID = ID;

    //create new user
    const newUser = await Dynamo.write(user, tableName).catch(err => {
        console.log('error in dynamo write', err);
        return null;
    });

    if (!newUser) {
        return Responses._400({message: 'Failed to get user by ID'})
    }

    return Responses._200({newUser})
}