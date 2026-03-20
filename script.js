document.addEventListener("DOMContentLoaded", () => {
  //Get elements from the DOM
  const input = document.getElementById("habitField");
  const addBtn = document.getElementById("addHabit");
  const list = document.getElementById("list");
  const themeToggle = document.getElementById("themeToggle");
 
    //Load saved data from localStorage
  let habits = JSON.parse(localStorage.getItem("habits")) || [];
  let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;
   

     //Render habits dynamically
  function displayHabits() {
    list.innerHTML = "";

    if (habits.length === 0) {
  list.innerHTML = "<p>No habits yet. Add one!</p>";
  return;
}

    habits.forEach((h, i) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <span class="${h.done ? "done" : ""}">
          ${h.name} (🔥 ${h.streak})
        </span>
        <div>
          <button onclick="toggle(${i})">✔</button>
          <button onclick="remove(${i})">❌</button>
        </div>
      `;

      list.appendChild(li);
    });

    const completed = habits.filter(h => h.done).length;
  document.getElementById("progress").innerText =
    `${completed} of ${habits.length} habits completed`;
     
    //Save habits to localStorage
    localStorage.setItem("habits", JSON.stringify(habits));
  }
      
     //Add habit functionality
  addBtn.addEventListener("click", () => {
    if (!input.value.trim()) return;

    habits.push({
      name: input.value,
      done: false,
      streak: 0,
      lastDone: null
    });

    input.value = "";
    displayHabits();
  });
     
     //Toggle completion and update streak
  window.toggle = function(i) {
    const today = new Date().toDateString();
     

      //Streak tracking logic
    if (habits[i].lastDone !== today) {
      habits[i].streak++;
      habits[i].lastDone = today;
    }

    habits[i].done = !habits[i].done;
    displayHabits();
  };

     //Delete habit from list
  window.remove = function(i) {
    habits.splice(i, 1);
    displayHabits();
  };

    //Apply dark mode styling
  function applyTheme() {
    document.body.classList.toggle("dark", darkMode);
  }

    //Dark mode toggle feature
  themeToggle.addEventListener("click", () => {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    applyTheme();
  });
 
    //initialize app
  applyTheme();
  displayHabits()

});
