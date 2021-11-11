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
                  "name": "Bottled Water Plc (Head Office)",
                  "email": "headoffice@bwplc.co.uk"
                },
                {
                  "name": "Jane Bigglesworth",
                  "email": "jbigglesworth@bwplc.co.uk"
                },
              ],

  "licences": [
                {
                  "licenceNumber": "AN/02/233/003/0098",
                  "licenceName": "Glindenfold Lake",
                  "startDate": "1 January 2019",
                  "endDate": "31 December 2029",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=/contacts/contacts-info#contacts>View contacts</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "March to September",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> <a href=points.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=app/views/licences/licences-table.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubnic metres per year",
                  "contactsHolder": "Bottled Water Plc",
                  "contactsAddress": "72 Guild Street <br> London <br> SE23 6FH",
                  "contactsDetails": "07700 900457 <br> waterteam@bottledwater.com",
                  "pointsAbstraction1": "At National Grid Reference SK 675 124 (GLENTHAM BOREHOLE NO.1)",
                  "pointsAbstraction2": "At National Grid Reference SK 675 343 (GLENTHAM BOREHOLE NO.2)",
                  "pointsAbstraction3": "At National Grid Reference SK 675 241 (GLENTHAM BOREHOLE NO.3)"
                },
                {
                  "licenceNumber": "AN/02/233/003/0034",
                  "licenceName": "Bourton river",
                  "startDate": "1 January 2017",
                  "endDate": "31 December 2025",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=/contacts/contacts-info#contacts>View contacts</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "March to September",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> <a href=points.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=app/views/licences/licences-table.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubnic metres per year",
                  "contactsHolder": "Big Smith Farms ltd",
                  "contactsAddress": "72 Guild Street <br> London <br> SE23 6FH",
                  "contactsDetails": "07700 900457 <br> waterteam@bottledwater.com",
                  "pointsAbstraction1": "At National Grid Reference SK 675 124 (GLENTHAM BOREHOLE NO.1)",
                  "pointsAbstraction2": "At National Grid Reference SK 675 343 (GLENTHAM BOREHOLE NO.2)",
                  "pointsAbstraction3": "At National Grid Reference SK 675 241 (GLENTHAM BOREHOLE NO.3)"
                },
                {
                  "licenceNumber": "AN/02/233/003/0093",
                  "licenceName": "Honeydew Crescent",
                  "startDate": "5 September 2020",
                  "endDate": "15 September 2034",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=/contacts/contacts-info#contacts>View contacts</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "February to December",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> <a href=points.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=app/views/licences/licences-table.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubnic metres per year",
                  "contactsHolder": "D. B. Beecham-Smith",
                  "contactsAddress": "72 Guild Street <br> London <br> SE23 6FH",
                  "contactsDetails": "07700 900457 <br> waterteam@bottledwater.com",
                  "pointsAbstraction1": "At National Grid Reference SK 675 124 (GLENTHAM BOREHOLE NO.1)",
                  "pointsAbstraction2": "At National Grid Reference SK 675 343 (GLENTHAM BOREHOLE NO.2)",
                  "pointsAbstraction3": "At National Grid Reference SK 675 241 (GLENTHAM BOREHOLE NO.3)"
                }
              ],


"billRuns": [
              {
                "billRunsDate": "22 December 2020",
                "billRunsRegion": "Anglian",
                "billRunsType": "Annual",
                "billRunsBills": "1",
                "billRunsValue": "£1,000",
                "billRunsStatus": "Rejected",
              },
              {
                "billRunsDate": "8 January 2020",
                "billRunsRegion": "Anglian",
                "billRunsType": "Supplementary",
                "billRunsBills": "5",
                "billRunsValue": "£5,600",
                "billRunsStatus": "ready",
              },
              {
                "billRunsDate": "19 November 2019",
                "billRunsRegion": "Southern",
                "billRunsType": "Two-part tariff summer",
                "billRunsBills": "-",
                "billRunsValue": "£3,600",
                "billRunsStatus": "ready",
              },
              {
                "billRunsDate": "2 December 2018",
                "billRunsRegion": "Anglian",
                "billRunsType": "Annual",
                "billRunsBills": "5",
                "billRunsValue": "£7000",
                "billRunsStatus": "sent",
              },
              {
                "billRunsDate": "14 October 2018",
                "billRunsRegion": "Midlands",
                "billRunsType": "Supplementary",
                "billRunsBills": "20",
                "billRunsValue": "£18,000",
                "billRunsStatus": "Rejected",
              },
              {
                "billRunsDate": "22 December 2020",
                "billRunsRegion": "Southern",
                "billRunsType": "Annual",
                "billRunsBills": "-",
                "billRunsValue": "-",
                "billRunsStatus": "ready",
              },
            ],

  //a var to set the success banner to show or not, default is not.
  "successBanner": "false",

}
