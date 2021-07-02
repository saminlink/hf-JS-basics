let friends = ['tarun','raj','hima'];
// to add a new name at the end we use push('something') as method
friends.push('grood');


// and if we want to remove a name from last then we use pop() as method
friends.pop();

// if we wanna remove a name at the begining then we use shift() as method
friends.shift();

// if we wanna add a name at the begining then we use unshift('someone') as method
friends.unshift('tarun');



let toy = ['grood','helmen','gobido'];
let boys = ['john','honton','gulet'];
let mixing = toy.concat(boys)
// the output will be mixing = ['grood', 'helmen', 'gobido', 'john', 'honton', 'gulet'];


// another method of arrays is includes() which specifies true or false.
toy.includes('grood'); 
// will give true as output.


// another method for array includes .indexOf() which is same as the method of string
let raj = ['short','toon']
raj.indexOf('short')
// will give 0 as output


// another method for arrays is the .reverse() which reverse the order of the data in the arrays
let raj = ['short','toon']
raj.reverse()
// will give the output as ['toon','short']
// this is a destructive method


