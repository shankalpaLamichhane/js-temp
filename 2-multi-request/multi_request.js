let requestsArray = ['https://jsonplaceholder.typicode.com/posts','https://jsonplaceholder.typicode.com/posts','https://jsonplaceholder.typicode.com/posts'];

let param = {
    name: 'Post',
    description: 'Description'
}

Promise.all(requestsArray.map((request) => {
    return fetch(request,{
        method: 'post',
        body: JSON.stringify(param)
      }).then((response) => {
        return response.json();
    }).then((data) => {
        return data;
    });
})).then((values) => {
    console.log('responses:', values);
}).catch((err) => {
  console.log(err);
});
