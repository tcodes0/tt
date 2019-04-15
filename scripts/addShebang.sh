#! /usr/bin/env bash

mv dist/index.js dist/index.bak.js
echo -e '#! /usr/bin/env node\n' > dist/index.js
cat dist/index.bak.js >> dist/index.js
rm -f dist/index.bak.js
