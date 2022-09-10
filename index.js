const express= require("express")
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use('/api/user', require("./routes/user_v0.js"))

app.listen(PORT,()=>{
	console.log(`listening on port ${PORT}`)
})

	
