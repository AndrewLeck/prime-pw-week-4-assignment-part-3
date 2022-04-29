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


basket.forEach(function(listItems){
console.log(listItems);
})



basket.forEach(function(empty){
   console.log(basket.length = 0);
})
console.log(basket);



//2. Create a function called isFull(). It should:
  //- return `false` if the basket contains *less* than max number of items
  //- return `true` otherwise (equal or more than maxItems)


const maxItems = 5;

function isFull(){
    if(basket< maxItems){
        return false;
    }
    else(basket => maxItems);{
        return true;
    }
}
console.log( isFull() );


//3. Update the required `addItem` function to:
  //- Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  //- If an item was added to the array, return `true`
  //- If there was no room and the item could not be added return `false`

  function addItem(item){
    basket.push(item);
    return true;
}

addItem()