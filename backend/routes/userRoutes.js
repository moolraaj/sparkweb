const express=require('express')
const router=express.Router()
const userInfo=require('../controller/userController.js')

router.post('/',userInfo.postUser)
router.get('/', userInfo.getUser )

exports.router=router

