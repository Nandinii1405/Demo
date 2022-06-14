const p1 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
          console.log("The first parameter resolved");
          resolve(10);
     },1*1000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         console.log("The second parameter resolved");
         resolve(20);
    },1*1000);
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
         console.log("The third parameter resolved");
         resolve(30);
    },1*1000);
});
Promise.all([p1,p2,p3])
.then(result=>{
    const total = result.reduce((p,c)=>p+c)
    console.log(`result:${result}`);
    console.log(`Total:${total}`);
})
