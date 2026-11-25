# Modelo de dados — catálogo público v1
Status: contrato proposto, não implementado. JSON estático; sem banco de dados.
## CatalogSnapshot
schemaVersion: 1; generatedAt: ISO UTC; projects: PublicProject[]; skills: SkillIndex[]; sourceAccounts: enum dos três owners públicos; metadata: versão do gerador. Sem totais de privados/excluídos e sem mensagens brutas de API.
## PublicProject
id: identificador GitHub como string; slug: estável e único; owner: conta permitida; repositoryUrl: HTTPS GitHub público; title: texto curto revisado ou nome público validado; summary: texto revisado opcional; category: education|qa|productivity|ai|developer-tools|academic|lab|other.
stage: idea|development|mvp|completed_confirmed|unknown; distribution: none|release|demo_documented|verified_live|unknown; archived: boolean. Status sem evidência => unknown. Release opcional: tag, data publicada, URL pública; demo opcional: HTTPS aprovado. updatedAt: ISO UTC do repositório, não data de conclusão.
technologies: TechnologyEvidence[]; authorship: assisted_confirmed|independent_declared|unknown; aiFeature: confirmed|not_declared|unknown; evidence: Evidence[]; featured: boolean; caseStudy: opcional com problema/solução/contribuição/resultado comprovado e mídias autorizadas; variantGroup: ID editorial público opcional. Nunca inferir contribuição individual de código em conta coletiva.
## TechnologyEvidence
id canônico; displayName; category; origin: github_language|manifest|reviewed_documentation|owner_declaration; level: used|studied|declared; evidenceRef. Dependência declarada => utilizada/declarada no projeto, não domínio; Next.js excluído do índice por decisão do mantenedor.
## Evidence
kind: repository|manifest|release|readme|owner_confirmation|live_check; sourceUrl: link público aprovado opcional; checkedAt: ISO UTC; note: curta e sanitizada. Não armazenar conteúdo integral, mensagens de commits, nomes/emails de terceiros ou dados internos.
## SkillIndex
technologyId; label; category; projects: IDs elegíveis; origens resumidas. Derivação determinística; sem porcentagens de proficiência. Projetos excluídos nunca contribuem para contagem/skills.
## Configuração privada e curadoria
Exclusões nominais armazenadas em segredo/configuração de execução não pública e obrigatória; nenhuma lista de nomes privados no repo. Overrides públicos podem ocultar/agrupuar/destacar e confirmar autoria com evidência pública ou declaração autorizada; não podem incluir repositórios fora da allowlist, privados, excluídos ou de visibilidade desconhecida. Validar antes e depois da projeção. Dados sintéticos nos testes.
## Invariantes
IDs únicos; URLs HTTPS sem credenciais ou esquemas executáveis; nenhuma chave desconhecida; limites de quantidade/tamanho; referências válidas; ordenação estável por chave e critérios editoriais; conteúdo estático com escape, sem HTML externo não sanitizado. Um projeto pode ter release e continuar em desenvolvimento. Somente evidência explícita permite completed_confirmed. 
