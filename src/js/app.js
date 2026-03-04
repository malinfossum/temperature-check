let temperature = "";
let message = "";

function setTemperature(value) {
	temperature = value;
	updateView();
}

function checkTemperature() {
	const temp = Number(temperature);
	message = getTemperatureMessage(temp);
	updateView();
}

function getTemperatureMessage(temp) {
	if (temp > 20) {
		return "It's hot outside!";
	} else if (temp >= 5) {
		return "The temperature feels nice.";
	} else {
		return "It's cold outside!";
	}
}
