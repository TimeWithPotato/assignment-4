// Problem:1  radianToDegree
function radianToDegree(radian)
{
    
    if(typeof radian !== "number")
    {
        return 'Error . Input a number';
    }
    
    return ((radian*180)/Math.PI).toFixed(2);
}
console.log(radianToDegree(10));

// Problem:2  isJavaScriptFile 
function isJavaScriptFile(String)
{
    if(typeof String !== "string")
    {
        return 'Error . Input a number';
    }
    else if(String.endsWith('.js'))
    {
        return true ;
    }
    else 
      return false ;
}
console.log(isJavaScriptFile('Arif.cs'));

//Problem 3: oilPrice
function oilPrice(x,y,z)
{
    const perLitreDiselPrice =114;
    const perLitrePetrolPrice = 130;
    const perLitreOctanePrice = 135;
    if((typeof x !=="number")||(typeof y !=="number")||(typeof z !=="number"))
    {
        return 'Error . Input number';
    }

    return x*perLitreDiselPrice+y*perLitrePetrolPrice+z*perLitreOctanePrice;
}
console.log(oilPrice('x',20,10));

// Problem 4: publicBusFare
function  publicBusFare(x)
{
    const busCapacity = 50;
    const microCapacity = 11;
    let Check = 0; // to check how many bus and micro will be used 
    let remaining ; // to check how many passenger will  remaining 
    if(typeof x !== 'number')
    {
        return 'Error . Input a number';
    }
    if(x<=50)
    {
        return 0;
    }
    else if(x>50)
    {
        for(let i=1;busCapacity*i<x ; i++)
        {
            Check += busCapacity;
        }
        remaining = x-Check;
        for(let i=1; microCapacity*i<remaining; i++)
        {
            Check +=microCapacity;
        }
        remaining = x-Check;
        return 250*remaining;
    }
}
console.log(publicBusFare(50));

// Problem 5: isBestFriend
function  isBestFriend(object1,object2)
{
    if((typeof object1 !== 'object')||(typeof object2 !== 'object'))
    {
        return 'Error . Input an object';
    }
   if(((object1.name.localeCompare(object2.friend))===0)&&((object2.name.localeCompare(object1.friend))===0))
   {
    return true;
   }
   return false ;
}
const object1 = {
    name :'abul', friend : 'kabul'
}
const object2 = {
    name : 'kabul', friend : 'sabul'
}
console.log(isBestFriend(object1,object2));
