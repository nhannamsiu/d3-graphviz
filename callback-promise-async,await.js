const fs  = require('fs')


function random(max){
  return Math.floor((Math.random() * max));
}

function wait(ms){
  return new Promise(resolve=>{

  })
}

function getNameAPI(){
  return new Promise((resolve,reject) => {
    if (random(2)==1){
      return setTimeout(()=>{resolve('ok nam')},1000)
    }
    return setTimeout(()=>{reject('fail rui`')},5000)
  })
}

// getNameAPI()
// .then((result)=>{
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// });

async function main(){
  let result = ''
  try{
    result = await getNameAPI()
  }
  catch (error){
    console.log(error)
  }
  console.log(result)
}


function doSomething(a,b,callback) {
    console.log(a,b)
    callback(random(5), random(5), random(5));
}

function foo(a, b, c) {
    setTimeout(()=>{console.log(a + " " + b + " " + c)},5000)
}

doSomething(5,'ecec',(a,b,c)=>{
  console.log(a,b,c)
});


//
//
//
//
//
