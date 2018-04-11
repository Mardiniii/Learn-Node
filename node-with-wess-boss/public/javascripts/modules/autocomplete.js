function autocomplete(input, latInput, lngInput) {
  if (!input) return; // We don't want to run this fuction if we don't have addres in this page

  const dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });

  // if someone hits enter in the address field don't submit the form
  input.on('keydown', (w) => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

export default autocomplete;