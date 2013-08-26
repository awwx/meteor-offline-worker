#!/bin/bash
set -e -v

rm -rf tests
mkdir tests
meteor bundle $1 tests/worker.tar.gz
(cd tests; tar -x -z -f worker.tar.gz)
coffee build.coffee
