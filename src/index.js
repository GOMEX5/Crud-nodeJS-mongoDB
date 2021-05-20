const app = require('./app');
const {connect} = require('./db');

async function main() {

    await connect();

    //starting server
    await app.listen(app.get('port'), () => {
        console.log('server on localhost:' + app.get('port'));
    });
}

main();