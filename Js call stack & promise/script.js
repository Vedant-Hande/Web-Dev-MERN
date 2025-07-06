function saveData() {
  return new Promise((reslove, reject) => {
    let internetSpeed = Math.floor(Math.random() * 15);
    if (internetSpeed > 4) {
      reslove("resolve data ");
    } else {
      reject("reject data");
    }
  });
}

saveData("hello1")
  .then((value) => {
    console.log("data1 saved ..." + value);
    return saveData("hello2");
  })
  .then((value) => {
    console.log("data2 saved ..." + value);
    return saveData("hello3");
  })
  .then((value) => {
    console.log("data3 saved ..." + value);
    return saveData("hello4");
  })
  .then((value) => {
    console.log("data4 saved ..." + value);
    return saveData("hello5");
  })
  .then((value) => {
    console.log("data5 saved ..." + value);
  })
  .catch((err) => {
    console.error("data is unsaved... " + err);
  });

saveData("hello")
  .then((data) => {
    console.log(data);
    return "Processing data...";
  })
  .then((nextStep) => {
    console.log(nextStep);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
