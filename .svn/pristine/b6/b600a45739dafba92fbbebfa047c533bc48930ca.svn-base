const ipcMain = require('electron').ipcMain
const Constants = require('../DBConnection/constants')
const crud = require('./CRUD')
const conn = require('./dbConnection')

ipcMain.on('check-username-password-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_LOGIN_USER, data)
        .then((value) => {
          event.sender.send('check-username-password-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })

    });
})

ipcMain.on('get-user-details-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_LOGIN_USER_DETAILS, data)
        .then((value) => {
          event.sender.send('get-user-details-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })

    });
})

ipcMain.on('get-audit-category-request', (event, data) => {

  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_AUDIT_CATEGORY, data)
        .then((value) => {
          event.sender.send('get-audit-category-response', value)
          connection.release();
        }).catch(() => {
          console.log('error');
        })

    })

})

ipcMain.on('find-vessel-info-request', (event, data,vesData) => {
  var dataS;
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_VESSEL_DETAILS, vesData)
        .then((value) => {
          dataS = value;
          crud.find(connection, Constants.FIND_COMPANY, data)
            .then((value) => {
              dataS.push(value)
              crud.find(connection, Constants.FIND_AUDIT_TYPE, data)
                .then((value) => {
                  dataS.push(value)
                  crud.find(connection, Constants.FIND_AUDIT_INTERVAL, data)
                    .then((value) => {
                      dataS.push(value)
                      event.sender.send('find-vessel-info-response', dataS)
                      connection.release();
                    })
                })
            })
        })
    }).catch(() => {
      console.log('error');
    })

})

ipcMain.on('get-deficiency-data-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_DEF, data)
        .then((value) => {
          event.sender.send('get-deficiency-data-response', value)
          connection.release();
        })

    }).catch(() => {
      console.log('error');
    })
})

ipcMain.on('find-deficiency-history-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_DEF_HISTORY, data)
        .then((value) => {
          event.sender.send('find-deficiency-history-response', value)
          connection.release();
        })

    }).catch(() => {
      console.log('error');
    })
})


ipcMain.on('get-deficiency-master-data-request', (event, data, paramAuditCode) => {
  var dataS = [];
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_AUDIT_CODE_CONDITION1, paramAuditCode)
        .then((value) => {
          dataS.push(value)
          crud.find(connection, Constants.FIND_AUDIT_CODE_REF, data)
            .then((value) => {
              dataS.push(value)
              crud.find(connection, Constants.FIND_DEF_CAUSE, data)
                .then((value) => {
                  dataS.push(value)
                  event.sender.send('get-deficiency-master-data-response', dataS)
                  connection.release();
                })
            })
        })

    }).catch(() => {
      console.log('error');
    })
})

ipcMain.on('save-deficiency-data-request', (event, data, findData) => {

  conn.getConnection()
    .then((connection) => {
      crud.insert(connection, Constants.SAVE_MA_AUDIT_INFO_IF_NOT_EXIST, data[0])
        .then((value) => {
          crud.insert(connection, Constants.SAVE_MA_AUDIT_DEFICIENCY, data[1])
            .then((value) => {
              crud.insert(connection, Constants.SAVE_AUDIT_DEFICIENCY_REF, data[2])
                .then((value) => {
                  crud.find(connection, Constants.FIND_DEF, findData)
                    .then((value) => {
                      console.log('FIND_DEF')
                      event.sender.send('save-deficiency-data-response', value)
                      connection.release();
                    })
                })
            })
        })

    }).catch(() => {
      console.log('error');
    })
})

ipcMain.on('update-deficiency-data-request', (event, data, findData) => {

  conn.getConnection()
    .then((connection) => {
      crud.insert(connection, Constants.SAVE_AUDIT_DEFICIENCY_REF, data[0])
        .then((value) => {
          crud.update(connection, Constants.UPDATE_MA_DEF, data[1])
            .then((value) => {
              crud.find(connection, Constants.FIND_DEF, findData)
                .then((value) => {
                  event.sender.send('update-deficiency-data-response', value)
                  connection.release();
                })
            })
        })

    }).catch(() => {
      console.log('error');
    })
})

ipcMain.on('get-def-txnMax-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.FIND_TXN_MAX, data)
        .then((value) => {
          event.sender.send('get-def-txnMax-response', value)
          connection.release();
        })

    }).catch(() => {
      console.log('error');
    })
})


ipcMain.on('delete-deficiency-data-request', (event, data, findData, newData) => {
  conn.getConnection()
    .then((connection) => {
      crud.delete(connection, Constants.DELETE_AUDIT_DEF, data)
        .then((value) => {
          crud.delete(connection, Constants.DELETE_MA_DEF, data)
            .then((value) => {

              crud.delete(connection, Constants.DELETE_AUDIT_INFO, newData)
                .then((value) => {
                  crud.find(connection, Constants.FIND_DEF, findData)
                    .then((value) => {
                      event.sender.send('delete-deficiency-data-response', value)
                      connection.release();
                    })
                    .catch(() => {
                      console.log('error');
                    })
                })
            })
        })
    });
})

ipcMain.on('get-ism-seq-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.GENERATE_SEQ_ISM, data)
        .then((value) => {
          event.sender.send('get-ism-seq-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })
    });
})
ipcMain.on('get-isps-seq-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.GENERATE_SEQ_ISPS, data)
        .then((value) => {
          event.sender.send('get-isps-seq-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })
    });
})
ipcMain.on('get-ems-seq-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.GENERATE_SEQ_EMS, data)
        .then((value) => {
          event.sender.send('get-ems-seq-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })
    });
})
ipcMain.on('get-nav-seq-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.GENERATE_SEQ_NAV, data)
        .then((value) => {
          event.sender.send('get-nav-seq-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })
    });
})
ipcMain.on('get-safety-seq-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.GENERATE_SEQ_SAFETY, data)
        .then((value) => {
          event.sender.send('get-safety-seq-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })
    });
})

ipcMain.on('synchronize-request', (event) => {
  var synchData = [];
  var data1 = [1];
  conn.getConnection()
    .then((connection) => {
      crud.synchronize(connection, Constants.SYNC_AUDIT_INFO, data1)
        .then((value) => {
          synchData[0] = value;
          crud.synchronize(connection, Constants.SYNC_MA_DEF, data1)
            .then((value) => {
              synchData.push(value)
              crud.synchronize(connection, Constants.SYNC_AUDIT_DEF, data1)
                .then((value) => {
                  synchData.push(value)
                  event.sender.send('synchronize-response', synchData)
                  connection.release();
                })
                .catch(() => {
                  console.log('error');
                })
            })
        })
    });
})

ipcMain.on('retrieve-save-vessel-info-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.insert(connection, Constants.RETRIEVE_INSERT_VESSEL_INFO, data)
        .then((value) => {
          event.sender.send('retrieve-save-vessel-info-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })

    });
})
ipcMain.on('retrieve-save-users-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.insertMultiple(connection, Constants.RETRIEVE_INSERT_USERS, data)
        .then((value) => {
          event.sender.send('retrieve-save-users-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })

    });
})


ipcMain.on('get-vessel-access-user-request', (event, data) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.RETRIEVE_VESSEL_ACCESS_USERS, data)
        .then((value) => {
          event.sender.send('get-vessel-access-user-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })

    });
})

ipcMain.on('check-vessel-avail-request', (event) => {
  conn.getConnection()
    .then((connection) => {
      crud.find(connection, Constants.CHECK_VESSEL_AVAIL)
        .then((value) => {
          event.sender.send('check-vessel-avail-response', value)
          connection.release();
        })
        .catch(() => {
          console.log('error');
        })

    });
})