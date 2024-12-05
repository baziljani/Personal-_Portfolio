// const cursor = document.getElementById("cursor");
//     const cursorBorder = document.getElementById("cursor-border");

//     // Function to generate random color
//     function getRandomColor() {
//       const letters = "0123456789ABCDEF";
//       let color = "#";
//       for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     }

//     // Move the cursor and its border on mouse move
//     document.addEventListener("mousemove", function(e) {
//       // Cursor movement
//       cursor.style.top = `${e.clientY}px`;
//       cursor.style.left = `${e.clientX}px`;
      
//       // Cursor border movement
//       cursorBorder.style.top = `${e.clientY}px`;
//       cursorBorder.style.left = `${e.clientX}px`;
//     });

//     // Handle hover over clickable elements
//     document.querySelectorAll("a, button").forEach(element => {
//       element.addEventListener("mouseover", () => {
//         cursorBorder.style.width = "70px";
//         cursorBorder.style.height = "70px";
//       });
//       element.addEventListener("mouseout", () => {
//         cursorBorder.style.width = "50px";
//         cursorBorder.style.height = "50px";
//       });
//     });

//     // Change cursor color when clicking on links
//     document.querySelectorAll("a").forEach(link => {
//       link.addEventListener("click", () => {
//         // Get random color
//         const randomColor = getRandomColor();

//         // Apply random color to cursor and border
//         cursor.style.backgroundColor = randomColor;
//         cursorBorder.style.boxShadow = `0 0 0 1px ${randomColor}`;

//         // Revert back to the original color after a short delay
//         setTimeout(() => {
//           cursor.style.backgroundColor = "rgba(10, 45, 248, 0.842)"; // Blue
//           cursorBorder.style.boxShadow = "0 0 0 1px rgb(231, 11, 11)"; // Red border
//         }, 500); // 500 milliseconds delay
//       });
//     });
const cursor = document.getElementById("cursor");
const cursorBorder = document.getElementById("cursor-border");

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Track mouse position
document.addEventListener("mousemove", (e) => {
  requestAnimationFrame(() => {
    cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    cursorBorder.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
});

// Handle hover over clickable elements (a, button)
document.querySelectorAll("a, button, input, textarea").forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursorBorder.style.width = "70px";
    cursorBorder.style.height = "70px";
  });

  element.addEventListener("mouseout", () => {
    cursorBorder.style.width = "50px";
    cursorBorder.style.height = "50px";
  });
});

// Change cursor and border color on link click
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    const randomColor = getRandomColor();

    cursor.style.backgroundColor = randomColor;
    cursorBorder.style.boxShadow = `0 0 0 1px ${randomColor}`;

    // Revert to the original color after a short delay
    setTimeout(() => {
      cursor.style.backgroundColor = "rgba(10, 45, 248, 0.842)"; // Blue
      cursorBorder.style.boxShadow = "0 0 0 1px rgb(231, 11, 11)"; // Red border
    }, 500); // 500ms delay
  });
});
