const { 
	collections, 
	updateCollectionItem, 
	addItemToCollection,
	getCollectionItems
} = require("../../firebase_db")

const updateEvents = async (event) => {
	await addItemToCollection(collections.employeeEvents, event.id, event)
}

const updateEmployeeInfo = async (req, res) => {
	const body = req.body

	try {
		const allEvents = await getCollectionItems(collections.employeeEvents) 
		let employeeScores = 0
		const employeeEvents = body.events.map(event => {
			employeeScores += event.scores
			return event.id
		})

		body.events.forEach(event => {
			const findedEvent = allEvents.find(e => e.id === event.id)
			if (!findedEvent) {
				updateEvents(event)
			}
		})

		// update

		await updateCollectionItem(collections.employees, body.id, {
			...body,
			events: employeeEvents,
			score: employeeScores
		})

		res.send({
			...body,
			score: employeeScores
		})
	} catch (e) {
		console.error('Error has been occured: ', e)
		res.status(500).send('Iternal server error')
	}
}

module.exports = updateEmployeeInfo