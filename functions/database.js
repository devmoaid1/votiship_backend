class Database {
    constructor() {
      if (this.instance) return this.instance; // This is the key idea of implementing singleton. Return the same instance (i.e. the one that has already been created before)
  
      // We only proceedd to the following lines only if no instance has been created from this class
      Database.instance = this;
  
      const admin = require("firebase-admin"); // To access Firestore API
  
      // Since the functions and firestore run on the same server,
      //  we can simply use default credential.
      // However, if your app run different location, you need to create a JSON Firebase credentials
  
      admin.initializeApp({
        credential: admin.credential.applicationDefault(),
      });
  
      this.firestore = admin.firestore();
    }
  

    
    
    async create(collection, document) {
        const result = await this.firestore.collection(collection).add(document);
        document.id = result.id;
        return document;
      }
    
    async getList(collection) {
      const result = await this.firestore.collection(collection).get();
  
      const list = [];
      result.forEach((doc) => {
        const data = doc.data();
        data.id = doc.id;
        list.push(data);
      });
      return list.length ? list : null;
    }
  
    async get(collection, id) {
      const result = await this.firestore.collection(collection).doc(id).get();
      if (!result.exists) return null; // Record not found
  
      const doc = result.data();
      doc.id = result.id;
      return doc;
    }
  
    async set(collection, id, document) {
      const doc = this.firestore.collection(collection).doc(id);
      const result = await doc.get();
  
      if (!result.exists) return null; // Record not found
  
      await doc.set(document);
  
      document.id = id;
      return document;
    }
  
    async delete(collection, id) {
      const doc = this.firestore.collection(collection).doc(id);
      const result = await doc.get();
  
      if (!result.exists) return null; // Record not found
  
      await doc.delete();
  
      return { id };
    }
  }
  
  module.exports=new Database(); 

  