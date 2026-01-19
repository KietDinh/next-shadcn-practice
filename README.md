# Next.js + Shadcn Project Notes

**Resources:**

- [Tutorial Video](https://www.youtube.com/watch?v=X1zCAPLvMtw&t=911s)
- [Complete Code Repository](https://github.com/ed-roh/real-estate-prod)

## Project Setup

This project was initialized with `create-next-app` using the following configuration:

- **Project Name:** client
- **TypeScript:** Yes
- **ESLint:** Yes
- **Tailwind CSS:** Yes
- **`src/` Directory:** Yes
- **App Router:** Yes
- **Turbopack:** Yes
- **Import Alias:** Default (`@/*`)

### Shadcn UI Integration

- `npx shadcn@latest init -d`: Initializes Shadcn UI components (components.json, global.css, tailwind.config.ts) in the project.
- `npx shadcn@latest add avatar badge button card checkbox command dialog dropdown-menu form input label navigation-menu radio-group select separator sheet sidebar skeleton slider sonner switch table tabs textarea tooltip`: add ui components under src/components/ui.

## Recommended Development Tools

### VS Code Extensions

- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- Tailwind CSS IntelliSense

### Browser Extensions

- Pesticide for Chrome (CSS layout debugging)
- Redux DevTools (State management debugging)

### Docker Setup

Make sure to pick container with postgis extension enabled.

- docker compose up -d: Start PostgreSQL database in a Docker container.
- docker exec -it container_name psql -U username -d database: Access PostgreSQL database inside the container.

### Notes

- route with parenthesis is not showing in the router, just for grouping purposes
- `rafce` to create react arrow function component snippet
