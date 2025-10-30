# 📱 UI & Mobile Testing Automation Demo

_(WebdriverIO + Appium + GitHub Actions)_

[![WebdriverIO Tests](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml/badge.svg)](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml)

---

## 🇷🇺 Описание

Портфолио-проект тестировщика, демонстрирующий:

- автоматизацию **веб- и мобильных UI-тестов** с помощью **WebdriverIO** и **Appium**
- использование архитектуры **Page Object Model (Screen Objects)** для структурирования тестов
- настройку **CI/CD-интеграции** через **GitHub Actions**
- выполнение **end-to-end сценариев** в браузере и на мобильных устройствах
- навыки проектирования, написания и запуска UI-тестов
- деплой тестового проекта на **GitHub Pages**

📂 Репозиторий показывает реальные сценарии выполнения UI и мобильных тестов при каждом `push`.  
🔗 **Результаты последних запусков:**  
👉 [Run WebdriverIO Tests — GitHub Actions](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml)

🌐 **Демонстрация интерфейса:**  
👉 [ui_m_wd (GitHub Pages)](https://ja777mail.github.io/ui_m_wd/)

---

## 🇬🇧 Description

Portfolio project demonstrating tester’s practical skills in:

- **UI and Mobile automation** using **WebdriverIO** + **Appium**
- applying the **Page Object Model (Screen Objects)** design pattern for scalable test structure
- Continuous integration setup with **GitHub Actions**
- Cross-platform **end-to-end testing** for web and mobile
- Designing, maintaining, and executing automated test suites
- Deploying demo test projects via **GitHub Pages**

📂 Repository runs real automated tests (web + mobile) on every commit.  
🔗 **Latest test results:**  
👉 [Run WebdriverIO Tests — GitHub Actions](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml)

🌐 **Live Demo:**  
👉 [ui_m_wd (GitHub Pages)](https://ja777mail.github.io/ui_m_wd/)

---

## ⚙️ Tech Stack

| Tool                    | Description                                       | Link                                                                       |
| ----------------------- | ------------------------------------------------- | -------------------------------------------------------------------------- |
| 🧭 **WebdriverIO**      | Framework for web and mobile UI automation        | [webdriver.io](https://webdriver.io/)                                      |
| 📱 **Appium**           | Mobile automation framework for Android & iOS     | [appium.io](https://appium.io/)                                            |
| ⚙️ **GitHub Actions**   | Continuous Integration (CI/CD) automation         | [docs.github.com/actions](https://docs.github.com/actions)                 |
| 💻 **Node.js**          | JavaScript runtime for WebdriverIO and automation | [nodejs.org](https://nodejs.org/)                                          |
| 🤖 **Android Emulator** | Virtual device for running Android UI tests       | [developer.android.com](https://developer.android.com/studio/run/emulator) |
| 🌐 **GitHub Pages**     | Static hosting for project demos                  | [pages.github.com](https://pages.github.com/)                              |

---

## 🧰 Конфигурация окружения (Environment Setup)

Тестовое окружение включает в себя:

1. **Appium Server**

   - Запускается локально или в CI-среде
   - Обеспечивает взаимодействие между тестами и мобильным устройством
   - Использует стандартный порт `4723`

2. **Android Emulator**

   - Настраивается через Android SDK / AVD Manager
   - Используется для тестирования Android-приложений
   - Может быть подключён как виртуальное устройство (`emulator-5554`) или реальное устройство через `adb`

3. **WebdriverIO Configuration**

   - Конфигурационный файл `wdio.conf.js` управляет запуском тестов
   - Поддерживает профили для браузерных и мобильных тестов
   - Использует паттерн **Page Object Model (Screen Objects)** для организации логики экранов
   - Логирование и отчётность доступны в консоли и GitHub Actions

4. **CI/CD Integration**
   - Каждый `push` в репозиторий активирует GitHub Actions workflow
   - Workflow автоматически:
     - устанавливает зависимости
     - запускает Appium Server
     - выполняет тесты WebdriverIO
     - сохраняет результаты в логи

---

### 🧩 Автоматический запуск тестов

Каждый новый `commit` или `push` инициирует выполнение **WebdriverIO + Appium** сценариев,  
проверяющих как **веб-интерфейсы**, так и **мобильные приложения (эмуляторы/реальные устройства)**.  
Результаты доступны в разделе **GitHub Actions**.

---

📌 **Проект создан в учебных и демонстрационных целях для портфолио.**

## ⭐ QA Engineer: Alisher
