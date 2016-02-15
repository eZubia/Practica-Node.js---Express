var express = require("express");

var app = express();

app.get("/evaluar", function(req, res){
	var ex = req.originalUrl;
	var regex = ex.substring(12);
	ex = regex.substring(0, regex.length - 3)
	var valor = eval(ex);
	res.send("El resultado de "+ex +" es: " + valor );
});

app.listen(8081);
