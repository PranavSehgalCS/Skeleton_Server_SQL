#!/bin/sh
#///////////////////////////////////////////////////////////////////////////////////////////////////////
#   FILE : Run_Servers.sh
#   AUTHOR : Pranav Sehgal
#   DESCRIPTION :   OPENS Postgress via Terminal so you can start DB
#                   OPENS a Terminal window and launches backend using mvn compile exec:java;
#                   OPENS a Terminal window and launches fronted using ng serve --open;
#///////////////////////////////////////////////////////////////////////////////////////////////////////
open  -a "Postgres"
sleep 10;

osascript -e 'tell application "Terminal" to do script "cd Desktop/P3F/Skeleton_Server_SQL/Project_API; mvn compile exec:java;mvn compile exec:java;"'

osascript -e 'tell application "Terminal" to do script "cd Desktop/P3F/Skeleton_Server_SQL/Project_UI/angular-workspace; ng serve --open;"'

	