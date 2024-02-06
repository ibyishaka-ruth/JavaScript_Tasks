//  a function that gives the day of today
var today= new Date()
 var Week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayIndex = today.getDay();
  var currentDay = Week[dayIndex];
  console.log('today is:'+ currentDay)

// the largest in 3 numbers
function large(num1,num2,num3){
    if((num1>num2) &&(num1>num3)){
      return num1;
    }
    else if((num2>num1)&&(num2>num3)){
      return num2;
    }
    else if((num3>num1)&&(num3>num2)){
      return num3;
    }
    else{
      return 'the numbers are equal'
    }
  }
  
  console.log('the largest number is: '+large(2,4,7))

//   turns true if one is in the range
function between(a,b,c){
    if (a>=50 && a<=99) {
      return true;
      }
      else if(b>=50 && b<=99 ){
        return true;
      } 
      else if(c>=50 && c<=99){
        return true;
      }
      else{
        return 'the result is false'
      }
  }
  console.log (between(20,55,60))