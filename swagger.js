const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "My Student API",
        description: "An API that shows students data.",
    },
    host: "https://node-routes-lq5r.onrender.com/",
    schemes: ["https"],

};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

swaggerAutogen(outputfile, endpointFiles, doc);

swaggerAutogen(outputfile, endpointFiles, doc).then(async () => {
    await import("./server.js");
});