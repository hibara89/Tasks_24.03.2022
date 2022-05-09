const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onF) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;
  if (elRight + amount > bodyBoundary) {
    console.log("Done");
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currLeft + amount}px)`;
      if (callback) callback();
    }, delay);
  }
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
      moveX(btn, 100, 1000, () => {
        moveX(btn, 100, 1000);
      });
    });
  });
});

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         reject({ status: 404 });
//       } else {
//         const pages = {
//           "/users": [
//             { id: 1, username: "Bilbo" },
//             { id: 5, username: "esmerlada" },
//           ],
//           "/about": "This is the about page!",
//         };
//         const data = pages[url];
//         resolve({ status: 200, data });
//       }
//     }, 3000);
//   });
// };

// fakeRequest("/about")
//   .then(() => {
//     console.log("Request Worked");
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("Request Failed");
//   });
