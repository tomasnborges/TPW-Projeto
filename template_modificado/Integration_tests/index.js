const api_calls = require('./API-Calls/api-calls')

api_calls.getExample(1).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})