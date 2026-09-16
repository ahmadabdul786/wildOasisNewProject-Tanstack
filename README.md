# Wild Oasis – Cabin Booking Admin Frontend

## Project purpose
Wild Oasis is a React-based hotel/cabin management dashboard for a boutique accommodation business. The app is centered on bookings, cabin inventory, stay status, and hotel configuration data stored in Supabase.

## My contribution
I built the frontend layer for this admin experience: route-driven screens, custom data hooks, TanStack Query data fetching and cache management, TanStack Table-based list UI, URL-synced filtering and pagination, and mutation flows for cabin and booking updates. The work emphasizes practical React + frontend engineering patterns rather than a static mockup.

## Key implemented features
- Booking list with status filtering, sorting, paging, and detail navigation
- Cabin list with filtering by discount state and CRUD actions for create/delete/edit flows
- Supabase image upload flow for cabin photos
- Hotel settings update form for minimum/maximum stay length, guest cap, and breakfast price
- Check-in and check-out booking actions that update booking status
- Route structure for dashboard, cabins, bookings, settings, account, users, and canvas screens

## Actual tech stack and usage
- React 19 + Vite: application UI and development/build tooling
- React Router: route definitions and navigation in App.jsx
- TanStack Query (@tanstack/react-query + devtools): fetching, caching, pagination prefetching, and cache invalidation after mutations
- TanStack Table (@tanstack/react-table): data tables for bookings and cabins
- Supabase JS: all CRUD access for bookings, cabins, guests, and settings; storage upload for cabin images
- Mantine: UI primitives such as Badge, Menu, and ActionIcon
- Tailwind CSS + styled-components: layout and visual styling
- react-hot-toast: success/error feedback after updates

## Architecture and data flow
1. App.jsx initializes the QueryClient and BrowserRouter, then mounts the route tree under AppLayout.
2. Page components call feature hooks such as useBookings, useCabins, and useSettings.
3. Those hooks use React Query to call service functions in src/services.
4. The service layer queries Supabase tables or storage and returns the requested data.
5. After mutations (create/update/delete/check-in/check-out), cache invalidation refreshes the related queries.
6. Booking pagination and filter state are synchronized through URL search params, keeping list state tied to navigation.

## Important engineering practices
- Query-key-based cache organization for bookings, cabins, and settings
- Prefetching adjacent pages in pagination to reduce perceived latency
- Server-side range queries for bookings pagination using Supabase count + range
- Mutation-driven updates with toast feedback and query invalidation
- Reusable UI/table patterns shared across feature modules

## Project structure
```text
src/
  App.jsx                 # router + QueryClientProvider
  main.jsx                # app bootstrapping + Mantine provider
  services/
    apiBookings.js        # bookings queries and mutations
    apiCabins.js          # cabin CRUD + storage uploads
    apiSettings.js        # settings fetch/update
    supabase.js           # Supabase client setup
  features/
    bookings/             # booking table, detail flows, check-in/out hooks
    cabins/               # cabin CRUD forms and table columns
    settings/             # hotel config form and update hook
    authentication/       # login/signup UI scaffolding
    check-in-out/         # check-in and check-out mutations
  pages/                  # route-level screens
  ui/                     # shared widgets and layout primitives
  utils/                 # helpers, constants
  canvas/                # experimental Konva-based canvas demo
```

## Setup and environment variables
```bash
npm install
npm run dev
```

Current implementation detail: the app connects to Supabase directly from src/services/supabase.js with a hard-coded project URL and publishable key. There is no .env-based configuration layer in the repo at the moment.

## Key technical learnings demonstrated
- Using TanStack Query to centralize asynchronous data and avoid ad hoc local state
- Structuring data access through a dedicated service layer instead of mixing API logic into components
- Building reusable table patterns with TanStack Table and URL-based filtering/sorting
- Handling file/image uploads through Supabase Storage in a CRUD workflow
- Coordinating route state and server-state updates around bookings and cabin maintenance

## Current limitations and future improvements
- Dashboard, Login, Account, and Users pages are still scaffolded/in-progress rather than complete product features
- Authentication and route protection are not implemented in this branch
- The app is structured as a frontend learning/demo project, not a production-grade operational system
- There are no automated tests or CI checks configured in the repository yet
- A proper production setup would include environment-variable configuration, stronger validation, and more complete reporting/auth flows

## Author / GitHub
- Repository owner: ahmadabdul786
- GitHub: https://github.com/ahmadabdul786/wildOasisNewProject-Tanstack
