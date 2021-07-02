// for (let i = 0; i <= 20; i+=2)   {
//     console.log(i);
// }


// for(let i = 1; i <= 10; i++)    {
//     console.log(`i is: ${i}`);
//     for(let j = 1; j < 4; j++)  {
//         console.log(`      j is: ${j}`);
//     }
// }


const chair =    [
    ["tritu", "hritp", "jagutw"],
    ["brown", "xupord", "freprin","vibit"],
    ["kiloco", "muber", "lozoki", "nantari", "gapher"],
    ["zaik", "kapila"]
]

for(let i = 0; i < chair.length; i++)   {
    const person = chair[i];
    console.log(`ROW #${i + 1}`);
    for(let j = 0; j < person.length; j++)  {
        console.log(`  ${person[j]}`);
    }
}



