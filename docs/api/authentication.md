# Authentication API

## Overview

The authentication system provides secure user login and token-based authentication for the application.

## Endpoints

### POST /api/auth/login

Authenticates a user and returns an access token.

**Request Body:**
```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "token": "string",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

### GET /api/auth/validate

Validates the current authentication token.

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
```json
{
  "valid": true,
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```

## Security Considerations

1. All tokens are generated using cryptographically secure random numbers
2. Tokens expire after 24 hours
3. Failed login attempts are rate-limited
4. All authentication endpoints use HTTPS

## Implementation Details

- Backend: Go authentication service in `/backend/auth/`
- Frontend: React login component in `/frontend/src/Login.tsx`
- Tests: Comprehensive test suite for authentication flows