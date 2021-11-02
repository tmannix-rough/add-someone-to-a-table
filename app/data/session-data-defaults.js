/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here


  "contacts": [
                {
                  "name": "Jane Bigglesworth",
                  "email": "jbigglesworth@gmail.co.uk"
                },
              ],

  "licences": [
                {
                  "licenceNumber": "AN/02/233/003/0098",
                  "licenceName": "Glindenfold Lake",
                  "startDate": "1 January 2019",
                  "endDate": "31 December 2029",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=app/views/licences/licences-table.html>View contact details</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "March to September",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> <a href=app/views/licences/licences-table.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=app/views/licences/licences-table.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubnic metres per year"
                },
                {
                  "licenceNumber": "AN/02/233/003/0034",
                  "licenceName": "Bourton river",
                  "startDate": "1 January 2017",
                  "endDate": "31 December 2025",
                  "licenceHolder": "Big Smith Farms Ltd <br> <a href=app/views/licences/licences-table.html>View contact details</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "March to September",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> <a href=app/views/licences/licences-table.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=app/views/licences/licences-table.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubnic metres per year"
                },
                {
                  "licenceNumber": "AN/02/233/003/0093",
                  "licenceName": "Honeydew Crescent",
                  "startDate": "5 September 2020",
                  "endDate": "15 September 2034",
                  "licenceHolder": "D. B. Beecham-Smith <br> <a href=app/views/licences/licences-table.html>View contact details</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "February to December",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> <a href=app/views/licences/licences-table.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=app/views/licences/licences-table.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubnic metres per year"
                }
              ],





  //a var to set the success banner to show or not, default is not.
  "successBanner": "false",

}
