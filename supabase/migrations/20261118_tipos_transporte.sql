begin;
alter table public.travel_items add column if not exists bus_type text
 check (bus_type in ('international','interstate','intercity','metropolitan','municipal'));
alter table public.travel_items add column if not exists transport_details jsonb
 check (transport_details is null or jsonb_typeof(transport_details) = 'object');
update public.travel_items set bus_type = 'interstate' where category = 'bus' and bus_type is null;
alter table public.travel_items drop constraint if exists travel_items_mobility_type_check;
alter table public.travel_items add constraint travel_items_mobility_type_check
 check (mobility_type in ('rental_car','own_car','own_motorcycle','app'));
notify pgrst, 'reload schema';
commit;

