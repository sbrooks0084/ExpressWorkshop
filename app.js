///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// How to play
// Issue commands to your runner inside the yourCode function

// runner.moveRight() // moves right
// runner.moveLeft()  // moves left
// runner.speedUp()   // speeds up
// runner.slowDown()  // slows down

// You can chain on commands to the runner object, e.g.
// runner.moveRight().speedUp().speedUp() 

// Run a command from above after a specified delay:
// after100(fn)
// after300(fn)
// after600(fn)
// after1000(fn)
// after3000(fn)
// after9000(fn)

// example: 

// after100(function(){
//     runner.moveRight()
// })

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function yourCode() {

    // ADD YOUR CODE HERE
    // Round 2
    after9000(function() {
        runner.speedUp;
        runner.speedUp;
        runner.speedUp;
        runner.speedUp;
        runner.speedUp;
       
    })

    // Uncomment the lines below to get started
    console.log(runner);
    runner.moveRight()

}

// uncomment the next round when you have completed the current one
//round1() // Freebie
round2() // Warm up (HINT: You will need to start using the afterX commands)
// round3() // Tricky
// round4() // Hard
// round5() // Nightmare


// DO NOT MODIFY
// Will stop the program whenever runner.moveRight or runner.moveLeft throws an error
yourCode()
pacer.movement(round)
// DO NOT MODIFY
