-- Detalhes dos passeios; mantém as políticas de acesso existentes.
alter table public.travel_items add column if not exists tour jsonb;
