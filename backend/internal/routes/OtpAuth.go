package routes

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"server/internal/configs"
	"server/internal/helpers"

	"github.com/twilio/twilio-go/rest/verify/v2"
)

type SendOtpReq struct {
	PhoneNumber string `json:"phoneNumber"`
}

type VerifyOtpReq struct {
	PhoneNumber string `json:"phoneNumber"`
	Otp         string `json:"otp"`
}

// to send opt to user
func sendOtp(w http.ResponseWriter, r *http.Request) {

	//parse request body
	var reqBody SendOtpReq
	if err := json.NewDecoder(r.Body).Decode(&reqBody); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}
	phNum := reqBody.PhoneNumber

	serviceSid := os.Getenv("TWILIO_SERVICE_SID")

	client := configs.TwilioClient

	//send verification code
	verifyParams := &openapi.CreateVerificationParams{}
	verifyParams.SetTo(phNum)
	verifyParams.SetChannel("sms")

	if _, err := client.VerifyV2.CreateVerification(serviceSid, verifyParams); err != nil {
		fmt.Println("Error sending OTP:", err)
		http.Error(w, "Error sending OTP", http.StatusInternalServerError)
		return
	}

	//generate jwt token
	token, err := helpers.GenarateJwtToken(phNum)
	if err != nil {
		http.Error(w, "Error generating JWT token", http.StatusInternalServerError)
		return
	}

	//response with cookie
	http.SetCookie(w, token)
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("OTP sent successfully"))
}

// to verify otp
func verifyOtp(w http.ResponseWriter, r *http.Request) {

	//parse request body
	var reqBody VerifyOtpReq
	if err := json.NewDecoder(r.Body).Decode(&reqBody); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}
	phNum := reqBody.PhoneNumber
	otp := reqBody.Otp

	if phNum == "" || otp == "" {
		http.Error(w, "Phone number and OTP are required", http.StatusBadRequest)
		return
	}

	serviceSid := os.Getenv("TWILIO_SERVICE_SID")
	client := configs.TwilioClient

	verifyParams := &openapi.CreateVerificationCheckParams{}
	verifyParams.SetTo(phNum)
	verifyParams.SetCode(otp)

	res, err := client.VerifyV2.CreateVerificationCheck(serviceSid, verifyParams)
	if err != nil {
		fmt.Println("Error verifying OTP:", err)
		http.Error(w, "Error verifying OTP", http.StatusInternalServerError)
		return
	}

	if *res.Status == "approved" {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("OTP verified successfully"))
	} else {
		http.Error(w, "Invalid OTP", http.StatusUnauthorized)
	}
}

// handle authentication routes
func AuthRoutes(mux *http.ServeMux) {
	mux.HandleFunc("POST /auth/send-otp", sendOtp)
	mux.HandleFunc("POST /auth/verify-otp", verifyOtp)

	mux.HandleFunc("/ok", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("everything is ok"))
	})

	mux.HandleFunc("/error", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("everything is not ok"))
	})
}
