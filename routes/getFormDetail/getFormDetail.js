const { collections, getCollectionItem } = require("../../firebase_db")

const getFormDetail = async (req, res) => {
	const formId = req.params.formId
	const formDetail = await getCollectionItem(collections.forms, formId)
	const questions = await getCollectionItem(collections.questions, formId)
	formDetail.questions = questions.formQuestions
  	res.send(formDetail)
}

module.exports = getFormDetail