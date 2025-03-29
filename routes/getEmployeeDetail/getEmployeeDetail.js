const { collections, getCollectionItems, getCollectionItem } = require("../../firebase_db")

const getEmployeeDetail= async (req, res) => {
	const employeeId = req.params.employeeId
	const employee = await getCollectionItem(collections.employees, employeeId)
	const events = await getCollectionItems(collections.employeeEvents)

	if (!employee) {
		res.status(404).json({ error: "Список пуст" })
	}

	const employeeEventsIds = employee.events
	const employeeEvents = []
	employeeEventsIds.forEach(id => {
		const findEvent = events.find(event => event.id === id)
		if (findEvent) {
			employeeEvents.push(findEvent)
		}
	})

	employee.events = employeeEvents

  	res.send(employee)
}

module.exports = getEmployeeDetail