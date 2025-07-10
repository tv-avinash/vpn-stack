#!/bin/bash

# === Config ===
PEER_NAME=$1
WG_CONTAINER="wireguard"

# === Check name ===
if [ -z "$PEER_NAME" ]; then
  echo "Usage: $0 <peer-name>"
  exit 1
fi

# === Add peer ===
docker exec -it $WG_CONTAINER /app/wireguard.sh add $PEER_NAME

# === Show config ===
echo "Peer $PEER_NAME added."
echo "Config file location: ./config/peer_$PEER_NAME/peer_$PEER_NAME.conf"

# === Generate QR code ===
docker exec -it $WG_CONTAINER qrencode -t ansiutf8 < ./config/peer_$PEER_NAME/peer_$PEER_NAME.conf

# === Optional: Output raw text ===
echo -e "\n--- Config Content ---"
cat ./config/peer_$PEER_NAME/peer_$PEER_NAME.conf
