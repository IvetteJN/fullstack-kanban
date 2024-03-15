import { collection, addDoc, serverTimestamp, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';
import useStore from '../store';


const useApp = () => {

    const {currentUser: {uid}} = getAuth()
    const boardsColRef = collection(db, `user/${uid}/boards`);
    const { setBoards } = useStore();

    const createBoard = async ({ name, color }) => {
        try{
            await addDoc(boardsColRef, {
                name, color, createdAt: serverTimestamp(),
            });
        }catch(err){
            //to do showing the msg in toastr
            console.log(err);
            throw err;
        }
    };
    const fetchBoards = async (setLoading) => {
        try {
            const querySnapshot = await getDocs(boardsColRef)
            const boards = querySnapshot.docs.map((doc) => ({
                ...doc.data(), id: doc.id, createdAt: doc.data().createdAt.toDate().toLocaleDateString() }));
            setBoards(boards)
        } catch (err) {
            //TODO showing the msg in toastr
            console.log(err);
        } finally{
            if(setLoading) setLoading(false)
        }
    };
    
        return { createBoard , fetchBoards };
    };

export default useApp;