@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Ehliyet Kocu: http://127.0.0.1:8765
echo Bu siyah pencereyi kapatirsan uygulama da kapanir.
start "" http://127.0.0.1:8765
py -m http.server 8765
if errorlevel 1 python -m http.server 8765
if errorlevel 1 (
  echo Python yok. Sayfa dogrudan aciliyor.
  start "" "%~dp0index.html"
  pause
)
