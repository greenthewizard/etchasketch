let $con = document.getElementById('etch-container');
let etchWidth = 16;
let etchHeight = 16;
let boxSize = 48;

$con.style.width = boxSize * etchWidth + "px";
$con.style.height = boxSize * etchHeight + "px";

for(let i = 0; i < etchWidth; i++) {
	for(let j = 0; j < etchHeight; j++) {
		let $newDiv = document.createElement('div');

		$newDiv.style.width = boxSize + "px";
		$newDiv.style.height = boxSize + "px";
		$newDiv.classList.add('etch-box');

		$con.appendChild($newDiv);
	}
}

function fillSquare(e) {
	console.log(e);
	e.target.style.backgroundColor = 'black';
}

$con.addEventListener('click', fillSquare);