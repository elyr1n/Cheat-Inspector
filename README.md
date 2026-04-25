# Cheat-Inspector

A lightweight desktop application built with Electron for auditing the file system for traces of third-party software (cheats). The tool features a strict monospace technical interface using Ubuntu Mono and Tailwind CSS.

---

## English Description

### Overview

Cheat-Inspector provides a fast way to scan critical system directories for specific folder names and files associated with game modifications and external tools. The application has a **fixed, non-resizable layout** for a consistent administrative experience.

### Key Features

- **Automated Scanning**: Checks predefined high-priority paths including:
  - `Documents/Rockstar Games/GTA V`
  - `AppData/Local/Temp`, `AppData/Roaming`, `AppData/Local`
  - `C:\Program Files` and `C:\Program Files (x86)`
- **Signature-Based Detection**: Uses a predefined signature list (`ret9`, `amph`, `nightfall`, `hydrogen`, `loader`, `opium`, `orehware`, `unicore`, etc.) to identify known cheat directories.
- **Quick Access Buttons**: One-click navigation to critical system locations:
  - **Recent** – user's Recent files
  - **CrashDumps** – AppData\Local\CrashDumps
  - **Prefetch** – C:\Windows\Prefetch
  - **Recycles** – C:\$Recycle.Bin and D:\$Recycle.Bin
- **Interactive Results**: Detected paths are displayed in an animated list; clicking any item opens the directory in system explorer.
- **Error Handling**: Shows a dialog if a folder does not exist when trying to open it.
- **Modern Technical UI**: Dark monospace design with smooth CSS animations and a "Dark Tech" color palette.

### Technical Stack

- **Framework**: Electron
- **Styling**: Tailwind CSS
- **Typography**: Ubuntu Mono
- **Runtime**: Node.js

---

## Русское описание

### Обзор

**Cheat-Inspector** — это легковесное десктопное приложение на базе Electron для аудита файловой системы на наличие следов стороннего программного обеспечения (читов). Инструмент выполнен в строгом моноширинном техническом стиле с использованием Ubuntu Mono и Tailwind CSS.

### Основные функции

- **Автоматическое сканирование**  
  Проверяет приоритетные пути:
  - `Documents/Rockstar Games/GTA V`
  - `AppData/Local/Temp`, `AppData/Roaming`, `AppData/Local`
  - `C:\Program Files` и `C:\Program Files (x86)`

- **Обнаружение по сигнатурам**  
  Использует список сигнатур: `ret9`, `amph`, `nightfall`, `hydrogen`, `loader`, `opium`, `orehware`, `unicore` и другие.

- **Кнопки быстрого доступа**  
  Один клик для открытия важных системных папок:
  - **Recent** – недавние файлы пользователя
  - **CrashDumps** – `AppData\Local\CrashDumps`
  - **Prefetch** – `C:\Windows\Prefetch`
  - **Recycles** – `C:\$Recycle.Bin` и `D:\$Recycle.Bin`

- **Интерактивные результаты**  
  Найденные пути отображаются в анимированном списке; клик по элементу открывает папку в проводнике.

- **Обработка ошибок**  
  При попытке открыть несуществующую папку показывается диалоговое окно с ошибкой.

- **Современный технический интерфейс**  
  Тёмная моноширинная эстетика с плавными CSS-анимациями и палитрой "Dark Tech".

### Технологический стек

- **Фреймворк**: Electron
- **Стилизация**: Tailwind CSS
- **Типографика**: Ubuntu Mono
- **Среда выполнения**: Node.j

---

## Project Structure / Структура проекта

```
Cheat-Inspector/
├── main.js                 # Main process (window settings, IPC handlers)
├── preload.js              # Secure bridge between renderer and Node.js APIs
├── package.json            # Dependencies and build scripts
├── src/
│   ├── modules/
│   │   └── check_folders.js   # Scanning logic & signature matching
│   ├── html/
│   │   └── main.html          # Frontend layout (Tailwind + Ubuntu Mono)
│   └── js/
│       └── renderer.js        # UI logic, events, dynamic list rendering
└── icon.ico                # Application icon
```

## Build Configuration / Конфигурация сборки

The project uses `electron-builder` for packaging. The build output is configured in `package.json`:

```json
"build": {
  "appId": "com.cheat.inspector",
  "productName": "Cheat-Inspector",
  "directories": {
    "output": "dist"
  },
  "win": {
    "target": "portable",
    "icon": "icon.ico"
  }
}
```

---

## Disclaimer / Отказ от ответственности

**English**  
This tool is intended for personal auditing or administrative purposes. The author is not responsible for any actions taken based on the scan reports or for any misuse of the application.

**Русский**  
Данный инструмент предназначен для личного аудита или административных целей. Автор не несёт ответственности за результаты сканирования или любые действия, предпринятые на основании отчётов.
