// find timer 
let myH1 = document.querySelector('#counter')
let innerCounter = myH1.innerText 
console.log(innerCounter)


// increment the counter by 1 
function increase() {
   let num = parseInt(myH1.innerText) 
   num = num + 1
   myH1.innerText = num
}

function decrease() {
    let num = parseInt(myH1.innerText) 
    num = num - 1
    myH1.innerText = num
 }

// incremement by 1 every second
   function increasingCounter() {
      return setInterval(increase, 1000)
   }
   let increaseNew = increasingCounter()


// find buttons  
let plusButton = document.querySelector('#plus')
let minusButton = document.querySelector('#minus')

// change values
plusButton.addEventListener('click', increase)
minusButton.addEventListener('click', decrease)







// ul finder 
let list = document.querySelector('.likes')
console.log(list)

// li finder 
let allLis = document.querySelectorAll('ul.likes li')
console.log(allLis)

//find like button 
let like = document.querySelector('#heart')
console.log(like)



function createLike() {
   let times = 1
   let alreadyLiked = document.querySelector(`#number-${myH1.innerText}`)
   if (alreadyLiked) {
      let hasBeenLiked = alreadyLiked.innerText.split(' ')[4]
      hasBeenLiked = parseInt(hasBeenLiked) + 1
      alreadyLiked.innerText = `${myH1.innerText} has been liked ${hasBeenLiked} times`
   } else {
   let liElement = document.createElement('li')
   liElement.id = `number-${myH1.innerText}`
   liElement.innerText = `${myH1.innerText} has been liked ${times} times`
   list.appendChild(liElement) 
   }
}
//create element 
function likeButton () {

let times = 1

// create line
element.innerText = `${myH1.innerText} has been liked ${times} times`
list.appendChild(element) 
newArray.push(myH1.innerText)

}

// on click this will happen 
like.addEventListener('click', createLike)





////////PAUSE AND RESUMER BUTTON////////

//find pause button 
let pause = document.querySelector('#pause')
console.log(pause)

// click event stop timer


pause.addEventListener('click', function(){
   let array = document.querySelectorAll('button')

   if (pause.innerText === "pause"){
      clearInterval(increaseNew)
      pause.innerText = "resume"

      for (let i = 0; i < array.length; i ++){
         array[i].disabled = true;
      }
      pause.disabled = false;

   } else if (pause.innerText == "resume" ) { 
      clearInterval(increaseNew)
      increaseNew = increasingCounter()
      pause.innerText = "pause"

      for (let i = 0; i < array.length; i ++){
         array[i].disabled = false;
      }
   }
})





/////////////////// comments ///////////////

// find form 
let commentForm = document.querySelector('#comment-form')

// find output 
commentForm.addEventListener('submit', function(e){
   e.preventDefault();
   let comment = document.querySelector('#comment-input');
   let pElement = document.createElement('p');
   pElement.innerText = comment.value;
   document.querySelector('#list').appendChild(pElement);
   comment.value = ""
})