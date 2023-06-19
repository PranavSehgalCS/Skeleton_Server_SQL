#!/bin/sh

osascript -e 'tell application "Terminal" to do script "cd Desktop/P3F/Skeleton_Server_SQL/Project_API; mvn compile exec:java;mvn compile exec:java;"'

sleep 10;
open  -a "Postgres"
