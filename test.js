let express = require("express")
let ourApp = express()

// ourApp.use(express.urlencoded({extended:false}))
ourApp.use(express.urlencoded({extended:false}))

ourApp.get('/' , function(req, res){
    res.send(`
    <form action="/answer" method="POST">
        <p> What color of the sky is on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res){
   if(req.body.skyColor.toUpperCase() == "BLUE"){
       res.send(`
       <p>Congratulations, this is the correct answer</p>
       <a href="/">Back to homepage</a>
        `)
   }else{
       res.send(`
       <p>Sorry this is wrong answer</p>
       <a href="/">Back to homepage</a>
        `)
   }
}) 
// a post request happens when you submit a form. Send or post some data to the server. 

ourApp.get('/answer', function(req, res){
    res.send("Are you lost? there is nothing to see here.")
})
//a get request happens when you type in an URL or you click on a traditional navigation link

//even though in both cases, url ends with /answer, our server is able to response differently depending on whether its a get request or a post request.


ourApp.listen(3000)