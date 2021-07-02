import { Restaurant } from "./Classes/Restaurant";
import { Oven } from "./Classes/Oven";
import { Stove } from "./Classes/Stove";

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
let bakery = new Restaurant("Bakery", new Oven());
bakery.cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.cook("crepes");
