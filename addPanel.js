var divIndex = 1;

var Box = function() {
	this.boxNumber = divIndex;
	this.outerPanel = null;
	this.header = null;
	this.title = null;
	this.time = null;
	this.bin = null;

	this.init();
};

Box.prototype.init = function() {
	this.initDomEle();
};

Box.prototype.initDomEle = function() {
	this.initOuterPanel();
	this.initTitleAndTime();
	this.initBin();
	divIndex++;
};

Box.prototype.initOuterPanel = function(){

	this.outerPanel = document.createElement('div');
	this.outerPanel.id = 'panel'+ divIndex;
	this.outerPanel.style.height = "100px";
	this.outerPanel.style.borderStyle = "inset";
	this.outerPanel.style.marginBottom = "10px";
	document.getElementById('panels').appendChild(this.outerPanel);

};

Box.prototype.initTitleAndTime = function(){
	this.header = document.createElement('div');
	this.header.style.borderBottom ="1px solid #aaa";
	this.header.style.height = "30px";
	this.outerPanel.appendChild(this.header);

	this.date = document.createElement('label');
	this.date.style.float ='right';
    this.date.style.width = "300px";
    this.date.style.paddingLeft = "60px";
	this.date.innerText = getCurrentDate();
	this.header.appendChild(this.date);

	this.title = document.createElement('input');
	this.title.style.fontFamily ="Comic Sans MS,cursive,sans-serif";
	this.title.style.float ='left';
	this.title.style.height = "20px";
	this.title.style.width = "200px";
	this.title.style.border = "0";
	this.title.value = "Document Title "+ divIndex;

	var record = new Record();
	record.id = divIndex;
	record.title = this.title.value;
	record.date = this.date.innerText;
	store.records.push(record);
	this.title.onchange = function(){updateRecord(record,this.value)};
	this.header.appendChild(this.title);	
}

Box.prototype.initBin = function(){
	this.bin = document.createElement("img");
	this.bin.id = "panel"+divIndex+"Delete";
	this.bin.className = "deleteMe";
	this.bin.style.float = "right";
	this.bin.style.bottom ="0";
	this.bin.style.right ="0";
	this.bin.style.height = "31px";
	this.bin.style.width = "21px";
	this.bin.style.margin = "30px 10px 10px 0px";
	this.bin.src = "Assets\\Garbage_bin_icon.png";
	this.outerPanel.appendChild(this.bin);
	this.bin.onclick = this.removeBox.bind(this);
}
/**
 * Remove the current box selected from the dom
 * Remove the record and box object from the store
 */
 Box.prototype.removeBox = function() {
 	this.outerPanel.remove();
 	for(var i=0;i < store.records.length;i++){
 		if(store.records[i].id === this.boxNumber){
 			store.records.splice(i,1);
 			store.boxes.splice(i,1);
 			break;
 		}

 	}
 	divIndex--;
 }

 function updateRecord(record,newText){
 	record.title = newText;
 }

/**
 * function that sorts the list of records by header text
 * if there is 0 or 1 records then no sorting takes place
 */
 function sortByText(){
 	var listOfRecords = store.records.sort(sortByHeaderText);
 	var boxes = store.boxes;
 	if(boxes.length <= 1){
 		console.log("No need to sort, there are " + boxes.length + " box(es)");
 	}
 	else{
 		var i = 0;
 		boxes.forEach(function(box){
 			box.title.value = listOfRecords[i].title;
 			box.date.innerText = listOfRecords[i].date;
 			listOfRecords[i].id = box.boxNumber;
 			i++;
 		});
 	}
 }


 function sortByCreatedDate(){
  var listOfRecords = store.records.sort(sortByDateLastCreated);
  var boxes = store.boxes;
  if(boxes.length <= 1){
 		console.log("No need to sort, there are " + boxes.length + " box(es)");
 	}
 	else{
 		var i = 0;
 		boxes.forEach(function(box){
 			box.title.value = listOfRecords[i].title;
 			box.date.innerText = listOfRecords[i].date;
 			listOfRecords[i].id = box.boxNumber;
 			i++;
 		});
 	}
   

 }

 var Record = function() {
 	this.id;
 	this.title;
 	this.date;
 };

 var store  = {
 	records: [],
 	boxes:[]

 }
 function generateBox(){
 	var box = new Box();
 	store.boxes.push(box);
 	console.log(+new Date());
 }




 document.getElementById("button").onclick =  function(){generateBox()}
 document.getElementById("sortByHeaderButton").onclick = function(){sortByText()}
 document.getElementById("sortByDateCreated").onclick = function(){sortByCreatedDate()}


