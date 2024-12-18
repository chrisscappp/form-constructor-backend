const { collections, updateCollectionItem } = require("../../firebase_db")
const { normalizeFormData } = require("../../utils/lib/services/normalizeFormData")

const updateFormData = async (req, res) => {
	const formId = req.params.formId
	const body = req.body

	try {
		const normalizedForm = normalizeFormData(body)
		const formQuestions = [...normalizedForm.questions]
		delete normalizedForm.questions

		await updateCollectionItem(collections.forms, formId, normalizedForm)
		await updateCollectionItem(collections.questions, formId, {
			formId,
			formQuestions: formQuestions
		})

		normalizedForm.questions = formQuestions

		res.send(normalizedForm)
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = updateFormData