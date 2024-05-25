import initSqlJs from 'sql.js';

const loadSqlJs = async () => {
  const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`,
  });
  return SQL;
};

export default loadSqlJs;
