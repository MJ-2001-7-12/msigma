
  const coursesContainer = document.getElementById("courses");
  const numRows = 10; // no of rows 

 
  function createRowWithItems(rowNumber) {
    const rowDiv = document.createElement("div");
    rowDiv.id = `row${rowNumber}`;
    coursesContainer.appendChild(rowDiv);

    for (let item = 1; item <= 2; item++) {
      const itemDiv = document.createElement("div");
      itemDiv.id = `item${(rowNumber - 1) * 2 + item}`;
      rowDiv.appendChild(itemDiv);

      const h3 = document.createElement("h3");
      itemDiv.appendChild(h3);

      const p1 = document.createElement("p");
      itemDiv.appendChild(p1);

      const applyButton = document.createElement("button");
      applyButton.textContent = "Apply Now";
      itemDiv.appendChild(applyButton);

      const p2 = document.createElement("p");
      p2.textContent = "Fee starting at ₹799 per subject";
      itemDiv.appendChild(p2);

      const randomColor = getRandomColor();
        h3.style.color = randomColor;
        applyButton.style.backgroundColor = randomColor;
    }
  }

  function getRandomColor() {
  const r = Math.floor(Math.random() * 200 + 56); // Red 
  const g = Math.floor(Math.random() * 200 + 56); // Green 
  const b = Math.floor(Math.random() * 200 + 56); // Blue
  return `rgb(${r},${g},${b})`;
  }
 
  for (let row = 1; row <= numRows; row++) {
    createRowWithItems(row);
  }

  const request = fetch("https://api.msigma.in/btech/v2/branches");

  request
    .then((response) => response.json())
    .then((data) => {
      data.branches.forEach((branch, index) => {
        const shortData = branch.short;
        const fullData = branch.name;

        const h3 = document.querySelector(`#item${index + 1} h3`);
        const p1 = document.querySelector(`#item${index + 1} p`);

        h3.textContent = shortData;
        p1.textContent = fullData;
      });
    })
    .catch((error) => console.log(error.message));

