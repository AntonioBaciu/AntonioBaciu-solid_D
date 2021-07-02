"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Restaurant_1 = require("./Classes/Restaurant");
var Oven_1 = require("./Classes/Oven");
var Stove_1 = require("./Classes/Stove");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
var bakery = new Restaurant_1.Restaurant("Bakery", new Oven_1.Oven());
bakery.cook("cookies");
var crepery = new Restaurant_1.Restaurant("Crepery", new Stove_1.Stove());
crepery.cook("crepes");
