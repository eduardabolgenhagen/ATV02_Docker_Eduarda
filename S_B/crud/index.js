const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    were,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCZfylZ6VRE17gNmFybNFyinaDk9hkLxw8",
    authDomain: "learning-docker-6f896.firebaseapp.com",
    projectId: "learning-docker-6f896",
    storageBucket: "learning-docker-6f896.appspot.com",
    messagingSenderId: "315634099939",
    appId: "1:315634099939:web:4daa87e0aa1950c88f87d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function save(table, id, data) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, table, id), data);
        const savedData = {
            ...data,
            id: id
        }
        return savedData;
    } else {
        const referenceEntity = await addDoc(collection(db, table), data);
        const savedData = {
            ...data,
            id: referenceEntity.id
        }
        return savedData;
    }
};

async function get(table) {
    const refTable = collection(db, table);
    const q = query(refTable);
    const querySnapshot = await getDocs(q);
    const list = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        list.push(data);
    })
    return list;
};

async function getById(table, id) {
    const docRef = doc(db, table, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Error("Not found!");
    }
};

async function remove(table, CPF) {
    const data = await deleteDoc(doc(db, table, CPF));
    console.log("Removido com sucesso");
    return {
        message: `${CPF} removido!`
    }
};

module.exports = {
    save,
    get,
    getById,
    remove
};