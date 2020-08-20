var x = require("express");
var y = x();

y.listen(3001, () => {
    console.log("server running");
});