import express from "express"
const app = express()
const router = express.Router()
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb";

//localhost:3000/grades.  GET 50 grades
// router.get("/", async (req, res) => {
//     let collection = await db.collection("grades")
//     let results = await collection.find({}).limit(50).toArray()

//     res.send(results).status(200)

// })

//CREATE a single grade entry for a learner NOTE:
// router.post("/", async (req, res) => {
//     let collection = await db.collection("grades")
//     //check the body for an id
//     let data = req.body
//     //if the id exists, insert a document with that id
//     if(data.learner_id){
//         result = await collection.insertOne(data)
//     }
//     res.send(result)


// })

//GET a single grade entry
// router.get("/", async (req, res) => {
//     let collection = await db.collection("grades")
//     let results = await collection.find({}).limit(1).toArray()

//     res.send(results).status(200)

// })


//ADD a score to a grade entry
// router.patch("/:id/add", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { _id: new ObjectId(req.params.id) }
  
//     let result = await collection.updateOne(query, {
//       $push: { scores: req.body }
//     })
  
//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
//   })

//REMOVE a score from a a grade entry
// router.patch("/:id/remove", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { _id: ObjectId(req.params.id) }
  
//     let result = await collection.updateOne(query, {
//       $pull: { scores: req.body }
//     })
  
//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
//   });

//DELETE a single grade entry
// router.delete("/:id", async (req, res) => {
//     let collection = await db.collection("grades");
//     let query = { _id: ObjectId(req.params.id) };
//     let result = await collection.deleteOne(query);
  
//     if (!result) res.send("Not found").status(404);
//     else res.send(result).status(200);
//   });

//GET a learner's grade data
// router.get("/learner/:id", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { learner_id: Number(req.params.id) }
    
//     // Check for class_id parameter
//     if (req.query.class) query.class_id = Number(req.query.class)
  
//     let result = await collection.find(query).toArray()
  
//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
//   })

//DELETE a learner's grade data
// router.delete("/learner/:id", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { learner_id: Number(req.params.id) }
  
//     let result = await collection.deleteOne(query)
  
//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
//   })

//GET a class' grade data
// router.get("/class/:id", async (req,res) => {
//     let collection = await db.collection("grades")
//     let query = {class_id: Number(req.params.id)}

//     // Check for learner_id parameter
//   if (req.query.learner) query.learner_id = Number(req.query.learner)

//     let result = await collection.find(query).toArray()

//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
// })

//UPDATE a class id
// router.patch("/class/:id", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { class_id: Number(req.params.id) }
  
//     let result = await collection.updateMany(query, {
//       $set: { class_id: req.body.class_id }
//     })
  
//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
//   })

//DELETE a class
//  router.delete("/class/:id", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { class_id: Number(req.params.id) }
  
//     let result = await collection.deleteMany(query)
  
//     if (!result) res.send("Not found").status(404)
//     else res.send(result).status(200)
//   })


// GET route that sends grade data by _id.
//http://localhost:3000/grades/grade/56d5f7eb604eb380b0d8d8ce NOTE:  works
// router.get("/grade/:id", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { _id: new ObjectId(req.params.id) }
//     // console.log(id);
//     let result = await collection.findOne(query)
//       .then((result) => {
//         console.log(result);
//         res.send(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });

// GET route that sends all data for a specified student_id. NOTE: works
//http://localhost:3000/grades/learner/0
// router.get("/learner/:id", async (req, res) => {
//   let collection = await db.collection("grades")
//   let query = {learner_id: Number(req.params.id)}
//   let results = await collection.find(query).toArray()
//   .then((result) => {
//     console.log(result);
//     res.send(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// })

// GET route that sends all data for a specified class_id.
//http://localhost:3000/grades/class/339 NOTE: works
// router.get("/class/:id", async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = {class_id: Number(req.params.id)}

//     let result = await collection.find(query).toArray()
      // .then((result) => {
      //   console.log(result);
      //   res.send(result);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
//   });

// GET route that sends the data for a specified combination of learner_id and class_id. NOTE: It works
//http://localhost:3000/grades/class/339?learner/64

  // router.get("/class/:id/learner/:learner_id", async (req, res) => {
  //   try {
  //     // Retrieve grades based on the class and learner
  //     let collection = db.collection("grades");
  //     let query = {
  //       class_id: Number(req.params.id),
  //       learner_id: Number(req.params.learner_id)
  //     };
  
  //     const results = await collection.find(query).toArray();
      
  //     console.log(results);
  //     res.send(results);
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send("Internal Server Error");
  //   }
  // });
  


// GET route that sends the weighted average score for each class for a student.
//http://localhost:3000/grades/class/0
//NOTE:  Getting the correct format but not getting the average score
router.get("/class/:id", async (req, res) => {
  let collection = await db.collection("grades")
  let query = {learner_id: Number(req.params.id)}
  let scores = await collection.find(query).toArray()
  let weightedAvgScore =weightedAvg(scores)
  
    console.log(weightedAvgScore, scores)
    res.send({scores, weightedAvgScore}).status(200)
  
});
const weightedAvg = (scores) => {
  let score=0
  scores.forEach(item => {
    if(item.type=="exam"){
      score += 0.4*query.type
    }else if(item.type=="quiz"){
      score += 0.35*item.type
    }else{
      score += 0.25*item.type
    }
  })
  return score/100
}


// GET route that sends the overall weighted average score for a student.


// POST route to create new grade documents.


// PATCH routes to update the scores array.


// Add a new score.


// Remove a score.


// PATCH route to update class_id.


// DELETE route to remove a single grade entry.
//http://localhost:3000/grades/grade/56d5f7eb604eb380b0d8d8ce NOTE: works
// router.delete("/grade/:id", async (req, res) => {
//   let collection = db.collection("grades")
//   const id = Number(req.params.id);
//   let result = await collection.delete(id)
//     .then((result) => {
//       console.log("deleted item", result)
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });


// DELETE route to remove all of a student's entries. NOTE: HELP
// router.delete("/student/:learner_id", async (req, res) => {
//   let collection = await db.collection("grades")
//   const id = Number(req.params.learner_id);
//   let result = await collection.deleteMany(id)
//     .then((result) => {
//       console.log("deleted item", result)
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// DELETE route to remove all of a class's entries.




export default router