#!/usr/bin/env bash
# Deploys a specific Paperclip image tag on the VPS and records deploy history
# so a bad release can be rolled back without rebuilding from source.
#
# Usage (run from /opt/paperclip on the VPS):
#   ./deploy/vps-deploy.sh              # deploy :latest (default, what CI calls)
#   ./deploy/vps-deploy.sh <sha>        # deploy a specific commit-SHA-tagged image
#   ./deploy/vps-deploy.sh previous     # roll back to the last tag before the current one
#
# Requires GHCR_PAT and GHCR_USER in the environment (CI passes these over SSH;
# for a manual run, export them yourself first).
set -euo pipefail

cd "$(dirname "$0")/.."

TAG="${1:-latest}"
HISTORY_FILE=".deploy-history"

if [ "$TAG" = "previous" ]; then
  if [ ! -f "$HISTORY_FILE" ] || [ "$(wc -l < "$HISTORY_FILE")" -lt 2 ]; then
    echo "No previous deploy recorded to roll back to." >&2
    exit 1
  fi
  TAG="$(tail -n 2 "$HISTORY_FILE" | head -n 1 | awk '{print $2}')"
  echo "Rolling back to previously recorded tag: $TAG"
fi

export PAPERCLIP_IMAGE_TAG="$TAG"

: "${GHCR_PAT:?GHCR_PAT must be set}"
: "${GHCR_USER:?GHCR_USER must be set}"
echo "$GHCR_PAT" | docker login ghcr.io -u "$GHCR_USER" --password-stdin

docker compose -f docker-compose.yml pull
docker compose -f docker-compose.yml up -d --remove-orphans

echo "$(date -u +%Y-%m-%dT%H:%M:%SZ) $TAG" >> "$HISTORY_FILE"
echo "Deployed ghcr.io/robertteah/paperclip:$TAG"
