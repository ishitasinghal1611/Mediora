const express=require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path=require("path");
const Patient = require("./models/Patient");


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const app=express();
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", async (req,res)=>{

    const total = await Patient.countDocuments();

    res.render("home",{
        total
    });

});
app.get("/addPatient",(req,res)=>{

    res.render("hospital");

});
app.post("/registerPatient", async (req, res) => {

    try {

        const patient = new Patient({

            name: req.body.name,

            date: req.body.date,

            illness: req.body.illness

        });

        await patient.save();

        const count = await Patient.countDocuments();

        res.render("success", {
            count: count
        });

    } catch (err) {

        console.log(err);

        res.send("Error saving patient.");

    }

});

// for counting the no. of patients

app.get("/patientDetails", async (req, res) => {

    try {

        const patients = await Patient.find().sort({
    date: -1
});

        res.render("patientDetails", {
            patients: patients
        });

    } catch (err) {

        console.log(err);

        res.send("Error fetching patients.");

    }

});
app.get("/editPatient/:id", async (req, res) => {

    try {

        const patient = await Patient.findById(req.params.id);

        if (!patient) {
            return res.send("Patient not found");
        }

        res.render("editPatient", { patient });

    } catch (err) {

        console.log(err);

        res.send("Invalid Patient ID");

    }

});
app.post("/updatePatient/:id", async (req, res) => {

    await Patient.findByIdAndUpdate(req.params.id, {

        name: req.body.name,

        date: req.body.date,

        illness: req.body.illness

    });

    res.redirect("/patientDetails");

});
app.post("/deletePatient/:id", async (req, res) => {

    await Patient.findByIdAndDelete(req.params.id);

    res.redirect("/patientDetails");

});
app.get("/search", async (req, res) => {

    const patients = await Patient.find({

        name: {
            $regex: req.query.name,
            $options: "i"
        }

    });

    res.render("patientDetails", {
        patients
    });

});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});
