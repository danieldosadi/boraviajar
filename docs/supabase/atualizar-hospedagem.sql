-- Detalhes de hospedagem; mantém os itens existentes e as políticas de acesso.
alter table public.travel_items add column if not exists lodging jsonb;
