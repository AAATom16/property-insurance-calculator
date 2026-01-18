# Kalkulačka pojištění majetku - petrisk

Moderní multi-step webová aplikace pro sjednání pojištění majetku podle Figma designu.

## Technologie

- **Next.js 14** - React framework s App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Moderní styling
- **React Hooks** - State management

## Instalace

```bash
npm install
```

## Spuštění vývojového serveru

```bash
npm run dev
```

Otevřete [http://localhost:3000](http://localhost:3000) ve vašem prohlížeči.

## Struktura aplikace

Aplikace obsahuje 4 kroky pro sjednání pojištění:

### Krok 1: Základní údaje
- Náhrada smlouvy
- Informace o pojistníkovi (typ osoby, rodné číslo, jméno, adresa, kontakt)
- Základní údaje k nemovitosti (adresa, vztah, typ nemovitosti, vlastnictví)

### Krok 2: Detail nemovitosti
- Výběr typu pojištění (Stavba / Domácnost)
- Parametry bytu (dispozice, plocha, číslo bytu)
- Kvalita a stav bytu
- Další vlastnosti (balkon, terasa, garáž, výtah, parkování)
- Hodnota nemovitosti

### Krok 3: Kalkulace
- Zobrazení nabídek od různých pojišťoven (CSOB, CPP, Kooperativa)
- Možnosti připojištění s toggle switchy
- Porovnání všech nabídek (bar chart)
- Výběr nabídky a pokračování

### Krok 4: Shrnutí
- Přehled vybrané nabídky
- Záznam z jednání (checklisty)
- Způsob uzavření smlouvy
- Frekvence platby pojistného
- Finální sjednání pojištění

## Struktura projektu

```
├── app/
│   ├── layout.tsx      # Hlavní layout
│   ├── page.tsx        # Hlavní stránka
│   └── globals.css     # Globální styly
├── components/
│   ├── MultiStepInsuranceForm.tsx  # Hlavní komponenta s řízením kroků
│   ├── ProgressIndicator.tsx        # Progress indikátor
│   └── steps/
│       ├── Step1BasicInfo.tsx       # Krok 1: Základní údaje
│       ├── Step2PropertyDetails.tsx # Krok 2: Detail nemovitosti
│       ├── Step3Calculation.tsx     # Krok 3: Kalkulace
│       └── Step4Summary.tsx         # Krok 4: Shrnutí
└── types/
    └── formData.ts     # TypeScript typy pro formulářová data
```

## Funkce

- ✅ Multi-step formulář s progress indikátorem
- ✅ Responzivní design
- ✅ Validace formulářů
- ✅ Správa stavu napříč kroky
- ✅ Moderní UI podle Figma designu
- ✅ Toggle switchy pro připojištění
- ✅ Porovnání nabídek pojišťoven
- ✅ Kompletní workflow pro sjednání pojištění

## Build pro produkci

```bash
npm run build
npm start
```

## Design

Aplikace je navržena podle Figma designu s:
- Purple/Orange gradient banner
- Clean white cards
- Purple accent colors
- Green highlights pro dokončené kroky
- Modern toggle switches
- Responzivní layout
