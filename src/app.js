const express = require("express");
const routes = require("./routes/main");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");

app.use(bodyParser.urlencoded({extended:true}));
app.use("",routes);


// to make our files accessable we use static
app.use("/static",express.static("public"));

// template engine
app.set('view engine', 'hbs')
app.set('views', 'views')

// partial path defined
hbs.registerPartials("views/partials");

// database connection
mongoose.connect("mongodb://0.0.0.0:27017/website",()=>{
    console.log("connected db successfully")
        //   Service.create([
        //    {
        //     icon:'fa-solid fa-camera-cctv',
        //     title:'CCTV Security',
        //     description:'We provide 24*7 CCTV security at your home & office',
        //     linkText:'Contact'
        //    },
        //    {
        //     icon:'fa-regular fa-house-lock',
        //     title:'Smart Lock System',
        //     description:'We provide smart lock security at your home & office',
        //     linkText:'Contact'
        //    },
        //    {
        //     icon:'fa-regular fa-house-signal',
        //     title:'Remote Controlled Appliances',
        //     description:'We also sell remote operated appliances',
        //     linkText:'Contact'
        //    },
        //   ])

    //    Slider.create([
    //     {
    //         title:"Make Your Surrounding Secure",
    //         subTitle:"Hi-Tech Security System provides best security ever",
    //         imageUrl:"/static/images/s1.jpg"
    //     },
    //     {
    //         title:"Your Home & Work Place under 24*7 surveillance",
    //         subTitle:"Hi-Tech Security System provides live video streaming of your home & work place",
    //         imageUrl:"/static/images/s2.jpg"
    //     },
    //     {
    //         title:"Moniter All Cameras With Your Smart Devices",
    //         subTitle:"Hi-Tech Security System provides all controls of cameras in your hand",
    //         imageUrl:"/static/images/s3.jpg"
    //     },
    //    ])  
//     Detail.create({
//       brandName:"Security Solutions",
//       brandIconUrl:"https://media.istockphoto.com/id/482112104/photo/security-cctv-camera-in-office-building.jpg?s=612x612&w=0&k=20&c=vT86olucO-hgeIZ1zV1Lx97X_54h7dzx2yJ8LRSo7IM=",
//       links:[
//           {
//               label:"Home",
//               url:"/"
//           },
//           {
//               label:"Services",
//               url:"/services"
//           },
//           {
//             label: "Gallery",
//             url: "/gallery"
//           },  
//           {
//             label: "About",
//             url: "/about"
//           },  
//           {
//             label: "Contact Us",
//             url: "/contact-us"
//           } 
//       ]
//    });
});


app.get("/", (req,res)=>{
    res.render("index");
});



app.listen(process.env.PORT | 3000, ()=>{
    console.log("server started at port 3000...")
});