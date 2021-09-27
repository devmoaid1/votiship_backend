const db = require("../functions/database");

async function setupDatabase(req, res, next) {
  // To delete all the collections
  const collections = ["presidents"];
  collections.forEach(async (collection) => await deleteCollection(collection));

 
  // Add documents to the todos collection
  addDocuments("presidents", [
    { name: "mike tyson",location:"canda",avatar:"https://th.bing.com/th/id/OIP.xUh8zIC9RhhQM1YAIwVJWwHaFw?pid=ImgDet&rs=1",description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",votes:0,},
    { name: "jack jhonson",location:"australia",avatar:"https://th.bing.com/th/id/OIP.xUh8zIC9RhhQM1YAIwVJWwHaFw?pid=ImgDet&rs=1",description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",votes:0,},
    { name: "niko bellic",location:"colombia",avatar:"https://th.bing.com/th/id/OIP.xUh8zIC9RhhQM1YAIwVJWwHaFw?pid=ImgDet&rs=1",description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",votes:0,},
    
  ]);

  res.send("Setting Up Database.... Done ");
}

async function deleteCollection(collection) {
  const cref = db.firestore.collection(collection);
  const docs = await cref.listDocuments();
  docs.forEach((doc) => doc.delete());
}

function addDocuments(collection, docs) {
  docs.forEach((doc) => db.create(collection, doc));
}

module.exports = setupDatabase;