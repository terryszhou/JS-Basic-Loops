// Get Even

for (let i = 0; i <= 200; i = i + 2) {
    console.log(i)
}

// Excited Kitten

let catResponse = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
]

for (let i = 0; i <= 10; i++) {
    if (i > 0 && i % 2 == 0) {
    console.log(catResponse[Math.floor(Math.random() * catResponse.length)])
    } else if (i % 2 == 1) {
        console.log("Love me, pet me! HSSSSSS!")
    }
}

// Thermostat

let currentTemp = Math.ceil(Math.random() * 100)

const desiredTemp = 70

while (currentTemp !== desiredTemp) {
if (currentTemp < desiredTemp) {
    currentTemp++
    console.log (`The current temp is now ${currentTemp} degrees F.`)
} else if (currentTemp > desiredtemp) {
    currentTemp--
    console.log (`The current temp is now ${currentTemp} degrees F.`)
} else {
    console.log (`The current temp is now ${currentTemp} degrees F.`)
}
}

// Fizz Buzz

for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
        console.log("Fizz")
    } else if (i % 5 == 0 && i % 3 !== 0) {
        console.log("Buzz")
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}

// BONUS: What's My Number?

var phoneBook = {
    "Abe": "111-111-1111",
    "Bob": "222-222-2222",
    "Cam": "333-333-3333",
    "Dan": "444-444-4444",
    "Ern": "555-555-5555",
    "Fry": "111-111-1111",
    "Gil": "222-222-2222",
    "Hal": "333-333-3333",
    "Ike": "444-444-4444",
    "Jim": "555-555-5555",
    "Kip": "111-111-1111",
    "Liv": "222-222-2222",
    "Mia": "333-333-3333",
    "Nik": "444-444-4444",
    "Oli": "555-555-5555",
    "Pam": "111-111-1111",
    "Qiq": "222-222-2222",
    "Rob": "333-333-3333",
    "Stu": "444-444-4444",
    "Tad": "555-555-5555",
    "Uwe": "111-111-1111",
    "Val": "222-222-2222",
    "Wil": "333-333-3333",
    "Xiu": "444-444-4444",
    "Yam": "555-555-5555",
    "Zed": "111-111-1111"
  }

for (let entry in phoneBook) {
    if (phoneBook[entry] == "333-333-3333") {
        console.log(`${entry}'s phone number is ${phoneBook[entry]}.`)
    }
}




