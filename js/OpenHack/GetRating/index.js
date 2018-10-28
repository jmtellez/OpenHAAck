module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.query.id || (req.body && req.body.id)) {
        if(context.bindings.ratingRecord){
            context.res = {
                body: JSON.stringify(context.bindings.ratingRecord)
            };
        }
        else{
            context.res = {
                status: 404,
                 body: 'No ratings found with given parameters :('
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a rating id on the query string or in the request body"
        };
    }
};