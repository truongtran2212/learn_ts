function getPromise() {
    return new Promise((resolve) => {
    //   setTimeout(() => {
        console.log("Promise Executed...");
        resolve("Sample Data");
    //   }, 1000);
    });
  }
  
  // declaring async function
  async function data() {
    try {
      var array = ["data1", "data2"];
        var promise = await getPromise();
        console.log(array);
        console.log(promise);
    } catch (err) {
        console.error(err);
    }
  }
  
  data();