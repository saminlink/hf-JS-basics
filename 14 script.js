let input = prompt("what would you like to do ?");
const todos = ['collect chicken eggs','clean litters box']
while(input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        console.log('**********');
        for (let i = 0; i < todos.length; i++){
            console.log(`${i}:${todos[i]}`);
        }
        console.log('**********');
    }
    else if (input === 'new'){
        const newToDo = prompt("what would you like to add to your list?");
        todos.push(newToDo);
        console.log(`${newToDo} added to your list`);
    }
    else if (input === 'delete'){
        console.log('**********');
        const index = parseInt(prompt("enter the index of item which you wanna delete?"));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`OK, deleted ${deleted[0]}`);
        }
        else{
            console.log("unknown index.please enter a valid one.");
        }
    
    }
    input = prompt("what would you like to do ?");
}
document.write("OK YOU QUIT THE APP!");

