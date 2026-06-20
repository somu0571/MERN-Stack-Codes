function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "apna college",
    () => {
        console.log("your data was saved: ");
        savetoDb(
            "hello world",
            () => {
                console.log("success2 : data2 saved");
                savetoDb("somu", () => {
                    console.log("success3: data3 saved");
                })
            },
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("weak connection. data not saved");
    }
);

// Uses Promise method

function savetoDb(data) {
    return new Promise((success, failure) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            success("success : data was saved");
        } else {
            failure("failure : weak connection");
        }
    });
}

savetoDb("Databases");

// Then() & Catch() Methods in Promise  &  Promise Chaining
savetoDb("Databases")
  .then((result) => {  // result is used find output of resolved or error
    console.log("data1 saved. promise was resolved.");
    console.log(result);
    return savetoDb("helloworld"); 
  })
  .then((result) => {
    console.log("data2 saved. promise was resolved.");
    console.log(result);
    return savetoDb("Max Verstappen");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log(result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log(error);
  });


