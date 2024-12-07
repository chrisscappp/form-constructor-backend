const { 
	collections, 
	getCollectionItem, 
	addItemToCollection,
	updateCollectionItem
} = require("../../firebase_db")

const completeForm = async (req, res) => {
	const formId = req.params.formId
	const body = req.body

	try {
		let isCompleted = false
		const completedForm = JSON.parse(JSON.stringify(body))
		const completedForms = await getCollectionItem(collections.completedForms, formId)
		const form = await getCollectionItem(collections.forms, formId)
		if (!completedForms.formId) {
			const newForms = [completedForm]
			await addItemToCollection(collections.completedForms, formId, {
				formId,
				forms: newForms
			})
			form.filled += 1
			await updateCollectionItem(collections.forms, formId, form)
			isCompleted = true
		} else {
			const forms = [...completedForms.forms]
			forms.push(completedForm)
			await updateCollectionItem(collections.completedForms, formId, {
				formId,
				forms
			})
			form.filled += 1
			await updateCollectionItem(collections.forms, formId, form)
			isCompleted = true
		}

		res.send({ isCompleted: isCompleted })
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = completeForm