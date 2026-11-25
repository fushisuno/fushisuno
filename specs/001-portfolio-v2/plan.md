# Plan 001 — Portfolio v2
Status: proposta técnica F1, sujeita a ratificação | 2026-11-25
Base: spec.md, constituição e docs/roadmap.md. Decisões do mantenedor: React/Vite sem Next.js, NestJS batch exclusivo na v1, GSAP/3D, exclusões explícitas, custo sem hospedagem adicional.

## Arquitetura
Monorepo npm workspaces (proposta, confirmar versões Node LTS e lockfile na fundação):
- apps/web: React/TS/Vite/Tailwind, rotas com hash ou âncoras compatíveis com Pages; GSAP/ScrollTrigger e R3F/Three.js lazy; HTML semântico e fallback estático.
- apps/collector: NestJS standalone via NestFactory.createApplicationContext, comando sync, validate e render de metadados; fecha contexto em finally; exit code não zero em falhas. Sem listen, servidor HTTP, DB, SSR ou API própria.
- packages/contracts: Zod e tipos compartilhados, sem dependências Node no bundle web.
- content/catalog: snapshot público validado; content/editorial: overrides públicos aprovados, referenciados por ID estável, sem metadados privados.
- tests/fixtures: dados sintéticos; tests/e2e: Playwright.
- preservar site antigo até promoção; README e rotas antigas migram na F4; verificar base de Pages efetiva antes de escolher Vite base.

## Fluxo e módulos
ConfigModule carrega allowlist de três owners públicos e exclusões privadas obrigatórias por ambiente. Ausência/erro de configuração impede sincronização/publicação. GitHubModule consulta REST público paginado; rejeita owner inesperado, visibilidade desconhecida, privados, forks sem aprovação e excluídos antes de buscar detalhes. Rate limit, Retry-After, timeout, ETag condicionado à verificação de visibilidade atual, concorrência pequena. Não consultar commits individuais, perfis ou autores para inferir autoria/experiência.
CatalogModule normaliza campos explicitamente permitidos; dedup por ID GitHub; aplica classificação; agrupa variantes públicas via override aprovado; SkillsModule gera índices só a partir dos itens elegíveis; EditorialModule valida overrides sem permitir contornar exclusões; SnapshotModule valida contrato e escreve arquivo temporário seguido de substituição atômica. SyncModule orquestra e produz resumo sanitizado.
Tecnologias: linguagens via GitHub e dependências conhecidas via manifests públicos em paths limitados; nunca baixar .env, binários, dados de clientes ou README bruto. Texto editorial revisado; descrições de origem não entram automaticamente sem validação de conteúdo. Next.js omitido de competências/filtros e não utilizado no build.
Status: separar maturidade (idea, development, mvp, completed_confirmed, unknown) de distribuição (none, release, demo_documented, verified_live, unknown) e archived. Não inferir completude por release, idade ou linguagem. IA no processo e no produto são campos independentes; desconhecido por padrão.
Pipeline: workflow de sync com execução manual e agendada após aprovação da configuração; roda em default branch, gera proposta revisável para develop, sem auto-merge/deploy. GitHub Actions pode desabilitar schedule após 60 dias sem atividade pública; documentar recuperação manual. Execução local autorizada alternativa se CI indisponível; não equivale a CI aprovada. Deploy separado de SHA aprovado; Pages serve somente dist e JSON, não o coletor.
Fallback: falha transitória sem mudança confirmada não escreve snapshot novo; não promover snapshot antigo sem revalidar elegibilidade, nem reutilizar entrada revogada. Exclusão/privatização confirmada invalida a entrada; produzir projeção sanitizada somente quando revisão/validação completas. Incidente em site já publicado requer retirada autorizada urgente; histórico Git e caches externos não são revogáveis. Nenhum segredo, lista privada de exclusões ou resposta bruta no log/artefato.

## Testes e orçamento de qualidade
Testes NestJS/Jest ou runner compatível (decisão de versão na F2), Vitest web, Playwright desktop/mobile e axe. Validar schema estrito, paginação, 403/429, timeout, dados vazios, exclusão antes de enriquecer, dedup, alteração de visibilidade, ausência de configuração, URLs maliciosas e conteúdo não autorizado; teste de build sem backend HTTP. Verificar teclado, reduced motion, WebGL ausente, 320/360/390/768/1024/1280/1440 px. Metas propostas: LCP <=2,5s, CLS <=0,1 e INP <=200ms em avaliação apropriada; JS inicial gzip <=250 KiB excluindo chunks lazy 3D. Metas não comprovadas; medir e revisar.
## Gates
F1: revisão de spec/plan/contratos/tasks; protótipo visual e proteção de branches pendentes. F2 não inicia antes de integração documental e gates aplicáveis. Publicação exige aprovação de ativos, dados pessoais, contribuição e direitos; nenhuma API/hospedagem adicional contratada. Verificar licenças e versões antes de instalar.
## Referências verificadas
- https://docs.nestjs.com/application-context — Nest standalone sem listener de rede.
- https://docs.github.com/en/actions/how-tos/manage-workflow-runs/disable-and-enable-workflows — agendamentos podem ser desativados por inatividade.
