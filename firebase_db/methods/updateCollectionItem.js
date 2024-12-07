const { updateDoc, doc } = require("firebase/firestore/lite")
const { db } = require("../config/firebaseConfig")

async function updateCollectionItem(collectionId, itemId, item) {
	await updateDoc(doc(db, collectionId, itemId), item)
}

module.exports = { updateCollectionItem }