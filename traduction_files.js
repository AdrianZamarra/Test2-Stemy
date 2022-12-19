const english = {
    "MessageHello": "Hello",
    "MessageHowAreYou": "How are you?",
    "MessageNew": "This is a new message"
    }
const spanish = {
        "MessageHello": "Hola",
        "MessageHowAreYou": "¿Cómo estás?",
        "MessageNew": "This is a new message",

    }
    
    function areTranslationsCorrect(language1, language2) { return JSON.stringify(Object.keys(language1)) === JSON.stringify(Object.keys(language2)) }

    console.log( areTranslationsCorrect(english,spanish) )