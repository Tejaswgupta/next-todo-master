import { db, timestamp } from '../firebase/firebase.utils'

export const getData = async () => {
  const todosCollection = await db.collection('todos').orderBy('time', 'asc').get()
  return todosCollection.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })
}

export const saveData = (collection: string, label: string, done: boolean) => {
  return db.collection(collection).add({
    label,
    time: timestamp,
    done
  })
};

export const deleteTodo = (collection: string, id: string) => {
  return db.collection(collection).doc(id).delete()
};

export const updateCheckboxDocument = (id: string, done?: boolean) => {
  return db.collection('todos').doc(id).update({
    done,
  });
}
export const updateTodo = (id: string, label: string) => {
  return db.collection('todos').doc(id).update({
    label,
  });
}

