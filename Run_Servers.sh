#!/bin/sh

open  -a "Postgres"
sleep 10;

osascript -e 'tell application "Terminal" to do script "cd Desktop/P3F/Skeleton_Server_SQL/Project_API; mvn compile exec:java;mvn compile exec:java;"'

osascript -e 'tell application "Terminal" to do script "cd Desktop/P3F/Skeleton_Server_SQL/Project_UI/angular-workspace; ng serve --open;"'

	