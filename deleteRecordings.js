const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = require('twilio')(accountSid, authToken);

// UPDATE THESE VARS !!
let startDate = '2019-01-01';
let endDate =  '2023-12-31';


async function deleteRecordings() {
   // Define date range - should match what was initiated
   var start = new Date(startDate);
   var end = new Date(endDate);

   console.log("Begining process to delete call recordings between: " + start + " and " + end);

   // start loop through date range
   var date = new Date(start);
   while(date <= end){

      //const dateFormatted = date.toISOString().split('T')[0];
      await client.recordings
        .list({dateCreated: date})
        .then(recordings => {
          recordings.forEach(r => {
            client.recordings(r.sid).remove();
            console.log("Recording: " + r.sid + " deleted");
          });
      });

        // Update date to next day then continue loop
       var newDate = date.setDate(date.getDate() + 1);
       date = new Date(newDate);
   };

   console.log("\nComplete. All recordings for configured timeframe have been deleted.");
}

deleteRecordings();
