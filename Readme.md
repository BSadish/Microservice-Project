# 🏗️ Project Architecture Overview

This project follows a **Microservices Architecture**, where each service is independently developed, deployed, and maintained. Every microservice has its own Express application, routes, controllers, models, middleware, environment variables, and dependencies. This modular approach improves scalability, maintainability, and fault isolation.

---

## 🚪 API Gateway (Port: 3000)

The **Gateway Service** serves as the single entry point for all client requests. It uses **express-http-proxy** to forward incoming requests to the appropriate microservice, allowing clients to interact with a unified API without needing to know the internal service structure.

**Key Responsibilities**

- Routes incoming requests to the appropriate service
- Hides the internal microservice architecture
- Simplifies client-side communication
- Acts as a centralized access point

**Key Files**

- `app.js` – Configures proxy routes for all services.
- `server.js` – Initializes and starts the Gateway server.

---

## 👤 User Service (Port: 3001)

The User Service manages all user-related operations, including registration, authentication, and profile management.

**Key Responsibilities**

- User Registration
- User Login
- JWT Authentication
- Profile Management

**Main Components**

- **Controllers** – Handle business logic for user operations.
- **Models** – Define MongoDB schemas for users and blacklisted tokens.
- **Routes** – Expose REST API endpoints.
- **Middleware** – Verify JWT tokens and protect routes.
- **Server Configuration** – Initializes the Express application and database connection.

---

## 🚗 Captain Service (Port: 3002)

The Captain Service manages all driver-related functionality.

**Key Responsibilities**

- Captain Registration
- Captain Login
- Authentication
- Driver Availability Management

**Main Components**

- **Controllers** – Process captain-related requests.
- **Models** – Store captain details, vehicle information, and availability status.
- **Routes** – Define captain API endpoints.
- **Middleware** – Protect authenticated routes using JWT.

---

## 🚕 Ride Service (Port: 3003)

The Ride Service is responsible for managing the complete ride lifecycle, including ride creation, ride matching, and ride status updates.

**Key Responsibilities**

- Create Ride Requests
- Match Available Captains
- Update Ride Status
- Complete Ride Workflow

**Communication**

- **Axios** is used for synchronous communication with other services.
- **RabbitMQ** enables asynchronous event-driven communication between services.

---

## 📨 RabbitMQ Integration

RabbitMQ is used as the messaging broker to enable asynchronous communication between independent services, reducing service coupling and improving scalability.

### Event Flow

1. A user creates a ride request.
2. The Ride Service publishes an event to RabbitMQ.
3. The Captain Service consumes the event.
4. An available captain receives the ride request.
5. After acceptance, the Ride Service updates the ride status.

---

## ⚙️ Configuration

Each service maintains its own `.env` file to securely store configuration values.

Typical environment variables include:

- `PORT`
- `MONGO_URL`
- `JWT_SECRET`
- `RABBIT_URL`

This approach allows each service to be configured independently across different development and deployment environments.

---

## 📦 Dependency Management

Each microservice contains its own `package.json` file, allowing services to manage dependencies independently.

Common packages used throughout the project include:

- Express.js
- Mongoose
- dotenv
- JSON Web Token (JWT)
- bcrypt
- CORS
- Cookie Parser
- Axios
- RabbitMQ (`amqplib`)
- express-http-proxy
- Nodemon
