1) Run npm i to download dependencies. (I think when you host vercel does it automatically in production but so you can see and edit locally)

2) You'll need a supabase account and a vercel account. Free tiers are very decent and you don't need to register a credit card

3) Create a supabase project.

4) go to settings -> API Keys (And hold there a sec)

  In your local code folder, at the same level as src create a file named: .env.local

  In he file paste:
  NEXT_PUBLIC_SUPABASE_URL='{Your anon public key goes here}'
  SUPABASE_SERVICE_ROLE_KEY='{Your service_role secret key goes here}'

  Replace your non key and service_role key in the file. BE VERY CAREFUL WITH SERVICE_ROLE KEY
  NEVER GIVE IT TO ANYONE AND DON'T MOVE IT FROM WHERE I TOLD YOU.

5) Go to SQL editor and run the following code.

-- Tables code
```sql
-- Tables
create table public.films (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  recommended_by text,
  created_at timestamptz not null default now()
);

create table public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  recommended_by text,
  created_at timestamptz not null default now()
);

create table public.songs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  recommended_by text,
  created_at timestamptz not null default now()
);

-- Row Level Security Policies
alter table public.films enable row level security;
alter table public.books enable row level security;
alter table public.songs enable row level security;
```

YOUR DATABASE IS SET. I'll give you a script to retrieve your recomendations.