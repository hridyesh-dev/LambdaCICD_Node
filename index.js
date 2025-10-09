const handler = async (event) => {
    let id;
    //testing again
    
    if (event.body) {
        try {
        const body = JSON.parse(event.body);
        id = body.id;
        } catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid JSON format" }),
        };
        }
    } else {
        id = event.id;
    }

    if (!id) {
        return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing ID" }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `User ID: ${id}` }),
    };
};

module.exports = { handler };