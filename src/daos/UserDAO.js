import { addDoc, collection, updateDoc } from "firebase/firestore";
//import { collection } from "firebase/firestore";
import { db } from "../../firebase.config";


class UserDAO{
    constructor(){
        this.collectionRef =(db,"users");
    }

    async getUserById(id){
        await getDoc(doc(  this.collectionRef, id))
        .then((userDoc)=>{
            if (userDoc.exist()){
                return {succes: true, data: userDoc.data()}
            }else{
                return {succes: false, data: null}
            }
        })
    .catch((error)=>{
        console.log("Eroor getting document",error);
    });
    }

    async createUser(userData){
        await addDoc(this.collectionRef,userData)
        .then((docRef)=>{
            console.log("Document written wiht ID: ",docRef.id);
        })
        .catch((error)=>{
            console.error("Error Adding Document: ",error);
        })
    }

    async updateUser(id, userData){
        const userRef = doc(this.collectionRef, id);
        await updateDoc(userRef, userData)
        .then(console.log("Document succesfully update!"))
        .catch((error)=>{
            console.error("Error updating document: ", error);
        }); 
    }

    async deleteUser(id){
        await deteleteDoc(doc(this.collectionRef, id))
        .the(console.log("Document succesfully deleted!"))
        .catch((error)=>{
            console.error("Error Removing document", error)
        });
    }

}

export default new UserDAO();