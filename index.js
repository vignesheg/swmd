import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue ,set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyB0E_PGTbckioWa4ovCVIzKU-YE_a-Yofo",
  
    authDomain: "name-1fc52.firebaseapp.com",
  
    databaseURL: "https://name-1fc52-default-rtdb.firebaseio.com",
  
    projectId: "name-1fc52",
  
    storageBucket: "name-1fc52.appspot.com",
  
    messagingSenderId: "632207023956",
  
    appId: "1:632207023956:web:3a76b821ed7455a096f2c1",
  
    measurementId: "G-Z5K2H6T00D"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

//setting reference for keys in realtime databse
const First_store = ref(database,"FIRST STORE");
const FIRST_MQ135 = ref(database,"FIRST_MQ135");
const FIRST_MQ2 = ref(database,"FIRST_MQ2");
const FIRST_MQ4 = ref(database,"FIRST_MQ4");
const FIRST_MQ6 = ref(database,"FIRST_MQ6");
const LAST_MQ135 = ref(database,"LAST_MQ135");
const LAST_MQ2 = ref(database,"LAST_MQ2");
const LAST_MQ4 = ref(database,"LAST_MQ4");
const LAST_MQ6 = ref(database,"LAST_MQ6");
const MQ135 = ref(database,"MQ135");
const MQ2 = ref(database,"MQ2");
const MQ4= ref(database,"MQ4");
const MQ6 = ref(database,"MQ6");
const RESULT_MQ135 = ref(database,"RESULT_MQ135");
const RESULT_MQ2 = ref(database,"RESULT_MQ2");
const RESULT_MQ4 = ref(database,"RESULT_MQ4");
const RESULT_MQ6 = ref(database,"RESULT_MQ6");


  onValue(First_store,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'firstStore');
});

  onValue(FIRST_MQ135,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'firstMq135');
});

  onValue(FIRST_MQ2,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'firstMq2');
});

  onValue(FIRST_MQ4,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'firstMq4');
});

  onValue(FIRST_MQ6,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'firstMq6');
});

  onValue(LAST_MQ135,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'lastMq135');
});

  onValue(LAST_MQ2,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'lastMq2');
});

  onValue(LAST_MQ4,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'lastMq4');
});

  onValue(LAST_MQ6,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'lastMq6');
});

  onValue(MQ135,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'Mq135');
});

  onValue(MQ2,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'Mq2');
});

  onValue(MQ4,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'Mq4');
});

  onValue(MQ6,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'Mq6');
});

  onValue(RESULT_MQ135,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'resultMq135');
});

  onValue(RESULT_MQ2,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'resultMq2');
});

  onValue(RESULT_MQ4,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'resultMq4');
});

  onValue(RESULT_MQ6,(getval)=>{
 const val = getval.val();
    replaceTagVal(val,'resultMq6');
});

function replaceTagVal(value,id){
    document.getElementById(id).innerHTML = value;
}




