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
let periLarge = {
    pizzaName: "Peri-peri Chicken",
    pizzaSize: "large",
    pizzaCost: 1200,
};
//Using a prototype on pizza//
pizzaDetails.prototype.peri = function () { return this + "" }


//Using a constructor on pizza//
function pizzaDetails(name, size, cost) {
    this.name = name;
    this.size = size;
    this.cost = cost;
}
let periSmall = new ("periperiChicken");
let periMedium = new ("periperiChicken", "medium", 800);
let periLarge = new ("periperiChicken", "large", 1200);

let vegSmall = new ("Veg Tikka", "small", 550);
let vegMedium = new ("Veg Tikka", "medium", 800);
let vegLarge = new ("Veg Tikka", "large", 1200);



/*
<p>Types of pizza </p>
    <ul>
        <li> Peri-peri Chicken</li>
        <li> Regina</li>
        <li> Veg Tikka</li>
        <li> BBQ Steak</li>
        <li> Boerewors </li>
        <li> Chicken and Mushroom </li>
        <li> Chicken Tikka </li>
        <li> Hawaiian </li>
    </ul>
    <p>Size of pizza </p>
    <ul>
        <li>Small</li>
        <li> Medium</li>
        <li> Large </li>
    </ul>
    <p>Pictures of pizza </p>
    <ul>
        <li>
            <figure><img src="images/Peri-peri Chicken.jpeg">
                <figcaption> Peri-peri Chicken</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/Regina.jpeg">
                <figcaption>Regina</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/Veg Tikka.jpeg">
                <figcaption> Veg Tikka</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/BBQ Steak.jpeg">
                <figcaption> BBQ Steak</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/Boerewors.jpeg">
                <figcaption> Boerewors</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/Chicken and Mushroom.jpeg">
                <figcaption> Chicken and Mushroom</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/Chicken Tikka.jpeg">
                <figcaption>Chicken Tikka</figcaption>
            </figure>
        </li>
        <li>
            <figure><img src="images/Hawaiian.jpeg">
                <figcaption> Hawaiian</figcaption>
            </figure>
        </li>
    </ul>

    <p>Cost of pizza </p>
    <ul>
        <li>Small - 550 kes</li>
        <li> Medium - 800 kes</li>
        <li> Large - 1200 kes</li>
    </ul>
    <p>Types of pizza crust </p>
    <ul>
        <li> Thin crust</li>
        <li> Thick crust</li>
    </ul>
    <p>Types of pizza toppings</p>
    <ul>
        <li> Pepperoni</li>
        <li> Mushroom</li>
        <li> Extra cheese</li>
        <li> Sausage</li>
        <li> Onion</li>
        <li> Black olives</li>
        <li> Green pepper </li>
        <li> Fresh garlic </li>
        <li> Tomato</li>
        <li> Fresh basil</li>
    </ul>
    <p>Cost of pizza toppings</p>
    <ul>
        <li> Pepperoni - 50 kes</li>
        <li> Mushroom - 60 kes</li>
        <li> Extra cheese - 70 kes</li>
        <li> Sausage - 80 kes</li>
        <li> Onion - 50 kes</li>
        <li> Black olives - 60 kes</li>
        <li> Green pepper - 50 kes</li>
        <li> Fresh garlic - 70 kes</li>
        <li> Tomato - 60 kes</li>
        <li> Fresh basil -80 kes</li>
    </ul>
    */