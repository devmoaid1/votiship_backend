
const db=require("../database"); 

class PresidentModel{
  
   constructor(){
    if (this.instance) return this.instance; // This is the key idea of implementing singleton. Return the same instance (i.e. the one that has already been created before)
  
    // We only proceedd to the following lines only if no instance has been created from this class
    PresidentModel.instance = this;
   } 


   getAll(){
       return db.getList('presidents');
   } 
   
   getByID(id){ 

        return db.get('presidents',id);
   }

   create(president){
       return db.create('presidents',president);
   }

   update(id,president){
       return db.set("presidents",id,president);
   }


} 

module.exports=new PresidentModel();