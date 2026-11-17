# Front-end Mobile do Cardápio

React + Vite + TypeScript + Tailwind, sem dados mockados. Todas as informações vêm da API.

## Executar
```bash
npm install
cp .env.example .env
npm run dev
```

Acesse:
```text
http://localhost:5173/?restaurante=meu-restaurante&mesa=5
```

## Funcionalidades
- White-label carregado pela API
- Categorias e produtos reais
- Busca, disponibilidade e detalhes do produto
- Carrinho persistido por restaurante e mesa
- Envio de pedido
- Acompanhamento PENDENTE → PREPARANDO → PRONTO
- Chamar garçom
- Solicitar fechamento da conta
- Limpeza de carrinho, nome e sessão local após o backend confirmar mesa FECHADA
- Leitor de QR Code com restaurante e número da mesa
- Polling configurável via `VITE_POLLING_MS`

## Contrato REST esperado
- GET `/public/{slug}`
- GET `/public/{slug}/categorias`
- GET `/public/{slug}/produtos`
- GET `/public/{slug}/mesas/{mesa}/pedidos`
- GET `/public/{slug}/mesas/{mesa}/status`
- POST `/public/{slug}/pedidos`
- POST `/public/{slug}/chamados`

## Formatos importantes
O pedido é enviado como:
```json
{"numero_mesa":5,"nome_cliente":"Victor","itens":[{"produto_id":"uuid","quantidade":2,"observacao":"Sem cebola"}]}
```
O chamado é enviado como:
```json
{"numero_mesa":5,"tipo":"GARCOM"}
```
ou:
```json
{"numero_mesa":5,"tipo":"FECHAR_CONTA"}
```

A câmera requer HTTPS ou localhost. Para testar no celular, publique em Vercel/Netlify ou configure HTTPS local.
