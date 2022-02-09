let b = 1;


function aa(){
    let a = 0;
    console.log(b)
    
    function bb(){
        let a = 2;
        console.log(b)
        b=20
        return a
    }

    console.log( bb() )
}

aa()
console.log(b)

console.log(`---------`)
for(let i = 0; i<10; i++){
    console.log(i)
}
console.log(`---------`)
for(let i =0; i<20; i++){
    console.log(i)
}
console.log(`---------`)

let name = 'ingoo'

{
    let i = 0;
    console.log(i)
}

{
    let i = 1;
    console.log(name)
    console.log(i)
}

