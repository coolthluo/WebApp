var locallatitude ;
var locallongitude ;
function getLocation() {
  if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(showPosition);
  }
  	else
  		console.log("error");
}

 function showPosition(position)
  {
  	locallatitude  =   position.coords.latitude; 
  	locallongitude =   position.coords.longitude; 
  }
console.log(locallatitude);
console.log(locallongitude);
getLocation();


//current location
$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/37.346495469418336,-121.92622582789595" ,
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-currentlocation .time").text(unixTimeConvert(data.currently.time));
	$(".is-currentlocation .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-currentlocation .city-header h4").text(data.currently.summary);
	$(".is-currentlocation .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-currentlocation .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-currentlocation .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-currentlocation .today-summary").text(data.daily.summary);
	$(".is-currentlocation .sunriseTime").text(unixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-currentlocation .sunsetTime").text(unixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-currentlocation .rainRate").text((data.currently.precipProbability)*100 + "%");
	$(".is-currentlocation .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-currentlocation .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-currentlocation .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-currentlocation .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-currentlocation .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-currentlocation .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-currentlocation .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-currentlocation .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	getLocation()
	//set 24 hours time
	setTodayTime(date.getHours());
	function setTodayTime(now) {
	$(".is-currentlocation .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 1) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});
	}

	//set 24 hours time icon
    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-currentlocation .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    //set 24 hours degree
    setTodayDegree();
    function setTodayDegree() {
        $(".is-currentlocation .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    //set day name in a week    
    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-currentlocation .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    //set dayily time icon in a week     
    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-currentlocation .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}

    //setMaxTemperature    
    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-currentlocation .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}

    //setMinTemperature 
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-currentlocation .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    //change the background color base on the icon,class,time,,et lag information      
    backgroundConvert(data.currently.icon,"is-currentlocation",date.getHours(),0);
}
});











//load json of sanjose 
$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/37.3386,-121.8856",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sanjose .time").text(unixTimeConvert(data.currently.time));
	$(".is-sanjose .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sanjose .city-header h4").text(data.currently.summary);
	$(".is-sanjose .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sanjose .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sanjose .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sanjose .today-summary").text(data.daily.summary);
	$(".is-sanjose .sunriseTime").text(unixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sanjose .sunsetTime").text(unixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sanjose .rainRate").text((data.currently.precipProbability)*100 + "%");
	$(".is-sanjose .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sanjose .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sanjose .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sanjose .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sanjose .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sanjose .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sanjose .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sanjose .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");


	setTodayTime(date.getHours());
	function setTodayTime(now) {
	$(".is-sanjose .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 1) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sanjose .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sanjose .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sanjose .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sanjose .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sanjose .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sanjose .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sanjose",date.getHours(),0);

}
});








//sydney
$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/-33.8696,151.2070",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sydney .time").text(setTimeWithMinutes(19));
	$(".is-sydney .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .city-header h4").text(data.currently.summary);
	$(".is-sydney .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sydney .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sydney .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sydney .today-summary").text(data.daily.summary);
	$(".is-sydney .sunriseTime").text(sydneyunixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sydney .sunsetTime").text(sydneyunixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sydney .rainRate").text(remainOneDecimal((data.currently.precipProbability)*100) + "%");
	$(".is-sydney .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sydney .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sydney .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sydney .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sydney .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sydney .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sydney .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	var sydneytime = new Date(data.currently.time * 1000);
	setSydneyTodayTime(sydneytime.getHours());
	function setSydneyTodayTime(now) {
	$(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 20) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});  
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sydney .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sydney .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sydney", date.getHours(),19);


}


//haikou
$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/-33.8696,151.2070",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sydney .time").text(setTimeWithMinutes(19));
	$(".is-sydney .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .city-header h4").text(data.currently.summary);
	$(".is-sydney .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sydney .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sydney .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sydney .today-summary").text(data.daily.summary);
	$(".is-sydney .sunriseTime").text(sydneyunixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sydney .sunsetTime").text(sydneyunixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sydney .rainRate").text(remainOneDecimal((data.currently.precipProbability)*100) + "%");
	$(".is-sydney .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sydney .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sydney .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sydney .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sydney .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sydney .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sydney .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	var sydneytime = new Date(data.currently.time * 1000);
	setSydneyTodayTime(sydneytime.getHours());
	function setSydneyTodayTime(now) {
	$(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 20) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});  
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sydney .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sydney .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sydney", date.getHours(),19);


}


$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/-33.8696,151.2070",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sydney .time").text(setTimeWithMinutes(19));
	$(".is-sydney .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .city-header h4").text(data.currently.summary);
	$(".is-sydney .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sydney .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sydney .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sydney .today-summary").text(data.daily.summary);
	$(".is-sydney .sunriseTime").text(sydneyunixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sydney .sunsetTime").text(sydneyunixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sydney .rainRate").text(remainOneDecimal((data.currently.precipProbability)*100) + "%");
	$(".is-sydney .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sydney .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sydney .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sydney .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sydney .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sydney .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sydney .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	var sydneytime = new Date(data.currently.time * 1000);
	setSydneyTodayTime(sydneytime.getHours());
	function setSydneyTodayTime(now) {
	$(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 20) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});  
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sydney .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sydney .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sydney", date.getHours(),19);


}


$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/-33.8696,151.2070",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sydney .time").text(setTimeWithMinutes(19));
	$(".is-sydney .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .city-header h4").text(data.currently.summary);
	$(".is-sydney .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sydney .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sydney .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sydney .today-summary").text(data.daily.summary);
	$(".is-sydney .sunriseTime").text(sydneyunixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sydney .sunsetTime").text(sydneyunixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sydney .rainRate").text(remainOneDecimal((data.currently.precipProbability)*100) + "%");
	$(".is-sydney .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sydney .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sydney .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sydney .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sydney .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sydney .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sydney .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	var sydneytime = new Date(data.currently.time * 1000);
	setSydneyTodayTime(sydneytime.getHours());
	function setSydneyTodayTime(now) {
	$(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 20) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});  
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sydney .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sydney .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sydney", date.getHours(),19);


}


$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/-33.8696,151.2070",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sydney .time").text(setTimeWithMinutes(19));
	$(".is-sydney .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .city-header h4").text(data.currently.summary);
	$(".is-sydney .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sydney .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sydney .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sydney .today-summary").text(data.daily.summary);
	$(".is-sydney .sunriseTime").text(sydneyunixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sydney .sunsetTime").text(sydneyunixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sydney .rainRate").text(remainOneDecimal((data.currently.precipProbability)*100) + "%");
	$(".is-sydney .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sydney .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sydney .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sydney .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sydney .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sydney .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sydney .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	var sydneytime = new Date(data.currently.time * 1000);
	setSydneyTodayTime(sydneytime.getHours());
	function setSydneyTodayTime(now) {
	$(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 20) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});  
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sydney .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sydney .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sydney", date.getHours(),19);


}


$.ajax({
url : "https://api.forecast.io/forecast/769c3deed7a213b4ec07bb311f38a219/-33.8696,151.2070",
dataType : "jsonp",
type : "post",
data : {},
success : function(data) {
	$(".is-sydney .time").text(setTimeWithMinutes(19));
	$(".is-sydney .city-header h1").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .city-header h4").text(data.currently.summary);
	$(".is-sydney .today-overview li:eq(1)").text(weekday[date.getDay() + 1]);
	$(".is-sydney .today-overview li:eq(2)").text(remainOneDecimal(data.daily.data[0].temperatureMax) + "˚");
	$(".is-sydney .today-overview li:eq(3)").text(remainOneDecimal(data.daily.data[0].temperatureMin) + "˚");
	$(".is-sydney .today-summary").text(data.daily.summary);
	$(".is-sydney .sunriseTime").text(sydneyunixTimeConvert(data.daily.data[0].sunriseTime));
	$(".is-sydney .sunsetTime").text(sydneyunixTimeConvert(data.daily.data[0].sunsetTime));
	$(".is-sydney .rainRate").text(remainOneDecimal((data.currently.precipProbability)*100) + "%");
	$(".is-sydney .humidity").text((data.currently.humidity)*100 + "%");
	$(".is-sydney .wind").text(remainTwoDecimal(data.currently.windSpeed*0.621371) + " mph" + " " + windSet(data.currently.windBearing));
	$(".is-sydney .feelsLike").text(remainOneDecimal(data.currently.apparentTemperature) + "˚");
	$(".is-sydney .precipitation").text(remainTwoDecimal(data.currently.precipIntensity*0.0393701) + " in");
	$(".is-sydney .pressure").text(remainTwoDecimal(data.currently.pressure*0.000295299830714100) + " in");
	$(".is-sydney .visibility").text(remainTwoDecimal(data.currently.visibility*0.621371) + " mi");
	$(".is-sydney .currentTemperature").text(remainOneDecimal(data.currently.temperature) + "˚");
	$(".is-sydney .today-hourly-list-container .today-hourly-list img").attr('src', "images/" + data.currently.icon + ".png");

	var sydneytime = new Date(data.currently.time * 1000);
	setSydneyTodayTime(sydneytime.getHours());
	function setSydneyTodayTime(now) {
	$(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
		var time = (i + now + 20) % 24;
		if(time > 12) {
			$(this).find("ul li:eq(0)").text((time - 12) + ' PM');
		} else if (time == 12) {
			$(this).find("ul li:eq(0)").text(time + ' PM');
		}  else if (time == 0) {
			$(this).find("ul li:eq(0)").text(time + 12 +' AM');
		}
		else {
			$(this).find("ul li:eq(0)").text(time + ' AM');
		}
	});  
	}

    setTodayTimeIcon();
    function setTodayTimeIcon() {
        $(".is-sydney .today-hourly-list  > li:gt(0)").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.hourly.data[i].icon + ".png");
    });}

    setTodayDegree();
    function setTodayDegree() {
        $(".is-sydney .today-hourly-list > li").each(function(i){
        $(this).find("ul li:eq(2)").text(remainOneDecimal(data.hourly.data[i].temperature) + "˚");
    });}

    setDailyName(date.getDay());
    function setDailyName(today) {
        $(".is-sydney .forecast-list > li").each(function(i){
        	var day = (i + 2) % 7
            $(this).find("ul li:eq(0)").text(weekday[day]);
    });}	

    setDailyTimeIcon();
    function setDailyTimeIcon() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(1) img").attr('src',"images/" + data.daily.data[i].icon + ".png");
    });}
    console.log("setDailyTimeIcon success");

    setDailyMaxTemperature();
    function setDailyMaxTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(2)").text(remainOneDecimal(data.daily.data[i].temperatureMax) + "˚");
    });}
    setDailyMinTemperature();
    function setDailyMinTemperature() {
        $(".is-sydney .forecast-list > li").each(function(i){
            $(this).find("ul li:eq(3)").text(remainOneDecimal(data.daily.data[i].temperatureMin) + "˚");
    });}

    backgroundConvert(data.currently.icon, "is-sydney", date.getHours(),19);


}







});

//use to set date information
var date = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var today = date.getDay();

//remove the decimal
function remainOneDecimal(degree) {  
            var f = parseFloat(degree);  
            if (isNaN(f)) {  
                return;  
            }  
            f = Math.round(degree * 1) / 1;  
            return f;  
}; 

//remain one decimal
function remainTwoDecimal(degree) {  
            var f = parseFloat(degree);  
            if (isNaN(f)) {  
                return;  
            }  
            f = Math.round(degree * 10) / 10;  
            return f;  
}; 

//convert the unixTime
function unixTimeConvert(unixTime) {
	var date = new Date(unixTime * 1000);
	var hour = date.getHours();
	var min = date.getMinutes();
	if(min < 10)
		min = "0" + min;
	if (date.getHours() > 12)
		return date.getHours() - 12 + ":" + min + " PM";
	else 
		return date.getHours() + ":" + min + " AM";
};

//convert the unixTime to fit the sydney time zone
function sydneyunixTimeConvert(unxiTime) {
	var date = new Date(unxiTime * 1000);
	var hour = (date.getHours() + 19) % 24;
	var min = date.getMinutes();
	if(min < 10)
		min = "0" + min;
	if (hour > 12)
		return hour - 12 + ":" + min + " PM";
	else 
		return hour + ":" + min + " AM";
};

//set time information with minutes
function setTimeWithMinutes(offset){
	var date = new Date();
	var hour = (date.getHours() + offset) % 24;
	var min = date.getMinutes();
	if(min < 10)
		min = "0" + min;
	if (hour > 12)
		return hour - 12 + ":" + min + " PM";
	else 
		return hour + ":" + min + " AM";
};

//set time with jet lag
function setTime(now, offset) {
		var time = (now + offset) % 24;
		if(time > 12) {
			return time - 12 + ' PM';
		} else if (time = 12) {
			return time + ' PM';
		} else if (time = 0) {
			return time + 12 +' AM';
		} else {
			return time + ' AM';
		}
};

//set the wind direction
function windSet(windNum){
    if(windNum >= 337.5 || windNum < 22.5) return windDirection = "N";
    else if(windNum >= 22.5 && windNum < 67.5) return windDirection = "NE";
    else if(windNum >= 67.5 && windNum < 112.5) return windDirection = "E";
    else if(windNum >= 112.5 && windNum < 157.5) return windDirection = "SE";
    else if(windNum >= 157.5 && windNum < 202.5) return windDirection = "S";
    else if(windNum >= 202.5 && windNum < 247.5) return windDirection = "SW";
    else if(windNum >= 247.5 && windNum < 292.5) return windDirection = "W";
    else if(windNum >= 292.5 && windNum < 337.5) return windDirection = "NW";
};

//Celsius to Fahrenheit
function ceTofa(num) {
	return (num * 2) + 30;
}

//Fahrenheit to Celsius
function faToce(num) {
	return (num - 30)/2 ;
}

//flag of the degree of Fahrenheit
var isFa = true;


//set celsius-button and fahrenheit-button click event function
$(document).ready(function(){

	$("* .celsius-button").click(function(e) {
		console.log("ce click");
		if (isFa) {
			tempConvert("f2c");
			$(".celsius-button").each(function(index) {
				$(this).css("opacity", "0.9");
			});
			$(".fahrenheit-button").each(function(index) {
				$(this).css("opacity", "0.5");
			});
		}
	});

	$("* .fahrenheit-button").click(function(e) {
		console.log("fa click");
		if (!isFa) {
			tempConvert("c2f");
			$(".fahrenheit-button").each(function(index) {
				$(this).css("opacity", "0.9");
			});
			$(".celsius-button").each(function(index) {
				$(this).css("opacity", "0.5");
			});
		}
	});


});

//change the background color and border color
var backgroundConvert = function(cloudyType, cityname, time, offset) {
	var newTime = (time + offset) % 24;
	if (newTime >= 7 && newTime <= 18) { 
		if (cloudyType.indexOf('cloudy') < 0){
			$("." + cityname).css("background","-webkit-gradient(linear, left top, left bottom, from(#2f76a1), to(#549dc5))");
			$("." + cityname).css("background","-webkit-linear-gradient(top, #2f76a1, #549dc5)");
			$("." + cityname).css("background","-moz-linear-gradient(top, #2f76a1, #549dc5)");
			$("." + cityname).css("border-bottom","solid 0.5px #a1c8df");
			$("." + cityname).css("border-top","solid 0.5px #a1c8df");
		} else {
			$("." + cityname).css("background","-webkit-gradient(linear, left top, left bottom, from(#718291), to(#617588))");
			$("." + cityname).css("background","-webkit-linear-gradient(top, #718291, #617588)");
			$("." + cityname).css("background","-moz-linear-gradient(top, #718291, #617588)");
			$("." + cityname).css("border-bottom","solid 0.5px #b6c0c9");
			$("." + cityname).css("border-top","solid 0.5px #b6c0c9");
		}		
	} else if (newTime > 18 || newTime < 7 ) {
		if (cloudyType.indexOf('cloudy') < 0){
			$("." + cityname).css("background","-webkit-gradient(linear, left top, left bottom, from(#141830), to(#262c43))");
			$("." + cityname).css("background","-webkit-linear-gradient(top, #141830, #262c43)");
			$("." + cityname).css("background","-moz-linear-gradient(top, #141830, #262c43)");
			$("." + cityname).css("border-bottom","solid 0.5px #8d8f9a");
			$("." + cityname).css("border-top","solid 0.5px #8d8f9a");
		} else {
			$("." + cityname).css("background","-webkit-gradient(linear, left top, left bottom, from(#0b131e), to(#232931))");
			$("." + cityname).css("background","-webkit-linear-gradient(top, #0b131e, #232931)");
			$("." + cityname).css("background","-moz-linear-gradient(top, #0b131e, #232931)");
			$("." + cityname).css("border-bottom","solid 0.5px #8b8f92");
			$("." + cityname).css("border-top","solid 0.5px #8b8f92");
		}		
	}
} 


//convert the fahrenheit and celsius
var tempConvert = function(type) {
	if (type == "c2f") {
		$(".temp-Tag").each(function(index) {
			var num = parseInt($(this).html().substring(0, $(this).html().length - 1));
			var num = Math.round(ceTofa(num));
			$(this).html(num + "˚");
		});
		isFa = true;
	} else if (type == "f2c") {
		$(".temp-Tag").each(function(index) {
			var num = parseInt($(this).html().substring(0, $(this).html().length - 1));
			var num = Math.round(faToce(num));
			$(this).html(num + "˚");
		});
		isFa = false;
	}
};

//implement the page rounting function
var Rounting = {
	htmlRouting: function() {
		 var hash = window.location.hash;
        $('.page').hide();
        if (hash == "") {
            $('#citieslist').show();
        }
        if (hash == "#city/currentlocation") {
            $('#currentlocation').show();
        }
        if (hash == "#city/sanjose") {
            $('#sanjose').show();
        }
        if (hash == "#city/sydney") {
            $('#sydney').show();
        }	},
	init: function() {
		$(window).on('hashchange', $.proxy(this.htmlRouting, this));
		this.htmlRouting();
	}
}







