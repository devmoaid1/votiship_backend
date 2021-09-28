const express= require('express') 
const controller =require( '../controllers/president');


const router=express.Router() 


router.get('/',controller.getAllPresidents) 
router.get('/:id',controller.getPresidentByid)
router.patch('/:id',controller.votePresident)
router.post('/',controller.addPresident) 
router.delete('/:id',controller.deletePresident);
module.exports= router


