
$(function(){
	renderFood(com.dawgpizza.menu);
	renderDrink(com.dawgpizza.menu);
	renderDessert(com.dawgpizza.menu);
});

function renderFood(menu) {
	var idx;
	var pizza;
	var template = $('.pizza');
	var clonedTemplate;
	var container = $('.pies');

	for (idx = 0; idx < menu.pizzas.length; ++idx) {
	    pizza = menu.pizzas[idx];
	    clonedTemplate = template.clone();
	    clonedTemplate.find('.name').html(pizza.name);
	    clonedTemplate.find('.description').html(pizza.description);
	    clonedTemplate.find('.prices').html("<button type=\"button\" class=\"btn btn-default\">$" + pizza.prices[0] + "</button>  " 
	    									+ "<button type=\"button\" class=\"btn btn-default\">$" + pizza.prices[1] + "</button>  " 
	    									+ "<button type=\"button\" class=\"btn btn-default\">$" + pizza.prices[2] + "</button>  " );
	    
		clonedTemplate.removeClass('template');
	   

		container.append(clonedTemplate);
	    
	} //for each pizza
}

function renderDrink(menu) {
	var idx;
	var drink;
	var template = $('.drink');
	var clonedTemplate;
	var container = $('.drinks');
	for (idx = 0; idx < menu.drinks.length; ++idx) {
	    drink = menu.drinks[idx];
	    clonedTemplate = template.clone();
	    clonedTemplate.find('.name').html(drink.name);
	    clonedTemplate.find('.price').html(' $' + drink.price);
	    
	    clonedTemplate.removeClass('template');
		container.append(clonedTemplate);
	} //for each drink
 }       


function renderDessert(menu) {
	var idx;
	var dessert;
	var template = $('.dessert');
	var clonedTemplate;
	var container = $('.desserts');
	for (idx = 0; idx < menu.desserts.length; ++idx) {
	    dessert = menu.desserts[idx];
	    clonedTemplate = template.clone();
	    clonedTemplate.find('.name').html(dessert.name);
	    clonedTemplate.find('.price').html(' $' + dessert.price);
	    
	    clonedTemplate.removeClass('template');
		container.append(clonedTemplate);
	} //for each dessert
 } 