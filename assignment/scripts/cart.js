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
console.log('adding chicken  (expect true)', addItem('chicken'))
console.log(`Basket is now ${basket}`);

function listItems(basket){
 for(let i=0; i< basket.length; i++){
    console.log(basket[i]);   
 }
}

console.log(listItems(basket));
