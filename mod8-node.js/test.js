import { format } from "date-fns";
import { ru } from "date-fns/locale/index.js";

/*
1. Находясь в папке mod8-node выполните команду node test.js и убедитесь, что код из test.js срабатывает
2. Установите пакет date-fns (npm install date-fns --save)
3. Посмотрите установленные пакеты в текущей папке командой node list
4. В файле test.js импортируйте библиотеку import { compareAsc, format } from 'date-fns'
5. Выведите форматированную дату format(new Date(2014, 1, 11), 'yyyy-MM-dd')
6*. Подключите локализацию
*/

// console.log('Hello, Node.js!');

const myDate = format(new Date(), "dd-MM-yyyy");
console.log('format(new Date(), "dd-MM-yyyy") =>', myDate);

const myDate2 = format(new Date(), "dd-MM-yyyy", { locale: ru });
console.log('format(new Date(), "dd-MM-yyyy", { locale: ru }) =>', myDate2);

const myDate3 = format(new Date(), "eeee dd MMMM yyyy г.", { locale: ru });
console.log(
	'format(new Date(), "eeee dd MMMM yyyy г.", { locale: ru }) =>',
	myDate3
);
