console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];
console.log(basket);
function addItem(item){
    basket.push(item);
    return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem(' apples '));
console.log('adding pizza  (expect true)', addItem(' pizza '))
console.log('adding popcorn  (expect true)', addItem(' popcorn '))
console.log('adding chicken  (expect true)', addItem(' chicken '))
console.log(`Basket is now ${basket}`);


//- Create a function called `listItems`. It should:
  //- loop over the items in the `basket` array
  //- console.log each individual item on a new line

function listItems(array){
  for(let i=0; i<= array.length-1; i++){
    console.log(array[i]);
  }
}
listItems(basket);

function empty(array){
  array.splice(0,array.length);
    console.log(array)
}
empty(basket);

//2. Create a function called isFull(). It should:
  //- return `false` if the basket contains *less* than max number of items
  //- return `true` otherwise (equal or more than maxItems)


const maxItems = 5;

function isFull(){
    if(basket.length < maxItems){
        return false;
    }
    else(basket.length >= maxItems);{
        return true;
    }
}
console.log( isFull() );


