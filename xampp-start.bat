@echo off
echo ========================================
echo   NoOnes Login System - XAMPP
echo ========================================
echo.

REM Check if XAMPP is installed
if exist "C:\xampp\htdocs" (
    set XAMPP_PATH=C:\xampp
) else if exist "C:\Program Files\XAMPP\htdocs" (
    set XAMPP_PATH=C:\Program Files\XAMPP
) else if exist "C:\Program Files (x86)\XAMPP\htdocs" (
    set XAMPP_PATH=C:\Program Files (x86)\XAMPP
) else (
    echo XAMPP not found! Please install XAMPP first.
    pause
    exit
)

echo XAMPP found at: %XAMPP_PATH%
echo.

REM Get current directory name
for %%I in (.) do set FOLDER_NAME=%%~nxI

REM Copy files to XAMPP htdocs
echo Copying files to XAMPP htdocs...
xcopy /E /I /Y "%CD%" "%XAMPP_PATH%\htdocs\noones" > nul

echo Files copied successfully!
echo.

REM Start Apache if not running
echo Starting Apache server...
"%XAMPP_PATH%\apache\bin\httpd.exe" -k start > nul 2>&1

timeout /t 2 /nobreak > nul

echo.
echo ========================================
echo   Server is running!
echo ========================================
echo.
echo   Click the link below to login:
echo.
echo   http://localhost/noones/index.html
echo.
echo ========================================
echo.
echo To stop Apache, run XAMPP Control Panel
echo ========================================
echo.

REM Open the browser
start http://localhost/noones/index.html

pause
