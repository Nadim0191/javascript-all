let enroll = true;
let getMark = 70;

function getenrollment(callback) {
//   console.log("get enroll");
  setTimeout(function () {
    console.log("your enroll process")
    if (enroll == true) {
      callback();
    } else {
      console.log("firstly you get payment");
    }
  }, 2000);
}
function getprocess(params) {
  setTimeout(function () {
    if (getMark >= 70) {
      params();
    } else {
      console.log("firstly you get payment");
    }
  }, 2000);
}
function getcertified() {
  console.log("you got certified");
}

getenrollment(function () {
  getprocess(getcertified);
});
