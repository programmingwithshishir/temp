package helpers

import (
	"net/http"
	"os"
	"time"

	"github.com/golang-jwt/jwt"
)

func GenarateJwtToken(num string) (*http.Cookie, error) {

	jwtToken := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{"phoneNumber": num})

	secrect := os.Getenv("JWT_SECRET_KEY")
	signedToken, err := jwtToken.SignedString([]byte(secrect))
	if err != nil {
		return nil, err
	}

	//expire after 1 month
	cookie := &http.Cookie{
		Name:    "jwt",
		Value:   signedToken,
		Expires: time.Now().Add(30 * 24 * time.Hour),
	}

	return cookie, nil
}

func VerifyJwtToken(token string) (string, error) {
	secret := os.Getenv("JWT_SECRET_KEY")

	jwtToken, err := jwt.Parse(token, func(t *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
	})
	if err != nil {
		return "", err
	}

	if claims, ok := jwtToken.Claims.(jwt.MapClaims); ok && jwtToken.Valid {
		phNum := claims["phoneNumber"].(string)
		return phNum, nil
	}
	return "", nil
}