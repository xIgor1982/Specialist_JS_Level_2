export default class Nav {
	constructor(app, options) {
		this.content = document.createElement("div");

		this.app = app;

		const liCollection = options.menuItems.map((item) => {
			const li = document.createElement("li");
			li.classList.add("nav-item");

			const a = document.createElement("a");

			const span = document.createElement("span");
			span.setAttribute("data-feather", item.feather);
			a.appendChild(span);

			const text = document.createTextNode(item.title);
			a.appendChild(text);
			a.classList.add("nav-link");
			a.href = `#${item.path}`;
			a.setAttribute("data-path", item.path);

			a.addEventListener("click", (ev) => {				
				ev.preventDefault();
				// console.log("a.href =>", a.href);
				this.app.clickPage("#" + ev.target.getAttribute("data-path"));
			});

			li.appendChild(a);
			return li;
		});
		// console.log(liCollection)

		this.content.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3">
                        <ul class="nav flex-column">

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        `;

		const ul = this.content.querySelector("ul");
		liCollection.forEach((li) => ul.appendChild(li));
	}
	render() {
		console.log("отрисовка Nav");
		return this.content;
	}
}
