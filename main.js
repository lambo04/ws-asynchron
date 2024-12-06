async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      console.log(value);
    }
  }
  
//   iterateWithAsyncAwait([1, 2, 3, 4]);
  
  async function awaitCall() {
    try {
      let response = await new Promise(resolve => setTimeout(() => resolve("API Response Data"), 2000));
      console.log(response);  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
//   awaitCall();
  
  async function awaitCall() {
    try {
      let response = await new Promise((resolve, reject) => setTimeout(() => reject("API call failed"), 2000));
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);  
    }
  }
  
//  awaitCall();
  
  async function firstFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("First function complete");
  }
  
  async function secondFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Second function complete");
  }
  
  async function thirdFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Third function complete");
  }
  
  async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
  }
  
//   chainedAsyncFunctions();

  async function concurrentRequests() {
    try {
      let request1 = new Promise(resolve => setTimeout(() => resolve("API Response 1"), 2000));
      let request2 = new Promise(resolve => setTimeout(() => resolve("API Response 2"), 3000));
  
      let results = await Promise.all([request1, request2]);
      console.log(results);  
    } catch (error) {
      console.error("Error with concurrent requests:", error);
    }
  }
  
//   concurrentRequests();
  
  async function parallelCalls(urls) {
    try {
      let requests = urls.map(url => fetch(url).then(response => response.json()));
      let responses = await Promise.all(requests);
      console.log(responses);  // Logs the responses from all URLs
    } catch (error) {
      console.error("Error with parallel calls:", error);
    }
  }
  
  const urls = ["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/users"];
  parallelCalls(urls);
  