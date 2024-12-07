const { doc, getDoc } = require("firebase/firestore/lite")
const { db } = require("../config/firebaseConfig")

async function getCollectionItem(collectionId, itemId) {
	const itemRef = doc(db, collectionId, itemId)
	const itemSnapshot = await getDoc(itemRef)

	if (itemSnapshot.exists()) {
		return itemSnapshot.data()
	} else {
  		console.error(`No such document! Collection: ${collectionId}. DocId: ${itemId}`)
		return {}
	}
}

module.exports = { getCollectionItem }