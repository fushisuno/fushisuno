# Roadmap — Portfolio v2
Status: proposta | 2026-11-25. Nenhuma fase de implementação aprovada por este documento.

| Fase | Objetivo e escopo | Gate |
| --- | --- | --- |
| F0 | Inventário de metadados autorizados, diagnóstico do site atual, constituição, triagem legal e fluxo de branches | Evidências, escopo e política de privacidade revisados |
| F1 | Specify/Clarify/Plan/Tasks/Analyze: modelo do catálogo, fontes públicas, evidência de status/IA, curadoria, protótipo visual, ADRs e critérios | Spec/plano consistentes, riscos e testes definidos |
| F2 | Fundação React/TypeScript/Vite e coleta pública; normalização, deduplicação, snapshot, filtros, testes de esquema, segurança e falha | Build estático, testes de coleta e privacidade |
| F3 | Experiência visual, GSAP, Three.js/R3F se justificado, componentes responsivos, fallback estático e temas | Acessibilidade, desempenho e testes visuais |
| F4 | Estudos de caso, trajetória, competências evidenciadas, README resumido e compatibilidade de links antigos | Conteúdo e direitos aprovados; testes E2E |
| F5 | Sincronização revisável, CI, auditoria, homologação e candidato de release | Checks aprovados, SHA, autorização e smoke |
| F6 | Release e operação com atualização controlada | Deploy explicitamente autorizado, rollback e documentação |

## Arquitetura candidata (validar em F1)
React + TypeScript + Vite; GSAP/ScrollTrigger e Three.js ou React Three Fiber em chunks lazy; CSS tokens próprios; catálogo JSON validado com Zod; coletor Node em CI com endpoints públicos GitHub REST, cache e limite de requisições; Vitest e Playwright. Sem Supabase ou servidor por padrão. Avaliar licenças, versões e desempenho antes de instalar. CI propõe atualizações de snapshot para revisão em develop, nunca usa segredo no site.

## Plano de UI
Narrativa editorial, hero de impacto, capítulos de projetos selecionados, catálogo/laboratório pesquisável, competências com provas, trajetória e método de trabalho, contato profissional confirmado. Sem percentuais subjetivos. Identidade autoral; tema escuro como proposta, não decisão final. Animações aprimoram conteúdo, não o substituem.

## Evidências iniciais públicas
- README e index.html na main: site estático e apresentação manual.
- Documentação pública de Educart, QA Hub, Slide-Hub, FrameCraft, Myhouse, Divide-Ai, Termux-Studio e Myc.config analisada preliminarmente. Estado final de cada projeto não homologado.
- Myhouse possui release Android pública consultada. Confirmar atualidade e uso de ativos no planejamento.
- Inventário completo contém fontes de acesso restrito; não deve ser armazenado no repositório público. Apenas projeção pública sanitizada será versionada.

## Próxima etapa
Revisar F0, formalizar plan/tasks e validar protótipo sem publicar. Gates e proteções de branches precisam de verificação/configuração autorizada; não contornar CI.
