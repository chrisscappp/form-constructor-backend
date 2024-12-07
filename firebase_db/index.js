// methods
const { getCollectionItems } = require("./methods/getCollectionItems")
const { getCollectionItem } = require("./methods/getCollectionItem")
const { addItemToCollection } = require("./methods/addItemToCollection")
const { updateCollectionItem } = require("./methods/updateCollectionItem")
const { deleteItemFromCollection } = require("./methods/deleteItemFromCollection")

// collections
const { collections } = require("./config/firebaseConfig")

module.exports = { 
	getCollectionItems,
	getCollectionItem,
	addItemToCollection,
	updateCollectionItem,
	deleteItemFromCollection,
	collections
}