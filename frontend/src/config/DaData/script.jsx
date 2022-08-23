import $ from 'jquery'
import 'suggestions-jquery'

import { TOKEN } from '../api/dadata-token';

export const PlaceOfIssueScript = (setPlaceOfIssue) => {
  function formatResult(value, currentValue, suggestion) {
    suggestion.value = suggestion.data.code;
    return suggestion.data.code + " — " + suggestion.data.name;
  }
  function showSuggestion(suggestion) {
    $("#place_of_issue").val(suggestion.data.name);
    setPlaceOfIssue(suggestion.data.name);
  }
  function clearSuggestion() {
    $("#place_of_issue").val("");
  }
  $("#code_division").suggestions({
    token: TOKEN,
    type: "fms_unit",
    formatResult: formatResult,
    onSelect: showSuggestion,
    onSelectNothing: clearSuggestion
  })
}

export const AddressScript = (setResidentialAddress) => {
  
  $("#address_reg_id_address").suggestions({
    token: TOKEN,
    type: 'ADDRESS',
    hint: false,
    bounds: "region-district-city-street",
    onSelect: setLegalAddressToFields,
  })

  $("#address_reg_id_house_number").suggestions({
    token: TOKEN,
    type: 'ADDRESS',
    hint: false,
    bounds: "house",
    constraints: $("#address_reg_id_address"),
    onSelect: function(suggestion) {
      var legal_zip = $('input[data-dadata="legal_zip"]')
      var legal_house = $('input[data-dadata="legal_building"]')
      console.log(suggestion.data)
        legal_zip.val(suggestion.data.postal_code)
        legal_house.val(suggestion.data.house)
    }
  });

  // $legal_house.suggestions({
  //   token: api_key,
  //   type: 'ADDRESS',
  //   hint: false,
  //   noSuggestionsHint: false,
  //   bounds: "house",
  //   constraints: $legal_address,
  //   onSelect: setPostalCodeLegal
  // });
  // function setPostalCodeLegal(suggestion) {
  // var legal_zip = $('input[data-dadata="legal_zip"]');
  // if (typeof legal_zip.val() !== 'undefined') {
  //     legal_zip.val(suggestion.data.postal_code);
  //     if (isRequired(legal_zip)) {
  //         checkField(legal_zip)
  //     }
  // }
  // }

function setLegalAddressToFields(suggestion) {
    console.log(suggestion.data.value)
    setResidentialAddress(suggestion.value)
    $('input[data-dadata="legal_zip"]').val('');
    $('input[data-dadata="legal_region"]').val('');
    $('input[data-dadata="legal_district"]').val('');
    $('input[data-dadata="legal_city"]').val('');
    $('input[data-dadata="legal_street"]').val('');
    $('input[data-dadata="legal_building"]').val('');
    if (suggestion.data.postal_code !== null) {
        $('input[data-dadata="legal_zip"]').val(suggestion.data.postal_code);
    }
    if (suggestion.data.region_with_type !== null) {
        $('input[data-dadata="legal_region"]').val(suggestion.data.region_with_type);
    }
    if (suggestion.data.area_with_type !== null) {
        $('input[data-dadata="legal_district"]').val(suggestion.data.area_with_type);
    }
    if (suggestion.data.city_with_type !== null) {
        $('input[data-dadata="legal_city"]').val(suggestion.data.city_with_type);
    } else if (suggestion.data.settlement_with_type !== null) {
        $('input[data-dadata="legal_city"]').val(suggestion.data.settlement_with_type);
    }
    if (suggestion.data.street_with_type !== null) {
        $('input[data-dadata="legal_street"]').val(suggestion.data.street_with_type);
        
    } else if (suggestion.data.settlement_with_type !== null) {
        $('input[data-dadata="legal_street"]').val(suggestion.data.settlement_with_type);
    }
}
} 