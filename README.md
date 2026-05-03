# SaborFlow PDV SaaS (MVP)

Sistema web SaaS de PDV para restaurantes, lanchonetes, pizzarias e açaíterias, com identidade própria.

## Estrutura
- `frontend` (React + Vite + TypeScript + Tailwind + Router + Axios + Zustand)
- `backend` (NestJS + TypeScript + MongoDB + JWT + Bcrypt + Socket.io)

## Instalação
```bash
cd backend && npm install
cd ../frontend && npm install
```

## Rodar localmente
```bash
# Backend
cd backend
npm run start:dev

# Frontend
cd frontend
npm run dev
```

## MVP funcional criado
- Autenticação (login inicial)
- Empresas
- Produtos
- PDV
- Pedidos
- Cozinha
- Caixa
- Cardápio digital por `slug`

## Rotas principais da API
- `POST /auth/login`
- `POST /users`
- `POST /companies`
- `GET /companies/:slug`
- `POST /products`
- `GET /products?companyId={id}`
- `POST /orders`
- `GET /orders?companyId={id}`
- `POST /cashier/open`
- `GET /cashier/summary`
- `GET /cardapio/:slug`

## Variáveis de ambiente
- `backend/.env.example`
- `frontend/.env.example`
