# BoraViajar

Planejamento privado com linha do tempo, ônibus, carro, hospedagem e passeios.

Página: https://boraviajar-planner.danieldosadi.chatgpt.site

Os arquivos em dist/ usam Supabase Auth e RLS para acessar o roteiro compartilhado. A chave em config.js é publicável; a autorização é validada no banco. Novos usuários precisam ser cadastrados no Supabase Authentication e aprovados na tabela allowed_emails. Configure Site URL e Redirect URLs com o endereço da publicação.

Esta versão substitui a página anterior. Dados locais do planejador antigo não são migrados automaticamente. O repositório continua privado e GitHub Pages permanece desativado; a hospedagem é feita em ChatGPT Sites, com acesso restrito do proprietário.
