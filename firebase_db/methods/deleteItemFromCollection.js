const { deleteDoc, doc } = require("firebase/firestore/lite")
const { db } = require("../config/firebaseConfig")

async function deleteItemFromCollection(collectionId, itemId) {
	await deleteDoc(doc(db, collectionId, itemId))
}

module.exports = { deleteItemFromCollection }