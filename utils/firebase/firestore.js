import firebase from './clientApp';
import { collection, doc, getDoc, getDocs, setDoc, getFirestore, deleteDoc, addDoc, orderBy, limit, query, where } from 'firebase/firestore';

const contextDatabase = getFirestore();

/**
 * @param {String} collectionName - The name of collection.
 * @param {Object} sortOrder (optional) - Object contains field and sort direction (default: desc).
 * @param {Number} limitQuery (optional) - Limit the query to n result.
 *
 * @returns {Array} Array of documents.
 */
export const readCollection = async (collectionName, sortOrder = null, limitQuery = null) => {
	let request = {},
		dataList = [],
		q;

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof sortOrder != 'object' && typeof sortOrder != 'string' && sortOrder != null) {
		request.status = 'error';
		request.message = 'sortOrder must be object!';
		return request;
	} else if (typeof limitQuery != 'number' && limitQuery != null) {
		request.status = 'error';
		request.message = 'limitQuery must be number!';
		return request;
	}
	// Check if sort direction empty
	if (typeof sortOrder == 'string') sortOrder = { field: sortOrder };
	if (sortOrder != null && !sortOrder['dir']) sortOrder['dir'] = 'desc';

	const dbReference = collection(contextDatabase, collectionName);

	if (sortOrder && limitQuery) {
		q = query(dbReference, orderBy(sortOrder['field'], sortOrder['dir']), limit(limitQuery));
	} else if (limitQuery) {
		q = query(dbReference, limit(limitQuery));
	} else if (sortOrder) {
		q = query(dbReference, orderBy(sortOrder['field'], sortOrder['dir']));
	} else {
		q = dbReference;
	}
	await getDocs(q)
		.then(async (snapshot) => {
			if (snapshot.empty) {
				request.status = 'error';
				request.message = `${collectionName} is empty!`;
				return request;
			}

			snapshot.forEach((doc) => {
				dataList.push({ id: doc.id, ...doc.data() });
			});

			return dataList;
		})
		.catch((error) => {
			request.status = 'error';
			request.message = `Error has been occured! ErrorMessage = ${error}`;
			return request;
		});

	return dataList;
};

export const findDocument = async (collectionName, id) => {
	let request = {},
		data = {};

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof id != 'number') {
		request.status = 'error';
		request.message = 'documentName must be number!';
		return request;
	}

	const dbReference = collection(contextDatabase, collectionName);
	let q = query(dbReference, where('idIndex', '==', id), limit(1));

	await getDocs(q)
		.then(async (snapshot) => {
			if (snapshot.empty) {
				request.status = 'error';
				request.message = `Can't find document with ID: ${id}!`;
				return request;
			}

			snapshot.forEach((doc) => {
				data = doc.data();
			});

			return data;
		})
		.catch((error) => {
			request.status = 'error';
			request.message = `Error has been occured! ErrorMessage = ${error}`;
			return request;
		});
	return data;
};

/**
 * @param {String} collectionName - The name of collection.
 * @param {String} documentName - The name of document.
 *
 * @returns {Object} Data object from document.
 */
export const readDocument = async (collectionName, documentName) => {
	let request = {},
		data = {};

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof documentName != 'string') {
		request.status = 'error';
		request.message = 'documentName must be string!';
		return request;
	}

	const dbReference = doc(contextDatabase, collectionName, documentName);

	await getDoc(dbReference)
		.then((snapshot) => {
			if (snapshot.exists()) {
				data = snapshot.data();
				return data;
			} else {
				request.status = 'error';
				request.message = `Cannot find ${documentName}!`;
				return request;
			}
		})
		.catch((error) => {
			request.status = 'error';
			request.message = `Error has been occured! ErrorMessage = ${error}`;
			return request;
		});
	return data;
};

/**
 * @param {String} collectionName - The name of collection.
 * @param {String} documentName - The name of document.
 * @param {Object} data - Data want to be added to document.
 *
 * @returns {Object} Status message.
 */
export const createDocument = async (collectionName, documentName, data) => {
	let request = {};

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof documentName != 'string') {
		request.status = 'error';
		request.message = 'documentName must be string!';
		return request;
	} else if (typeof data != 'object') {
		request.status = 'error';
		request.message = 'data must be object!';
		return request;
	}

	const dbReference = doc(contextDatabase, collectionName, documentName);

	await getDoc(dbReference).then(async (snapshot) => {
		if (!snapshot.exists()) {
			await setDoc(dbReference, data)
				.then(() => {
					request.status = 'success';
					request.message = `${documentName} added to ${collectionName}!`;
				})
				.catch((error) => {
					request.status = 'error';
					request.message = `Failed to add ${documentName}! Error message: ${error}`;
				});
		} else {
			request.status = 'error';
			request.message = `${documentName} already exists!`;
		}
		return request;
	});
	return request;
};

/**
 * @param {String} collectionName - The name of collection.
 * @param {Object} data - Data want to be added to document.
 *
 * @returns {Object} Status message.
 */
export const createRandomDocument = async (collectionName, data) => {
	let request = {};

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof data != 'object') {
		request.status = 'error';
		request.message = 'data must be object!';
		return request;
	}

	const dbReference = collection(contextDatabase, collectionName);

	await addDoc(dbReference, data)
		.then((doc) => {
			request.status = 'success';
			request.message = `${doc.id} added to ${collectionName}`;
		})
		.catch((error) => {
			request.status = 'error';
			request.message = `Failed to add document! Error message: ${error}`;
		});
	return request;
};

/**
 * @param {String} collectionName - The name of collection.
 * @param {String} documentName - The name of document.
 * @param {Object} data - Data want to be added to document.
 *
 * @returns {Object} Status message.
 */
export const updateDocument = async (collectionName, documentName, data) => {
	let request = {};

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof documentName != 'string') {
		request.status = 'error';
		request.message = 'documentName must be string!';
		return request;
	} else if (typeof data != 'object') {
		request.status = 'error';
		request.message = 'data must be object!';
		return request;
	}

	const dbReference = doc(contextDatabase, collectionName, documentName);

	await getDoc(dbReference).then(async (snapshot) => {
		if (snapshot.exists()) {
			await setDoc(dbReference, data)
				.then(() => {
					request.status = 'success';
					request.message = `${documentName} at ${collectionName} updated!`;
				})
				.catch((error) => {
					request.status = 'error';
					request.message = `Failed to update ${documentName}! Error message: ${error}`;
				});
		} else {
			request.status = 'error';
			request.message = `${documentName} doesn't exists!`;
		}
		return request;
	});
	return request;
};

/**
 * @param {String} collectionName - The name of collection.
 * @param {String} documentName - The name of document.
 *
 * @returns {Object} Status message.
 */
export const deleteDocument = async (collectionName, documentName) => {
	let request = {};

	//Check type
	if (typeof collectionName != 'string') {
		request.status = 'error';
		request.message = 'collectionName must be string!';
		return request;
	} else if (typeof data != 'object') {
		request.status = 'error';
		request.message = 'data must be object!';
		return request;
	}

	const dbReference = doc(contextDatabase, collectionName, documentName);

	await deleteDoc(dbReference)
		.then(() => {
			request.status = 'success';
			request.message = `${documentName} successfully deleted!`;
		})
		.catch((error) => {
			request.status = 'error';
			request.message = `Failed to delete ${docName}. Error message: ${error}`;
		});
	return request;
};
