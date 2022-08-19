// getHouse()


// function getHouse() {
//   const btn = document.getElementById("btnData") // querying a button with id of btndata
//   btn.addEventListener('click', getData) // btn is getting an event listener
// }

// function getData() {
//   $.get("https://api.gameofthronesquotes.xyz/v1/houses", grabData)
// }

// function grabData(data) {
//   for (let i = 0; i < data.length; i++) {
//     let houseData = data[i];
//     getHouseName(houseData)
//   }
// }

// // id is houses
// function getHouseName(houseData) {
//   let houseName = houseData.name; // obj.name = "House of Stark"
//   let houseSlug = houseData.slug; // obj.slug = "stark"
//   const houseDiv = document.createElement("div")
//   houseDiv.className = houseSlug
//   houseDiv.innerText = houseName

//   houseDiv.addEventListener("click", houseMembers)
//   const container = document.getElementById("houses")
//   container.append(houseDiv)
// }

// function houseMembers(e) {
//   $.get(https://api.gameofthronesquotes.xyz/v1/house/${e.target.className}, getMembers)
// }

// function getMembers(data) {
//   for (let i = 0; i < data.length; i++) {
//     let members = data[i].members
//     showMembers(members)
//   }
// }


// function showMembers(members) {
//   for (let i = 0; i < members.length; i++) {
//     let memberName = members[i].name
//     console.log(memberName)
//   }
// }

getAllData()

function getAllData(){
    const btn = document.getElementById('btn')
    btn.addEventListener("click", getData)
}

function getData(data){
    $.get('https://jsonplaceholder.typicode.com/users', getAllUsers)
        
}

function getAllUsers(arr){
    for (let i = 0; i < arr.length; i++) {
        let user = arr[i]
        console.log(user)
        createDivsForUsernames(data)
    }
}

function createDivsForUsernames(obj) {
    let fullName = obj.name 
    let address = obj.adddress
    let email = obj.email
    const userDiv = document.getElementById('div')
    userDiv.className = fullName
    userDiv.innerText = address
    userDiv.email = email

    userDiv.addEventListener('click', eachUser)
    const container = getElementById('container')
    container.append(userDiv)
}

function eachUser(e) {
    $.get(`https://jsonplaceholder.typicode.com/users/${e.target.className}`, companyInfo)
}

function companyInfo(info) {
    for (let i = 0; i < info.length; i++) {
        let compInfo = info[i].company
        console.log(compInfo)
        showMembers(members)
    }
    
}

function showMembers(members){
    for(let i = 0; i < members.length; i++){
        let member = members[i].name
        console.log(member)
    }

}

    

