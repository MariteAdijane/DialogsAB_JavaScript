

 // Pārbaudam, ar kādu lietotāju esam ielogojušies
 var lietotajs = localStorage.getItem("lietotajvards");

// Pie lapas ielādes izsaucam funkciju, kas ielasa lietotāja uzdevumus
  window.onload = loadTasks;

 // Ja lietotājs nospiež Enter vai plusiņu kamēr raksta uzdevuma pievienošanas laukā, mēs pievienojam uzdevumu (un novēršam lapas pārlādēšanu)
 document.querySelector("form").addEventListener("submit", e => {
   e.preventDefault();
   addTask();
 });

 function loadTasks() {
  
   // Pārbaudam, ar ko esam ielogojušies. Ja vārda nav, pārsūtam uz login ekrānu.
   if (typeof lietotajs == 'undefined' || lietotajs == null) {
    window.location.replace("index.html");
    return;
   };

   // Ja ir lietotāja vārds, parādam uzdevumu saraksta augšpusē lietotāja vārdu.
   document.getElementsByClassName("lietotajvards")[0].innerHTML = lietotajs;

   // Pārbaudam, vai iekš LocalStorage jau ir uzdevumi, un ja nav, neko tālāk nedaram.
   if (localStorage.getItem(lietotajs + "-tasks") == null) return;

   // Paņemam no LocalStorage visus saglabātos lietotāja taskus, un parsējam uz masīvu priekš apstrādes.
   let tasks = Array.from(JSON.parse(localStorage.getItem(lietotajs + "-tasks")));

   // Ejam ciklā cauri katram uzdevumam, un renderējam <li> elementu priekš parādīšanas tabulā. Pie viena apskatamies vai tas ir pabeigts, un piešķiram klasi.
   tasks.forEach(task => {
     const list = document.querySelector("ul");
     const li = document.createElement("li");
     li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
       <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
       <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
     list.insertBefore(li, list.children[0]);
   });
 }

  // Uzdevuma pievienošana - pārbaudam, vai teksts nav tukšs, un vai tāds uzdevums jau neeksistē.
 function addTask() {
   const task = document.querySelector("form input");
   const list = document.querySelector("ul");
   if (task.value === "") {
     alert("Lūdzu ievadiet uzdevuma nosaukumu!");
     return false;
   }
   if (document.querySelector(`input[value="${task.value}"]`)) {
     alert("Uzdevums ar šādu nosaukumu jau eksistē!");
     return false;
   }

   // Pievienojam uzdevumu LocalStorage masīvam.
   localStorage.setItem(lietotajs + "-tasks", JSON.stringify([...JSON.parse(localStorage.getItem(lietotajs + "-tasks") || "[]"), { task: task.value, completed: false }]));

   // Izveidojam HTML li elementu, tajā ieliekam uzdevuma nosaukumu, un pievienojam sarakstam.
   const li = document.createElement("li");
   li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
   <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
   <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
   list.insertBefore(li, list.children[0]);
   task.value = "";
 }

 function taskComplete(event) {
   let tasks = Array.from(JSON.parse(localStorage.getItem(lietotajs + "-tasks")));
   tasks.forEach(task => {
     if (task.task === event.nextElementSibling.value) {
       task.completed = !task.completed;
     }
   });
   localStorage.setItem(lietotajs + "-tasks", JSON.stringify(tasks));
   event.nextElementSibling.classList.toggle("completed");
 }

 function removeTask(event) {
   let tasks = Array.from(JSON.parse(localStorage.getItem(lietotajs + "-tasks")));
   tasks.forEach(task => {
     if (task.task === event.parentNode.children[1].value) {
       // dzēšam uzdevumu
       tasks.splice(tasks.indexOf(task), 1);
     }
   });
   localStorage.setItem(lietotajs + "-tasks", JSON.stringify(tasks));
   event.parentElement.remove();
 }

 var currentTask = null;

 // Atrodam pašlaik labojamo uzdevumu
 function getCurrentTask(event) {
   currentTask = event.value;
 }

 // Labojam uzdevuma nosaukumu/statusu, un pēc tam atjauninam LocalStorage glabātuvi
 function editTask(event) {
   let tasks = Array.from(JSON.parse(localStorage.getItem(lietotajs + "-tasks")));
   // pārbaudam, vai uzdevuma teksts nav tukšs
   if (event.value === "") {
     alert("Uzdevuma teksts ir tukšs!");
     event.value = currentTask;
     return;
   }
   // pārbaudam, vai jau neeksistē ar šādu nosaukumu
   tasks.forEach(task => {
     if (task.task === event.value) {
       alert("Uzdevums ar šādu nosaukumu jau eksistē!");
       event.value = currentTask;
       return;
     }
   });
   // atjauninam uzdevuma saturu
   tasks.forEach(task => {
     if (task.task === currentTask) {
       task.task = event.value;
     }
   });
   // un atjauninam konkrētā lietotāja LocalStorage uzdevumu masīvu
   localStorage.setItem(lietotajs + "-tasks", JSON.stringify(tasks));
 }