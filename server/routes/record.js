const express = require("express");
const res = require("express/lib/response");
//const { rawListeners } = require("../../../../MERN-BUS-APP/backend/models/User");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
 let db_connect = dbo.getDb("StudentDB");
 db_connect
   .collection("records")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/record/validate").post(async function (request, response) {
  let db_connect = dbo.getDb();
  let em=request.body.email;
  let pw=request.body.password;
  var myDocument = await db_connect.collection("Student").findOne({"email":em});
  if (myDocument)
  {    
    var myPass = myDocument.password;
    if (myPass==pw)
      response.sendStatus(200);
    else
      response.sendStatus(400);
  }
  else
    response.sendStatus(400);
});

// This section will help you create a new record.
recordRoutes.route("/record/add/student").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      name: request.body.name,
      email: request.body.email,
      currentSemester: request.body.currentSemester,
      department: request.body.department,
      registerNumber: request.body.registerNumber,
      password: request.body.password,
    };
    db_connect.collection("Student").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
    
   recordRoutes.route("/record/add/sem5pe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      // registerNumber: request.body.registerNumber,
      // currentSemester: request.body.currentSemester,
      subject1: request.body.subject1,
      subject2: request.body.subject2,
      subject3: request.body.subject3,
    };
    db_connect.collection("sem5pe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

recordRoutes.route("/record/add/sem6pe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      registerNumber: request.body.registerNumber,
      currentSemester: request.body.currentSemester,
      peSubject1: request.body.peSubject1,
      peSubject2: request.body.peSubject2,
      peSubject3: request.body.peSubject3,
    };
    db_connect.collection("sem6pe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   recordRoutes.route("/record/add/sem6oe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      registerNumber: request.body.registerNumber,
      currentSemester: request.body.currentSemester,
      oeSubject1: request.body.oeSubject1,
      oeSubject2: request.body.oeSubject2,
      oeSubject3: request.body.oeSubject3,
    };
    db_connect.collection("sem6oe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

recordRoutes.route("/record/add/sem7pe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      registerNumber: request.body.registerNumber,
      currentSemester: request.body.currentSemester,
      pe1Subject1: request.body.pe1Subject1,
      pe1Subject2: request.body.pe1Subject2,
      pe1Subject3: request.body.pe1Subject3,
    };
    db_connect.collection("sem7pe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   recordRoutes.route("/record/add/sem7pe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      registerNumber: request.body.registerNumber,
      currentSemester: request.body.currentSemester,
      pe2Subject1: request.body.pe2Subject1,
      pe2Subject2: request.body.pe2Subject2,
      pe2Subject3: request.body.pe2Subject3,
    };
    db_connect.collection("sem7pe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
   
recordRoutes.route("/record/add/sem8pe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      registerNumber: request.body.registerNumber,
      currentSemester: request.body.currentSemester,
      peSubject1: request.body.oe1Subject1,
      peSubject2: request.body.oe1Subject2,
      peSubject3: request.body.oe1Subject3,
    };
    db_connect.collection("sem8pe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });

   recordRoutes.route("/record/add/sem8oe").post(function (request, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      registerNumber: request.body.registerNumber,
      currentSemester: request.body.currentSemester,
      oeSubject1: request.body.oe2Subject1,
      oeSubject2: request.body.oe2Subject2,
      oeSubject3: request.body.oe2Subject3,
    };
    db_connect.collection("sem8oe").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
   });
  
   // This section will help you update a record by id.
   recordRoutes.route("/update/:id").post(function (request, response) {
    let db_connect = dbo.getDb(); 
    let myquery = { _id: ObjectId( request.params.id )}; 
    let newvalues = {
      $set: {
        name: request.body.name,
        email: request.body.email,
        currentSemester: request.body.currentSemester,
        department: request.body.department,
        registerNumber: request.body.registerNumber,
      }, 
     }
   });
    
   // This section will help you delete a record
   recordRoutes.route("/:id").delete((request, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( request.params.id )};
    db_connect.collection("Student").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.json(obj);
    });
   });
    
   module.exports = recordRoutes;