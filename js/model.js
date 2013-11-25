//Create the item model
function ItemModel (input){
	this.type = input.type;
	this.name = input.name;
	this.qty = input.qty;
	this.size = input.size;
}

//create the cart model
function CartModel (){
	this.name = "";
	this.address1 = "";
	this.address2 = "";
	this.zip = "";
	this.phone = "";
	this.nextUrl = "";
	this.nextCaption = "";
	this.items = [];
	
	//clears the cart
	this.clearCart = function(){
		this.items = [];
	};

	//takes in the info given by user and adds to cart
	this.populateInfo = function (input){
		this.name = input.name;
		this.address1 = input.address1;
		this.address2 = input.address2;
		this.zip = input.zip;
		this.phone = input.phone;
		this.nextUrl = input.nextUrl;
		this.nextCaption = input.nextCaption;
	};

	//add item to the cart and calls method to checks if it exsist in cart already
	this.addItem = function (item){
		var item1 = this.existsInCart(item);
		if(item1 != -1) {
			this.items[item1].qty++;
		} else {
			this.items.push(item);
		}
	};


	//checks if item is already in the cart
	this.existsInCart = function (item){
		for(var i = 0; i < this.items.length; ++i) {
			if(this.items[i].name == item.name && this.items[i].size == item.size) {
				return i;
			}
		}
		return -1;
	}

	//remove an item from the cart
	this.removeItem = function (item){
		var idx = this.existsInCart(item);
		if (idx > -1) {
			this.items.splice(idx, 1);
		}
	}
} 