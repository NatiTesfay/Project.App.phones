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
    let array = await getApi()
  array.forEach(element => {
    console.log(element)
  });
}
objectsLoops();









   
    
  









