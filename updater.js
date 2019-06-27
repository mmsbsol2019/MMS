const {autoUpdater} =require('electron-updater')
const log = require('electron-log');
const ProgressBar = require('electron-progressbar');
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
const eDialog = require('electron-dialogbox');
autoUpdater.autoDownload = false;
exports.check = () => {

    autoUpdater.checkForUpdates()
    autoUpdater.on('update-not-available', (info) => {
      log.info('#########Update not available.###########');
    })
    autoUpdater.on('update-available',()=> {
        let downloadProgress;
        let progressBar ;
        var myinter;
        updatePopup();
        async function updatePopup() {
  
            let result = await eDialog.showDialog(
                  'file:///'+__dirname+'/updatePopup.html', {width: 350, height: 150} );
            if (result==='OK') {
   
            autoUpdater.downloadUpdate()
    
            progressBar = new ProgressBar({
              indeterminate: false,
              text: 'Downloading Update...',
              detail: 'Wait...',
              browserWindow: {
                  closable:true,
                  minimizable:true
                  }
            });
            myinter= setInterval(function() {
              log.info('setInterval setInterval');
              if(!progressBar.isCompleted()){
                progressBar.value = Math.round(downloadProgress);
                }
              }, 100);
            progressBar.on('completed', function() {
              clearInterval(myinter);
                progressBar.detail = 'Download completed. Exiting...';
              }).on('aborted', function(value) {
                    clearInterval(myinter);
              }).on('progress', function(value) {
                  progressBar.detail = `${value} % out of ${progressBar.getOptions().maxValue} %`;
              });     
         } 
    }
    autoUpdater.on('download-progress', (progressObj) => {
        log.info('progg down process');
        downloadProgress=progressObj.percent;  
      })

    autoUpdater.on('update-downloaded',()=> {
      clearInterval(myinter);
      progressBar=null;
      log.info('progg update complete');
      restartInstall();
      async function restartInstall() {
          
          let result = await eDialog.showDialog(
                'file:///'+__dirname+'/restartInstall.html', {width: 350, height: 150} );
          if (result==='OK') {
              autoUpdater.quitAndInstall()
          }
          
        }

    })

    })
    
}