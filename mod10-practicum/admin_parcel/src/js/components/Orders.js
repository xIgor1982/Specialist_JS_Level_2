export default class Orders {
	constructor() {
		console.log("отрисовка Header");
		this.content = document.createElement("div");
		this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="orders">Заказы</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Номер заказа</th>
                <th scope="col">ФИО покупателя</th>
                <th scope="col">Общая цена</th>
                <th scope="col">Статус</th>
            </tr>
            </thead>
            <tbody>
                             
            </tbody>
        </table>
        </div>
          </main>  
        </div>
        </div>`;

		const targetElement = this.content.querySelector("table");
        
		// fetch("http://localhost:1234/mock-api/orders.json")
		fetch("http://127.0.0.1:5500/mock-api/orders.json")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let items = "";

				res.forEach(({ id, name, amount, status }) => {
					items += `
                        <tr>
                            <td>${id}</td>
                            <td>${name}</td>
                            <td>${amount}</td>
                            <td>${status}</td>
                        </tr>  
                    `;
				});

				targetElement.innerHTML += items;
			});
	}
	render() {
		console.log("отрисовка Orders");
		return this.content;
	}
}
