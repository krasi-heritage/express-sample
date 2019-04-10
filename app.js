const express = require("express");
<<<<<<< HEAD
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

const rootRouter = require("./routes/root");
const usersRouter = require("./routes/users");
const numbersRouter = require("./routes/numbers");

const port = 9000;

app.set("view engine", "hbs");

app.use(cookieParser());
app.use("/inc", express.static(path.join(__dirname, "inc")));

app.use((req, res, next) => {
	if (req.cookies.vcount == undefined) {
		req.vcount = 1;
		res.cookie("vcount", 1);
	} else {
		req.vcount = parseInt(req.cookies.vcount) + 1;
		res.cookie("vcount", req.vcount);
	}
	next();
});

app.use("/", rootRouter);
app.use("/users", usersRouter);
app.use("/numbers", numbersRouter);

app.listen(port, function() {
	return console.log("Sample App " + port + "!");
});
=======
const app = express();
const port = 9000;

app.get('/', (req, res) => res.send('Hello!'));
app.get('/user/:username', (req, res) => res.send("Welcome!" + req.params.username));

app.listen(port, 
    () => console.log(`Sample App ${port}!`));
>>>>>>> b9acee20241976a56e2944af75f3be84742662a7
