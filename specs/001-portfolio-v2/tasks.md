# Tasks 001 — Portfolio v2
Status: plano proposto. Não considerar item implementado por estar documentado.
## F0/F1 — descoberta e planejamento
- [x] T001 Inspecionar README/index, inventário das três contas e branch/PR.
- [x] T002 Definir política de exclusão e privacidade (RF-02/11).
- [x] T003 Consultar manifests de 15 repositórios; ampliar auditoria e evidência na F4.
- [x] T004 Atualizar spec com decisões de stack e modo estático.
- [x] T005 Formalizar arquitetura e riscos (plan.md).
- [x] T006 Definir modelo e contrato sem banco (data-model.md).
- [ ] T007 Prototipar direção visual de forma navegável, validar reduced motion e layout; não publicar.
- [x] T008 Decompor trabalho, dependências e aceite (este documento).
- [ ] T009 Revisar consistência, fontes legais/acervo, proteção de branches, PR e ratificação documental; sem contornar gates.
## F2 — fundação (depende T009)
- [ ] T010 Criar npm workspaces, apps/web, apps/collector e packages/contracts; fixar versões/licenças/lockfile, scripts lint/typecheck/test/build; manter site antigo. AC6/9/10.
- [ ] T011 Definir schemas Zod strict e fixtures sintéticas; testes de URLs, enums, referências, limites e campos desconhecidos. AC2/3/4.
- [ ] T012 ConfigModule + GitHubModule, allowlist, exclusões obrigatórias, paginação, rate limit/cache e verificação de visibilidade antes de enriquecer; TDD. AC1/2/8.
- [ ] T013 Catalog/Editorial/Skills modules: normalizar, dedup, classificação, evidência, overrides, exclusões e filtro Next.js; TDD. AC1/4/8/9.
- [ ] T014 Snapshot/Sync modules e CLI NestJS: geração atômica, validação, falhas, logs sanitizados e encerramento; testar sem HTTP. AC2/3/10.
- [ ] T015 UI básica consumindo snapshot sintético e validado, busca/filtros, vazio/erro, links e acessibilidade. AC1/4/5/6.
- [ ] T016 Testes integrados, build estático, inspeção dist sem segredo, revisão e PR develop. Ratificar F2.
## F3 — visual (depende T016)
- [ ] T017 Tokens, tipografia, navegação e hero responsivo.
- [ ] T018 Capítulos de estudos de caso e catálogo editorial; animações GSAP com cleanup.
- [ ] T019 Cena 3D lazy, fallback estático e reduced motion; desempenho.
- [ ] T020 Testes visuais, teclado, axe e viewports; validar orçamento e ratificar F3. AC5/6.
## F4 — conteúdo (depende T020)
- [ ] T021 Auditoria de projetos públicos, status/release/atividade e autorização de mídias; classificações desconhecidas explícitas.
- [ ] T022 Curadoria de destaques, contribuição/IA e competências com evidência; revisão de dados pessoais e licenças.
- [ ] T023 Trajetória profissional confirmada, README resumido e compatibilidade de rotas; E2E. AC4/7.
## F5/F6 — homologação e entrega
- [ ] T024 Configurar workflow sync manual/agendado e PR revisável; testar falhas, revogação, fallback, quota e inatividade. AC1/2/3/8.
- [ ] T025 CI/QA final, auditoria, revisão jurídica aplicável, homologação, SHA e rollback. AC5/6/7.
- [ ] T026 Após autorização explícita: release PR, verificação SHA, deploy Pages, smoke e sincronização develop.
## Bloqueios
PR #1 em rascunho e branches desprotegidas na consulta inicial. Proteções/CI e revisão devem ser resolvidos antes da implementação/integração exigida. Autoria, exposição de material de trabalho e assets dependem de confirmação; não impedem desenvolvimento com fixtures após gate. CLI Spec Kit não executada. Não confundir artefatos manuais com execução de testes.
