#!/bin/bash
echo "Run Note_App"
cd Backend
npm i
cd ..
cd Frontend
cd Note-App
npm i
cd ..
cd ..
sh Backend.sh

echo "Running app"