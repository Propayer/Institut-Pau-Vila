@echo off
powershell -command "$wshell = New-Object -ComObject wscript.shell; $wshell.SendKeys('^({d})');"
timeout /t 1 >nul
start notepad
timeout /t 1 >nul
powershell -command "$wshell = New-Object -ComObject wscript.shell; $wshell.AppActivate('Untitled - Notepad'); $wshell.SendKeys('Y'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('o'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('u'); Start-Sleep -Milliseconds 100; $wshell.SendKeys(''''); Start-Sleep -Milliseconds 100; $wshell.SendKeys('r'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('e'); Start-Sleep -Milliseconds 500; $wshell.SendKeys(' '); Start-Sleep -Milliseconds 100; $wshell.SendKeys('s'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('o'); Start-Sleep -Milliseconds 500; $wshell.SendKeys(' '); Start-Sleep -Milliseconds 100; $wshell.SendKeys('f'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('u'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('c'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('k'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('e'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('d'); Start-Sleep -Milliseconds 500; $wshell.SendKeys(' '); Start-Sleep -Milliseconds 100; $wshell.SendKeys('u'); Start-Sleep -Milliseconds 100; $wshell.SendKeys('p'); Start-Sleep -Milliseconds 250; $wshell.SendKeys('.'); Start-Sleep -Milliseconds 250; $wshell.SendKeys('.'); Start-Sleep -Milliseconds 250; $wshell.SendKeys('.');"
timeout /t 1 >nul
powershell -command "$wshell.SendKeys('%{F4}'); Start-Sleep -Milliseconds 500; $wshell.SendKeys('{TAB}'); Start-Sleep -Milliseconds 500; $wshell.SendKeys('{ENTER}');"
shutdown /l

