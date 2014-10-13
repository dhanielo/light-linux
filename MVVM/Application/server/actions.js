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
	
	var path = 'server/data/apps_mock.json';
	try {
		var fs = require('builtin/fs');
		var Json = require('Json');
		post = Json.decode(req.data.post);
		data = {};
		data["name"] = post.name;
		data["type"] = post.source;
		data["source"] = post.path;
		file = fs.readFile(path);
		hasExists = false;
		database = Json.decode(file);
		this.forEach(database, function(obj) {
			if (post.name == obj.name) {
				hasExists = true;
			}
		});
		// check if exists
		if (!hasExists) {
			database.push(data);
			//Write changes in file
			fs.writeFile(path, Json.encode(database));
		}
	} catch (err) {
		console.log("JSON parse error: " + err);
	}
}

function deleteApp_action() {

	var path = 'server/data/apps_mock.json';
	try {
		var fs = require('builtin/fs');
		var Json = require('Json');
		post = Json.decode(req.data.post);
		file = fs.readFile(path);
		database = Json.decode(file);
		this.forEach(database, function(obj, index) {
			if (post.name == obj.name) {
				database.splice(index, 1);
				fs.writeFile(path, Json.encode(database));
			}
		});
	} catch (err) {
		console.log("JSON parse error: " + err);
	}
}

function notFound_action() {
	res.write('Error 404\n');
	res.stop();
}
