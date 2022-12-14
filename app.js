const express = require("express")
const bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));
const port = 3000

app.set('view engine', 'ejs');


const work = "Android app developer"
let options = { weekday: 'long', month: 'long', day: 'numeric' };
const today = new Date();
let day = today.toLocaleDateString("en-US", options);
let items = [];


app.get("/",(req,res)=>{
    
    res.render('list', { KindOfDay: day,newListItems:items })
    //console.log(day)

})

app.post("/", (req, res) => {
    var item = req.body.NewTodo
    //console.log(newItem); 
     additem(item)
    res.redirect("/")
})

app.listen(port, () => {
    console.log("Server is runing on port 3000");
});



function additem(item) {
    if (items.includes(item)) {
        console.log(`This item already exist`);
    } else {
         items.push(item)
    }
}

//console.log(today.toLocaleDateString("en-US")); // 9/17/2016
//console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
//console.log(today.toLocaleDateString("hi-IN", options));

