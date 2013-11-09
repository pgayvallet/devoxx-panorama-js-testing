#!/bin/bash

#--includes=foo.js,bar.js \
#--pre=pre-test.js \
#--post=post-test.js \
# --remote-debugger-port=9000

casperjs test --includes=includes.js \
              --direct \
              --log-level=warning \
              --fail-fast \
              --xunit=xunit.xml \
              ./tests
