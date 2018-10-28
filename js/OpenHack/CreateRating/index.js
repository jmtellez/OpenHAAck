// import fetch from "node-fetch";
const fetch = require('node-fetch')
const uuidv1 = require('uuid');
// import uuidv1 from "uuid";
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    if (req.body && req.body.userId && req.body.productId) {
        Promise.all([
            fetch(`https://serverlessohuser.trafficmanager.net/api/GetUser?userId=${req.body.userId}`),
            fetch(`https://serverlessohproduct.trafficmanager.net/api/GetProduct=${req.body.productId}`)
        ]).then(([userId,productId])=>{
            if (Number.isInteger(req.body.rating) && (req.body.rating<=5 || req.body.rating>=1))
                const rating = req.body.rating;
            const id = uuidv1();
            
            const payload = JSON.parse()
        }).catch(err=>{
            
        })

    }
    else {
        context.res = {
            status: 400,
            body: "Please pass the correct payload on the query string or in the request body"
        };
    }
};