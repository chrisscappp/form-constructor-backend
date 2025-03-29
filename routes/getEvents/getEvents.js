const { collections, getCollectionItems } = require("../../firebase_db")

const getEvents = async (req, res) => {
	const events = await getCollectionItems(collections.employeeEvents)
	res.send(events)
}

module.exports = getEvents