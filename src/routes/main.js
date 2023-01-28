const { Router, response } = require("express");
const express = require("express");
const routes = express.Router()
const Detail = require("../models/Detail");
const Service = require("../models/Service");
const Slider = require("../models/Slider");
const Contact = require("../models/Contact");

routes.get("/", async(req, res)=> {
    const details = await Detail.findOne({"_id":'63d0e027e618dcb430a58cd8'});
    const slides = await Slider.find()
    const services = await Service.find()
    res.render("index",{
        data:details,
        show:slides,
        facility:services
    });
});

routes.get("/gallery", async(req, res)=> {
    const details = await Detail.findOne({"_id":'63d0e027e618dcb430a58cd8'})
    res.render("gallery",{
        data:details
    })
});




routes.get("/home", async(req, res)=> {
    const details = await Detail.findOne({"_id":'63d0e027e618dcb430a58cd8'})
    res.render("index",{
        data:details
    })
});

// process contact form
routes.post("/process-contact-form",async (request, response)=>{
    console.log("form is submitted")
   try{
    const data=Contact.create(request.body)
    response.redirect("/")
   } catch(e)
   {
    console.log(e)
    response.redirect("/")
   }
})

module.exports=routes;