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

// using loop in api is not good coz api has a specifc limit
let url1 = "https://randomuser.me/api/";
// for (let i = 1; i <= 5; i++) {
//   async function getData() {
//     try {
//       let data = await fetch(url1);
//       let dataAns = await data.json();
//       console.log("data of " + i + "is >> ", dataAns.results[0]);
//     } catch (err) {
//       console.log("err :>> ", err);
//     }
//   }
//   getData();
// }

console.log("---------------------------------");

let apis = "https://randomuser.me/api/";

let para = document.querySelector(".result");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let res = await getUser();
  para.innerHTML = res;
});

async function getUser() {
  try {
    const user = await fetch(apis);
    const r = await user.json();
    const fullName = r.results[0].name;
    console.log("Full Name:", fullName);
    return fullName;
  } catch (err) {
    console.log("err :>> ", err);
  }
}

// //using axios
// axios.get("https://randomuser.me/api/")
//   .then(response => {
//     const user = response.data.results[0];
//     const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
//     console.log("Full Name:", fullName);
//   })
//   .catch(error => {
//     console.error("Error fetching user:", error);
//   });


