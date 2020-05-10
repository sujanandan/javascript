// one*****************************
function patternT()
{
//     Write a JavaScript program to construct the following pattern, using a nested for loop.   * 
//     * *  
//     * * *   
//    * * * *  
document.getElementById("result").innerHTML="";

var res="" ;
    for(i=0;i<7;i++)
    {
    for(j=0;j<i+1;j++)
    {
        res +=" * ";
    }
    res +="<br>";
}
document.getElementById("result").innerHTML=res;
document.getElementById("result").style.fontSize="bold";
}

// ********************************************
function findlarge()
{
    document.getElementById("result").innerHTML="";
   // Write a JavaScript program that accept two integers and display the larger using findLarge() function.
   var num1= parseInt(prompt("enter 1st number,"));
   var num2=parseInt(prompt("Enter second number,"));
   if (num1>num2)
//    alert("Larger number is "+num1);
   document.getElementById("result").innerHTML="Largest Number is "+num1;
   else
   document.getElementById("result").innerHTML="Largest Number is "+num2;
}
// ********************************************
function frequent()
{
    // Write a JavaScript program to find the most frequent item of an array.
    document.getElementById("result").innerHTML="";
    let inArray=[];
    let flag=true;
    let count=0;
    let item=0;
    
    for (i=0;i<5;i++){
    inArray[i]=prompt("Enter 8 numbers :");
    }
    // document.write("Numbers:"+inArray);
    // console.log("Entered numbers"+inArray);
    var repeatC=null;
    for(i=0;i<5;i++)
    { let count1=1;
        for(j=i+1;j<5;j++)
        {
            if(inArray[i]==inArray[j])
            {
            // console.log(inArray[i],inArray[j]);
            count1++;
            
        // console.log(count,count1);
            if(count<count1)
            {
            repeatC=inArray[i];
            
            count=count1;
            
            }
        }
    }
        
        
    }
// console.log(repeatC,count);
// document.write("repeat and count"+repeatC+"  "+count);
document.getElementById("result").innerHTML="Most Frequent Item of array "+repeatC;
}

// ********************************************
function prime()
{
  // Write a JavaScript function to get an array and to read the first element 
  // of an array. Check whether it is prime or not.  
  document.getElementById("result").innerHTML="";
  let inArray=[];
  let flag=true;
  for (i=0;i<5;i++){
    inArray[i]=parseInt(prompt("Enter 5 numbers :"));
  }
  // console.log("Entered numbers"+inArray);
  let num=inArray[0];
  // console.log("First number"+num);
  
if(num<=2)
{
  console.log("not a prime");
  document.getElementById("result").innerHTML="First number " +num +" is not a prime ";
}
else
{
for(j=2;j<num-1;j++)
{
  if(num%j==0){
    flag=false;}
}
if(flag==false)
// console.log(num +' is not a prime number');
document.getElementById("result").innerHTML="First number " +num+" is not a prime ";
else
// console.log(num +' is a prime number');
document.getElementById("result").innerHTML="First number " +num +"is a prime ";
}

}


// ********************************************
function javascriptp() {
    // Write a JavaScript program to print the letters of the word “Javascript” as 
    // below in each line using for…of.
    // J 
    // Ja 
    // Jav
    //  .
    //  .
    //  Javascript 
    document.getElementById("result").innerHTML="";
    let word1 = "Javascript";
    // for(i=0;i<10;i++)
    // {
    // for(j=0;j<i+1;j++)
    // {
    //     document.write( word1[j] );
    // }
    // document.write("<br>");}


    var num = " ";
   
    for (let i of word1) {
        num +=  i + " ";
       
    document.getElementById("result").innerHTML +=num;
    document.getElementById("result").innerHTML +="<br>";
   
    }
    
} 
// ********************************************
function truncate() {
    document.getElementById("result").innerHTML="";
    var str = prompt("Enter a string");
    var num= prompt("Specify number of characters ");    
  
   if (str.length > num) {
    document.getElementById("result").innerHTML= (str.slice(0, num) + " ");
  } 
  else {
    document.getElementById("result").innerHTML= (str);
  }
}


//****************************************** */
function swap(){
  document.getElementById("result").innerHTML="";
    str = prompt("Enter a sentence");
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
      
      for(var x=0; x<str.length; x++)
      {
        if(UPPER.indexOf(str[x]) !== -1)
        {
          result.push(str[x].toLowerCase());
        }
        else if(LOWER.indexOf(str[x]) !== -1)
        {
          result.push(str[x].toUpperCase());
        }
        else 
        {
          result.push(str[x]);
        }
      }
    document.getElementById("result").innerHTML=(result.join(''));

}

// ***************************************************
function sumsquare(){
  document.getElementById("result").innerHTML="";
    var arr= [];
    var size = 5; 

    for(var i=0; i<size; i++) {
    arr[i] = prompt('Enter Element ' );
    }
     
      var sum = 0; 
      i = arr.length;
      while (i--){ 
       sum += Math.pow(arr[i], 2);
       }
     
      document.getElementById("result").innerHTML=("Sum of squares of elements of the given array is "+sum);
}

// *************************
function oddeven(){
  document.getElementById("result").innerHTML="";
    let res="";
    for (var i=0; i<=15; i++) {
        if (i === 0) {
          res+= (i +  "  is Even <br>");
        }
        else if (i%2 === 0) {
          res+=  (i + "  is Even <br>");   
        }
        else {
          res+=  (i + "  is Odd <br>");
        }
        document.getElementById("result").innerHTML=(res);
    }
   
}
// **********************************
function alphabetical(){
  document.getElementById("result").innerHTML="";
    let array =[];
     var out="" ;
  
          for( let i=0; i<3; i++)    
          {
          name = prompt( "Enter a name ");
          gender=prompt("Enter gender");
          // console.log(array[i]);
          array.push({name:name,gender:gender});
          }
          for(let key in array){
            console.log(array[key]);
          }
          // array.sort();
          array.sort(function(a, b){
            var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
            if (nameA < nameB) //sort string ascending
                return -1 
            if (nameA > nameB)
                return 1
            return 0 //default return value (no sorting)
        })
          for(let key in array){
           
            out+="{   "+array[key].name +" , "+array[key].gender+"  }" +"<br>";
          }
          // console.log(array);
      // array = array.sort();
       document.getElementById("result").innerHTML+=(`Sorted Array of Objects <br> `);
       document.getElementById("result").innerHTML+=out;
  }