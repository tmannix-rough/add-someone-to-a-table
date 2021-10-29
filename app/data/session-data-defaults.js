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
                  "licenceHolder": "Bottled Water Plc",
                  "sourceOfSupply": "something",
                },
                {
                  "licenceNumber": "AN/02/233/003/0034",
                  "licenceName": "Bourton river",
                  "startDate": "1 January 2017",
                  "endDate": "31 December 2025",
                  "licenceHolder": "Bottled Water Plc",
                  "sourceOfSupply": "something",
                },
              ],





  //a var to set the success banner to show or not, default is not.
  "successBanner": "false",

}
