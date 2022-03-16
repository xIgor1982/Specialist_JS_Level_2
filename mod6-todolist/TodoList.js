class TodoList {
	constructor(input, button, div1, div2) {
		this.inputText = document.querySelector(input);
		this.btnAdd = document.querySelector(button);
		this.divList = document.querySelector(div1);
		this.divCompleted = document.querySelector(div2);
		this.todoList = [];

		const btnAddClickHandler = this.btnAddClickHandler.bind(this);
		this.btnAdd.addEventListener("click", btnAddClickHandler);
	}

	btnAddClickHandler() {
		const text = this.inputText.value;

		if (!text.trim()) return;

		const uid = uuid.v4();

		const item = {
			uid,
			text,
			status: "uncompleted",
		};

		this.todoList.push(item);
		this.inputText.value = "";
		this.inputText.focus();
		this.render();
	}

	render() {
		const self = this;
		this.divList.innerHTML = "";
		this.divCompleted.innerHTML = "";

		const ulUncompleted = document.createElement("ul");
		const ulCompleted = document.createElement("ul");

		this.todoList.forEach((item) => {
			const li = document.createElement("li");
			const text = document.createTextNode(item.text);
			li.appendChild(text);
			li.setAttribute("data-uid", item.uid);

			li.addEventListener("click", function (ev) {
				if (ev.target.nodeName != "LI") return;

				let id = this.getAttribute("data-uid");

				self.todoList.forEach((item) => {
					if (item.uid == id) {
						item.status =
							item.status == "completed" ? "uncompleted" : "completed";
					}
				});

				self.render();
			});

			const a = document.createElement("a");
			a.innerHTML = "Удалить";
			a.href = "#";
			a.addEventListener("click", function (ev) {
				ev.preventDefault();

				let id = this.parentNode.getAttribute("data-uid");

				self.todoList = self.todoList.filter((item) => item.uid != id);
				self.render();
			});
			li.appendChild(a);

			if (item.status == "uncompleted") {
				ulUncompleted.appendChild(li);
			} else {
				ulCompleted.appendChild(li);
			}
		});
		this.divList.appendChild(ulUncompleted);
		this.divCompleted.appendChild(ulCompleted);
	}
}
