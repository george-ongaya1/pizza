 //Pizza object encapsulation //
 let periSmall = {
    pizzaName: "Peri-peri Chicken",
    pizzaSize: "small",
    pizzaCost: 550,
  }; 
  let periMedium = {
    pizzaName: "Peri-peri Chicken",
    pizzaSize: "medium",
    pizzaCost: 800,
  };
  let periLarge= {
    pizzaName: "Peri-peri Chicken",
    pizzaSize: "large",
    pizzaCost: 1200,
  };
//Using a constructor on pizza//
function pizzaDetails (name,size,cost){
    this.name=name;
    this.size=size;
    this.cost=cost;
}
let periSmall = new ("periperiChicken","small",550);
