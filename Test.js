var Record = function() {
	this.title;
	this.time;
	this.content;
};

var store  = {
	records: new Array()

};

var record = new Record();
record.title = "New Title";
record.time = "12:00";
console.log(record);
store.records.push(record);
console.log(store);
