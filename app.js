var main = function() {
   var cities = [
      "Astana",
      "Almaty",
      "Aktau",
      "Atyrau",
      "Uralsk",
      "Aktobe",
      "Karaganda",
      "KyzylOrda",
      "Kostanai",
      "Kokshetau",
      "Pavlodar",
      "Oskemen",
      "Taraz",
      "Shimkent",
      "Moscow",
      "London",
      "NewYork",
      "LosAngeles",
      "Houston",
      "Krasnodar"
    ];
  	$( "#search" ).autocomplete({source: cities });
};
 
$(document).ready(main);