const { collections, getCollectionItem } = require("../../firebase_db")

const getReleaseForm = async (req, res) => {
	const formId = req.params.formId
	try {
		const formDetail = await getCollectionItem(collections.forms, formId)
		if (!formDetail.isRealized || !formDetail) {
			console.error('The user was get not realized form!')
			res.status(404).send('Form is not found')
		}
		const questions = await getCollectionItem(collections.questions, formId)
		if (!questions) {
			res.status(404).send('Questions is not found')
		}
		const mappedQuestions = questions.formQuestions.map((question) => {
			if (question.bindedAnswerIds.length === 0) {
				return question
			}
		}).filter(question => question !== undefined)
		const productionForm = { 
			id: formDetail.id, 
			title: formDetail.title, 
			description: formDetail.description,
			questions: mappedQuestions
		}
  		res.send(productionForm)
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
	
}

module.exports = getReleaseForm