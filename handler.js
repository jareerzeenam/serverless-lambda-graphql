const calculation = require('./index');

'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello Jareer',
        result: calculation.add(5,6)
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.imageResize = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Resized your Image!',
      },
      null,
      2
    ),
  };
};

module.exports.sendEmail = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Email Sent!',
      },
      null,
      2
    ),
  };
};
