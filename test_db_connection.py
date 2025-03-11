from sqlalchemy import create_engine

DATABASE_URL = "postgresql://odoo:odoo@odoo-db/odoo"

engine = create_engine(DATABASE_URL)

try:
    with engine.connect() as connection:
        result = connection.execute("SELECT 1")
        print("Connection successful:", result.fetchone())
except Exception as e:
    print("Connection failed:", e)