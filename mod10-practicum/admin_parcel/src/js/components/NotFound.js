export default class NotFound {
    constructor(){
        console.log("отрисовка NotFound");
        this.content = document.createElement('div');
        this.content.innerHTML = `
        <div class="container-fluid">
            <div class="row">
                <h1>404</h1>
                <h1>Страница не найдена...</h1>
            </div>
        </div>`
    }
    render(){
        console.log('отрисовка NotFound')
        return this.content;
    }
}