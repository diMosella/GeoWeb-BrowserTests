echo -e "\n** GeoWeb test suite for regression and cross browser tests  **\n"
if [ $# -gt 0 ]; then
    echo -e "Run with $# arguments '$@'\n"
else
    echo -e "Run without arguments. Will fallback to default browser...\n"
fi
node ./src/testSuite-runner.js
