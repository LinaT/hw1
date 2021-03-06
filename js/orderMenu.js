var cart = new CartModel();
var total = 0;

$(function(){
	renderFood(com.dawgpizza.menu);
	renderDrink(com.dawgpizza.menu);
	renderDessert(com.dawgpizza.menu);
	renderTotal();
	$('.addOrder').click(addToCart);
	//$(".template-cart-item").remove();

	//creates the total, subtotal and taxes
	function renderTotal(){
		var tax = total * 0.095;
		var sum = tax + total;
		$(".subtotal-price").html((total).toFixed(2));
		$(".tax-price").html((tax).toFixed(2));
		$(".total-price").html((sum).toFixed(2));
	};

	//removes the item from the cart
	function removeFromCart(){
		var item = new ItemModel({
			name: $(this).attr("data-name"),
			size: $(this).attr("data-size")
		});
		total -= parseInt($(this).attr("data-price"));
		cart.removeItem(item);
		$(this).remove();
		renderTotal();
	}

	//clears items from cart
    $(".clear-cart").click(function() {
        cart.clearCart();
        total = 0;
        renderTotal();
        $(".empty").not(".template1").remove();

 
    });
    
	// adds an item into the cart
	function addToCart () {
		var type = $(this).data("type");
		var name = $(this).data("name");
		var size = "";	
		if (type == "pizza") {
			size = $(this).data("size");
		};
		var price = $(this).data("price");

		var item = new ItemModel({
			name: name,
			type: type,
			size: size,
			price: price,
			qty: 1
		});

		var itemHtml = $(".template-cart-item").clone().removeClass("template-cart-item");
		
		itemHtml.html(name + " " + size + " $" + price);
		$(".cart-items-container").append(itemHtml);

		//removes the item from the cart after being clicked
		itemHtml.click(removeFromCart);
		itemHtml.attr({
			"data-name" : name,
			"data-type": type,
			"data-size": size,
			"data-price": price,
		});

		cart.addItem(item);
		total += parseInt(price);
		renderTotal();
	}

	//submits the order into a modal with click
    //if order is under $20, don't allow the click the work, and opens up an alert window    
    $(".place-order").click(function(){
        if(total < 20){
            alert("You need a minimum order of $20 to purchase");
        } else {
            $("#submitOrderForm").modal();
            $(".finalSubmitButton").click(submitForm);
        }
    });

    //gives the cart the information
    function submitForm() {
        cart.populateInfo({
            name : $(".form-name").val(),
            address1 : $(".form-line1").val(),
            address2 : $(".form-line2").val(),
            zip : $(".form-zip").val(),
            phone : $(".form-phone").val(),
            nextUrl : "http://students.washington.edu/lithach/info343/pizza/",
            nextCaption : "Back to Dawg Pizza"
        });
        $("#jsonForm").val(JSON.stringify(cart));
        $(".address-form").find('[type="submit"]').trigger("click");
    }


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
		    clonedTemplate.find('.prices').html('<button type="button" class="btn btn-default addOrder" data-type = "pizza" data-name = "' + pizza.name + '" data-size = "small" data-price = "' + pizza.prices[0] + '""> $' + pizza.prices[0] + '</button>  ' 
		    									+ '<button type="button" class="btn btn-default addOrder" data-type = "pizza" data-name = "' + pizza.name + '" data-size = "medium" data-price = "' + pizza.prices[1] + '""> $' + pizza.prices[1] + '</button>  ' 
		    									+ '<button type="button" class="btn btn-default addOrder" data-type = "pizza" data-name = "' + pizza.name + '" data-size = "large" data-price = "' + pizza.prices[2] + '""> $' + pizza.prices[2] + '</button>  ' );
		    
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
		    clonedTemplate.find('.price').html('<button type="button" class="btn btn-default btn-sm" addOrder" data-type = "drink" data-name = "' + drink.name + '" data-price = "' + drink.price + '"> $' + drink.price + '</button>  ' );
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
		    clonedTemplate.find('.price').html('<button type="button" class="btn btn-default btn-sm" addOrder" data-type = "dessert" data-name = "' + dessert.name + '" data-price = "' + dessert.price + '"> $' + dessert.price + '</button>  ' );
		    clonedTemplate.removeClass('template');
			container.append(clonedTemplate);
		} //for each dessert
	 } 

});