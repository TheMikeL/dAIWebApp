$(document).ready(function() {
  var pictureTaken = false;
  $('#show_stream').hide();
});

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function firebaseSaveData() {
  var name = document.getElementById("name");
  var address = document.getElementById("address");
  var phone = document.getElementById("phone");
  var name_value = name.value;
  var address_value = address.value;
  var phone_value = phone.value;
  var firebaseRef = firebase.database().ref();
  var usersRef = firebaseRef.child("users");

  usersRef.push().set({
    name: name_value,
    address: address_value,
    phone_number: phone_value
  });

  var whoOrderedRef = firebaseRef.child("who_ordered");
  whoOrderedRef.set({
    name: name_value,
    phone_number: phone_value,
    address: address_value,
    order_made: false
  });
   document.getElementById("upload_snapshot").click();
  await sleep(1200);
  document.location.href = "shopping/shopping.html";
}

function whichButton(state) {
  if (state == "snap") {
    $('#take_snapshots').hide();
    $('.webcamBtn').hide();
    $('#show_stream').show();
    $('.repeatBtn').show();
  } else if (state == "stream") {
    $('#take_snapshots').show();
    $('.webcamBtn').show();
    $('#show_stream').hide();
    $('.repeatBtn').hide();
  }
}
