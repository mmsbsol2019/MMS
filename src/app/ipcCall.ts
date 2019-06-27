import { ElectronService } from 'ngx-electron';
import { NgModule } from '@angular/core';
@NgModule({})
export class IpcCal {
    constructor(private electronService: ElectronService) {

    }
    loginValidation(param) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('check-username-password-request', param)
        }
        //ipcRenderer DB request end
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('check-username-password-response', (event, arg) => {
                if (arg[0].isAvail == 1) {
                    resolve('true')
                }
                else {
                    resolve('false')
                }

            })
        })
        //ipcRenderer DB response end
    }
    userDetails(param) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('get-user-details-request', param)
        }
        //ipcRenderer DB request end
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('get-user-details-response', (event, arg) => {

                resolve(arg[0])


            })
        })
        //ipcRenderer DB response end
    }

    onSaveAuditInfo(param) {
        if (this.electronService.isElectronApp) {

            this.electronService.ipcRenderer.send('get-deficiency-data-request', param)
        }
        //ipcRenderer DB request end 
        return new Promise((resolve, reject) => {
            //ipcRenderer DB response start
            this.electronService.ipcRenderer.once('get-deficiency-data-response', (event, arg) => {
                resolve(arg)
            })
        })
        //ipcRenderer DB response end
    }
    //ipcRenderer DB request start

    onLoadCreateDefAuditCat(param) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('get-audit-category-request', param)
        }
        //ipcRenderer DB request end 

        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('get-audit-category-response', (event, arg) => {
                resolve(arg)

            })
        })
        //ipcRenderer DB response end
    }
    onLoadCreateDefVesselInfo(param,vesData) {

        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('find-vessel-info-request', param,vesData)
        }
        //ipcRenderer DB request end  


        //ipcRenderer DB response start

        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('find-vessel-info-response', (event, arg) => {
                resolve(arg)

            })
        })
    }

    onGetHistory(param) {
        //ipcRenderer DB request start

        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('find-deficiency-history-request', param)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('find-deficiency-history-response', (event, arg) => {
                resolve(arg)

            })
        })
    }

    onCreateNewDef(param, findData) {
        //ipcRenderer DB request start

        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('save-deficiency-data-request', param, findData)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('save-deficiency-data-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    onEditDef(param, findData) {
        //ipcRenderer DB request start

        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('update-deficiency-data-request', param, findData)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('update-deficiency-data-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    onCreateModelWin(param, paramAuditCode) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('get-deficiency-master-data-request', param, paramAuditCode)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('get-deficiency-master-data-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    getTxnNumber(param) {
        // console.log(defId)
        // console.log(cmnyCatInterId)
        // var param=cmnyCatInterId.push(defId)
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('get-def-txnMax-request', param)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('get-def-txnMax-response', (event, arg) => {
                resolve(arg[0].TXN)
            })
        })

    }

    onDeleteDef(param, findData,newData) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('delete-deficiency-data-request', param, findData,newData)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('delete-deficiency-data-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    OnGetseq(cmnyCatInterId) {

        if (cmnyCatInterId[1] == 1) {
            this.electronService.ipcRenderer.send('get-ism-seq-request',cmnyCatInterId[0])
            return new Promise((resolve, reject) => {
                this.electronService.ipcRenderer.once('get-ism-seq-response', (event, arg) => {
                    resolve(arg[0])
                })
            })

        } else if (cmnyCatInterId[1] == 2) {
            this.electronService.ipcRenderer.send('get-isps-seq-request',cmnyCatInterId[0])

            return new Promise((resolve, reject) => {
                this.electronService.ipcRenderer.once('get-isps-seq-response', (event, arg) => {
                    resolve(arg[0])
                })
            })

        } else if (cmnyCatInterId[1] == 3) {
            this.electronService.ipcRenderer.send('get-ems-seq-request',cmnyCatInterId[0])

            return new Promise((resolve, reject) => {
                this.electronService.ipcRenderer.once('get-ems-seq-response', (event, arg) => {
                    resolve(arg[0])
                })
            })
        } else if (cmnyCatInterId[1] == 4) {
            this.electronService.ipcRenderer.send('get-nav-seq-request',cmnyCatInterId[0])

            return new Promise((resolve, reject) => {
                this.electronService.ipcRenderer.once('get-nav-seq-response', (event, arg) => {
                    resolve(arg[0])
                })
            })

        } else if (cmnyCatInterId[1] == 5) {
            this.electronService.ipcRenderer.send('get-safety-seq-request',cmnyCatInterId[0])

            return new Promise((resolve, reject) => {
                this.electronService.ipcRenderer.once('get-ism-seq-response', (event, arg) => {
                    resolve(arg[0])
                })
            })

        }

    }

    synchronizeCentral() {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('synchronize-request')
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('synchronize-response', (event, arg) => {
                resolve(arg)
            })
        })

    }
    onRetrieveAndSaveVesselInfo(jsonArrData) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('retrieve-save-vessel-info-request',jsonArrData)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('retrieve-save-vessel-info-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    onRetrieveAndSaveUsers(jsonArrData) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('retrieve-save-users-request',jsonArrData)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('retrieve-save-users-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    onRetrieveVesselAccessUsers(param) {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('get-vessel-access-user-request',param)
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('get-vessel-access-user-response', (event, arg) => {
                resolve(arg)
            })
        })

    }

    checkVesselAvail() {
        //ipcRenderer DB request start
        if (this.electronService.isElectronApp) {
            this.electronService.ipcRenderer.send('check-vessel-avail-request')
        }
        //ipcRenderer DB request end  
        //ipcRenderer DB response start
        return new Promise((resolve, reject) => {
            this.electronService.ipcRenderer.once('check-vessel-avail-response', (event, arg) => {
                resolve(arg[0].isAvail)
            })
        })

    }

    

}