function getTaskMockup_action() {
		
	var fs  = require('builtin/fs');
	var content = fs.readFile('server/data/mock_data.json');
	res.write(content);
	res.stop();	
}

function notFound_action() {
	res.write('Error 404\n');
	res.stop();
}
