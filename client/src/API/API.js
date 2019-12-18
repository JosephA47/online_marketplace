var unirest = require("unirest");

var req = unirest("GET", "https://steamwebstefan-skliarovv1.p.rapidapi.com/getAppList");

req.headers({
	"x-rapidapi-host": "SteamWebstefan-skliarovV1.p.rapidapi.com",
	"x-rapidapi-key": "c98b92fbfdmsh2c4f20c2b9ed9d0p13c995jsn52927611994e",
	"content-type": "application/x-www-form-urlencoded"
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});