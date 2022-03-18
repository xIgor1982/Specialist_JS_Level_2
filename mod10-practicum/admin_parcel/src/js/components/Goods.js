export default class Goods {
	constructor() {
		this.content = document.createElement("div");
		this.content.innerHTML = ` <div class="container-fluid">
        <div class="row">
    
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2 id="goods">Товары</h2>
        <div class="table-responsive">
        <table class="table table-striped table-sm">
            <thead>
            <tr>
                <th scope="col">Артикул товара</th>
                <th scope="col">Изображение</th>
                <th scope="col">Название</th>
                <th scope="col">Цена</th>
                <th scope="col">Количество</th>
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
        
		// fetch("http://localhost:1234/mock-api/goods.json")
		fetch("http://127.0.0.1:5500/mock-api/goods.json")
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				let items = "";

				res.forEach(({ id, title, image, price }) => {
					items += `<tr>
              <td>${id}</td>
              <td><img src=${image} width="100" /></td>
              <td>${title}</td>
              <td>${price}</td>
              <td>5</td>
          </tr>  `;
				});

				targetElement.innerHTML += items;
			})
			.catch((err) => {
				console.log("Goods fetch", err);
			});
	}

	render() {
		console.log("отрисовка Goods");
		return this.content;
	}
}
