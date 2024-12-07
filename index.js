const express = require('express')
const cors = require('cors')
const { 
  getFormSimplifyList,
  getFormDetail,
  getFormQuestions,
  addNewForm,
  updateFormData,
  deleteFormData,
  releaseForm,
  getReleaseForm,
  completeForm
} = require("./routes")

const app = express()
const port = 1111

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: "*"
})) // временная мера

// get form list with simplify data
app.route("/getFormSimplifyList").get(getFormSimplifyList)

// get form detail info with questions
app.route("/getFormDetail/:formId").get(getFormDetail)

// get form questions
app.route("/getFormQuestions").post(getFormQuestions)

// get release form (for the microservice of passing the form)
app.route("/getReleaseForm/:formId").get(getReleaseForm)

// add new form to list
app.route("/addNewForm").post(addNewForm)

// change form data
app.route("/updateFormData/:formId").put(updateFormData)

// delete form data with him questions
app.route("/deleteFormData/:formId").delete(deleteFormData)

// release|unrelease form for passing
app.route("/releaseForm/:formId").put(releaseForm)

app.route("/completeForm/:formId").post(completeForm)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})