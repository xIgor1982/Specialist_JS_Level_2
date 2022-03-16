(function () {
	const inputText = document.querySelector("#text");
	const btnAdd = document.querySelector("#btnAdd");
	const divList = document.querySelector("#list");
	const divCompleted = document.querySelector("#completed");

	let todoList = [];

	btnAdd.addEventListener("click", function (ev) {
		const text = inputText.value;

		if (!text.trim()) return;

		const uid = uuid.v4();

		const item = {
			uid,
			text,
			status: "uncompleted",
		};

		todoList.push(item);

		inputText.value = "";
		inputText.focus();
		render();
	});

	function render() {
		divList.innerHTML = "";
		divCompleted.innerHTML = "";

		const uncompletedItems = todoList.filter(
			(item) => item.status == "uncompleted"
		);
		const ulUncompleted = document.createElement("ul");
		uncompletedItems.forEach((item) => {
			const li = document.createElement("li");
			const text = document.createTextNode(item.text);
			li.appendChild(text);
			li.setAttribute("data-uid", item.uid);

			li.addEventListener("click", function (ev) {
				if (ev.target.nodeName != "LI") return;

				let id = this.getAttribute("data-uid");

				todoList.forEach((item) => {
					if (item.uid == id) {
						item.status =
							item.status == "completed" ? "uncompleted" : "completed";
					}
				});

				render();
			});

			const a = document.createElement("a");
			a.innerHTML = "Удалить";
			a.href = "#";
			a.addEventListener("click", function (ev) {
				ev.preventDefault();

				let id = this.parentNode.getAttribute("data-uid");
				console.log(id);

				todoList = todoList.filter((item) => item.uid != id);
				render();
			});
			li.appendChild(a);

			ulUncompleted.appendChild(li);
		});
		divList.appendChild(ulUncompleted);

		const completedItems = todoList.filter(
			(item) => item.status == "completed"
		);
		const ulCompleted = document.createElement("ul");

		completedItems.forEach((item) => {
			const li = document.createElement("li");
			const text = document.createTextNode(item.text);
			li.appendChild(text);
			li.setAttribute("data-uid", item.uid);

			li.addEventListener("click", function (ev) {
				if (ev.target.nodeName != "LI") return;

				let id = this.getAttribute("data-uid");

				todoList.forEach((item) => {
					if (item.uid == id) {
						item.status =
							item.status == "completed" ? "uncompleted" : "completed";
					}
				});

				render();
			});

			const a = document.createElement("a");
			a.innerHTML = "Удалить";
			a.href = "#";
			a.addEventListener("click", function (ev) {
				ev.preventDefault();
				let id = this.parentNode.getAttribute("data-uid");
				console.log(id);

				todoList = todoList.filter((item) => item.uid != id);
				render();
			});
			li.appendChild(a);
			ulCompleted.appendChild(li);
		});
		divCompleted.appendChild(ulCompleted);
	}
})();
