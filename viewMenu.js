
$(function(){
	renderFood(com.dawgpizza.menu);
});

function renderFood(com.dawgpizza.menu) {

	var idx;
	var pizza;
	var template = $('.template');
	var clonedTemplate;
	var container = $('.com.dawgpizza.menu.pizzas');

	for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
	    pizza = com.dawgpizza.menu.pizzas[idx];
	    clonedTemplate = template.clone();
	    pizza.name = pizza.find('.name').html(pizza.name);
	    pizza.description = pizza.find('.description').html(pizza.description);
	    pizza.prices = pizza.find('.prices').html(pizza.prices);
	    pizza.prices[0] = price for small
	    pizza.prices[1] = price for medium
	    pizza.prices[2] = price for large

	    clonedTemplate.removeClass('template');
		container.append(clonedTemplate);
	} //for each pizza


	var idx;
	var drink;
	for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
    drink = com.dawgpizza.menu.drinks[idx];

    drink.name = drink.find('.name').html(drink.name);
    drink.price = drink.find('.price').html(drink.price);

	} //for each drink
        

    var idx;
	var dessert;
	for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
    dessert = com.dawgpizza.menu.desserts[idx];

    dessert.name = dessert.find('.name').html(dessert.name);
    dessert.price = dessert.find('.price').html(dessert.price);

	} //for each dessert        

}