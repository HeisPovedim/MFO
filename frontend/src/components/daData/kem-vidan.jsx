
  const Pasport = (token, query) => {
    var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fms_unit";
    var options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + token
      },
      body: JSON.stringify({query: query})
    }
    fetch(url, options)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log("error", error));
  }
export { Pasport }