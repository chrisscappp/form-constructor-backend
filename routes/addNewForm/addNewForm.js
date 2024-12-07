const { addItemToCollection, collections } = require("../../firebase_db")
const { normalizeFormData } = require("../../utils/lib/services/normalizeFormData")

const addNewForm = async (req, res) => {
	const body = req.body

	try {
		const normalizedForm = normalizeFormData(body)
		const formQuestions = normalizedForm.questions
		delete normalizedForm.questions

		await addItemToCollection(collections.forms, normalizedForm.id, normalizedForm)
		await addItemToCollection(collections.questions, normalizedForm.id, {
			formId: normalizedForm.id,
			formQuestions
		})

		normalizedForm.questions = formQuestions
		res.send(normalizedForm)
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = addNewForm