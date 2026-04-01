import sqlite3
from pathlib import Path

def getConnection():
    # Resolve DB path relative to this file to avoid CWD issues
    db_path = Path(__file__).resolve().parent / "schemes.db"
    conn=sqlite3.connect(str(db_path))
    conn.row_factory=sqlite3.Row
    return conn