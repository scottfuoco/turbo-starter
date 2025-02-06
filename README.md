# TurboStarter 🚀

A minimalist Next.js Turborepo starter template for building scalable applications with a clean, efficient, and powerful stack.

## Features 🌟

- **Minimalistic Design** 🎯
  - Clean, efficient codebase with a focus on simplicity and performance
  - Carefully selected tech stack to minimize complexity while maximizing productivity

- **Turborepo Powered** ⚡
  - Lightning-fast builds and efficient monorepo management
  - Built-in remote caching capabilities
  - Optimized task orchestration across packages

- **Next.js + Tailwind CSS** 🎨
  - Latest Next.js features for optimal performance and developer experience
  - Flexible styling with Tailwind CSS for rapid UI development
  - Type-safe development with TypeScript

- **shadcn/ui Components** 🧩
  - Beautiful, accessible, and customizable components ready for your project
  - Built on top of Radix UI primitives
  - Fully customizable with Tailwind CSS

- **PostgreSQL Integration** 🗄️
  - Built-in PostgreSQL setup with Drizzle ORM
  - Type-safe database operations
  - Check out the `/postgres` route for implementation details and examples

## What's inside?

This Turborepo includes the following packages/apps:

### Apps, Packages, and Tools

- `web`: Main [Next.js](https://nextjs.org/) application
- `@packages/db`: PostgreSQL database package with Drizzle ORM setup
- `@tooling/eslint`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@tooling/tsconfig`: `tsconfig.json`s used throughout the monorepo
- `@tooling/prettier`: `prettier` configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Drizzle ORM](https://orm.drizzle.team) for database management

## Getting Started

Clone the repository:

```sh
git clone https://github.com/scottfuoco/turbo-starter.git
```

### Build

To build all apps and packages, run the following command:

```
cd turbo-starter
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd turbo-starter
pnpm dev
```