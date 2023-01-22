let isLeftDragging = false;
let isRightDragging = false;
let isVertivalDragging = false;
function ResetColumnSizes() {
	// when codeArea resizes return to default col sizes
	let codeArea = document.querySelector("#codeArea");
	let editor = document.querySelector("#editor");
	codeArea.style.gridTemplateColumns = "1fr 9px 1fr 9px 1fr";
	// editor.style.gr
}
ResetColumnSizes();

function SetCursor(cursor) {
	let codeArea = document.querySelector("#codeArea");
	codeArea.style.cursor = cursor;
}

function StartLeftDrag() {
	console.log("mouse down");
	isLeftDragging = true;
	
	SetCursor("ew-resize");
}

function StartVerticalDrag(){
	console.log("mouse down");
	isVertivalDragging=true;

	SetCursor("ns-resize");
}

function StartRightDrag() {
	console.log("mouse down");
	isRightDragging = true;
	
	SetCursor("ew-resize");
}

function EndDrag() {
	console.log("mouse up");
	isLeftDragging = false;
	isRightDragging = false;
	isVertivalDragging = false;
	SetCursor("auto");
}


function OnDrag(event) {
	if(isLeftDragging || isRightDragging) {
		console.log("Dragging");
		//console.log(event);
		
		let codeArea = document.querySelector("#codeArea");
		let leftcol = document.getElementById("leftcol");
		let rightcol = document.getElementById("rightcol");	
		
		let leftColWidth = isLeftDragging ? event.clientX : leftcol.clientWidth;
		let rightColWidth = isRightDragging ? codeArea.clientWidth - event.clientX : rightcol.clientWidth;
		
		let dragbarWidth = 9;
		
		let cols = [
			leftColWidth,
			dragbarWidth,
			codeArea.clientWidth - (2*dragbarWidth) - leftColWidth - rightColWidth,
			dragbarWidth,
			rightColWidth
		];
		
		let newColDefn = cols.map(c => c.toString() + "px").join(" ");
		
		console.log(newColDefn);
		
		let dimensionPercentage = newColDefn.split(" ");
		dimensionPercentage[0] = (cols[0]*100/codeArea.clientWidth)+"%";
		dimensionPercentage[2] = (cols[2]*100/codeArea.clientWidth)+"%";
		dimensionPercentage[4] = (cols[4]*100/codeArea.clientWidth)+"%";
		newColDefn = dimensionPercentage.join(" ")
		console.log(dimensionPercentage);
		console.log(newColDefn);
		codeArea.style.gridTemplateColumns = newColDefn;
		
		event.preventDefault();
	}
}

function verticalDrag(event){
	if(isVertivalDragging){
		console.log("yooo");
		let editor = document.querySelector("#editor");
		let codeArea = document.querySelector("#codeArea");
		let frame = document.querySelector("#outputArea");
		let containerOffset = event.clientY - 50;
		// let pointerYPos = event.clientY - containerOffset;

		// let minWidth = 50;

		// codeArea.style.height = (Math.max(minWidth,pointerYPos-9)) + "px";
		// codeArea.style.flexGrow=0;
		let dragbarWidth = 9;
		let rows = [
			containerOffset,
			dragbarWidth,
			editor.clientHeight - 9 - containerOffset 
		];
		let newRowDefn = rows.map(c => c.toString() + "px").join(" ");
		
		console.log(newRowDefn);

		let dimensionPercentage = newRowDefn.split(" ");
		dimensionPercentage[0] = (rows[0]*100/editor.clientHeight) +"%";
		dimensionPercentage[2] = (rows[2]*100/editor.clientHeight) +"%";
		newRowDefn = dimensionPercentage.join(" ");
		console.log(dimensionPercentage);
		console.log(newRowDefn);

		editor.style.gridTemplateRows = newRowDefn;
		event.preventDefault();
	}
}

window.addEventListener("resize",()=>{
	let codeArea = document.querySelector("#codeArea");
	let frame = document.querySelector("iframe");
	let newWidths = ["calc(100%/3 - 18px/3)","9px","calc(100%/3 - 18px/3)","9px","calc(100%/3 - 18px/3)"];
	let newCol = newWidths.join(" ");
	codeArea.style.gridTemplateColumns = newCol;

	codeArea.style.height = "50%";
	frame.style.height = "50%";

})
