const inspirationMsg = [

    {
        quote:"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        name:" - Christian D. Larson"
    },
    
    {
        quote:"The only limit to our realization of tomorrow will be our doubts of today.",
        name: "- Franklin D. Roosevelt"
    },
    
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
        name:" - Winston Churchill"
    },
    
    {
        quote:"The best way to predict the future is to create it.",
        name:"- Peter Drucker"
    },
    
    {
        quote:"Don't watch the clock; do what it does. Keep going.",
        name:" - Sam Levenson"
    },
    
    {
        quote:"The only person you are destined to become is the person you decide to be.",
        name:"- Ralph Waldo Emerson"
    
    },
    
    {
        quote:"Believe you can, and you're halfway there.",
        name:" - Theodore Roosevelt"  
    },
    
    {
        quote:"You are never too old to set another goal or to dream a new dream.",
        name:" - C.S. Lewis"
    },
    
    {
        quote:"The difference between a stumbling block and a stepping stone is how you use them.",
        name:"- Unknown"
    },
    
    {
        quote:"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
        name:" - Harriet Tubman"
    },
    
    {
        quote:"The future belongs to those who believe in the beauty of their dreams.",
        name:" - Eleanor Roosevelt"
    },
    
    {
        quote:"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        name:" - Albert Schweitzer"
    },
    
    {
        quote:"The only way to do great work is to love what you do.",
        name:" - Steve Jobs"
    },
    
    {
        quote:"Your time is limited, don't waste it living someone else's life.",
        name:" - Steve Jobs"
    },
    
    {
        quote:"Life is 10% what happens to us and 90% how we react to it.",
        name:" - Charles R. Swindoll"
    }
    ]
    let myParagraph = document.getElementById('inspiration');
    const randmNumber = Math.floor(Math.random()*inspirationMsg.length);

    myParagraph.innerHTML= `${inspirationMsg[randmNumber].quote} <br> ${inspirationMsg[randmNumber].name}`;