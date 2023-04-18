const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const countryHtml = countries.map((country) => getCountry(country));
  const countryContainer = document.getElementById("countries");
  countryContainer.innerHTML = countryHtml.join(" ");
};

const getCountry = (country) => {
  return `
    <div class="country">
      <div class="img-box">
        <img src="${country.flags.png}" alt="${country.name.common} flags" />
      </div>
      <div class="details">
        <h3>${country.name.common.slice(0, 15)}</h3>
        <table>
        <tbody>
            <tr>
                <td>Area:</td>
                <td>:</td>
                <td>${country.area}</td>
            </tr>
            <tr>
                <td>Population:</td>
                <td>:</td>
                <td>${country.population}</td>
            </tr>
            <tr>
                <td>Region:</td>
                <td>:</td>
                <td>${country.region}</td>
            </tr>
            <tr>
                <td>Start Off Week:</td>
                <td>:</td>
                <td>${country.startOfWeek}</td>
            </tr>
            <tr>
                <td>Sub Region:</td>
                <td>:</td>
                <td>${country.subregion}</td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
    `;
};

loadCountries();
