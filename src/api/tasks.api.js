import {
  addDoc,
  collection,
  updateDoc,
  doc,
  onSnapshot,
  getDoc,
  getDocs,
  deleteDoc
} from 'firebase/firestore';

import { db } from '../config/firebase'

const collectionName = "tasks";

export const addTask = (task) =>
  addDoc(collection(db, collectionName), task);

export const updateTask = (id, task) =>
  updateDoc(doc(db, collectionName, id), task);

export const getOnSnapshotTasks = (callback) =>
  onSnapshot(collection(db, collectionName), callback);

export const getTasks = () => getDocs(collection(db, collectionName));

export const deleteTask = (id) => deleteDoc(doc(db, collectionName, id));

export const getTask = (id) => getDoc(doc(db, collectionName, id));