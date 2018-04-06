let $con = document.getElementById('etch-container');
let $btnClear = document.getElementById('btn-clear');
let $btnResize = document.getElementById('btn-resize');
let etchTiles = 16;
let etchWidth = 768;

$con.style.width = etchWidth + "px";
$con.style.height = etchWidth + "px";

function populate() {
	for(let i = 0; i < etchTiles; i++) {
		for(let j = 0; j < etchTiles; j++) {
			let $newDiv = document.createElement('div');

			$newDiv.style.width = etchWidth/etchTiles + "px";
			$newDiv.style.height = etchWidth/etchTiles + "px";
			$newDiv.classList.add('etch-box');

			$con.appendChild($newDiv);
		}
	}
}

function fillSquare(e) {
	e.target.classList.add('filled');
}

function clear() {
	$boxes = document.querySelectorAll(".etch-box");
	$boxes.forEach(function(box) {
		box.classList.remove('filled');
	});
}

function resize() {
	let newTiles = prompt();
	//Data Validation
	newTiles = isPosInt(newTiles) ? newTiles : etchTiles;

	//Clear boxes
	while ($con.firstChild) {
		$con.removeChild($con.firstChild);
	}

	etchTiles = newTiles;
	populate();
}

function isPosInt(str) {
	let n = Math.floor(Number(str));
	return n !== Infinity && String(n) === str && n >= 0;
}

$con.addEventListener('mouseover', fillSquare);
$btnClear.addEventListener('click', clear);
$btnResize.addEventListener('click', resize);

populate();