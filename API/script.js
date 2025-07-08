let url = "https://www.reddit.com/r/Wallstreetbets/top.json";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    return fetch(url);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
