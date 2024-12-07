const { setDoc, doc } = require("firebase/firestore/lite")
const { db } = require("../config/firebaseConfig")

async function addItemToCollection(collectionId, itemId, item) {
	await setDoc(doc(db, collectionId, itemId), item)
}

module.exports = { addItemToCollection }