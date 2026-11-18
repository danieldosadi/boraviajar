begin;
alter table public.travel_items drop constraint if exists travel_items_category_check;
alter table public.travel_items add constraint travel_items_category_check
 check (category in ('bus','car','stay','tour','food'));
alter table public.travel_items add column if not exists food_type text
 check (food_type in ('restaurant','cafe','dessert','drinks','market'));
notify pgrst, 'reload schema';
commit;

