#!/bin/bash

echo "========================================"
echo "  NoOnes Login System"
echo "========================================"
echo ""
echo "Starting PHP server..."
echo ""

# Get local IP address
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    IP=$(ipconfig getifaddr en0)
else
    # Linux
    IP=$(hostname -I | awk '{print $1}')
fi

# Start server
echo "Server is running!"
echo ""
echo "========================================"
echo "  Click the link below to login:"
echo "========================================"
echo ""
echo "  http://localhost:8000/index.html"
echo ""
echo "========================================"
echo ""
echo "Your IP Address: $IP"
echo ""
echo "Press Ctrl+C to stop the server"
echo "========================================"
echo ""

php -S localhost:8000
