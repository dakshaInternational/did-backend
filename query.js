class Query {
  constructor(db){
     this.db = db;
  }

  closeDB(){
    let p = new Promise((resolve, reject)=>{
      this.db.close((err, data)=>{
       if(err) reject(err);
       resolve(data);
      });
   });
   return p;
  }

  createStudentTable(tableName, unique =''){
    let p = new Promise((resolve, reject)=>{
      this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         first_name   TEXT   NOT NULL,
         last_name    TEXT   NOT NULL,
         father_name  TEXT   NOT NULL,
         mother_name  TEXT   NOT NULL,
         class        TEXT   NOT NULL,
         gender       TEXT   NOT NULL,
         dob          TEXT   NOT NULL,
         address      TEXT   NOT NULL,
         contact_number     INTEGER NOT NULL,
         email        TEXT,
         status       INTEGER,
         image BLOB ,
         enrollment_number TEXT,
         roll_number INTEGER NOT NULL,
         category TEXT,
         adhaar_no TEXT,
         religion TEXT,
         handicapped TEXT,
         father_qualification TEXT,
         father_occupation TEXT,
         mother_qualification TEXT,
         mother_occupation TEXT,
         contact_number2 INTEGER,
         annual_income INTEGER NOT NULL,
         miniority TEXT ,
         only_child TEXT
          )`
         , [], (err, data)=>{
         if(err) reject(err);
         resolve(data);
       });
     });
     return p;
  }

  createReceiptTable(tableName,data){
    let p = new Promise((resolve, reject)=>{
      this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         session TEXT NOT NULL,
         student_id     INT  NOT NULL,
         class_id       INT  NOT NULL,
         admission_fee  INTEGER,
         pre_balance    INTEGER,
         form_charges    INTEGER,
         dearness_fee    INTEGER,
         devlop_fee    INTEGER,
         electric_fee    INTEGER,
         library_fee    INTEGER,
         lab_fee    INTEGER,
         music_fee    INTEGER,
         annual_function_fee    INTEGER,
         exam_fee    INTEGER,
         tution_fee     INTEGER,
         late_fee    INTEGER,
         activity_fee    INTEGER,
         total_amount    INTEGER,
         amount_deposite    INTEGER,
         balance_amount    INTEGER,
         remark TEXT,
         received_by TEXT,
         date  TEXT NOT NULL
         )`
         , [], (err, data)=>{
         if(err) reject(err);
         resolve(data);
       });
     });
     return p;
  }

  createSubjectTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL UNIQUE)`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createClassTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL UNIQUE)`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createScorePanelTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       exam_id INTEGER    NOT NULL,
       subject_id INTEGER NOT NULL,
       student_id INTEGER NOT NULL,
       marks INTEGER)`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createExamTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL UNIQUE,
       year INTEGER NOT NULL)`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

createTimeTableTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       class_id INTEGER      NOT NULL,
       period_number INTEGER NOT NULL,
       subject_id INTEGER    NOT NULL,
       start_time TEXT       NOT NULL,
       end_time TEXT         NOT NULL
       )`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createEmployeeTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT        NOT NULL,
       address TEXT     NOT NULL,
       designation TEXT NOT NULL,
       salary INTEGER   NOT NULL,
       image BLOB       NOT NULL,
       mobile INTEGER   NOT NULL,
       email TEXT,
       doj TEXT,
       work_specification TEXT,
       experience INTEGER,
       dob TEXT NOT NULL,
       qualifiction TEXT,
       department_id INTEGER NOT NULL
       )`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createLibraryTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       book_id INTEGER    NOT NULL,
       date_of_issue TEXT NOT NULL,
       issue_by INTEGER   NOT NULL,
       issue_to INTEGER   NOT NULL
       )`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createBooksTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       book_title TEXT    NOT NULL,
       author_name TEXT NOT NULL,
       publication TEXT  NOT NULL,
       course_book TEXT   NOT NULL
       )`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createDepartmentTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       name TEXT NOT NULL,
       department_head INTEGER NOT NULL
       )`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

 
createLoginTable(tableName){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       user_email TEXT NOT NULL,
       password TEXT NOT NULL,
       is_admin INTEGER NOT NULL
       )`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  createAttendanceTable(tableName){
      let p = new Promise((resolve, reject)=>{
        this.db.run(`CREATE TABLE IF NOT EXISTS ${tableName}(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          date TEXT   NOT NULL,
          class TEXT NOT NULL,
          roll_number INTEGER NOT NULL,
          action TEXT NOT NULL
          )`
          , [], (err, data)=>{
            if(err) reject(err);
            resolve(data);
          });
      });
      return p;
  }

  selectMaxRollNumber(tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `select (max(roll_number)+1) as roll_number from ${tableName} where ${key} = ${value}`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  deleteRowById(tableName, id){
    let p = new Promise( (resolve, reject)=>{
      let sql = `DELETE FROM ${tableName} WHERE ID = ${id}`
      this.db.run(sql, [], (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

 selectAllById(tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE ${key} = '${value}' `
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  selectLoginInfo(tableName, value1, value2){
    let p = new Promise((resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE user_email = '${value1}' AND password = '${value2}' `
      this.db.all(sql,(err,data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  deleteRowAttendance(tableName, value1,value2,value3){
    let p = new Promise( (resolve, reject)=>{
      let sql = `DELETE FROM ${tableName} WHERE roll_number = '${value1}' AND date = '${value2}' AND class = '${value3}' `
      this.db.run(sql, [], (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
 selectAttendance(tableName,tableName2, value1,value2){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName},${tableName2} WHERE ${tableName}.class = '${value1}' AND ${tableName}.date = '${value2}' AND ${tableName}.class = ${tableName2}.class AND ${tableName}.roll_number=${tableName2}.roll_number `
      this.db.all(sql,(err,data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  createTrigger(triggerName,action){
    let p = new Promise((resolve, reject)=>{
    this.db.run(`CREATE TRIGGER IF NOT EXISTS ${triggerName} AFTER ${action} ON balances FOR EACH ROW
      BEGIN
      INSERT INTO balances_history (
        amount,date,calcTill,calcOn,dueFrom, nextDueDate, customerId,type,p,si,rate,total,remarks,action)
      VALUES (new.amount,new.date,new.calcTill,new.calcOn,new.dueFrom,new.nextDueDate,new.customerId,new.type,new.p,
        new.si,new.rate,new.total,new.remarks,'${action}');
        END;`
       , [], (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
  }

  getTotalCountForTable(tableName){
    let p = new Promise((resolve, reject)=>{
      let sql = `select count(id) from ${tableName}`;
      this.db.get(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      })
    });
    return p;
  }

  insert(tableName ='', keys = [], values =[]){
    //INSERT INTO CUSTOMER (NAME, PAGENO, village, MOBILE, FATHERSNAME, GUARANTOR, DATE, REMARKS) VALUES ('anop', 2, 'bang', 8, 'prahlad', 'arun', 'sdsd', 'dfff');
    //this.db.run(`INSERT INTO CUSTOMER (NAME, PAGENO, village, MOBILE, FATHER, GUARANTOR, DATE, REMARKS) VALUES ('anop', 2, 'bang', 9738275930, 'prahlad', 'arun', '02-10-1991', 'demo')`);
    let p = new Promise((resolve, reject)=>{
      let columns = keys.map((key) => `${key}`).join(',');
      let value = values.map((value) => `'${value}'`).join(',');
      let sql = `INSERT INTO ${tableName} (${columns}) VALUES (${value})`;
      this.db.run(sql, [], (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  update(tableName ='', keys = [], values =[], conditionOn, id){
    let p = new Promise((resolve, reject)=>{
      let columns = keys.map((key,index) => `${key}='${values[index]}'`).join(`,`);
      let sql = `UPDATE ${tableName} SET ${columns} WHERE ${conditionOn} =${id}`;
      this.db.run(sql, [], (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }



  deleteTableByName(tableName){
    let p = new Promise( (resolve, reject)=>{
      let sql = `DELETE FROM ${tableName}`
      this.db.run(sql, [], (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  selectAll(tableName){
    let p = new Promise( (resolve, reject)=>{
      this.db.all(`select * from ${tableName}`, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  wildCard(sql){
    let p = new Promise( (resolve, reject)=>{
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  /*selectAllById(tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE ${key} = '${value}' order by date(date)`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }*/
  selectAllByIdActive(tableName, key, value,conditionOn,value2){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE ${key} = '${value}' AND ${conditionOn} = '${value2}' order by date(date)`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  //get data by year and month of selected data
   selectAllByYearMonth(tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE strftime('%Y', ${key}) = strftime('%Y', ${key}) AND strftime('%m', ${key}) = strftime('%m', ${key})`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  //get data between two dates with conditions
   selectDataByDates(tableName, key, value1, value2,conditionOn,value3){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT * FROM ${tableName} WHERE ${conditionOn} = ${value3} AND active = 1 AND date(${key}) BETWEEN '${value1}' AND '${value2}' ORDER BY date(date)`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }

  //get data between two dates without conditions
  selectDataByDatesWithoutCondition(tableName, key, value1, value2){
   let p = new Promise( (resolve, reject)=>{
     let sql = `SELECT count(id) FROM ${tableName} WHERE active = 1 AND date(${key}) BETWEEN '${value1}' AND '${value2}' ORDER BY date(date)`
     this.db.all(sql, (err, data)=>{
       if(err) reject(err);
       resolve(data);
     });
   });
   return p;
 }

//get greater data and equal of selected date
  selectGreaterDataByDate(tableName,key,value){
    let p = new Promise( (resolve, reject)=>{
    let sql = `SELECT * from ${tableName} where date(${key}) >= date(${value})`

    this.db.all(sql, (err, data)=>{
      if(err) reject(err);
      resolve(data);
    });
  });
    return p;
  }

  //get less data of selected date
  selectLessDataByDate(tableName,key,value){
    let p = new Promise( (resolve, reject)=>{
    let sql = `SELECT * from ${tableName} where date(${key}) < date(${value})`
    this.db.all(sql, (err, data)=>{
      if(err) reject(err);
      resolve(data);
    });
  });
    return p;
  }

  updateStatus(tableName, key, value,conditionOn,id){
    let p = new Promise( (resolve, reject)=>{
      let sql = `UPDATE ${tableName} SET ${key} = ${value} WHERE ${conditionOn} =${id}`
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  updateActiveStatus(tableName, key, value,conditionOn,id){
    let p = new Promise( (resolve, reject)=>{
      let sql = `UPDATE ${tableName} SET ${key} = ${value} WHERE ${conditionOn} =${id} AND active=1`;
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  bulkUpload(tableName, rows =[]){
    let p = new Promise( (resolve, reject)=>{
      if(rows.length == 0) resolve(`No data found for ${tableName}`);
      let keys = Object.keys(rows[0]) || [];
      let columns = keys.map((key) => `${key}`).join(',');
      let i = 0;
      for (let r of rows) {
        let values = Object.values(r);
        values = values.map((value) => `'${value}'`).join(',');
        let sql = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;
          this.db.run(sql, [], (err, data)=>{
            if(err) reject(err);
            i++;
            if(i == rows.length) resolve(data);
          });
      }
    });
    return p;
  }
  selectAllTwoTable(table1,table2,columns,match1,match2,conditionOn=""){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT ${columns} FROM ${table1} LEFT JOIN ${table2} ON ${match1} = ${match2} ${conditionOn}`;
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }
  countTransactionByType(column, tableName, key, value){
    let p = new Promise( (resolve, reject)=>{
      let sql = `SELECT ${column} FROM ${tableName} WHERE ${key} = '${value}'`;
      this.db.all(sql, (err, data)=>{
        if(err) reject(err);
        resolve(data);
      });
    });
    return p;
  }


};

module.exports = Query;
