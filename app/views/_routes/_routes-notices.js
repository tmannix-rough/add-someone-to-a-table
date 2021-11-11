const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


//get today's date
let date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;

const yyyy = date.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}

//change the month into a name
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
mm = monthNames[mm - 1]

const today = `${dd} ${mm} ${yyyy}`;





//Send a water abstraction alert
const folder = "/notices/"


///Apply  filters

router.post('/notification-report/apply-filters', function(req, res) {

  //check to see if the user is clearing filters
  if (req.session.data.clearFilters == "true") {

    req.session.data.type = ""
    req.session.data.sentBy = ""
    req.session.data.filteredResults = ""
    req.session.data.openDetails = true
//    req.session.data.focus="alert"

  } else {


  //get the list of notifications
  let notifications = req.session.data.notifications


//set global scope of filteredResults
let filteredResults = ""

//set the type filter
let typeFilters = ""
 typeFilters = req.session.data.type
 if (typeof typeFilters === 'undefined') {
   typeFilters= ""
 }

 if (typeof typeFilters.length) {
   filteredResults = notifications.filter(el => ( typeFilters.indexOf(el.notification) >= 0 ))
 }


 //set the sent by filter
  let sentByFilter = ""
   sentByFilter = req.session.data.sentBy
  if (sentByFilter === 'undefined') {
     sentByFilter = ""
   }

  if ((sentByFilter.length) && (filteredResults.length)) {
    filteredResults = filteredResults.filter(el => (sentByFilter.indexOf(el.sentBy) >=0 ) );
  } else if (sentByFilter.length) {
    filteredResults = notifications.filter(el => (sentByFilter.indexOf(el.sentBy) >=0 ) );
  } else if ((!sentByFilter.length) && (!filteredResults.length)) {
    filteredResults = notifications
  }


  //set filtered results to empty if filters don't return anything
    if (!filteredResults.length){
      filteredResults = "empty"
      console.log(filteredResults + "null")
    }
console.log(filteredResults)

req.session.data.openDetails = true
//req.session.data.focus="alert"
req.session.data.filteredResults = filteredResults

}

  req.session.data.clearFilters = ""
  res.redirect('../notification-report#focus');

});


///clear filters

router.post('/notification-report/clear-filters', function(req, res) {




  res.redirect('../notification-report#focus');
});

module.exports = router
