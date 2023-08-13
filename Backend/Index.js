const app = require("./App/App");

const Port = process.env.Port || 3001;

app.listen(Port, () => {
    console.log (`🚀 Server Backend Notes_App in port ${Port}`);
} );