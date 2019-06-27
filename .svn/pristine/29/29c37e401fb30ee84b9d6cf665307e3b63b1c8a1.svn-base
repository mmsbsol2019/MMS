@setlocal enableextensions
@cd /d "%~dp0"

:loop
if not exist "C:\Program Files (x86)\MySQL\MySQL Server 5.1\bin\" Goto Loop2
echo "mysql already installed "
pause
Exit
:loop2

if not "%1"=="am_admin" (powershell start -verb runas '%0' am_admin & exit /b)
echo "mysql installtion started"
@echo off


set mypath=%cd%\mysql-essential-5.1.45-win32.msi
@echo "HI MY SQL INSTALLING "
@echo %mypath%


call msiexec  /i  %mypath% /quiet /qn /norestart /log C:\Users\install2.log



echo Creating MySQL Windows service
"C:\Program Files (x86)\MySQL\MySQL Server 5.1\bin\MySQLInstanceConfig.exe" -i -q ServiceName="MySQL" New root password="root" conform="root" ServerType=SERVER DatabaseType=MYISAM Port=3306 
echo MySQL Instance Configured. Service started.




echo Starting Batch Job
set path=%cd%\mms_db_local.sql
echo %path%

cd C:\Program Files (x86)\MySQL\MySQL Server 5.1\bin

echo %path%
mysql --user=root   -e "source %path%"
Echo After executing the Sql
pause



pause

