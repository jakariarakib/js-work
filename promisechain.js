// Define a function that returns a Promise
function performTask(taskName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${taskName} completed`);
    }, delay); // Simulate task delay
  });
}