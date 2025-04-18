package main

import (
	"net/http"
	"server/internal/configs"
	"server/internal/routes"
)

func main() {
	configs.InitTwilio()

	mux := http.NewServeMux()

	routes.AuthRoutes(mux)

	if err := http.ListenAndServe(":8080", mux); err != nil {
		panic(err)
	}
}
