# XAMPP Setup Guide

## Quick Start

1. Run the XAMPP setup script:
   ```bash
   xampp-start.bat
   ```

2. The script will:
   - Find your XAMPP installation
   - Copy all files to `C:\xampp\htdocs\noones`
   - Start Apache server
   - Open the login page in your browser

3. The login page will be available at:
   ```
   http://localhost/noones/index.html
   ```

## Manual Setup (Alternative)

If the script doesn't work, follow these steps:

1. **Start XAMPP Control Panel**
   - Open XAMPP Control Panel
   - Click "Start" next to Apache

2. **Copy Files**
   - Copy all your project files to: `C:\xampp\htdocs\noones\`

3. **Open Browser**
   - Go to: http://localhost/noones/index.html

4. **Test Login**
   - Enter any email and password
   - Click "Log in"
   - Check `C:\xampp\htdocs\noones\auth\` folder for:
     - `ip.txt` - Your IP address
     - `usernames.dat` - Your login credentials

## File Permissions

Make sure the `auth` folder has write permissions:
1. Right-click on `auth` folder
2. Properties → Security
3. Edit → Add "Users" group
4. Allow "Write" permission

## Troubleshooting

**Apache won't start:**
- Port 80 might be in use
- Check if Skype or other apps are using port 80
- Change Apache port in XAMPP config

**Files not saving:**
- Check folder permissions
- Make sure Apache has write access to `auth` folder

**Page not loading:**
- Make sure Apache is running (green in XAMPP Control Panel)
- Check the URL: http://localhost/noones/index.html
