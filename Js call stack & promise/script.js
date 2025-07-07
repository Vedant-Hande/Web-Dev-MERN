function saveData(data) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      let internetSpeed = Math.floor(Math.random() * 15);
      if (internetSpeed > 4) {
        reslove("resolve data " + data);
      } else {
        reject("reject data" + data);
      }
    }, 1000);
  });
}

// saveData("hello1")
//   .then((value) => {
//     console.log(value);
//     return saveData("hello2");
//   })
//   .then((value) => {
//     console.log(value);
//     return saveData("hello3");
//   })
//   .then((value) => {
//     console.log(value);
//     return saveData("hello4");
//   })
//   .then((value) => {
//     console.log(value);
//     return saveData("hello5");
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error("Error caught (then): " + err);
//   });

// console.log("--------------------------------------------- :>> ");

async function saveAllData() {
  try {
    const res1 = await saveData("hello1");
    console.log(res1);

    const res2 = await saveData("hello2");
    console.log(res2);

    const res3 = await saveData("hello3");
    console.log(res3);

    const res4 = await saveData("hello4");
    console.log(res4);

    const res5 = await saveData("hello5");
    console.log(res5);
  } catch (err) {
    console.log(" Error caught (await):", err);
  }
}

saveAllData();

// saveData("hello")
//   .then((data) => {
//     console.log(data);
//     return "Processing data...";
//   })
//   .then((nextStep) => {
//     console.log(nextStep);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 2000);
//   });
// }

// async function run() {
//   console.log("Start");
//   const result = delay(); // not awaited
//   console.log(result); // prints: [object Promise]
//   console.log("End");
// }

// run();

// function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("✅ Delayed Response");
//     }, 2000);
//   });
// }

// async function run1() {
//   console.log("Start");
//   const result = await delay(); // pauses here for 2 seconds
//   console.log(result); // prints after delay
//   console.log("End");
// }

// run1();
