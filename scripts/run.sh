#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

PORT="${PORT:-8080}"

echo "→ Serving MARHS Homecoming 2027 at http://localhost:${PORT}"
echo "  (Ctrl+C to stop)"
echo

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
elif command -v python >/dev/null 2>&1; then
  python -m SimpleHTTPServer "${PORT}"
else
  echo "Python not found. Install python3 or run: npx serve -l ${PORT} ." >&2
  exit 1
fi
