@echo off
REM Opens Windows Terminal with tabs for HeirDock development
set "DIR=C:\Users\tresp\dev\heirdock\heirdock-website"

wt -w 0 -d "%DIR%" pwsh -NoExit -Command "%DIR%\frontend_start.bat" ^
 ; new-tab -d "%DIR%" "C:\Program Files\PowerShell\7\pwsh.exe" ^
 ; new-tab -d "%DIR%" pwsh -NoExit -Command "claude"
