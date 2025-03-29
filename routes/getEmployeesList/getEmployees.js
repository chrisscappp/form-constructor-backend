const { collections, getCollectionItems } = require("../../firebase_db")

const getEmployeesList = async (req, res) => {
	const employees = await getCollectionItems(collections.employees)
	if (!employees) {
		res.status(404).json({ error: "Список пуст" })
	}
  	res.send(employees)
}

module.exports = getEmployeesList