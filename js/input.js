$(document).ready(function () {
  $(".phone").mask("00-000-00-00");
});

const input = document.querySelector("#phone");

window.intlTelInput(input, {
  utilsScript: "js/utils.js",
  defaultCountry: "auto",
  separateDialCode: true,
  // allowDropdown: false,
  customPlaceholder: function (
    selectedCountryPlaceholder,
    selectedCountryData
  ) {
    return "";
  },
  geoIpLookup: function (callback) {
    $.get("https://ipinfo.io", function () {}, "jsonp").always(function (resp) {
      var countryCode = resp && resp.country ? resp.country : "";
      callback(countryCode);
    });
  },
  // nationalMode: false,
  initialCountry: "auto",

  preferredCountries: ["ua", "ru", "by", "kz"],
});
