// // reverse a string
// function rev(str) {
//     // given a string, the algo returns that string in reverse order
// }
// // example: '123456' => '654321', 'this is the string' => 'gnirts eht si siht'

// function rev(str){
//     return str.split('').reverse().join('');
// }
// console.log(rev('Hello!'));

//put the string index values into an array

// function rev(str){
//     let result = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }
// console.log(rev('Hello'));

//
function htmlManager(obj){
    let distSales = document.createElement('div');  //create given div tag
    distSales.className = 'district-sales';  //input given class name

    let h1 = document.createElement('h1');  //create given h1 tag
    h1.innerText = obj.name;  //soft code in the name for 'Darcy'

    let quota = createElement('h3'); //create given h3 tag

    var sum  = 0;
    for(let num of obj){
        sum += obj.salesTeam.quota;
        return sum;
    }
    quota.innerText = `Total quota is: ${sum}`;

    let salesTeamHeading = document.createElement('h3'); //2nd h3 tag
    salesTeamHeading.innerText = 'ATX Sales Team';

    //now get ul's
    let teamMembers = document.createElement('ul');
    for(let member of obj.salesTeam){
        let names = member.name;
        let list = document.createElement('li'); //create li's
        list.innerText = names;  //3 names are given
        salesTeam.append(list);  //add the list to salesTeam
    }
    distSales.append(h1);
    distSales.append(quota);
    distSales.append(salesTeamHeading);
    distSales.append(teamMembers);
    return distSales;

    }
    console.log(h1);
    
    








