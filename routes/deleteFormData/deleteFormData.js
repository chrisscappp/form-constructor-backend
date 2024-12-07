const { collections, deleteItemFromCollection } = require("../../firebase_db")

const deleteFormData = async (req, res) => {
	const formId = req.params.formId
	try {
		await deleteItemFromCollection(collections.forms, formId)
		await deleteItemFromCollection(collections.questions, formId)
		await deleteItemFromCollection(collections.completedForms, formId)
		res.send(formId)
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = deleteFormData