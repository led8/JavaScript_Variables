const inputs = document.querySelectorAll(".controls input");

function changeValue(event) {
  const name = event.target.name;
  const value = event.target.value;
  const data = event.target.dataset.sizing || '';

  console.log(document.documentElement.style.setProperty(`--${name}`, value + data));
}

inputs.forEach((input) => {
  input.addEventListener("change", changeValue);

});

// Another way

// function changeValue() {
//   const name = this.name;
//   const value = this.value;
//   const data = this.dataset.sizing;
//   document.documentElement.style.setProperty(`--${name}`, value + data);
// }
