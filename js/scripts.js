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
let periMedium = new ("periperiChicken","medium",800);
let periLarge = new ("periperiChicken","large",1200);

let vegSmall = new ("Veg Tikka","small",550);
let vegMedium= new ("Veg Tikka","medium",800);
let vegLarge = new ("Veg Tikka","large",1200);




<li> Regina</li>
        <li> Veg Tikka</li>
        <li> BBQ Steak</li>
        <li> Boerewors </li>
        <li> Chicken and Mushroom </li>
        <li> Chicken Tikka </li>
        <li> Hawaiian </li>