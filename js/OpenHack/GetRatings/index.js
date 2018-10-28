module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.userId || (req.body && req.body.userId)) {

        if(context.bindings.ratingRecord)
        {
            context.res = {
                body: JSON.stringify(context.bindings.ratingRecord)
            };
        }
        else
        {
            context.res = {
                status: 404,
                body: 'No ratings found with the specified parameters.'
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a userId on the query string or in the request body"
        };
    }
};