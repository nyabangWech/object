 function object(){
   const people=[
    {name:'Alice',age:17},
    {name:'Eunice',age:22},
    {name:'charlie',age:14},
    {name:'max', age:19},
   ];
   people.sort((a,b)=>{
     return a.age - b.age;
   });
  people.forEach((nam)=>{
  console.log(`${nam.name} ${nam.age}`);
  });
 };

//
function product(){
  const groupBycategory = Map.groupBycategory(product,product =>product.category{
  const products=[
    {name:'laptop',price:1200,category:'Electronics'},
    {name:'shirt',price:25,category:'clothing'},
    {name:'headphones',price:80,category:'Electronics'},
    {name:'shoes',price:60,category:'clothing'},
  ];
  });
  console.log(groupBycategory);
 
};


function student(){
  const students=[
    {name:'john',scores:[90,80,85]},
    {name:'jane',scores:[95,92,88]},
    {name:'jim',scores:[70,80,75]},
    {name:'jill',scores:[85,90,84]},
  ]

  

}





function vehicle(){
  const car={
    make:'ford',
    model:'Ranger',
    year:2023,
    displayInfo:function(){

      console.log(`make: ${this.make},model:${this.model},was made,year:${this.year}`);
    }
  };
}


    

   
  

    
      
  
    
  


  
    
  


 
 