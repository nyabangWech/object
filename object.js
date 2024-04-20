 
   const people=[
    {name:'Alice',age:17},
    {name:'Eunice',age:22},
    {name:'charlie',age:14},
    {name:'max', age:19},
   ];
    function peopleAge(){
      return people. filter(i=>i.age >=18).map(Element=>Element.name)
    }
    console.log(peopleAge(people));


    

    const products=[
      {name:'laptop',price:1200,category:'Electronics'},
      {name:'shirt',price:25,category:'clothing'},
      {name:'headphones',price:80,category:'Electronics'},
      {name:'shoes',price:60,category:'clothing'},
    ];

    function grouped(){
      const grouping= Object.groupBy(products,({category})=> category);
    console.log(grouping);
      return grouping;
    }
    grouped();



    const students=[
      {name:'john',scores:[90,80,85]},
      {name:'jane',scores:[95,92,88]},
      {name:'jim',scores:[70,80,75]},
      {name:'jill',scores:[85,90,84]},
    ];

    function averages(){
      const averages=(scores)=>{
        return scores.reduce((sum,scores)=>sum+scores,0)/scores.length;
  
      }
      const  stude= students.filter(students=>
        averages(students.scores)>=85);
        const results=stude.map(students=>students.name);
        console.log(results)
    };
     averages()




  const car={
    make:'ford',
    model:'Ranger',
    year:2023,
    displayInfo:function(){
      console.log(`make: ${this.make},model:${this.model},was made,year:${this.year}`);
    },
    age:function(){
      const ages=( year-2024)

    },
  

    
  };
  console.log(car)
    
  
    
  
    
  


  
  