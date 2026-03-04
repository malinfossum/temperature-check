const app = document.getElementById("app");

updateView();
function updateView() {
	app.innerHTML = /*HTML*/ `
    <h1>Temperature Check</h1>

    <label for="temp">Temperature:</label>
    <input
      id="temp"
      type="number"
      value="${temperature}"
      onchange="setTemperature(this.value)"
      placeholder="Enter temperature"
    >

    <button onclick="checkTemperature()">Check</button>

    <p>${message}</p>
  `;
}
