let array1=[]

arrAdd(array1)

function arrAdd(array1){
    array1.push(1,2,3)
    console.log(`Initial Values of Array Elements`,array1)
    for(let i=0;i<array1.length;i++){
        array1[i]=array1[i]+2
    }
    
    console.log(`Values of array Elements after Addition`,array1)
}