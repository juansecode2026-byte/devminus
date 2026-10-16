# STACK.md — Stack tecnológico de DevMinus

> Decidido el 2026-10-16. Referencia: hellominus.com (no el `STACK.md` de CRM Productividad).
> Las features propias de cada producto van en el CLAUDE.md de ese proyecto, no acá.

## Frontend
- React 18 + Vite + TypeScript
- Tailwind para estilos
- Zustand para estado global
- React Router

## Backend
- Node.js como capa delgada sobre Supabase.
- Se despliega como **Cloudflare Workers**. hellominus.com usa Express sobre Vercel, y Express no corre directo en Cloudflare, así que esa capa se reescribe como Workers.

## Base de datos
- Supabase (Postgres) con Auth, Storage y Realtime.
- Migraciones versionadas.

## Despliegue
- Todo en **Cloudflare**: frontend en Pages, backend en Workers.

## IA / Agentes
- **Anthropic (Claude)** para todos los agentes.
- Si el agente corre local (loop, trigger, horario): `agentes-sdk/`, Python con `claude_agent_sdk`.
- Si el agente es un endpoint (webhook, cron de proveedor, cola): vive donde su plataforma lo despliega (Cloudflare Workers o Supabase Edge Functions), nunca en `agentes-sdk/`. El `CLAUDE.md` del proyecto dice dónde quedó y por qué.
- Un agente por tarea. El cálculo determinista va en scripts, no en el agente.

## Pendiente
- Dónde vive cada agente: se decide caso por caso al construir el primero.
- Qué parte del stack de hellominus.com se hereda tal cual y qué se ajusta (por ejemplo `next`, que aparece como dependencia sin usarse).

## Lado comercial
Cómo se cuenta este stack a clientes está en `MARCA.md`. Aquí solo va lo técnico.
