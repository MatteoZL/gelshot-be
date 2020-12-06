import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://matt:C0m3g4ll3t4s@cluster0.lxvrn.mongodb.net/gelshot?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("Database is connected"))
  .catch((error) => conosole.error(error));

/*db.products.insert({
  type: "gelatina",
  name: "Guatauva",
  description: "Base de Vodka, uva y menta",
  drink: "vodka",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "gelatina",
  name: "Fuckgirl",
  description: "Base de Brandy, frutos rojos y canela",
  drink: "brandy",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "gelatina",
  name: " Bad guy",
  description: "Base de vodka con salpicón",
  drink: "vodka",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "gelatina",
  name: "Sexy posion",
  description: "Base de Vodka con piña y naranja",
  drink: "vodka",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "gelatina",
  name: "Nox fugaz",
  description: "Base de Brandy con limón y piña",
  drink: "brandy",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "goma",
  name: "Fusion oceanica",
  description: "Chicle, menta y Vodka",
  drink: "vodka",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "goma",
  name: "Caribe tropical",
  description: " Piña con brandy ",
  drink: "brandy",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "goma",
  name: "Canelardiente",
  description: "Canela, tutti fruti y Whisky",
  drink: "whisky",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "goma",
  name: "Zafiro absolut",
  description: "Mora y Vodka",
  drink: "vodka",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});

db.products.insert({
  type: "goma",
  name: "Valquiria",
  description: "Frutos rojos, Whisky y piña",
  drink: "whisky",
  price: 15000,
  photo:
    "https://res.cloudinary.com/mattezl/image/upload/v1606886154/recortado_wgdjpn.png",
});*/
