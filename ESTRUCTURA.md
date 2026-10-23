# Estructura del proyecto — DevMinus

**Avance:** 12 de 24 carpetas con contenido.

Generado por `scripts/estructura.py`. No editar a mano: se sobrescribe.

| | Carpeta | Para |
|---|---|---|
| ⬜ | `.claude/agents/` | Subagentes markdown propios de DevMinus |
| ⬜ | `.claude/skills/` | Procedimientos reutilizables propios de DevMinus |
| ⬜ | `.claude/commands/` | Atajos /slash propios de DevMinus |
| ⬜ | `.claude/rules/` | Reglas por tema, cargadas solo cuando aplican |
| ⬜ | `.claude/workflows/` | Scripts de Dynamic Workflows guardados |
| ✅ | `documentacion/` | Documentación del proyecto. El detalle de marca vive en MARCA.md; el stack en STACK.md |
| ✅ | `documentacion/prototipos-frontend/` | Prototipos HTML de la landing (favoritos y notas) antes de construir el frontend real en frontend/web |
| ⬜ | `db/` | Base de datos (Supabase/Postgres) - leads y lo que el sitio necesite persistir |
| ⬜ | `db/migrations/` | Migraciones incrementales del schema, en orden cronológico |
| ⬜ | `db/policies/` | Políticas RLS en archivos separados del schema - RLS obligatorio desde el primer día |
| ⬜ | `backend/` | Capa de servidor completa |
| ⬜ | `backend/workers/` | API como Cloudflare Workers (reemplaza la capa Express de hellominus.com) - hoy el formulario de contacto |
| ⬜ | `backend/agent/` | Agentes Claude que sean endpoints (webhook, cron, cola). Hoy ninguno - ver DECISIONES.md |
| ✅ | `frontend/` | Capa de cliente completa |
| ✅ | `frontend/web/` | App React + Vite + TypeScript + Tailwind - el sitio de marca (portada, servicios, equipo, contacto) |
| ✅ | `frontend/web/src/` | Código fuente de la app |
| ✅ | `frontend/web/src/pages/` | Páginas de nivel superior (Portada, Servicios, Equipo, Contacto) |
| ✅ | `frontend/web/src/components/` | Componentes reutilizables de UI |
| ✅ | `frontend/web/src/hooks/` | Hooks de React |
| ✅ | `frontend/web/src/lib/` | Clientes y utilidades compartidas (supabaseClient, helpers) |
| ✅ | `frontend/web/src/services/` | Funciones async simples para llamadas a Supabase y APIs externas, un archivo por sistema externo |
| ✅ | `frontend/web/src/stores/` | Stores de Zustand, un dominio por archivo, sin middleware salvo justificación puntual |
| ✅ | `frontend/web/public/` | Assets estáticos servidos tal cual |
| ⬜ | `agentes-sdk/` | Scripts Python con claude_agent_sdk que corren local - loops, triggers por evento u horario. Hoy ninguno |

✅ con contenido · ⬜ vacía, pendiente · ❌ no existe en disco

Las carpetas vacías se dejan a propósito: sostienen la estructura completa
del full stack. Cada una lleva un `_VACIA.md` que la mantiene visible en el
explorador y versionada en Git. El marcador desaparece solo al agregar el
primer archivo real y volver a correr el script.
