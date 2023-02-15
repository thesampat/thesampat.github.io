// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFMTU1C1OtR1a3JpADig5IHKhbDhV3oC8",
  authDomain: "codingallstarts.firebaseapp.com",
  projectId: "codingallstarts",
  storageBucket: "codingallstarts.appspot.com",
  messagingSenderId: "736510337410",
  appId: "1:736510337410:web:bfb76976daffba9643ef9b",
  measurementId: "G-W4QRZZ2096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const KEY = 'AIzaSyAoJwn2tmtL-xN3acUyTCyq2dX40ohLIqI'
const language = 'HI'
const string = "Helo how are you"


const Translate=(string)=>{

    const promise = axios.post(`https://translation.googleapis.com/language/translate/v2?key=${KEY}&q=${string}&target=${language}`)
    
    const dataPromise = promise.then(res=>res.data.data.translations[0].translatedText)

   promise.catch(el=>{

        if(el.response.data.error){
            console.log(el.response.data.error.message)
            
        }
    })

    return dataPromise
        
}


let eles = ['p','h1' ,'h2', 'h3', 'h4', 'h5', 'h6', 'strong', 'span', 'a', 'div', 'li']

console.log('text')

// eles.map(el=>{

//     let elements = document.querySelectorAll(el)

//     elements.forEach(ell => {

//         Array.from(ell.childNodes).map(async (e)=>{

//         let text = e.data

//         if(text==undefined) return false;

//         let translated_text = await Translate(text)

//         e.data = translated_text
    
//         })     
    

// });
   
// })








