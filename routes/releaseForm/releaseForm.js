const { collections, updateCollectionItem } = require("../../firebase_db")

const releaseForm = async (req, res) => {
	const formId = req.params.formId
	const body = req.body

	try {
		body.isRealized = !body.isRealized
		await updateCollectionItem(collections.forms, formId, body)
		res.send(body)
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = releaseForm