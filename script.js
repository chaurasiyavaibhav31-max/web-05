
        function addTask() {

            var task = document.getElementById("task").value;

            if (task == "") {
                alert("Please enter a task");
            }

            else {

                var li = document.createElement("li");

                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";

                var span = document.createElement("span");
                span.innerHTML = task;

                checkbox.onclick = function() {
                    span.classList.toggle("completed");
                };

                var btn = document.createElement("button");
                btn.innerHTML = "Delete";
                btn.className = "delete-btn";

                btn.onclick = function() {
                    li.remove();
                };

                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(btn);

                document.getElementById("taskList")
                .appendChild(li);

                document.getElementById("task").value = "";
            }
        }