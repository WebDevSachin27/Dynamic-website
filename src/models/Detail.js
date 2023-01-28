const mongoose = require("mongoose");
const Detail = mongoose.Schema({
    brandName:String,
    brandIconUrl:String,
    links:[
        {
            label:String,
            url:String
        },
    ],
});

// collection and then Schema.
module.exports=mongoose.model("detail",Detail)