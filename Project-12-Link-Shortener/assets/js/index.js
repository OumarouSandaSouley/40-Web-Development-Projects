const URL = "https://url-shortener-service.p.rapidapi.com/shorten";
const inputUrl = document.querySelector("#url");
const validateBtn = document.querySelector("#validate");
const urlResult = document.querySelector("#urlResult");
const view = document.querySelector("#view");
const copy = document.querySelector("#copy");
const RAPID_API_API_KEY = "54baddf275msh7afaf3bad2e009fp1904bbjsn50e0f793943f";
let config = {}

const initiate = () => {
  const urlToShorten = inputUrl.value;

  const data = { url: urlToShorten };
  config = {
    method: "post",
    url: "https://url-shortener-service.p.rapidapi.com/shorten",
    headers: {
      "x-rapidapi-key": RAPID_API_API_KEY,
      "x-rapidapi-host": "url-shortener-service.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: data,
  };
};

validateBtn.addEventListener("click", () => {
    initiate()
  axios(config)
    .then((response) => {
      urlResult.value = response.data.result_url;
      view.href = response.data.result_url;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

copy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(urlResult.value)
})