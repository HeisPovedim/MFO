import $ from 'jquery'
import { useForm } from 'react-hook-form';
import 'suggestions-jquery'

import { TOKEN } from '../api/dadata-token';

export const PlaceOfIssueScript = (placeOfIssue, OUCode, statusSelec) => {

  function formatResult(value, currentValue, suggestion) {
    suggestion.value = suggestion.data.code;
    return suggestion.data.code + " — " + suggestion.data.name;
  }
  function showSuggestion(suggestion) {
    $("#place_of_issue").val(suggestion.data.name)
    $("#code_division").val(suggestion.data.code)
    placeOfIssue(suggestion.data.name)
    OUCode(suggestion.data.code)
    statusSelec(false)
  }
  function clearSuggestion() {
    $("#place_of_issue").val("");
    placeOfIssue("")
    statusSelec(true)
  }
  $("#code_division").suggestions({
    token: TOKEN,
    type: "fms_unit",
    formatResult: formatResult,
    onSelect: showSuggestion,
    onSelectNothing: clearSuggestion
  })
}

export const LegalAddress = (setResidentialAddress, setHouseRegistration) => {

  let $address = $("#address_reg_id_address")
  let $house = $("#address_reg_id_house_number")

  $address.suggestions({
    token: TOKEN,
    type: 'ADDRESS',
    bounds: "region-district-city-street",
    onSelect: setLegalAddressToFields,
  })

  $house.suggestions({
    token: TOKEN,
    type: 'ADDRESS',
    hint: false,
    noSuggestionsHint: false,
    bounds: "house",
    constraints: $address,
    onSelect: setPostalCodeLegal
  });

  function setPostalCodeLegal(suggestion) {
    var legal_zip = $('input[data-dadata="legal_zip"]');
    var legal_house = $('input[data-dadata="legal_building"]')
    legal_zip.val(suggestion.data.postal_code)
    legal_house.val(suggestion.data.house)
    setHouseRegistration(suggestion.data.house)
  }

  function setLegalAddressToFields(suggestion) {
      console.log(suggestion)
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
          console.log(suggestion.data.street_with_type)
      } else if (suggestion.data.settlement_with_type !== null) {
          $('input[data-dadata="legal_street"]').val(suggestion.data.settlement_with_type);
      }
      if (suggestion.data.house !== null) {
        $('input[data-dadata="actual_building"]').val(suggestion.data.house);
    }
  }
}


export const ActualAddress = (setAddressActual, setHouseActual) => {
  
  let $address = $("#address_act_id_address")
  let $house = $("#address_act_id_house_number")

  $address.suggestions({
    token: TOKEN,
    type: 'ADDRESS',
    bounds: "region-district-city-street",
    onSelect: setActualAddressToFields,
  })

  $house.suggestions({
    token: TOKEN,
    type: 'ADDRESS',
    hint: false,
    noSuggestionsHint: false,
    bounds: "house",
    constraints: $address,
    onSelect: setPostalCodeLegal
  });

  function setPostalCodeLegal(suggestion) {
    var actual_zip = $('input[data-dadata="actual_zip"]');
    var actual_house = $('input[data-dadata="actual_building"]')
    actual_zip.val(suggestion.data.postal_code)
    actual_house.val(suggestion.data.house)
    setHouseActual(suggestion.data.house)
  }
  
  function setActualAddressToFields(suggestion) {
    setAddressActual(suggestion.value)
    $('input[data-dadata="actual_zip"]').val('');
    $('input[data-dadata="actual_region"]').val('');
    $('input[data-dadata="actual_district"]').val('');
    $('input[data-dadata="actual_city"]').val('');
    $('input[data-dadata="actual_street"]').val('');
    $('input[data-dadata="actual_building"]').val('');
    if (suggestion.data.postal_code !== null) {
      $('input[data-dadata="actual_zip"]').val(suggestion.data.postal_code);
    }
    if (suggestion.data.region_with_type !== null) {
      $('input[data-dadata="actual_region"]').val(suggestion.data.region_with_type);
    }
    if (suggestion.data.area_with_type !== null) {
      $('input[data-dadata="actual_district"]').val(suggestion.data.area_with_type);
    }
    if (suggestion.data.city_with_type !== null) {
      $('input[data-dadata="actual_city"]').val(suggestion.data.city_with_type);
    } else if (suggestion.data.settlement_with_type !== null) {
      $('input[data-dadata="actual_city"]').val(suggestion.data.settlement_with_type);
    }
    if (suggestion.data.street_with_type !== null) {
      $('input[data-dadata="actual_street"]').val(suggestion.data.street_with_type);
    } else if (suggestion.data.settlement_with_type !== null) {
      $('input[data-dadata="actual_street"]').val(suggestion.data.settlement_with_type);
    }
    if (suggestion.data.house !== null) {
      $('input[data-dadata="actual_building"]').val(suggestion.data.house);
    }
  }
}