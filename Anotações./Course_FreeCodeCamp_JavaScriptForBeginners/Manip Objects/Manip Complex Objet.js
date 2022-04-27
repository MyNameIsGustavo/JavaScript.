//Manip Complex Objet - Example.

var mystorage = {
    "car": {
        "inside": {
            "glove box" : "maps", 
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var gloveboxcontents = mystorage.car.inside["passenger seat"];
(console.log(gloveboxcontents));