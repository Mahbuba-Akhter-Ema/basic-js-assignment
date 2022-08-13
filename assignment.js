// Problem: 1

function radianTodegree(radian)
{
  if (typeof radian !== 'number') {
    return 'Please Enter a Number!'
  }
  let pi = Math.PI;
  return (Math.round(radian * 180) / pi).toFixed(2);

}          
console.log(radianTodegree(25));

// Problem: 2

function isJavascriptFile(file) {
  if (typeof file !== 'string') {
    return 'Please Enter a String!'
  }
  if (file == 'app.js')
  return true;
  else{
    return false;
  }
}
console.log(isJavascriptFile('app.js'));

// Problem: 3

function oilPrice(diesel, petrol, octane) {
  if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octane !== 'number') {
    return 'Please Enter a Number!'
  }
  let dieselPrice = 114;
  let petrolPrice = 130;
  let octanePrice = 135;
  let total = (dieselPrice * diesel) + (petrolPrice * petrol) + (octanePrice * octane);
  return total;
}
console.log(oilPrice(1, 1, 1));

// Problem: 4

function publicBusFare(people) {
  if (typeof people !== 'number') {
    return 'Please Enter a Number!';
  }
    let busPassenger = people % 50;
    let microBusPassenger = busPassenger % 11;
    let restPeoplePublicBus = microBusPassenger * 250;

    return restPeoplePublicBus;
}
console.log(publicBusFare(112));

// Problem: 5

function isBestFriend({ name }, { friend }) {
  if (typeof name !== 'string' || typeof friend !== 'string') {
    return 'Please Enter a Valid Object!';
  }
  if (name === friend && friend === name) {
      return true;
  } else {
      return false;
  }
}
console.log(isBestFriend({ name: "abul", friend: "babul" },

  { name: "babul", friend: "abul" }));


