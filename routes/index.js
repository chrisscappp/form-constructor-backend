// routes
const getFormSimplifyList = require("./getFormSimplifyList/getFormSimplifyList")
const getFormDetail = require("./getFormDetail/getFormDetail")
const getFormQuestions = require("./getFormQuestions/getFormQuestions")
const getReleaseForm = require("./getReleaseForm/getReleaseForm")
const addNewForm = require("./addNewForm/addNewForm")
const updateFormData = require("./updateFormData/updateFormData")
const deleteFormData = require("./deleteFormData/deleteFormData")
const releaseForm = require("./releaseForm/releaseForm")

// user routes
const completeForm = require("./completeForm/completeForm")

module.exports = {
	getFormSimplifyList,
	getFormDetail,
	getFormQuestions,
	getReleaseForm,
	addNewForm,
	updateFormData,
	deleteFormData,
	releaseForm,
	completeForm
}