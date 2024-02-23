// iterables 
// set
// Maps
// Object assign 
// optional chaining 

// what are iterables 
// jispe hum for of loop lga sakein 
// strings , array are flexible 

const firstName = 'subhajit ';
for (let char of firstName){
    console.log(char);
}

const items = ['item1','item2','item3'];
for (let item of items){
    console.log(item);
}

const users = {
    'user1': 'name 1',
    'user2': 'name 2',
    'user3': 'name 3',
}
// for (let user of users){
//     console.log(user);
// }

// we can iterate through objects coz its not iterable 

// array like object 
// those having length property 
// and those can be accessed through index
// example ;- string