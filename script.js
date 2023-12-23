function addShape() {
    // Create a new div element
    var newShape = document.createElement("div");

    // Assign class for styling
    if (Math.random() > 0.5) {
        newShape.className = "circle";
    } else {
        newShape.className = "square";
    }

    // Append the new shape to the container
    document.getElementById("shapeContainer").appendChild(newShape);
    console.log("hello!")
}