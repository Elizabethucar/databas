const express=require("express")
const router = express.Router()

const user=[]

router.get('/',(req,res)=>{
	res.send({"status":"ok"})
})
router.post('/',(req,res)=>{
	const userId= req.body.id
	const userName= req.body.name
	const userEmail=req.body.email

	const newUser= {"id": userId,
		          "name":userName,
		          "email":userEmail}
			user.push(newUser)
				
		

        res.send(newUser)
})

router.get('/',(req,res)=>{
        res.send({"status":"ok"})
})

router.get('/',(req,res)=>{
        res.send({"status":"ok"})
})

	module.exports  = router;
