1. Navigate to Dashboard, Storage and create new store.
2. Create a postgres database.
3. Once connected navigate to env.local and show secret key.
4. Copy the snippet provided.
5. Create a .env file in parent directory and copy paste code snippet here.
6. Then run: $ npm i @vercel/postgres to install vercel postgres sdk.
7. Seed the database with any data.
8. Create a placeholderdata.ts file to create data and insert data into the db.
9. Then you can delete the placeholder file.

import { sql } from "@vercel/postgres"