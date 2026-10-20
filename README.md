# BoraViajar

Planejador de viagem para celular e computador, feito em HTML, CSS e JavaScript.

## Abrir e instalar

Acesse https://boraviajar-planner.danieldosadi.chatgpt.site (acesso privado do proprietário).

- Android: Chrome → menu ⋮ → Instalar aplicativo.
- iPhone: Safari → Compartilhar → Adicionar à Tela de Início.
- Também há um botão Instalar app na página com instruções.

É um aplicativo web instalável (PWA), com ícone, janela independente, navegação inferior e acesso offline após a primeira abertura online. Não é um APK nem uma publicação na App Store.

## Recursos

Roteiro por dia e categoria, cadastro/exclusão de planos, perfil e nome da viagem. Os dados ficam no localStorage deste navegador, sem sincronização entre dispositivos. Fotos e fontes externas podem não carregar sem internet.

## Desenvolvimento

Sirva `dist/` por HTTP em localhost para desenvolvimento ou HTTPS em produção. Não requer compilação nem dependências. Service worker e instalação exigem contexto seguro.

O exemplo usa Lisboa de 12 a 16 de novembro de 2026. O repositório permanece privado; GitHub Pages não foi ativado porque o plano atual exige um repositório público.
