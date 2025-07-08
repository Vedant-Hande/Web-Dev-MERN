let url = "https://www.reddit.com/r/Wallstreetbets/top.json";
// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch(url);
//   })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using async and await

async function getData() {
  try {
    let d2 = await fetch(url);
    console.log("d2 :>> ", d2);
    let d2Ans = await d2.json();
    console.log("d2Ans :>> ", d2Ans);
  } catch (err) {
    console.log("err :>> ", err);
  }
}
getData();

let url1 = "https://randomuser.me/api/";
for (let i = 1; i <= 5; i++) {
  async function getData() {
    try {
      let data = await fetch(url1);
      let dataAns = await data.json();
      console.log("data of " + i + "is >> ", dataAns.results[0]);
    } catch (err) {
      console.log("err :>> ", err);
    }
  }
  getData();
}
