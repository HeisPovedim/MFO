import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
  const token = "7fd18aaabd7d53ffa4846e4521c1f736c13490eb";
  $("#code").suggestions({
      token: token,
      type: "fms_unit",
      onSelect: function(suggestion) {
          $('#code').val(suggestion.data.code)
          $('#place_of_issue').val(suggestion.value)
      }
  });
})