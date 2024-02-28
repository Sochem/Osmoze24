// import { db } from "../firebase";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userInfoRef = collection(db, "events");
class EventDataService {
  getAllEvents = () => {
    return getDocs(userInfoRef);
  };

  getEvent = (id) => {
    const userDoc = doc(db, "events", id);
    return getDoc(userDoc);
  };
  //upadte
  updateEvent = (id, updatedEvent) => {
    const eventDoc = doc(db, "events", id);
    return updateDoc(eventDoc, updatedEvent);
  };
}

const EventService = new EventDataService();
export default EventService;
