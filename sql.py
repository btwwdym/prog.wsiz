import sqlite3
con = sqlite3.connect(':memory:’)
cur = con.cursor()
# Usuń tabelę jeżeli istnieje
cur.execute("DROP TABLE IF EXISTS Biblioteka;")
# Utwórz tabelę
cur.execute("""
    CREATE TABLE IF NOT EXISTS Biblioteka (
        id INTEGER PRIMARY KEY ASC,
        autor varchar(250) NOT NULL,
        tytuł varchar(250) DEFAULT ''
    )""")
