# Protótipo F1 — T007
Data: 2026-11-25. Arquivo autocontido index.html, conceitual e descartável. Blob testado: 3b4eda69818e3fed7920aaf76dd014b98e3baf56.
## Como experimentar
Baixar o HTML e abrir no navegador. Não requer servidor, dependências, token ou rede. Dados fictícios; não é o produto final nem contém o catálogo real. A cena é CSS, não Three.js/GSAP; o uso desses frameworks permanece previsto na F3. A identidade visual proposta depende de aceite.
## Evidências
Chromium 144.0.7559.96, Debian 13 no ambiente isolado de execução do agente (não Termux nem computador do usuário), Python Playwright. Navegação file:// bloqueada pelo ambiente; o teste carregou o conteúdo HTML em páginas novas por page.set_content. Verificado que o blob remoto corresponde ao local testado.
- PASS: 320, 360, 390, 768, 1024, 1280, 1440 px sem overflow horizontal detectado (scrollWidth <= innerWidth).
- PASS: busca por NestJS, filtros combinados, estado vazio e seleção de estágio MVP.
- PASS: diálogo aberto por Enter, fechado por Escape, foco retorna ao acionador.
- PASS: clique em tecnologia Playwright filtra o catálogo.
- PASS: prefers-reduced-motion: reduce desativa animação CSS e rolagem suave.
- PASS: nenhum erro JavaScript observado na execução final.
Capturas desktop 1440x900 e mobile 390x844 produzidas localmente. A primeira tentativa com file:// e o reaproveitamento de uma página no teste foram corrigidos no harness, não constituem CI verde.
## Limites
Sem auditoria completa axe/leitor de tela, desempenho, testes reais da API, validação de dados profissionais, autoria ou produção. T007 cobre protótipo e verificações preliminares, não a implementação do sistema. T009 ainda exige revisão/ratificação, fontes legais e proteção das branches; não promover ou publicar.
