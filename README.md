# twilio_deleteRecordings
Simple script which deletes all the recordings in an account. Wrote this for an enterprise customer to help them delete several million recordings over a period of a few years. The Twilio blog had a python version which was fairly robust but nothing with NodeJS documented at the time. Recordings are deleted day by day to avoid hitting the return limit from Twilio's API. 

## How to Use
1. Ensure node and Twilio's node helper library are setup https://www.twilio.com/docs/libraries/reference/twilio-node/
2. Setup environment variables for TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN (https://www.twilio.com/en-us/blog/working-with-environment-variables-in-node-js-html)

OR hardcode your Twilio account credentials (auth token and account SID) into the script (not recommended, environment variables are always preferred)

3. Configure the start and end dates (all recordings in between will be deleted)
![image](https://github.com/sgeddy/twilio_deleteRecordings/assets/26208555/edac6b8d-4826-413a-aac5-27759fa1e568)

4. Run the script with command: npm deleteRecordings.js

### Note 
The script will check every day whether there are recordings for that day or not, so if the script appears to pause with no output for a while that is most likely just when it is checking days which have no recordings.
