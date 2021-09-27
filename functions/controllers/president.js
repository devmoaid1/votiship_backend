const  President =require("../models/president"); 



  class PresidentController{ 

    constructor(){
        if (this.instance) return this.instance; // This is the key idea of implementing singleton. Return the same instance (i.e. the one that has already been created before)
      
        // We only proceedd to the following lines only if no instance has been created from this class
        PresidentController.instance = this;
       } 
       
     getPresidentByid=async(req,res,next)=>{

        const id=req.params.id 
   
        try{
               const president=await President.getByID(id) 
               
               if(!president){
                   return res.status(400).json({error:"error fetching data"})
               }else{
   
                   res.json(president)
   
               }
        }catch(err){
            return next(err)
        }
   
   } 
   
    getAllPresidents=async(req,res,next)=>{
   
       try{
   
            const presidentsList=await President.getAll()
            
            if(!presidentsList){
                return res.status(400)
            }else{
   
               res.json(presidentsList)
            }
   
   
       }catch(err){
   
            return next(err)
       }
   }
   
    votePresident=async(req,res,next)=>{
   
      const id =req.params.id
      const data=req.body  
      
      try{
          const doc=await President.getByID(id)
          if(!doc) return res.status(400)
   
   
          Object.keys(data).forEach((key) => (doc[key] = data[key]));
   
          const updateResult = await President.update(id, doc);
          if (!updateResult) return res.sendStatus(404);
      
          return res.json(doc);
   
      }catch(err){
   
         return next(err)
      }
   
   }
   
    addPresident=async(req,res,next)=>{
   
      try{
   
         const doc=req.body 
   
         const newPresident=await President.create(doc) 
       if(!newPresident) return res.status(409)
         res.json(newPresident)
   
   
      }catch(err){
          return next(err)
      }
   
   
   
   
   }
   


  } 


  module.exports=new PresidentController()
 
