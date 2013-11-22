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
	this.address = "";
	this.address2 = "";
	this.zip = "";
	this.nextUrl = "";
	this.nextCaption = "";
	this.items = [];
	
	this.clearCart = function(){
		this.items = [];
	};


	this.populateInfo = function (input){
		this.name = input.name;
		this.address = input.address;
		this.address2 = input.address2;
		this.zip = input.zip;
		this.nextUrl = input.nextUrl;
		this.nextCaption = input.nextCaption;
		this.items = input.items;
	};


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

	this.removeItem = function (item){
		var idx = this.existsInCart(item);
		if (idx > -1) {
			this.items.splice(idx, 1);
		}
	}
} 