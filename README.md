# twilio_deleteRecordings
Relatively simple script which deletes all the recordings in an account. Wrote this for an enterprise customer to help them delete about 3 million recordings over 2 years. Twilio blog had a python version which was fairly robust but nothing with NodeJS documented at the time. Recordings are deleted day by day to avoid hitting the return limit from Twilio's API. 
