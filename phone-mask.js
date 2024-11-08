document.addEventListener('DOMContentLoaded', function () {
  //using querySelectorAll in case of multiple items with the same class
  const phones = document.querySelectorAll('.Phone')

  phones.forEach(function (phone) {
    //forcing max-length to avoid bugs
    phone.setAttribute('maxlength', '15');

    phone.addEventListener('input', function (e) {
      let phoneNumber = e.target.value.replace(/\D/g, '');
      let formattedPhoneNumber = '';

      if (phoneNumber.length > 0) {
        formattedPhoneNumber = '(' + phoneNumber.substring(0, 2);
      }
      if (phoneNumber.length > 2) {
        formattedPhoneNumber += ') ' + phoneNumber.substring(2, 6);
      }
      if (phoneNumber.length > 6) {
        formattedPhoneNumber += '-' + phoneNumber.substring(6, 10);
      }

      if (phoneNumber.length === 11) {
        formattedPhoneNumber = '(' + phoneNumber.substring(0, 2) + ') ' + phoneNumber.substring(2, 7) + '-' + phoneNumber.substring(7, 11);
      }

      e.target.value = formattedPhoneNumber;
    });
  });
});