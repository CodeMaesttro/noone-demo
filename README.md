# NoOnes Login/Signup System

## Setup Instructions

1. Make sure you have PHP installed on your system
2. Place all files in your web server directory (e.g., htdocs, www, or public_html)
3. Ensure the `auth` folder has write permissions:
   - On Linux/Mac: `chmod 755 auth`
   - On Windows: Right-click auth folder → Properties → Security → Edit permissions

## Running the Application

### Quick Start (Recommended)

**Windows (Command Prompt):**
```bash
start.bat
```

**Windows (PowerShell):**
```bash
.\run.ps1
```

**Linux/Mac:**
```bash
chmod +x start.sh
./start.sh
```

The script will:
1. Start the PHP server
2. Display a clickable link: http://localhost:8000/index.html
3. Show your IP address
4. Keep running until you press Ctrl+C

### Manual Start

**Option 1: Using PHP Built-in Server**
```bash
php -S localhost:8000
```
Then open: http://localhost:8000/index.html

**Option 2: Using XAMPP/WAMP/MAMP**
1. Copy files to htdocs folder
2. Start Apache server
3. Open: http://localhost/your-folder-name/index.html

## Files Structure

- `index.html` - Login page
- `signup.html` - Signup page
- `style.css` - Shared styles
- `script.js` - Login page JavaScript
- `signup.js` - Signup page JavaScript
- `auth/` - Backend folder
  - `login.php` - Handles login requests
  - `signup.php` - Handles signup requests
  - `ip.txt` - Stores IP addresses
  - `usernames.dat` - Stores login credentials
  - `.htaccess` - Protects data files

## How It Works

When users login or signup:
1. Their IP address is saved to `auth/ip.txt`
2. Their email and password are saved to `auth/usernames.dat`
3. Each entry includes a timestamp

## Security Note

This is a basic implementation for demonstration. For production use:
- Hash passwords before storing
- Use a database instead of text files
- Implement proper authentication
- Add CSRF protection
- Use HTTPS
