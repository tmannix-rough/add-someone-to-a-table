const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line



////////////////////////////////////////////
////////ADD A CONTACT

//Enter a name
router.get('/contacts/add-a-contact/enter-a-name', function(req, res) {

  //set back to the previous page
  req.session.data.back = req.headers.referer
  res.render('contacts/add-a-contact/enter-a-name');
});

router.post('/contacts/add-a-contact/enter-a-name', function(req, res) {

  //If the user has come from check-you-answers then redirect back to that page, else continue to enter an email
  if (req.session.data['back'].includes("check-your-answers")) {
    res.redirect('/contacts/add-a-contact/check-your-answers');
  } else {
    res.redirect('/contacts/add-a-contact/enter-an-email');
  }

});



//Enter an email
router.get('/contacts/add-a-contact/enter-an-email', function(req, res) {
  res.render('contacts/add-a-contact/enter-an-email');
});

router.post('/contacts/add-a-contact/enter-an-email', function(req, res) {
  res.redirect('/contacts/add-a-contact/check-your-answers');
});


//Check your answers
router.get('/contacts/add-a-contact/check-your-answers', function(req, res) {
  res.render('contacts/add-a-contact/check-your-answers');
});

router.post('/contacts/add-a-contact/check-your-answers', function(req, res) {


    // session data
    let name = req.session.data['name']
    let email = req.session.data['email']

    // make an object to hold data
    let newContact = {
      name,
      email
    };

    // add the new contact object to the contacts array
    req.session.data.contacts.push(newContact);

    //blank the name and email in case another contact is added
    req.session.data.name = ""
    req.session.data.email = ""

  res.redirect('/contacts/add-a-contact/contact-set-up');
});


//Success - Contact set up
router.get('/contacts/add-a-contact/contact-set-up', function(req, res) {


  res.render('contacts/add-a-contact/contact-set-up');
});




module.exports = router
