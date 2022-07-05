let createObj = {
    id:"",
    price:"",
    isAvilabale:"",
    createAt:"",
    color:"",
    brand:"",
    ram:"",
    picture:""
}



const BASICAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";


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









   
    
  









