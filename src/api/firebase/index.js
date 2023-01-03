import {getDatabase,ref,set,push, onValue} from 'firebase/database'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

export async function saveFavorite(data) {
    console.log(data)
    const db = getDatabase()
    const result = await push(ref(db,`favorites/${data.userId}`), data)
}

export async function setFavorite(data) {
    const db = getDatabase()
    await set(ref(db,`favorites/${data.data.userId}/${data.key}`), data.data)
}

export async function removeFavorite(data) {
    const db = getDatabase()
    await set(ref(db,`favorites/${data.data.userId}/${data.key}`), null)
}

export async function authUser ({email, password}) {
    try {
        const auth = await getAuth();
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user = response.user
        if (!user) return;
        localStorage.setItem("user", JSON.stringify(user))
        return user
    } catch (error) {
        console.log(error.message)
    }
}

export async function registrUser ({email, password}) {
    try {
        const auth = await getAuth();
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user
        return user
    } catch (error) {
        throw error
    }
}

export async function getFavorites(userId) {
    const favorites = []
    const db = getDatabase()
    const dbRef = ref(db, `/favorites/${userId}`)
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = {data: {...childSnapshot.val()}, key: childKey};
            favorites.push(childData)
        });
    }, {
        onlyOnce: true
    });
    return favorites
}