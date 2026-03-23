-- profiles
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  business_name text,
  license_number text,
  phone text,
  email text,
  address text,
  tax_rate decimal default 8.75,
  quote_validity_days integer default 30,
  payment_terms text default 'Due within 14 days',
  stripe_account_id text,
  created_at timestamptz default now()
);

-- quotes
create type quote_status as enum ('draft','sent','approved','declined','invoiced','paid','overdue');

create table if not exists quotes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  client_name text not null,
  client_email text,
  client_phone text,
  client_address text,
  status quote_status default 'draft',
  subtotal decimal default 0,
  tax_amount decimal default 0,
  total decimal default 0,
  ai_description text,
  public_token text unique,
  sent_at timestamptz,
  approved_at timestamptz,
  paid_at timestamptz,
  created_at timestamptz default now()
);

-- line_items
create table if not exists line_items (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid references quotes(id) on delete cascade,
  service_name text,
  description text,
  labor_cost decimal default 0,
  material_cost decimal default 0,
  hours decimal default 0,
  sort_order integer default 0
);

-- reminders
create table if not exists reminders (
  id uuid primary key default gen_random_uuid(),
  quote_id uuid references quotes(id) on delete cascade,
  type text,
  sent_at timestamptz,
  next_send_at timestamptz
);

-- RLS policies
alter table profiles enable row level security;
alter table quotes enable row level security;
alter table line_items enable row level security;
alter table reminders enable row level security;

create policy "Users can manage own profile" on profiles for all using (auth.uid() = id);
create policy "Users can manage own quotes" on quotes for all using (auth.uid() = user_id);
create policy "Users can manage own line_items" on line_items for all using (
  quote_id in (select id from quotes where user_id = auth.uid())
);
create policy "Public can read quotes by token" on quotes for select using (true);
create policy "Public can read line_items" on line_items for select using (true);
create policy "Public can update quote status" on quotes for update using (true);
