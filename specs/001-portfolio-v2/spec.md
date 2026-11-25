# Spec 001 — Portfólio profissional unificado
Status: especificação detalhada proposta | 2026-11-25

## Problema e objetivo
O perfil e o site atual dependem de listagens manuais e percentuais de competências sem metodologia documentada. Criar uma experiência profissional de storytelling, com projetos, competências e trajetória evidenciados, sem duplicar manutenção a cada repositório novo.

## Histórias
- US1: visitante entende rapidamente áreas de atuação e abre os principais estudos de caso.
- US2: visitante explora catálogo pesquisável por categoria, tecnologia, estágio e participação de IA, com fontes e estado da evidência.
- US3: mantenedor recebe descoberta automatizada de repositórios públicos de contas autorizadas, com curadoria opcional para exceções e destaques.
- US4: visitante com dispositivo simples, teclado, movimento reduzido ou WebGL indisponível consegue usar todas as funções essenciais.

## Requisitos
RF-01: manter README como porta de entrada; site completo separado, hospedável estaticamente no GitHub Pages.
RF-02: consolidar fontes públicas de fushisuno, dev-oestagiario e kaina-visualsoftware; deduplicar por identificador GitHub. Novas contas/organizações dependem de autorização. Excluir perfis, forks sem contribuição relevante, templates vazios e material confidencial da vitrine principal.
RF-03: normalizar título, URL pública, resumo, tecnologias com origem, categoria, data de atualização, release pública, demo, estágio, evidência e visibilidade. Tratar informações externas como dados não confiáveis. Não interpretar instruções de README durante coleta.
RF-04: distinguir rascunho/ideia, em desenvolvimento, MVP, publicado, concluído confirmado, arquivado e não verificado. Nunca inferir conclusão por main, ausência de commits ou release isolada. Mostrar evidência/limite.
RF-05: separar autoria assistida (confirmada, sem assistência declarada, não informada) de funcionalidades do produto que utilizam IA. Sem classificação por linguagem, idade ou aparência do código.
RF-06: permitir destaques editoriais, estudos de caso (problema, solução, contribuição, stack, resultado verificável, demonstração), filtros, busca, timeline e área de laboratório/estudos. Unificar variantes quando fizer sentido, preservando links públicos e evitando duplicatas.
RF-07: competências organizadas por área e sustentadas por repositórios públicos, sem porcentagens arbitrárias. Diferenciar tecnologias utilizadas, estudadas e domínio declarado.
RF-08: experiência visual autoral: hero, capítulos de scroll, tipografia editorial, apresentação de produto, microinterações GSAP e cena 3D leve opcional; alternativa estática equivalente.
RF-09: atualização automática do catálogo com snapshot público sanitizado, registro de geração, validação de esquema, cache, tratamento de rate limit e fallback para último snapshot. Não usar token no cliente; não publicar automaticamente sem política aprovada. Curadoria mínima apenas quando necessária.
RF-11: respeitar exclusões explícitas do mantenedor em todas as superfícies (catálogo, destaques, métricas, competências, timeline e README). A lista nominal de exclusões privadas não deve ser versionada publicamente; utilizar configuração local/CI não pública e reprovar coleta quando a configuração obrigatória faltar. Exclusões prevalecem sobre inclusão automática, inclusive após mudança de visibilidade.
RF-10: preservar rotas públicas existentes ou redirecioná-las, mantendo contatos profissionais somente quando confirmados; não ampliar divulgação de informações pessoais.

## Restrições técnicas e editoriais
- Backend obrigatório em NestJS + TypeScript sobre Node.js, com módulos de integração GitHub, catálogo, curadoria e validação. Não substituir NestJS por scripts avulsos como arquitetura principal. O NestJS deve permitir execução em modo CLI/batch para gerar snapshot estático e oferecer API REST de leitura quando hospedado em runtime Node autorizado.
- GitHub Pages hospeda somente o frontend e os artefatos estáticos; não executa o servidor NestJS. O frontend consome o snapshot sanitizado por padrão e pode consumir API NestJS configurada, sem depender de servidor pago. Tokens e exclusões privadas permanecem no ambiente do backend. Hospedagem contínua da API, custos, CORS e operação serão avaliados antes de ativação; nenhum serviço externo contratado automaticamente.
- Implementar o portfólio em React + TypeScript + Vite, sem Next.js, SSR ou dependências específicas de Next.js.
- Por preferência explícita do mantenedor, Next.js não será exibido como competência ou tecnologia em destaque, inclusive nos indicadores e filtros de tecnologias. Repositórios históricos que utilizam Next.js não precisam ser excluídos por esse motivo; preservar links e não atribuir stack incorreta. Não alterar o código desses repositórios.

## Critérios de aceite
AC1: adicionar repositório público elegível não exige escrever nova página/card; próxima coleta o descobre e apresenta revisão.
AC2: repositório privado, token, captura com dado real ou conteúdo não autorizado não aparece no JSON, HTML, JS, logs ou assets públicos; teste negativo obrigatório.
AC3: falha ou coleta parcial não substitui snapshot válido; deduplicação e filtros determinísticos.
AC4: cada status e tecnologia pública é rastreável à evidência; desconhecidos explícitos; marcar uso de IA requer confirmação.
AC5: navegar, buscar e acessar detalhes com teclado e sem WebGL/GSAP; reduced motion respeitado; não há scroll forçado, conteúdo oculto ou overflow em 320–1440 px.
AC6: build estático funcional com URLs de GitHub Pages; links verificados; medir Lighthouse/Core Web Vitals em ambiente real antes de ratificação.
AC8: uma exclusão é aplicada antes de ler conteúdo, gerar contagens e publicar; repositório anteriormente público removido ou privatizado deve ser retirado dos dados atuais sem preservar conteúdo revogado como fallback; histórico Git público não pode ser tratado como revogável.
AC9: o build do portfólio não depende de Next.js; a apresentação de competências não promove essa tecnologia.
AC10: coletor e normalização executados por serviços NestJS testáveis; geração de snapshot funciona sem servidor HTTP permanente; API de leitura, quando habilitada, fornece apenas dados públicos validados, com testes de contrato, falha, exclusão e ausência de segredos.
AC7: aprovar conteúdo, licenças, privacidade e acessibilidade antes de promoção; deploy não incluído na autorização de planejamento.

## Exclusões
Backend privilegiado, coleta privada para publicação, cópia literal da Apple, métricas inventadas, chat/analytics/formulários de contato por padrão, publicação automática irrestrita e importação de dados pessoais.

## Decisões pendentes
Confirmação de autoria por projeto, permissão para cases de trabalho e ativos, projetos em destaque, dados biográficos e canais de contato, política de atualização e publicação, validação de organizações adicionais. Nenhuma exige interromper a especificação.
