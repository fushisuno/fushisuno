# ADR 001 — NestJS batch e frontend estático
Status: decisão de modo aprovada pelo mantenedor; detalhes de execução propostos.
## Contexto
Portfólio unificado sem cobrança prevista, sem servidor permanente. GitHub Pages hospeda somente conteúdo estático. Next.js não deve ser utilizado.
## Decisão
React + Vite; NestJS standalone em processo sob demanda usando application context; snapshot JSON compartilhado via contratos Zod. GitHub Actions é executor candidato da sincronização, com alternativa local autorizada; revisão em develop e publicação controlada. Sem API HTTP, banco de dados, Supabase ou VPS na v1.
## Consequências
Conteúdo acessível mesmo com GitHub API indisponível; dados não são em tempo real; atualizações dependem de execução e promoção. Não há garantia de periodicidade ou custo zero fora das condições de uso do provedor. Não introduzir API sem ADR novo. Separar domínio de adapters para futura API sem alterar o contrato.
## Alternativas rejeitadas
Next.js/SSR (preferência do mantenedor); Node sem NestJS (requisito); NestJS HTTP permanente (custo/operação fora do escopo); chamadas autenticadas diretas do browser (segurança).
