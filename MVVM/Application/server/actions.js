function getTasksMockup_action() {
		
	var fs  = require('builtin/fs');
	var content = fs.readFile('server/data/tasks_mock.json');
	res.write(content);
	res.stop();	
}

function getAppsMockup_action() {
	
	var fs  = require('builtin/fs');
	var content = fs.readFile('server/data/apps_mock.json');
	res.write(content);
	res.stop();
}

function getSources_action() {
	
	var fs  = require('builtin/fs');
	var content = fs.readFile('server/data/sources_mock.json');
	res.write(content);
	res.stop();
}

function addApp_action() {

	var http = require('builtin/http');
	var postString = http.readPost(req.data, 500);
	console.log(postString);
}

function notFound_action() {
	res.write('Error 404\n');
	res.stop();
}
