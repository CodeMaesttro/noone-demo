@echo off
echo ========================================
echo   NoOnes Login System
echo ========================================
echo.
echo Starting PHP server...
echo.

REM Get local IP address
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%

REM Start PHP server in background
start /B php -S localhost:8000 > nul 2>&1

REM Wait a moment for server to start
timeout /t 2 /nobreak > nul

echo Server is running!
echo.
echo ========================================
echo   Click the link below to login:
echo ========================================
echo.
echo   http://localhost:8000/index.html
echo.
echo ========================================
echo.
echo Your IP Address: %IP%
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Keep the window open and server running
php -S localhost:8000
