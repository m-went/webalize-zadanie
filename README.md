## Payload CMS Website Backend – Zadanie Rekrutacyjne

Część serwerowa przygotowana dla makiety strony w Figmie, zbudowana w oparciu o Payload CMS 3.0.

## Tech Stack

- **Framework:** [Payload CMS 3.0]
- **Frontend:** Next.js 15+ (App Router)
- **Baza danych:** PostgreSQL

## Instalacja i Uruchomienie

1. **Klonowanie repozytorium:**
   git clone https://github.com/m-went/webalize-zadanie
   cd webalize-zadanie

2. **Instalacja zależności:**
   npm install

Konfiguracja zmiennych środowiskowych:
Stwórz plik .env w głównym katalogu.

2. **Uruchomienie w trybie deweloperskim:**
   npm run dev

Panel Administratora:
Dostępny pod adresem: http://localhost:3000/admin

3. **Struktura Projektu:**

src/app/(payload) – Konfiguracja i endpointy panelu administracyjnego.

src/app/(frontend)/[locale] – Przygotowane pod obsługę internacjonalizacji

src/collections – Definicje modeli danych (Pages, News, Categories, Media, Users).

src/blocks – Konfiguracja pól i układów dla bloków wizualnych.

src/globals – Konfiguracja elementów stałych (Header, Footer).

src/middleware.ts – Middleware routingu obsługujący internacjonalizację.

src/utilities – Helpery m.in. do automatycznego formatowania slugów.

Zadanie przygotowane na potrzeby procesu rekrutacyjnego Webalize.
