const figlet = require('figlet');

figlet('Lionel Messi!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

// npm init is used for creating our own package-json