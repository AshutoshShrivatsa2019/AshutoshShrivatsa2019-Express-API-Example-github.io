const fs = require("fs");


// function writeObjFile(array)
//  {
//     fs.writeFile("object.json", JSON.stringify(array, null, 4), (err) => {
//         if (err) {
//             console.error(err);
//             return;
//         };
//         console.log("File has been created");
//     });
//  }

// function readObjFile()
//  {
//     //  fs.readFile('object.json',(err,data)=>{
//     //     if(err)
//     //     {
//     //         console.error(err);
//     //         return;  
//     //     }
//     //     if(data.byteLength>0)
//     //     {  
//     //     let products = JSON.parse(data);  
//     //     console.log(products);
//     //     return products;
//     //     } 
//     // });

//     let products =[];
// let rawdata = fs.readFileSync('object.json');

//         if(rawdata.byteLength>0)
//         {  
//          products = JSON.parse(rawdata); 
//         } 
//         console.log(products);
//         return products;
        
//     console.log('This is after the read call');  
  
//  }


 function readWriteObj(array,val)
 {
     if(val===0)
     {
        let products =[];
let rawdata = fs.readFileSync('object.json');

        if(rawdata.byteLength>0)
        {  
         products = JSON.parse(rawdata); 
        } 
        console.log(products);
        console.log('This is after the read call');  
        return products;
        

     }
     else{
        fs.writeFile("object.json", JSON.stringify(array, null, 4), (err) => {
            if (err) {
                console.error(err);
                return;
            };
            console.log("File has been created");
        });
     }
 }

 module.exports=readWriteObj;