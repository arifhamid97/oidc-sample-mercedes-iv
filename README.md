# Securing NestJS Microservice with OIDC (Auth Code Grant Flow) Using Apache APISIX

This repository demonstrates how to secure a NestJS microservice using OpenID Connect (OIDC) with the Authorization Code Grant Flow. Apache APISIX is used as the API Gateway to handle routing, authentication, and authorization. This project is configure as monorepo

## Prerequisites

- **Node.js**: v14 or later
- **NestJS**: v8 or later
- **Apache APISIX**: v2.10 or later
- **OIDC Provider**: (e.g., Auth0, Keycloak)
- **Docker** (optional, for containerized setup)

## Directory Structure

```
root
│
├── apps/
│   ├── service1/
│   ├── service2/
│   └── serviceN/
│
├── gateway/
│   ├── config/
│   └── gateway-files/
│
└── lib/
    ├── shared-module1/
    ├── shared-module2/
    └── shared-moduleN/
```

### `apps/`

The `apps` directory contains all the services of the application. Each service is organized as a separate folder inside this directory. These services are designed to run independently but can share common modules or libraries from the `lib` directory.

- **Example:**
  - `service1/`: Contains all files related to Service 1.
  - `service2/`: Contains all files related to Service 2.

### `gateway/`

The `gateway` directory contains the configuration and setup for the API gateway. The gateway acts as the entry point for the system, routing requests to the appropriate services.

- **config/**: Contains configuration files for the gateway.
- **gateway-files/**: Contains other files related to the gateway, such as middleware, controllers, and utility functions.

### `lib/`

The `lib` directory contains shared modules and libraries that can be used across multiple services. These modules are designed to be reusable and help in reducing code duplication.

- **Example:**
  - `shared-module1/`: A module that can be imported and used by any service.
  - `shared-module2/`: Another shared module for common utilities or services.

## Setting Up Apache APISIX

### 1. Install Apache APISIX

Follow the official [Apache APISIX installation guide](https://apisix.apache.org/docs/apisix/getting-started).

### 2. Configure APISIX with OIDC

Create a route in Apache APISIX to secure your microservice:

```json
{
  "uri": "/api/*",
  "plugins": {
    "openid-connect": {
      "client_id": "your-client-id",
      "client_secret": "your-client-secret",
      "discovery": "https://your-oidc-provider.com/.well-known/openid-configuration",
      "redirect_uri": "http://localhost:9080/callback",
      "scope": "openid profile email"
    }
  },
  "upstream": {
    "nodes": {
      "127.0.0.1:3000": 1
    }
  }
}
```

## Running the Application

### 1. Build the container

```bash
docker-compose -f docker-compose.yml up -d
```

### 2. Start Apache APISIX

Refer to the official documentation for starting APISIX. Ensure your configuration is applied.

## Testing the Authentication Flow

1. Access the microservice via the APISIX gateway via protected endpoint [localhost:9080/billing/v1/]
2. You should get Auth Denied error if valid bearer token is not provided
3. You can request AUTH CODE from your idp and validate the callback to exchange code for jwt token. refer to Auth service module for exchanging token implementation

## Troubleshooting

- **Issue**: When building the application container you might face some unexpected error on billing and orders service. This is a known issue. Just turn up the container again and you good to go
