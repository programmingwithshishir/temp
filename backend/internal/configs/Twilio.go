package configs

import (
	"os"

	"github.com/twilio/twilio-go"
)

var TwilioClient *twilio.RestClient

// initialize Twilio client
func InitTwilio() {
	acSid := os.Getenv("TWILIO_ACCOUNT_SID")
	authToken := os.Getenv("TWILIO_AUTH_TOKEN")

	twilioClientParams := &twilio.ClientParams{
		Username: acSid,
		Password: authToken,
	}

	TwilioClient = twilio.NewRestClientWithParams(*twilioClientParams)
}
