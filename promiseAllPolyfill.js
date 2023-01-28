function one(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(time);
    }, time);
  });
}

const taskArray = [one(1000), one(2000), one(3000)];

const promisePolyfill = (taskArray) => {
  return new Promise((resolve, reject) => {
    const output = [];
    taskArray.forEach((promise, index) => {
      promise
        .then((data) => {
          output[index] = data;
          if (index == taskArray.length - 1) {
            resolve(output);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

promisePolyfill(taskArray)
  .then((resp) => {
    console.log("output is : ", resp);
  })
  .catch((err) => {
    console.log("error is ", err);
  });
