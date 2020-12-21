
import { db } from "../firebase";

//Add url if firebase login auth is used.

const dummyData = []
 db.collection("DB Collection Name")
        .get()
        .then(querySnapshot => {
         querySnapshot.docs.map(doc => dummyData.push(doc.data()));
        });

export default dummyData