//let q;

let dbInit = ()=>{
  let Query = require('./query.js');
  let sqlite3 = require('sqlite3').verbose();
  const path = require('path');
  const fs = require('fs');
  let dir = '/Users/anoop/downloads'
  dir = path.join(dir, 'jhora');
  if (!fs.existsSync(dir)){ fs.mkdirSync(dir); }
  let dbPath = path.join(__dirname, 'db.db');
  console.log('anp dbpath ', dbPath);
  let db = new sqlite3.Database(dbPath);
  q = new Query(db);

  return Promise.all([
    q.createCustomerTable('customers', 'UNIQUE'),
    q.createTransactionTable('transactions','active INT DEFAULT 1'),
    q.createVillageTable('village'),
    q.createBalanceTable('balances'),
    q.createBalanceTable('balances_history',',action'),
    q.createCustomerTable('delcustomers'),
    q.createTransactionTable('deltransactions','deletedOn TEXT'),
  ])
  .then((data)=>{
    return Promise.all([ q.createTrigger('onInsert','INSERT'), q.createTrigger('onUpdate','UPDATE')])
  })
  .then((data)=>{
    console.log('anp db confiigured');
  })
  .catch((err)=>{
    console.error('anp an error occured while creating table', err);
  })
  
};

module.exports = dbInit;
