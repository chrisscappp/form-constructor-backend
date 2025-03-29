// routes

// form
const getFormSimplifyList = require("./getFormSimplifyList/getFormSimplifyList")
const getFormDetail = require("./getFormDetail/getFormDetail")
const getFormQuestions = require("./getFormQuestions/getFormQuestions")
const getReleaseForm = require("./getReleaseForm/getReleaseForm")
const getFormFilledStats = require("./getFormFilledStats/getFormFilledStats")
const addNewForm = require("./addNewForm/addNewForm")
const updateFormData = require("./updateFormData/updateFormData")
const deleteFormData = require("./deleteFormData/deleteFormData")
const releaseForm = require("./releaseForm/releaseForm")

// employees
const getEvents = require("./getEvents/getEvents")
const getEmployeesList = require("./getEmployeesList/getEmployees")
const getEmployeeDetail = require("./getEmployeeDetail/getEmployeeDetail")
const updateEmployeeInfo = require("./updateEmployeeInfo/updateEmployeeInfo")

// user routes
const completeForm = require("./completeForm/completeForm")

module.exports = {
	getFormSimplifyList,
	getFormDetail,
	getFormQuestions,
	getReleaseForm,
	getFormFilledStats,
	getEvents,
	getEmployeesList,
	getEmployeeDetail,
	updateEmployeeInfo,
	addNewForm,
	updateFormData,
	deleteFormData,
	releaseForm,
	completeForm
}