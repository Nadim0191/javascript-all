function hideElementById(findoutId) {
    const element =  document.getElementById(findoutId) 
     element.classList.add('hidden');
   
   }
   function showElementById(showoutId) {
    const getout =  document.getElementById(showoutId) 
     getout.classList.remove('hidden')
   
   }
   function playGame() {
       hideElementById("part-1")
       showElementById("part-2")

   }