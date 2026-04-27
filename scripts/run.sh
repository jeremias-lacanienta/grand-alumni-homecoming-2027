#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

PORT="${PORT:-8080}"
URL="http://localhost:${PORT}"

echo "→ Serving MARHS Homecoming 2027 at ${URL}"
echo "  (Ctrl+C to stop)"
echo

# Open the page in the default browser once the server is up.
open_browser() {
  # Wait briefly for the server to bind, then open.
  sleep 1
  if command -v open >/dev/null 2>&1; then
    open "${URL}"               # macOS
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "${URL}"           # Linux
  elif command -v start >/dev/null 2>&1; then
    start "${URL}"              # Windows (Git Bash)
  else
    echo "  Open ${URL} in your browser."
  fi
}
open_browser &

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
elif command -v python >/dev/null 2>&1; then
  python -m SimpleHTTPServer "${PORT}"
else
  echo "Python not found. Install python3 or run: npx serve -l ${PORT} ." >&2
  exit 1
fi
