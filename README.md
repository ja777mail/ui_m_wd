# 📱 Mobile UI Testing Automation Demo

_(WebdriverIO + Appium + BrowserStack + GitHub Actions)_

[![WebdriverIO Tests](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml/badge.svg)](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml)

---

## 🇷🇺 Описание

Портфолио-проект тестировщика, демонстрирующий:

- автоматизацию **мобильных UI-тестов** с помощью **WebdriverIO** и **Appium**
- использование **BrowserStack** для запуска тестов на **реальных мобильных устройствах**
- применение архитектуры **Page Object Model (Screen Objects)** для структурирования тестов
- настройку **CI/CD-интеграции** через **GitHub Actions**
- выполнение **end-to-end сценариев** в облачном тестовом окружении
- навыки проектирования, написания и анализа UI-тестов

📂 Репозиторий показывает реальные сценарии выполнения тестов мобильного андроид-приложения при каждом `push`.  
🔗 **Результаты последних запусков:**  
👉 [Run WebdriverIO Tests — GitHub Actions](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml)

📊 **Отчёты о прохождении тестов доступны в [BrowserStack](https://www.browserstack.com/app-automate)**  
_(доступ к отчётам через учётную запись BrowserStack)_

---

## 🇬🇧 Description

Portfolio project demonstrating tester’s practical skills in:

- **Mobile UI automation** using **WebdriverIO** + **Appium**
- running tests on **real mobile devices** via **BrowserStack**
- applying the **Page Object Model (Screen Objects)** design pattern for maintainable test structure
- Continuous integration setup with **GitHub Actions**
- executing **end-to-end test scenarios** in a cloud environment
- analyzing and monitoring test runs in BrowserStack

📂 Repository runs automated test suites for mobile apps on every commit.  
🔗 **Latest test results:**  
👉 [Run WebdriverIO Tests — GitHub Actions](https://github.com/ja777mail/ui_m_wd/actions/workflows/ci_webdriver.yml)

📊 **Test execution reports are available in [BrowserStack](https://www.browserstack.com/app-automate)**  
_(accessible via BrowserStack account)_

---

## ⚙️ Tech Stack

| Tool                     | Description                                       | Link                                                                   |
| ------------------------ | ------------------------------------------------- | ---------------------------------------------------------------------- |
| 🧭 **WebdriverIO**       | Framework for web and mobile UI automation        | [webdriver.io](https://webdriver.io/)                                  |
| 📱 **Appium**            | Mobile automation framework for Android & iOS     | [appium.io](https://appium.io/)                                        |
| ☁️ **BrowserStack**      | Cloud service for real device and browser testing | [browserstack.com](https://www.browserstack.com/app-automate)          |
| ⚙️ **GitHub Actions**    | Continuous Integration (CI/CD) automation         | [docs.github.com/actions](https://docs.github.com/actions)             |
| 💻 **Node.js**           | JavaScript runtime for WebdriverIO and automation | [nodejs.org](https://nodejs.org/)                                      |
| 📄 **Page Object Model** | Design pattern for maintainable test architecture | [webdriver.io/docs/pageobjects](https://webdriver.io/docs/pageobjects) |

---

## 🧰 Конфигурация окружения (Environment Setup)

Тестовое окружение включает в себя:

1. **BrowserStack App Automate**

   - Выполняет тесты на реальных Android и iOS устройствах
   - Поддерживает интеграцию с Appium и WebdriverIO
   - Отчёты, видео, скриншоты и логи доступны в BrowserStack Dashboard

2. **WebdriverIO Configuration**

   - Конфигурационный файл `wdio.android.bs.conf.js` управляет запуском тестов
   - Использует **Screen Objects** для организации логики экранов
   - Настройки позволяют удобно переключаться между локальными и облачными тестами

3. **CI/CD Integration**

   - Каждый `push` активирует GitHub Actions workflow
   - Workflow:
     - устанавливает зависимости
     - выполняет тесты WebdriverIO на BrowserStack
     - сохраняет результаты и логи

---

### 🧩 Автоматический запуск тестов

Каждый новый `commit` или `push` инициирует выполнение **WebdriverIO + Appium** тестов  
в **BrowserStack**, где результаты включают:

- видео-трейсы прохождения сценариев
- логи устройств
- скриншоты шагов теста

Результаты также отображаются в **GitHub Actions**.

---

📌 **Проект создан в учебных и демонстрационных целях для портфолио.**

## ⭐ QA Engineer: Alisher
