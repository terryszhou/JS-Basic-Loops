// Get Even: solving with a for...in loop
for (let x = 0; x <= 200; x++) {
    if (x % 2 === 0) { // you can also write this as `if (!(x % 2))`
        //console.log(x)
    }
}

// Excited Kitten Part #1: solving with a while loop
let kittenMsg = "Love me, pet me! HSSSSSS!"
let count = 10
while (count > 0) {
    console.log(kittenMsg)
    count--
}

// Bonus solve: if you are looking for interesting built in string methods to solve:
console.log((`${kittenMsg}\n`).repeat(10))


// Excited Kitten Part #2: solving with a while loop going up
let secondCount = 0
let res = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", "...why does the red dot always get away..."]

while (secondCount < 10) {
    if (secondCount % 2 === 0) {
        let randomRes = Math.round(Math.random() * (res.length - 1))
        console.log(res[randomRes])
    }
    console.log(kittenMsg)
    secondCount++
}

// Theromstat: 

