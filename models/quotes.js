const mongoose=require('mongoose');

const quoteSchema=new mongoose.Schema({
    author:{
        type: String,
    },
    quotes:{
        type:String,
    }
})
module.exports=mongoose.model('Quote',quoteSchema);