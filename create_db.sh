#!/bin/bash

# dropdb -U postgres db_app
# psql -U postgres -c "DROP ROLE app;"
# Designed to be ran just once!
psql -U postgres -c "CREATE USER app WITH PASSWORD 'app-pass';"
createdb -U postgres db_app
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE \"db_app\" to app;"
psql -U postgres -d db_app -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"