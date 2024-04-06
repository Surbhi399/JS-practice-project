const menu ={
    _meal:'',
    _price:0,
    set meal(mealToCheck) {
    if(typeof menu._meal==='string'){
      return this._meal = mealToCheck;
    }
  
  },
  set price(priceToCheck){
    if(typeof perice._price ==='string'){
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial(){
   if(this._meal && this._price){
    return `Today’s Special is ${this._meal} for $${this._price}!`;
   } 
  }
  }
  
  
  menu._price=88;
  menu._meal = "pizza";
  console.log(menu);
  console.log(menu.todaysSpecial);