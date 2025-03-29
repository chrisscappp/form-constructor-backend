const { collections, getCollectionItem } = require("../../firebase_db")

const getReleaseForm = async (req, res) => {
	const formId = req.params.formId
	try {
		const formDetail = await getCollectionItem(collections.forms, formId)
		if (!formDetail.isRealized || !formDetail) {
			res.status(404).json({
				message: 'Form is not found'
			})
			return
		}
		const questions = await getCollectionItem(collections.questions, formId)
		if (!questions) {
			res.status(404).json({
				message: 'Questions is not found'
			})
			return
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
  		res.send({
			questionCount: formDetail.questionCount,
			productionForm
		})
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
		return
	}
}

module.exports = getReleaseForm