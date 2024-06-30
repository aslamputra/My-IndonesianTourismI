function bookHotel(hotelName, pricePerNight) {
    document.getElementById('hotel-booking').style.display = 'none';
    document.getElementById('booking-form').style.display = 'block';
    document.getElementById('hotel-name').value = hotelName;
    document.getElementById('price-per-night').value = pricePerNight;
    document.getElementById('nights').value = '';
    document.getElementById('total-price').value = '';
}

function cancelBooking() {
    document.getElementById('booking-form').style.display = 'none';
    document.getElementById('hotel-booking').style.display = 'block';
}

document.getElementById('nights').addEventListener('input', function () {
    const pricePerNight = document.getElementById('price-per-night').value;
    const nights = document.getElementById('nights').value;
    const totalPrice = pricePerNight * nights;
    document.getElementById('total-price').value = totalPrice;
});

function processBooking() {
    const hotelName = document.getElementById('hotel-name').value;
    const pricePerNight = document.getElementById('price-per-night').value;
    const nights = document.getElementById('nights').value;
    const totalPrice = document.getElementById('total-price').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (nights === '' || totalPrice === '' || name === '' || email === '') {
        alert('Please fill in all fields');
        return false;
    }

    alert(`Booking Successful!
    Hotel: ${hotelName}
    Price per Night: Rp ${pricePerNight}
    Number of Nights: ${nights}
    Total Price: Rp ${totalPrice}
    Name: ${name}
    Email: ${email}`);

    cancelBooking();
    return false;
}
