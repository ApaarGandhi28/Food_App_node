let a_plan = {
    "id" : "A",
    "benefits" : "B1,B2",
    "price_INR" : "2400",
    "price_DOL" : "35.99"
};

 let b_plan = {
    "id" : "B",
    "benefits" : "B1,B3",
    "price_INR" : "3400",
    "price_DOL" : "45.99"
};

let c_plan = {
    "id" : "C",
    "benefits" : "B3,B4",
    "price_INR" : "1400",
    "price_DOL" : "25.99"
};

 let benefits = {
  "B1" : "Unlimited Free Delivery",
  "B2" : "Upto 60% discount on your favourite restaurants",
  "B3" : "Get discounts on Food Delivery + Dinings ",
  "B4" : "Priority Delivery and Service"
};

 let err_Gender = {
    "code" : "CEB2001",
    "err_text" : "Gender Query is Mandatory"
}

const express = require('express');

const app = express();

app.use(express.json());

app.get("/plans", function (req, res) {
    let isError = false;
    let errType = "";
    console.log("GET plans");
    let plans ={
        subscriptions : [],
        benefits : benefits
    };
    if(req.query.gender === "F"){
        plans["subscriptions"].push(a_plan);
    }else if(req.query.gender === "M"){
        plans["subscriptions"].push(c_plan);
    }else{
        isError = true;
        errType = "CEB2001";
    }

    if(isError){
        if(errType === "CEB2001") res.status(400).json(err_Gender);
    }else res.status(200).json(plans);
})

app.listen(8080, function () {
    console.log("server started");
})