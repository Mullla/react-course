const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];

employers.forEach( item => {
	if(item.length > 0 && item.trim() != ''){
		command.push(item);
	}
});

command = command.map(item => {
	item = item.toLowerCase().trim();
	item = item[0].toUpperCase() + item.slice(1);
	return item;
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (own) => {
	own = own || 0;

	const total = own.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	});

	return total;
}

const lesson = calcCash(data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
	teacher = teacher || 'Максим';
	const sumTech = data.react.concat(data.add, 'и другие');

	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}. 
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(...sumTech);
}

makeBusiness(...['Артем', null, lesson, command, nameCourse]);
