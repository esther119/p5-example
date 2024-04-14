let treeStages = [];
let currentStage = 0;

function preload() {
  for (let i = 0; i < 6; i++) {
    // Assuming 5 stages
    treeStages[i] = loadImage(`t${i}.png`);
  }
  console.log("treeStages", treeStages);
}

function setup() {
  createCanvas(800, 600);
  // Optionally set frameRate to slow down the animation
  frameRate(2); // Adjust as needed
}

function draw() {
  background(255); // White background

  // Display the current stage of the tree
  image(treeStages[currentStage], width / 2 - 100, height / 2 - 100, 150, 400); // Adjust position and size as needed

  // Increment the stage to simulate growth
  if (frameCount % 6 == 0) {
    // Change every 2 seconds if frameRate is 2
    currentStage++;
    console.log("currentStage", currentStage); // Now it should log changes every 2 seconds
    if (currentStage >= treeStages.length) {
      currentStage = treeStages.length - 1; // Stay on the last stage
    }
  }
}

// function draw() {
//   background(255); // White background

//   // Display the current stage of the tree
//   image(treeStages[currentStage], width / 2 - 100, height / 2 - 100, 200, 200); // Adjust position and size as needed

//   // Increment the stage to simulate growth
//   if (frameCount % 120 == 0) {
//     // Change every 30 seconds if frameRate is 2
//     currentStage++;
//     console.log("currentStage", currentStage);
//     if (currentStage >= treeStages.length) {
//       currentStage = treeStages.length - 1; // Stay on the last stage
//     }
//   }
// }

// let x = 50;
// let y = 50;
// let xSpeed = 2;
// let ySpeed = 2.5;

// function setup() {
//   createCanvas(400, 400);
//   background(220);
// }
// function draw() {
//   background(220);
//   ellipse(x, y, 80, 80);

//   x += xSpeed;
//   y += ySpeed;

//   // Reverse direction if hitting the edge of the canvas
//   if (x > width - 40 || x < 40) {
//     xSpeed *= -1;
//   }
//   if (y > height - 40 || y < 40) {
//     ySpeed *= -1;
//   }
// }
