function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function printResult(rst){
	let div = document.createElement('div');
	div.innerHTML= rst;
	document.getElementById('result').appendChild(div);
}