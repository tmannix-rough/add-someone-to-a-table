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

  "search": "",

  //Customer/Company
    "customerID": "0",

    //Customer/Company
    "customers": [{
        "name": "Bottled Water Plc",
        "WAA": "post",
      },
    ],


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
                  "holder": "Bottled Water Plc",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=/contacts/contacts-info#contacts>View contacts</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "March to September",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> At National Grid Reference SK 675 241 <br><a href=points.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=conditions.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubic metres per year",
                  "contactsHolder": "Bottled Water Plc",
                  "contactsAddress": "72 Guild Street <br> London <br> SE23 6FH",
                  "contactsDetails": "07700 900457 <br> waterteam@bottledwater.com",
                  "pointsAbstraction1": "At National Grid Reference SK 675 124 (GLENTHAM BOREHOLE NO.1)",
                  "pointsAbstraction2": "At National Grid Reference SK 675 343 (GLENTHAM BOREHOLE NO.2)",
                  "pointsAbstraction3": "At National Grid Reference SK 675 241 (GLENTHAM BOREHOLE NO.3)",
                  "conditionsScreening": "The Agency may have regard to its best practice guide, the Eel Menual: Screening at intakes and outfalls: measures to protect eel (or equivalent guidance) in agreeing where, how and what type of eel screen should be installed and together with the results of any monitoring in determining whether the eel screen is properly effective and maintained, and in judging whether it is necessary to require or replacement of the eel screen.",
                  "conditionsPurpose": "Make-up or top up water",
                  "conditionsGauging": "At National Grid Reference SX 426725",
                  "conditionsThreshold": "0.73m ODN",
                  "conditionsOther": "No abstraction shall take place from the Denton New Cut when the water level in the Cut as measured at Little Durnsford (SW 321562) is at or below 0.73m ODN."
                },
                {
                  "licenceNumber": "AN/02/233/003/0034",
                  "licenceName": "Bourton river",
                  "startDate": "1 January 2017",
                  "endDate": "31 December 2025",
                  "holder": "Bottled Water Plc",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=/contacts/contacts-info#contacts>View contacts</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "March to September",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> At National Grid Reference SK 675 241 <br> <a href=points.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=conditions.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubic metres per year",
                  "contactsHolder": "Big Smith Farms ltd",
                  "contactsAddress": "72 Guild Street <br> London <br> SE23 6FH",
                  "contactsDetails": "07700 900457 <br> waterteam@bottledwater.com",
                  "pointsAbstraction1": "At National Grid Reference SK 675 124 (GLENTHAM BOREHOLE NO.1)",
                  "pointsAbstraction2": "At National Grid Reference SK 675 343 (GLENTHAM BOREHOLE NO.2)",
                  "pointsAbstraction3": "At National Grid Reference SK 675 241 (GLENTHAM BOREHOLE NO.3)",
                  "conditionsScreening": "The Agency may have regard to its best practice guide, the Eel Menual: Screening at intakes and outfalls: measures to protect eel (or equivalent guidance) in agreeing where, how and what type of eel screen should be installed and together with the results of any monitoring in determining whether the eel screen is properly effective and maintained, and in judging whether it is necessary to require or replacement of the eel screen.",
                  "conditionsPurpose": "Make-up or top up water",
                  "conditionsGauging": "At National Grid Reference SX 426725",
                  "conditionsThreshold": "0.73m ODN",
                  "conditionsOther": "No abstraction shall take place from the Denton New Cut when the water level in the Cut as measured at Little Durnsford (SW 321562) is at or below 0.73m ODN."
                },
                {
                  "licenceNumber": "AN/02/233/003/0093",
                  "licenceName": "Honeydew Crescent",
                  "startDate": "5 September 2020",
                  "endDate": "15 September 2034",
                  "holder": "Bottled Water Plc",
                  "licenceHolder": "Bottled Water Plc  <br> <a href=/contacts/contacts-info#contacts>View contacts</a>",
                  "sourceOfSupply": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                  "purpose": "Spray irrigation",
                  "periodOfAbstraction": "February to December",
                  "pointsOfAbstraction": "At National Grid Reference SK 675124 <br> At National Grid Reference SK 675343 <br> At National Grid Reference SK 675 241 <br> <a href=points.html>View details of abstraction point</a>",
                  "abstractionConditions": "Eel screening condition <br> Flow cessation condition <br> Chemical cessation condition <br> <a href=conditions.html>View details of abstraction conditions</a>",
                  "abstractionAmounts": "90 cubic metres per hour <br> 250 cubic metres per day <br> 20,000 cubic metres per year",
                  "contactsHolder": "D. B. Beecham-Smith",
                  "contactsAddress": "72 Guild Street <br> London <br> SE23 6FH",
                  "contactsDetails": "07700 900457 <br> waterteam@bottledwater.com",
                  "pointsAbstraction1": "At National Grid Reference SK 675 124 (GLENTHAM BOREHOLE NO.1)",
                  "pointsAbstraction2": "At National Grid Reference SK 675 343 (GLENTHAM BOREHOLE NO.2)",
                  "pointsAbstraction3": "At National Grid Reference SK 675 241 (GLENTHAM BOREHOLE NO.3)",
                  "conditionsScreening": "The Agency may have regard to its best practice guide, the Eel Menual: Screening at intakes and outfalls: measures to protect eel (or equivalent guidance) in agreeing where, how and what type of eel screen should be installed and together with the results of any monitoring in determining whether the eel screen is properly effective and maintained, and in judging whether it is necessary to require or replacement of the eel screen.",
                  "conditionsPurpose": "Make-up or top up water",
                  "conditionsGauging": "At National Grid Reference SX 426725",
                  "conditionsThreshold": "0.73m ODN",
                  "conditionsOther": "No abstraction shall take place from the Denton New Cut when the water level in the Cut as measured at Little Durnsford (SW 321562) is at or below 0.73m ODN."
                }
              ],


"billRuns": [
              {
                "billRunsDate": "22 December 2020",
                "billRunsRegion": "Anglian",
                "billRunsType": "Annual",
                "billRunsBills": "1",
                "billRunsValue": "£1,000",
                "billRunsStatus": "error",
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
                "billRunsStatus": "error",
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


            //Notification report
    "notifications": [{
                        "date": "22 December 2020",
                        "notification": "Returns: reminder",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "17 December 2020",
                        "notification": "Returns: send paper forms",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "1 December 2020",
                        "notification": "Returns: send paper forms",
                        "sentBy": "rachel.pilkns@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "25 November 2020",
                        "notification": "Returns: send paper forms",
                        "sentBy": "jim.pearce@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },

                      {
                        "date": "21 November 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "ralph.biddwell@defra.gov.uk",
                        "numberOfrecipients": "5",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "19 November 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "15 November 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "10 November 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "1 November 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "31 October 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "30 October 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "17 October 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "15 October 2020",
                        "notification": "Expiring licence(s): invitation to renew",
                        "sentBy": "tim.teace@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "7 October 2020",
                        "notification": "Returns: send paper forms",
                        "sentBy": "rachel.pilkns@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                      },
                      {
                        "date": "6 October 2020",
                        "notification": "Returns: send paper forms",
                        "sentBy": "rachel.pilkns@defra.gov.uk",
                        "numberOfrecipients": "1",
                        "recipients": [{
                          "licenceNumber": "03/28/69/0034",
                          "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                          "method": "letter",
                          "status": "sent",
                        }],
                        "problems": "",
                        },
                        {
                          "date": "5 October 2020",
                          "notification": "Returns: send paper forms",
                          "sentBy": "rachel.pilkns@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "4 October 2020",
                          "notification": "Returns: send paper forms",
                          "sentBy": "rachel.pilkns@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "30 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "29 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "28 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "27 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "26 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "26 September 2020",
                          "notification": "Hands off flow: resume abstraction",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "20 September 2020",
                          "notification": "Hands off flow: stop or reduce abstraction",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "19 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "15 September 2020",
                          "notification": "Hands off flow: stop or reduce abstraction",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "14 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "12 September 2020",
                          "notification": "Returns: reminder",
                          "sentBy": "tim.teace@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "4 September 2020",
                          "notification": "Returns: send paper forms",
                          "sentBy": "rachel.pilkns@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "1 September 2020",
                          "notification": "Hands off flow: levels warning",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        {
                          "date": "31 August 2020",
                          "notification": "Returns: invitation",
                          "sentBy": "jim.pearce@defra.gov.uk",
                          "numberOfrecipients": "1",
                          "recipients": [{
                            "licenceNumber": "03/28/69/0034",
                            "sentTo": "Anglian Water Services Ltd,FAO D Harker Water Resources,Lancaster House,Lancaster Way,Huntingdon,CAMBRIDGESHIRE,PE29 6XQ",
                            "method": "letter",
                            "status": "sent",
                          }],
                          "problems": "",
                        },
                        ],

  //a var to set the success banner to show or not, default is not.
  "successBanner": "false",

}
