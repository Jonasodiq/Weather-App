# Weather-App

## Appens syfte:

**Appen är utformad för att ge användaren aktuell väderinformation för en vald stad. Den använder OpenWeatherMap API för att hämta väderdata och visar resultatet i ett användarvänligt gränssnitt.**

## Funktionalitet:

- 1. **Sökfunktion:** Användaren kan skriva in namnet på en stad i ett textinmatningsfält och trycka på sökknappen eller trycka på "Enter"-tangenten för att starta sökningen.

- 2. **Hämta väderdata:** När användaren initierar en sökning hämtar appen väderdata från OpenWeatherMap API baserat på den angivna staden. API-nyckeln används för att autentisera förfrågan.

- 3. **Visa väderinformation:** Appen visar väderinformationen i ett gränssnitt som inkluderar en bild som representerar väderförhållandet (till exempel soligt, regnigt eller snöigt), temperaturen, en beskrivning av väderförhållandet, luftfuktighet och vindhastighet.

- 4. **Felhantering:** Om sökningen inte ger några resultat, till exempel om staden inte hittades, visar appen en felmeddelande och döljer väderinformationen.

**Användning:** Användaren kan använda appen för att kontrollera vädret i olika städer genom att skriva in stadens namn och sedan se resultatet på skärmen.

**Teknisk beskrivning:** Appen är implementerad med hjälp av HTML, CSS och JavaScript. Den använder Fetch API för att kommunicera med OpenWeatherMap-tjänsten och DOM-manipulation för att uppdatera gränssnittet med väderinformationen.
