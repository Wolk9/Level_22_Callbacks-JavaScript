const mededelingen = document.getElementsByTagName("body");

fetch("https://swapi.dev/api/people/1/")
  .then((response) => response.json())
  .then((data) => {
    dataHandling(data);
  })
  .catch((error) => {
    console.log(error);
  });
