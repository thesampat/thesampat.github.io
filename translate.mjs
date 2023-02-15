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

console.log('text_check2')

eles.map(el=>{

    let elements = document.querySelectorAll(el)

    elements.forEach(ell => {

        Array.from(ell.childNodes).map(async (e)=>{

        let text = e.data

        if(text==undefined) return false;

        let translated_text = await Translate(text)

        e.data = translated_text
    
        })     
    

});
   
})








