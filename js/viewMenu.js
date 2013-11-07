
$(function(){
	renderFood(com.dawgpizza.menu);
});

function renderFood(menu) {
	var idx;
	var pizza;
	var template = $('.pizza');
	var clonedTemplate;
	var container = $('.container-left');

	for (idx = 0; idx < menu.pizzas.length; ++idx) {
	    pizza = menu.pizzas[idx];
	    clonedTemplate = template.clone();
	    clonedTemplate.find('.name').html(pizza.name);
	    clonedTemplate.find('.description').html(pizza.description);
	    clonedTemplate.find('.prices').html('$'+ pizza.prices[0] + " ");
	    clonedTemplate.find('.prices').html('$'+ pizza.prices[1] + " ");
	    clonedTemplate.find('.prices').html('$'+ pizza.prices[2] + " ");

	    clonedTemplate.removeClass('template');
		container.append(clonedTemplate);
	} //for each pizza


	/*var idx;
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
*/
}