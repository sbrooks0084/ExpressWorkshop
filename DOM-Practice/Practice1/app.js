// function newManager(obj){

//     let distSales = document.createElement('div');
//     distSales.className = 'district-sales';

//     let manager = document.createElement('h1');
//     manager.innerText = obj.name;

//     let totalQuota = document.createElement('h3');
//     let h3Team = obj.salesTeam
//     let sum = h3Team.reduce((accumulator, amt)=>{
//         return accumulator + Number(amt.x);
//     ), 0}
//     totalQuota.innerText = `Total is: ${sum}`;

//     let salesTeamHeading = createElement('h3');
//     salesTeamHeading.innerText = 'THE Team';

//     let subTeam = createElement('ul');
//     for(let worker of obj.subTeam){
//         let names = worker.names;
//         let list = document.createElement('li');
//         list.innerText = names;
//         subTeam.append(list);
//     }
//     distSales.append(manager);
//     distSales.append(totalQuota);
//     distSales.append(salesTeamHeading);
//     distSales.append(subTeam);
// }
// console.log(newManager(manager));

const colors = {
    red: "#F71735",
    blue: "#090446",
    green: "#1B4504",
    yellow: "#FFE45E" 
}

makeContainer()

function makeContainer(){
    const container = document.createElement('div')
    //container.style.display = 'flex'  //(NOT using css)flex container, so can add flex rules to it
    container.classList.add('flexContainer') //(USING css) add a .flexContainer class in css
    document.querySelector('body').appendChild(container)
    makeColorOptions(container)
    makeBoxes(container)  //??Why pass in container?? because it is doing work inside the makeBoxes function
}

function makeColorOptions(container){
    for(key in colors){
        const colorBox = document.createElement('div')
        colorBox.className = 'colorBox'
        colorBox.style.backgroundColor = colors[key]
        container.appendChild(colorBox)
    }
}

function makeBoxes(container){  //??Why pass in container??  doing work inside of createSingleBox
    for(let i = 0; i < 1001; i++){
       createSingleBox(container)
    }
}
function createSingleBox(container){
    const box = document.createElement('div')
    box.className = 'box'  //give div a className for css
    box.addEventListener('mouseover', function(e) {
        //box.style.backgroundColor = 'blue'
        e.target.style.backgroundColor = colors.green
    })
    container.appendChild(box)  //this is now part of container, which is a flexbox
}

createColorPallette()

function createColorPallette(){
    let colorPallette = document.createElement('input')
    document.querySelector('body').appendChild(colorPallette)
    colorPallette.innerText = 'COLORS'
}
