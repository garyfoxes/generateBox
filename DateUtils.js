function getCurrentDate(){
	var currentTime = new Date(),
		day = currentTime.getDate(),
		month = currentTime.getMonth() + 1,
		year = currentTime.getFullYear(),
		hours = currentTime.getHours(),
		minutes = currentTime.getMinutes(),
		seconds = currentTime.getSeconds(),
		amPm;

	if (minutes < 10){
		minutes = "0" + minutes
	}
	if(hours > 11){
		amPm ="PM";
	} else {
		amPm ="AM";

	}
	return day + "/" + month + "/" + year + " " + hours + ":" + minutes +":"+ seconds + ":" + amPm;
}

function sortByHeaderText(a,b){
	if(a.title < b.title)
		return -1;
	if(a.title > b.title)
		return 1;
	return 0;
}

