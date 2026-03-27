# Cheat-Inspector

A lightweight desktop application built with Electron for auditing the file system for traces of third-party software (cheats). The tool is designed with a strict black-and-white technical interface using Ubuntu Mono and Tailwind CSS.

---

## English Description

### Overview

Cheat-Inspector provides a quick way to scan critical system directories for specific folder names and files associated with game modifications and external tools. It features a non-resizable, fixed-layout UI for a consistent administrative experience.

### Key Features

- **Automated Scanning**: Checks high-priority paths including AppData, Local Temp, and Rockstar Games documents.
- **Signature-Based Detection**: Uses a predefined list of signatures to identify known directories.
- **Interactive Results**: Found paths are displayed in an interactive list; clicking an item opens the directory in the system explorer.
- **Modern Technical UI**: Built with a monospace aesthetic, featuring smooth CSS animations and a "Dark Tech" color palette.

### Technical Stack

- **Framework**: Electron
- **Styling**: Tailwind CSS
- **Typography**: Ubuntu Mono
- **Runtime**: Node.js

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Execute `npm start` to launch the application.

---

## Русское описание

### Обзор

Cheat-Inspector - это легковесное десктопное приложение на базе Electron для аудита файловой системы на наличие следов стороннего программного обеспечения (читов). Инструмент выполнен в строгом черно-белом техническом стиле с использованием шрифтов Ubuntu Mono и Tailwind CSS.

### Основные функции

- **Автоматическое сканирование**: Проверка приоритетных путей, включая AppData, Local Temp и документы Rockstar Games.
- **Обнаружение по сигнатурам**: Использование предустановленного списка имен для идентификации известных директорий.
- **Интерактивные результаты**: Найденные пути отображаются в виде списка; клик по элементу открывает директорию в проводнике Windows.
- **Современный технический интерфейс**: Моноширинная эстетика, плавные CSS-анимации и цветовая палитра "Dark Tech".

### Технологический стек

- **Фреймворк**: Electron
- **Стилизация**: Tailwind CSS
- **Типографика**: Ubuntu Mono
- **Среда выполнения**: Node.js

### Установка

1. Клонируйте репозиторий.
2. Выполните `npm install` для установки зависимостей.
3. Выполните `npm start` для запуска приложения.

---

## Project Structure / Структура проекта

- `main.js`: Main process configuration (window settings, IPC handlers).
- `preload.js`: Bridge for secure communication between the renderer and system APIs.
- `src/modules/check_folders.js`: Backend logic for directory scanning and signature matching.
- `src/html/main.html`: Frontend layout and Tailwind configuration.
- `js/renderer.js`: UI logic, event handling, and dynamic list rendering.

## Disclaimer / Отказ от ответственности

This tool is intended for personal auditing or administrative purposes. The author is not responsible for the results or any actions taken based on the scan reports.

Данный инструмент предназначен для личного аудита или административных целей. Автор не несет ответственности за результаты или любые действия, предпринятые на основании отчетов сканирования.
