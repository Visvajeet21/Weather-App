//All the QuerySelectroFields
const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".location");
const dateandTimeField = document.querySelector(".date-time");
const conditionField = document.querySelector(".condition");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

//Added Eventlistener to the button
form.addEventListener("submit", searchforLocation);

let target = "Lucknow"; //Assigned default value to the target variable

const fetchResults = async (targetLocation) => {
  //API key for the weather in this we have used string literal "targetLocation" that will be changed dynamically.
  let url = `http://api.weatherapi.com/v1/current.json?key=03fadabd289b4859a4b65824241507&q=${targetLocation}&aqi=no`;

  const res = await fetch(url);
  const data = await res.json(); //Convert the data into JSON so that can be used
  console.log(data);

  let locationName = data.location.name; // Location fetching from API
  let temp = data.current.temp_c; // Temperature fetching from API
  let condition = data.current.condition.text; // Weather condition fetching from API
  let localTime = data.location.localtime; //Local date and time fetching

  updateDetails(temp, locationName, localTime, condition); //Used to update the details of location
};

function updateDetails(temp, locationName, localTime, condition) {
  //   let splitDate = time.split(" ")[0];
  //   let splitTime = time.split(" ")[1];

  //   let currentDay = getDayName(new Date(splitDate).getDay());

  temperatureField.innerText = temp; //Temperature Update
  locationField.innerText = locationName; //Locationn Update
  dateandTimeField.innerText = localTime; // Date and time Update
  // dateandTimeField = `${splitDate} ${currentDay} ${splitTime}`;
  conditionField.innerText = condition; //Condition Update
}

function searchforLocation(e) {
  e.preventDefault();

  target = searchField.value; // This will take the input location and passes it in the target location to fetch

  fetchResults(target); // This w=value is then passed and corresponding data is fetched
}

// function getDayName(number) {
//   switch (number) {
//     case 0:
//       return "Sunday";
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//   }
// }

fetchResults(target);
