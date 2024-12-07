const { collection, getDocs } = require("firebase/firestore/lite")
const { db } = require("../config/firebaseConfig")

async function getCollectionItems(collectionId) {
	const col = collection(db, collectionId)
  	const snapshot = await getDocs(col)
  	const list = snapshot.docs.map(doc => doc.data())
  	return list
}

module.exports = { getCollectionItems }