



var getQuote=document.getElementById('block-Content');
var btnGenerate=document.querySelector('#btn')
const url =`./proverbes.json`;

// console.log(getQuote)
 var response=[];
async function getApi(){
     

        try {
          let response = await fetch(url);
          //  console.log(response)
          let getResponse = await response.json();
        // console.log(" the response is",getResponse.length)

          let getRandomQuotes=getResponse[Math.floor(Math.random()*getResponse.length)]
  // console.log(getRandomQuotes.Proverbe)

  if(getRandomQuotes.Proverbe.length<=100){
    getQuote.style.fontSize='2rem';
  }
  // console.log(getRandomQuotes.Proverbe.length)
          getQuote.textContent=getRandomQuotes.Proverbe;
        //  console.log(getResponse[0].Proverbe )
        //  console.log(" the explanation is ",getResponse[0].Explication)
        }
         catch(err) {
          // catches errors both in fetch and response.json
          alert(err);
        }
      
      
     
}

btnGenerate.addEventListener('click',getApi)
