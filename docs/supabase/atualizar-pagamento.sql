-- Informações de pagamento por item, preservando as políticas de acesso.
alter table public.travel_items add column if not exists payment jsonb;
