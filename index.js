// $(document).ready(function(){

//     const mPromise= new Promise((resolve,reject) =>{
//         $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(response){
//             resolve(response);
//       }).fail((err)=>{
            
//         reject(err);

//       })

//     })

//     mPromise
//     .then((res) =>{
//         console.log('call handled in success');
//         console.log(res);

//     })
//     .catch((err)=>{
//         console.log(err);
//         console.log('call handled in failure');

//     })
// })


// $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(response){

// $(document).ready(function(){
//     const mPromise= new Promise((resolve, reject) =>{
//         $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(response){
//             resolve(response);
//         }).fail((err)=>{
//             reject(err)

//         })

//     })
//     mPromise
//     .then((res) =>{
//         console.log('call handled in sucess');
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log('call handle in failure');
//         console.log(err);
//     })
// })

$(document).ready(function(){
    const mPromise= new Promise((resolve, reject)=>{
        $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(response){
            resolve(response);
        }).fail((err)=> {
            reject(err)
        })
    })
    mPromise
    .then((res) => {
        console.log('call handle in success')
        console.log(res);
    })
    .catch((err)=> {
        console.log('call handle in failure');
        console.log(err);
    })
})
  