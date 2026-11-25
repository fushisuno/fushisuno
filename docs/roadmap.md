# Roadmap — Portfolio v2
Status: proposta | 2026-11-25. Nenhuma fase de implementação aprovada por este documento.

| Fase | Objetivo e escopo | Gate |
| --- | --- | --- |
| F0 | Inventário de metadados autorizados, diagnóstico do site atual, constituição, triagem legal e fluxo de branches | Evidências, escopo e política de privacidade revisados |
| F1 | Specify/Clarify/Plan/Tasks/Analyze: modelo do catálogo, fontes públicas, evidência de status/IA, curadoria, protótipo visual, ADRs e critérios | Spec/plano consistentes, riscos e testes definidos |
| F2 | Fundação React/TypeScript/Vite e backend NestJS para coleta pública; normalização, deduplicação, snapshot, filtros, testes de esquema, segurança e falha | Build estático, testes NestJS de coleta/contrato do snapshot e privacidade |
| F3 | Experiência visual, GSAP, Three.js/R3F se justificado, componentes responsivos, fallback estático e temas | Acessibilidade, desempenho e testes visuais |
| F4 | Estudos de caso, trajetória, competências evidenciadas, README resumido e compatibilidade de links antigos | Conteúdo e direitos aprovados; testes E2E |
| F5 | Sincronização revisável, CI, auditoria, homologação e candidato de release | Checks aprovados, SHA, autorização e smoke |
| F6 | Release e operação com atualização controlada | Deploy explicitamente autorizado, rollback e documentação |

## Arquitetura definida para a versão inicial (detalhes sujeitos à revisão)
React + TypeScript + Vite (sem Next.js); Tailwind CSS e tokens próprios; GSAP/ScrollTrigger e Three.js/React Three Fiber em chunks lazy. Backend obrigatório NestJS + TypeScript sobre Node.js, com módulos GitHub, catálogo, curadoria, validação e snapshot JSON validado com Zod. Executar serviços NestJS via CLI/batch em CI, com cache, rate limit e fontes públicas GitHub REST; modo exclusivamente CLI/batch na versão inicial, sem API HTTP em execução contínua; eventual API REST em runtime separado fica para evolução futura mediante aprovação. GitHub Pages publica somente frontend e snapshot, não o servidor. Vitest no frontend, testes unitários/de integração NestJS e Playwright E2E. Sem Supabase, banco de dados ou hospedagem contínua na primeira versão. Avaliar licenças, versões, custos, compatibilidade e desempenho antes de instalar. CI propõe atualizações de snapshot para revisão em develop, nunca usa segredo no site.

## Plano de UI
Narrativa editorial, hero de impacto, capítulos de projetos selecionados, catálogo/laboratório pesquisável, competências com provas, trajetória e método de trabalho, contato profissional confirmado. Sem percentuais subjetivos. Identidade autoral; tema escuro como proposta, não decisão final. Animações aprimoram conteúdo, não o substituem.

## Evidências iniciais públicas
- README e index.html na main: site estático e apresentação manual.
- Documentação pública de Educart, QA Hub, Slide-Hub, FrameCraft, Myhouse, Divide-Ai, Termux-Studio e Myc.config analisada preliminarmente. Estado final de cada projeto não homologado.
- Myhouse possui release Android pública consultada. Confirmar atualidade e uso de ativos no planejamento.
- Inventário completo contém fontes de acesso restrito; não deve ser armazenado no repositório público. Apenas projeção pública sanitizada será versionada.

## Estado F1
Plan, data-model, tasks, ADR 001 e planejamento de frontend registrados no PR documental. T005/T006/T008 concluídas como artefatos de planejamento. T007 concluída como protótipo descartável com testes preliminares (docs/prototipo/README.md). T009 (revisão, proteção de branches e ratificação) permanece aberta. A consulta de branches retornou main/develop desprotegidas. PR #1 em rascunho, sem integração.

## Próxima etapa
Executar T009 e obter aceite do protótipo antes de iniciar F2. Não contornar CI ou promover a main. Conferir exclusões privadas em configuração segura, aprovação de conteúdo e ativos antes da publicação.
