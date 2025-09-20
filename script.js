document.querySelector("#input_n").value = localStorage.getItem("previous");

let Nubutton = document.querySelectorAll(".NUmber");
Nubutton.forEach((e) => {
  e.addEventListener("click", () => {
    let inpuut = e.innerHTML;
    document.querySelector("#input_n").value += inpuut;
  });
});

document.querySelector("#AC").addEventListener("click", () => {
  document.querySelector("#input_n").value = "";
});

document.querySelector("#C").addEventListener("click", () => {
  let input = document.querySelector("#input_n").value;
  input = input.slice(0, -1);
  document.querySelector("#input_n").value = input;
});

document.querySelector("#equal").addEventListener("click", () => {
  let input = document.querySelector("#input_n").value;

  if (input != "") {
    try {
      input = eval(input);
      document.querySelector("#input_n").value = input;
      localStorage.setItem("previous", input);
    } catch (error) {
      return (document.querySelector("#input_n").value = NaN);
    }
  } else {
    document.querySelector("#input_n").value = "";
  }
});
