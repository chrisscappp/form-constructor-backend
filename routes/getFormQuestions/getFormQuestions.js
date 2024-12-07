const { collections, getCollectionItem } = require("../../firebase_db")

const getFormQuestions = async (req, res) => {
	const { formId, questionIds } = req.body
	
	try {
		const questions = await getCollectionItem(collections.questions, formId)
		if (!questionIds) {
			res.send(questions.formQuestions)
		} else {
			const findedQuestion = questions.formQuestions.filter(question => questionIds.includes(question.id))
			res.send(findedQuestion)
		}
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = getFormQuestions