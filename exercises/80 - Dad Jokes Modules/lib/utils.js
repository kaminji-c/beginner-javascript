// function changes joke button text content
// function uses the arr to pass in arr we want because we want this to be a utility function and not specific to a certain array, allows us to use it for whatever array we want!!!
// named export
export function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  // where we pass in not, sometimes when we generate random it populates the same result
  // when a function calls itself, RECURSION...if the thing is the same the same time, then run it again
  if (item === not) {
    console.log('Ahh we used that one last tie, look again');
    console.log(not);
    // in console run 'randomItemFromArray(buttonText, "stop it.")' to see the console log, utilize not
    return randomItemFromArray(arr, not);
  }
  return item;
}

// randomItemFromArray(buttonText) run in console.log SOOOO COOOL !!!
