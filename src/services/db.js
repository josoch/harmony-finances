import loadSqlJs from '../sql-wasm';

let db;

const initDb = async () => {
  const SQL = await loadSqlJs();
  db = new SQL.Database();

  // Create tables if they don't exist
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      role TEXT
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      amount REAL,
      category TEXT,
      date TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS budgets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      amount REAL,
      category TEXT,
      date TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);
};

export const createTables = async () => {
  if (!db) await initDb();
};

export const addUser = async (name, role, callback) => {
  if (!db) await initDb();
  db.run('INSERT INTO users (name, role) VALUES (?, ?)', [name, role]);
  const res = db.exec('SELECT last_insert_rowid() as id');
  const id = res[0].values[0][0];
  callback({ id, name, role });
};

export const addBudget = async (user_id, amount, category, callback) => {
  if (!db) await initDb();
  db.run('INSERT INTO budgets (user_id, amount, category, date) VALUES (?, ?, ?, ?)', [
    user_id,
    amount,
    category,
    new Date().toISOString(),
  ]);
  const res = db.exec('SELECT last_insert_rowid() as id');
  const id = res[0].values[0][0];
  callback({ id, user_id, amount, category });
};

export const addExpense = async (user_id, amount, category, callback) => {
  if (!db) await initDb();
  db.run('INSERT INTO expenses (user_id, amount, category, date) VALUES (?, ?, ?, ?)', [
    user_id,
    amount,
    category,
    new Date().toISOString(),
  ]);
  const res = db.exec('SELECT last_insert_rowid() as id');
  const id = res[0].values[0][0];
  callback({ id, user_id, amount, category });
};
