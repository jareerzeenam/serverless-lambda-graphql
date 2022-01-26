const Responses = require('./API_Responses')

exports.handler = async event => {
    console.log('event', event);

    if(!event.pathParameters || !event.pathParameters.ID){
        //Failed without an ID
        return Responses._400({message:'Missing the ID from the path'})
    }

    let ID = event.pathParameters.ID;

    if (data[ID]) {
        //return the data
        return Responses._200(data[ID])

    }

    //failed  as ID was not in the data object
    return Responses._400({message:'No ID in Data'})
}

const data = {
    1234:{name:'Jareer', age:24, job: 'Software Engineer'},
    4567:{name:'Far', age:23, job: 'Data Scientist'},
    4563:{name:'Muhammed', age:64, job: 'Business Men'}
}