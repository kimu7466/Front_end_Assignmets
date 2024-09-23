// Write a program of promises and handle that promises also

// Function that returns a promise
function fetchDataFromServer(success) {
    return new Promise((resolve, reject) => {
      console.log("Fetching data...");
  
      // Simulate a delay (e.g., API call)
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!");
        } else {
          reject("Failed to fetch data from the server.");
        }
      }, 2000); // 2 seconds delay
    });
  }
  
  // Handling the promise
  fetchDataFromServer(true) // Pass true to simulate a successful operation
    .then((response) => {
      console.log(response); // Output: Data fetched successfully!
    })
    .catch((error) => {
      console.error(error); // Output if the promise is rejected: Failed to fetch data from the server.
    })
    .finally(() => {
      console.log("Operation complete."); // Output: Operation complete. (executes regardless of success or failure)
    });
  