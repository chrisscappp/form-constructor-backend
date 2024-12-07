const { collections, getCollectionItems } = require("../../firebase_db")

const getFormSimplifyList = async (req, res) => {
	const originFormList = await getCollectionItems(collections.forms)
  	res.send(originFormList)
}

module.exports = getFormSimplifyList