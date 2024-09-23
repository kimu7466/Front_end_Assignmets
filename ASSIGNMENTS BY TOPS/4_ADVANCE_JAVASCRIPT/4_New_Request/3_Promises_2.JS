// Write a program of promises and handle that promises also

function fetchDataFromServer(success) {
    return new Promise((resolve, reject) => {
      console.log("Fetching data...");
  
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data from the server.");
        }
      }, 2000); 
    });
  }
    
  fetchDataFromServer(true) 
    .then((response) => {
      console.log(response); 
    })
    .catch((error) => {
      console.error(error); 
    })
    .finally(() => {
      console.log("Operation complete."); 
    });
  