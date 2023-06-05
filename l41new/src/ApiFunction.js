"use strict";
//insert data
const update = {
  title: "A blog post by Kingsley",
  body: "Brilliant post on fetch API",
  userId: 1,
};
//Post Object
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(update),
};
/////////////
/*fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then((data) => {
    if (!data.ok) {
      throw Error(data.status);
    }
    return data.json();
  })
  .then((update) => {
    console.log(update);
  })
  .catch((e) => {
    console.log(e);
  });*/

async function Post(url, data) {
  try {
    // Awaiting fetch which contains method,
    // headers and content-type and body
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw Error(response.status);
    }

    // Awaiting response.json()
    const resData = await response.json();

    // Return response data
    return resData;
  } catch (e) {
    console.log(e);
  }
}
async function Get(url) {
  try {
    // Awaiting fetch which contains method,
    // headers and content-type and body
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.status);
    }

    // Awaiting response.json()
    const resData = await response.json();

    // Return response data
    return resData;
  } catch (e) {
    console.log(e);
  }
}
export { Post, Get };
