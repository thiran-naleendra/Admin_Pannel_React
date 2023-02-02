import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  connectFirestoreEmulator,
} from "firebase/firestore";


function Course() {
  const [newCourse, setNewCourse] = useState("");
  const [newDuration, setNewDuration] = useState("");
  const [newFee, setNewFee] = useState("");
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "course");

  
  

 const createCourse = async () => {
    await addDoc(usersCollectionRef, {
        courseName: newCourse,
        duration: newDuration,
        fee: newFee
    } );
 }

  const updateCourse = async (id, courseName) => {
    const userDoc = doc(db, "course", id);
    const newFields = {
      courseName: newCourse,
      duration: newDuration,
      fee: newFee,
    };
    await updateDoc(userDoc, newFields);
  };






  const deleteUser = async (id) => {
    const userDoc = doc(db, "course", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  return (
    <div className="Course">
      <form>
        <input
          placeholder="Course Name"
          onChange={(event) => {
            setNewCourse(event.target.value);
          }}
        />
        <br />
        <input
          placeholder="Duration"
          onChange={(event) => {
            setNewDuration(event.target.value);
          }}
        />
        <br />
        <input
          placeholder="Course fee"
          onChange={(event) => {
            setNewFee(event.target.value);
          }}
        />
        <br />
        </form>
      
      <button onClick={createCourse} >Create Course</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th> Fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => {
            return (
                
              <tr>
                <td>{users.courseName}</td>
                <td>{users.duration}</td>
                <td>{users.fee}/=</td>
                <td> <button>Edit</button>
                  {/* <button 
                    onClick={() => {
                      updateCourse(
                        users.id,
                        users.courseName,
                        users.duration,
                        users.fee
                      );
                    }}
                  >
                    Edit
                  </button> */}
                  <button 
                  onClick={()=>{deleteUser(users.id)}}>
                    Delete
                  </button>
                  </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Course;
