let array2=[]
 loopArr(array2)
 
 function loopArr(array2){
     array2.push(1,'dog','one')
     
     for(let i=0;i<array2.length;i++)
     {
         console.log(`Index Value '+ 1 +' :`,array2[i])
     }
     console.log(`Index Value of array Elements after Addition`,array2)
 }