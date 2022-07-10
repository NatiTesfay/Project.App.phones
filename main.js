const BASICAPI =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const USERAPI = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getApi() {
  try {
    return await fetch(BASICAPI).then((res) => res.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}

function printApi() {
  getApi().then((res) => console.log(res));
}

async function objectsLoops() {
  let holder = document.getElementById("holderHolder");
  let array = await getApi();
  array.forEach((device) => {
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
        <br>
        <button>DELETE</button>
    </div>
    `;
  });
}
objectsLoops();



async function getUserApi() {
  try {
    return await fetch(USERAPI).then((result) => result.json());
  } catch (error) {
    alert("error");
  } finally {
  }
}
function printUserApi() {
  getUserApi().then((result) => console.log(result));
}
printUserApi();
function objectsUsersLoops() {
  getUserApi().then((result) => {
    result.forEach((dev) => {
      table_id.innerHTML += 
      `<tr>
     
     <td>${dev._id}<td>
     <td>${dev.age}<td>
     <td>${dev.name.first}<td>
     <td>${dev.name.last}<td>
     <td>${dev.email}<td>
     <td>${dev.index}<td>
     <td>${dev.phone}<td>
    <td>${dev.picture}<td>
   
     </tr>`;
    });
  });
}
objectsUsersLoops();

function postObjects() {
    
}

function objectPost() {

    
}


 
 async function objPost(e) {
    e.preventDefault();
const data = {
  movie: {
    id:inputDate.value,
    age:inputDate2.value,
    name:inputDate3.value,
    lastName:inputDate4.value,
    email:inputDate5.value,
    index:inputDate5.value,
    phone:inputDate5.value,
    picture:inputDate5.value,
  }
}
  try {
    await fetch(`${BASICAPI}addUser`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    });
  } catch (err) {}
  finally{

  }
}



