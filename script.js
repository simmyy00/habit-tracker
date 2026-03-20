const input = document.getElementById("habitField");
const addBtn = document.getElementById("addHabit");
const list = document.getElementById("list");
const themeToggle = document.getElementById("themeToggle");

let habits = JSON.parse(localStorage.getItem("habits")) || [];
let darkMode = JSON.parse(localStorage.getItem("darkMode")) || false;

// COMMIT 3: render habits dynamically
function displayHabits() {
    list.innerHTML = "";

    habits.forEach((h, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span class="${h.done ? "done" : ""}">
        ${h.name} (🔥 ${h.streak})
      </span>
      <div>
        <button onclick="toggle(${i})">✔</button>
        <button onclick="remove(${i})">✖</button>
      </div>
        `;

        list.appendChild(li);
});

// COMMMIT 6: Save data in localStorage
localStorage.setItem("habits", JSON.stringify(habits));
}

//COMMIT 2: Add habit functionality
addBtn.onclick = () => {
    if (!input.value.trim()) return;

    hbaits.push({
        name: input.value,
        done: false,
        streak: 0,
        lastDone: null

      });

      input.value ="";
      displayHabits();
      };

      // COMMIT 5: Toggle completion feature
      function toggle(i) {
        const today = new Date().toDateString();

        // COMMIT 7: Streak tracking logic
        if (habits[i]. lastDone !== today) { 
            habits[i].streak++;
            habits[i].lastDone = today;
         }

         habits[i].done =  !habits[i].done;

         displayHabits();
         }

      // COMMIT 4: Delete habit feature
      function remove(i) { 
        habits.splice(i, 1);
        displayHabits();
}

       // COMMIT 8: Dark mode toggle logic
       function applyTheme() {
        document.body.classList.toggle("dark", darkMode);
       }

       themeToggle.onclick = () => {
        darkMode =  !darkMode;
        loccalStorage.setItem("darkMode", JSON.stringify(darkMode));
        applyTheme();
        };

        applyTheme();
        displayHabits();