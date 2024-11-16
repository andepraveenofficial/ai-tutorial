```mermaid
%%{init: {'theme': 'neutral' }}%%
graph TD
    %% Client Layer
    subgraph CLIENT[Client Layer]
        HTTP[HTTP Clients]
    end

    %% API Layer
    subgraph API[API Layer]
        Router[Express Router]
        Middleware[Middlewares]
        Controller[Controllers]
    end

    %% Business Layer
    subgraph BUSINESS[Business Layer]
        Service[Services]
        DTO[DTOs]
    end

    %% Data Layer
    subgraph DATA[Data Access Layer]
        Repository[Repositories]
        Model[Models]
        Prisma[Prisma Client]
    end

    %% Database
    DB[(Database)]

    %% Connections
    HTTP --> Router
    Router --> Middleware
    Middleware --> Controller
    Controller --> Service
    Service --> Repository
    Repository --> Prisma
    Prisma --> DB

    %% Data flow connections
    DTO -.-> Controller
    DTO -.-> Service
    Model -.-> Repository

    %% Styling
    classDef layer fill:#e4f4f4,stroke:#333,stroke-width:2px
    class CLIENT,API,BUSINESS,DATA layer
```

For Local Development:

1. Routes handle incoming HTTP requests
2. Controllers process the request and response
3. Services contain business logic
4. Repositories handle data access
5. Prisma manages database operations
