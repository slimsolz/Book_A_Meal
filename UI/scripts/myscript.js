function myFunction() {
	/*let all_meals = ['Rice & stew', 'Eba & Efo', 'Fufu & Egusi', 'Pancake', 'Friedrice', 'Bread & Egg'];*/
	let today_meal = [];
	let selectedMeal = '';

	let meal = document.forms[0];
	let i;
	for (i = 0; i < meal.length; i++) {
		if (meal[i].checked) {
			selectedMeal = meal[i].value;
			today_meal.push(selectedMeal);
		}
	}

	let ulElement = document.getElementById('mealList');
	ulElement.innerHTML = '';
	let btn = document.getElementById('save_menu_button');

	if (today_meal.length > 0) {
		btn.removeAttribute('disabled');
	}else{
		btn.setAttribute('disabled','disabled');
	}
	
	console.log(today_meal)

	for (let j = 0; j < today_meal.length; j++) {	
		/*let listText = document.createTextNode(today_meal[j]);
		
		let myElement = document.createElement('li');
		ulElement.appendChild(myElement);	
		myElement.appendChild(listText);*/
		ulElement.innerHTML += `<li>${today_meal[j]}</li>`;
	}	   
}

function getTotal() {
	let totalElement = document.getElementById('total');
	let qua = document.getElementById('quantity');
	quantityValue = qua.options[qua.selectedIndex].value;
	let totalval = 350 * quantityValue;
	
	let totalResult = document.getElementById('total');

	totalResult.innerHTML = `<label>Total: &#8358;${totalval}</label>`;
}