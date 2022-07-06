

const BASICAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const USERAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getApi() {
    try{
     return await fetch (BASICAPI).
        then(res=>res.json())
    }
    catch(error){
        alert('error');
    }
    finally{}
}

function printApi() {
    getApi().then((res)=>console.log(res)) 
}



async function objectsLoops() {
    let holder = document.getElementById("holderHolder");
    let array = await getApi()
  array.forEach(device => {
    holder.innerHTML += `<div id="${device.id}" class="card">
        <div>
            <p>id:${device.id}</p>
            <p>price:${device.price}</p> 
            <p>isAvilabale:${device.isAvailable}</p> 
            <p>createAt:${device.createdAt}</p> 
            <p>color:${device.color}</p>
            <p>brand:${device.brand}</p>
            <p>ram:${device.ram}</p>
        </div>
    </div>
    `
  });
}
objectsLoops();

// function objectsHolder(device) {
   
//   let text1 =  `<div class = holderHolder>
//     <p>id:${device.id}</p>
//     <p>price:${device.price}</p> 
//     <p>isAvilabale:${device.isAvailable}</p> 
//     <p>createAt:${device.createdAt}</p> 
//     <p>color:${device.color}</p>
//     <p>brand:${device.brand}</p>
//     <p>ram:${device.ram}</p>
//      </div>
//     `
//     return text1
// }

// let createObj = {
//     id:"",
//     price:"",
//     isAvilabale:"",
//     createAt:"",
//     color:"",
//     brand:"",
//     ram:"",
//     picture:""
// } 


async function getUserApi() {
    try{
     return await fetch (USERAPI).
        then(result=>result.json())
    }
    catch(error){
        alert('error');
    }
    finally{}
}
function printUserApi() {
    getUserApi().then((result)=>console.log(result)) 
}
printUserApi();

async function objectsUsersLoops() {
    let holderUser = document.getElementById("table");
     await getUserApi()
     holderUser.forEach(dev => {
    let row = `<tr>
    //                      <td>${dev[i].id}<td>
    //                      <td>${dev[i].price}<td>
    //                      <td>${dev[i].isAvailable}<td>
    //                      <td>${dev[i].createAt}<td>
    //                      <td>${dev[i].color}<td>
    //                      <td>${dev[i].brand}<td>
    //                      <td>${dev[i].ram}<td>
    //                      <td>${dev[i].picture}<td>
    //                     </tr>`
              row.innerHTML+=row;
       
  });
}
objectsUsersLoops();





// function BuildTable(data) {
//     let myTable = document.getElementById('table-row')
//     for (let i = 0; i < data.length; i++) {
//         let row = 1`<tr>
//                      <td>${res.id}<td>
//                      <td>${data[i].price}<td>
//                      <td>${data[i].isAvailable}<td>
//                      <td>${data[i].createAt}<td>
//                      <td>${data[i].color}<td>
//                      <td>${data[i].brand}<td>
//                      <td>${data[i].ram}<td>
//                      <td>${data[i].picture}<td>
//                     </tr>`
//           row.innerHTML+=row
        
//     }    
// }









   
    
  









