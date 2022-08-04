// Write your solution he
      let cats = ["Milo", "Otis", "Garfield"];
  

  function  destructivelyAppendCat(name){
    //cats.length = 0;

    cats.push(name);
  }
  
   function destructivelyPrependCat(name){
     cats.unshift(name);
   }
    //console.log(destructivelyPrependCat(name))

    function  destructivelyRemoveLastCat(){
       cats.shift()
    }
      //console.log(destructivelyRemoveLastCat(name));


      function  destructivelyRemoveLastCat(name) {
        cats.pop()
      }
      //console.log(destructivelyRemoveLastCat(name))


      function destructivelyRemoveFirstCat(name){
       cats.shift()
      }
      //console.log(destructivelyRemoveFirstCat(name))

function appendCat(name){
  cats.slice(name)
}
//console.log(appendCat(name))

function prependCat(name){
       cats(name)
}
 //console.log (prependCat(name))

function removeFirstCat(){
 cats.slice(0,-1)
}

function appendCat(name){
return [...cats,name]
 }
    
 function  prependCat(name){
  return [name,...cats]
   }

   function   removeLastCat(){
    return cats.slice(0,2)
   }
   removeLastCat();
      
function  removeFirstCat(){
  return cats.slice(1)
}


