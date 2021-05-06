// Get Even: solving with a for...in loop
for (let x = 0; x <= 200; x++) {
  if (x % 2 === 0) {
    // you can also write this as `if (!(x % 2))`
    //console.log(x)
  }
}

// Excited Kitten Part #1: solving with a while loop
let kittenMsg = 'Love me, pet me! HSSSSSS!'
let count = 10
while (count > 0) {
  console.log(kittenMsg)
  count--
}

// Bonus solve: if you are looking for interesting built in string methods to solve:
console.log(`${kittenMsg}\n`.repeat(10))

// Excited Kitten Part #2: solving with a while loop going up
let secondCount = 0
let res = [
  '...human...why you taking pictures of me?...',
  '...the catnip made me do it...',
  'meow?',
  '...why does the red dot always get away...',
]

while (secondCount < 10) {
  if (secondCount % 2 === 0) {
    let randomRes = Math.round(Math.random() * (res.length - 1))
    console.log(res[randomRes])
  }
  console.log(kittenMsg)
  secondCount++
}

// Theromstat:

let currentTemp = Math.floor(Math.random() * 100)
let desiredTemp = 72
while (currentTemp != desiredTemp) {
  if (currentTemp > desiredTemp) {
    currentTemp--
  } else {
    currentTemp++
  }
  console.log(`The current temperatue is ${currentTemp}`)
}

// Fizzbuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('fizzbuzz')
  } else if (i % 3 == 0) {
    console.log('fizz')
  } else if (i % 5 == 0) {
    console.log('buzz')
  } else {
    console.log(i)
  }
}

// What's My Number?
let phoneBook = {
  Abe: '111-111-1111',
  Bob: '222-222-2222',
  Cam: '333-333-3333',
  Dan: '444-444-4444',
  Ern: '555-555-5555',
  Fry: '111-111-1111',
  Gil: '222-222-2222',
  Hal: '333-333-3333',
  Ike: '444-444-4444',
  Jim: '555-555-5555',
  Kip: '111-111-1111',
  Liv: '222-222-2222',
  Mia: '333-333-3333',
  Nik: '444-444-4444',
  Oli: '555-555-5555',
  Pam: '111-111-1111',
  Qiq: '222-222-2222',
  Rob: '333-333-3333',
  Stu: '444-444-4444',
  Tad: '555-555-5555',
  Uwe: '111-111-1111',
  Val: '222-222-2222',
  Wil: '333-333-3333',
  Xiu: '444-444-4444',
  Yam: '555-555-5555',
  Zed: '111-111-1111',
}

// for..in loop
for (let person in phoneBook) {
	if(phoneBook[person] === "333-333-3333"){
		console.log(person)
	}
}

// for..of with object entries
for (let person of Object.entries(phoneBook)){
	if(person[1] === "333-333-3333"){
		console.log(person[0])
	}
}

// destructuring
for (let [key, value] of Object.entries(phoneBook)){
	if(value === "333-333-3333"){
		console.log(key)
	}
}