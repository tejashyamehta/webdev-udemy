# Secrets App using REST API

This is a simple **Secrets App** that interacts with the [Secrets API](https://secrets-api.appbrewery.com) by **London App Brewery**. The app fetches and handles secrets data using REST API calls, demonstrating the use of HTTP requests, authentication, and API handling.

---

## Features

- 🔑 Access real-time secrets from the Secrets API.
- 🔐 Handles authentication using API keys and bearer tokens.
- 🔄 Interact with API endpoints via GET, POST, PATCH, and DELETE requests.
- 🌐 Full REST API integration for fetching and managing secrets.

---

##  Tech Stack

- JavaScript (Node.js)
- Axios / Fetch (for API requests)
- Express
- dotenv (for managing API keys securely)

---

## API Documentation

Explore the API here:  
👉 [Secrets API - London App Brewery](https://secrets-api.appbrewery.com)

---

## Endpoints Example

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- |
| GET    | `/secrets`        | Get a list of secrets     |
| GET    | `/secrets/:id`    | Get a secret by ID        |
| POST   | `/secrets`        | Add a new secret          |
| PATCH  | `/secrets/:id`    | Update a secret by ID     |
| DELETE | `/secrets/:id`    | Delete a secret by ID     |

---

## Authentication

The API uses **Bearer Token Authentication**. Store your token securely in a `.env` file.

Example:

```env
BEARER_TOKEN=your_api_token_here
