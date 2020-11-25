import { usePress } from "@react-aria/interactions";
import { isSameDay, isToday } from "date-fns";
import { useDateFormatter, useLocale, useMessageFormatter } from "@react-aria/i18n";
import { useRef, useMemo, useEffect } from "react";
import { filterDOMProps, mergeProps, useId, useLabels, useUpdateEffect } from "@react-aria/utils";
import { announce } from "@react-aria/live-announcer";
import _babelRuntimeHelpersEsmExtends from "@babel/runtime/helpers/esm/extends";
import _babelRuntimeHelpersEsmInteropRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ar-AE.json
var $b3d1873a10b51c61e0fe53054ebdeb$exports = {};
$b3d1873a10b51c61e0fe53054ebdeb$exports = JSON.parse("{\"dateSelected\":\"تم تحديد {date, date, full}\",\"finishRangeSelectionPrompt\":\"انقر لإنهاء عملية تحديد نطاق التاريخ\",\"next\":\"التالي\",\"previous\":\"السابق\",\"selectedDateDescription\":\"التاريخ المحدد: {date, date, full}\",\"selectedRangeDescription\":\"النطاق المحدد: {start, date, long} إلى {end, date, long}\",\"startRangeSelectionPrompt\":\"انقر لبدء عملية تحديد نطاق التاريخ\",\"todayDate\":\"اليوم، {date, date, full}\",\"todayDateSelected\":\"اليوم، تم تحديد {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/bg-BG.json
var $d270120dd3675c3f0f2f5207baa387d6$exports = {};
$d270120dd3675c3f0f2f5207baa387d6$exports = JSON.parse("{\"dateSelected\":\"избрани {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натиснете, за да довършите избора на времеви интервал\",\"next\":\"Напред\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Избрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Избран интервал: от {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натиснете, за да пристъпите към избора на времеви интервал\",\"todayDate\":\"Днес {date, date, full}\",\"todayDateSelected\":\"Днес са избрани {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/cs-CZ.json
var $f2859539a632d104d935b1f8d79d34$exports = {};
$f2859539a632d104d935b1f8d79d34$exports = JSON.parse("{\"previous\":\"Předchozí\",\"next\":\"Další\",\"selectedDateDescription\":\"Vybrané datum: {date, date, full}\",\"selectedRangeDescription\":\"Vybraný rozsah: {start, date, long} až {end, date, long}\",\"todayDate\":\"Dnes, {date, date, full}\",\"todayDateSelected\":\"Dnes je vybráno: {date, date, full}\",\"dateSelected\":\"Vybráno: {date, date, full}\",\"startRangeSelectionPrompt\":\"Kliknutím zahájíte výběr rozsahu dat\",\"finishRangeSelectionPrompt\":\"Klepnutím dokončíte výběr rozsahu dat\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/da-DK.json
var $a6b461c9add3e239a7f9688a896f$exports = {};
$a6b461c9add3e239a7f9688a896f$exports = JSON.parse("{\"previous\":\"Foregående\",\"next\":\"Næste\",\"selectedDateDescription\":\"Valgte dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgte datointerval: {start, date, long} til {end, date, long}\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\",\"dateSelected\":\"{date, date, full} valgt\",\"startRangeSelectionPrompt\":\"Klik for at starte valg af datointerval\",\"finishRangeSelectionPrompt\":\"Klik for at afslutte valg af datointerval\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/de-DE.json
var $ecb7bac46525204a5a0ba5e9b90678f$exports = {};
$ecb7bac46525204a5a0ba5e9b90678f$exports = JSON.parse("{\"previous\":\"Zurück\",\"next\":\"Weiter\",\"selectedDateDescription\":\"Ausgewähltes Datum: {date, date, full}\",\"selectedRangeDescription\":\"Ausgewählte Zeitraum: {start, date, long} bis {end, date, long}\",\"todayDate\":\"Heute, {date, date, full}\",\"todayDateSelected\":\"Heute, {date, date, full} ausgewählt\",\"dateSelected\":\"{date, date, full} ausgewählt\",\"startRangeSelectionPrompt\":\"Klicken Sie, um den Datumsbereich auszuwählen\",\"finishRangeSelectionPrompt\":\"Klicken Sie, um den Datumsbereich zu beenden\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/el-GR.json
var $c8d883b68b00e9f39ef71f6038c8e9ba$exports = {};
$c8d883b68b00e9f39ef71f6038c8e9ba$exports = JSON.parse("{\"dateSelected\":\"Επιλέχτηκε {date, date, full}\",\"finishRangeSelectionPrompt\":\"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών\",\"next\":\"Επόμενο\",\"previous\":\"Προηγούμενο\",\"selectedDateDescription\":\"Επιλεγμένη ημερομηνία: {date, date, full}\",\"selectedRangeDescription\":\"Επιλεγμένο εύρος: {start, date, long} έως {end, date, long}\",\"startRangeSelectionPrompt\":\"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών\",\"todayDate\":\"Σήμερα, {date, date, full}\",\"todayDateSelected\":\"Σήμερα, επιλέχτηκε {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/en-US.json
var $ac06706e559d76298edf15cb628964a3$exports = {};
$ac06706e559d76298edf15cb628964a3$exports = JSON.parse("{\"previous\":\"Previous\",\"next\":\"Next\",\"selectedDateDescription\":\"Selected Date: {date, date, full}\",\"selectedRangeDescription\":\"Selected Range: {start, date, long} to {end, date, long}\",\"todayDate\":\"Today, {date, date, full}\",\"todayDateSelected\":\"Today, {date, date, full} selected\",\"dateSelected\":\"{date, date, full} selected\",\"startRangeSelectionPrompt\":\"Click to start selecting date range\",\"finishRangeSelectionPrompt\":\"Click to finish selecting date range\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/es-ES.json
var $f1f132a4617eec58dc48e2c3f9a$exports = {};
$f1f132a4617eec58dc48e2c3f9a$exports = JSON.parse("{\"previous\":\"Anterior\",\"next\":\"Siguiente\",\"selectedDateDescription\":\"Fecha seleccionada: {date, date, full}\",\"selectedRangeDescription\":\"Intervalo de fechas seleccionado: {start, date, long} a {end, date, long}\",\"todayDate\":\"Hoy, {date, date, full}\",\"todayDateSelected\":\"Hoy, {date, date, full} seleccionados\",\"dateSelected\":\"{date, date, full} seleccionados\",\"startRangeSelectionPrompt\":\"Haga clic para comenzar a seleccionar el rango de fechas\",\"finishRangeSelectionPrompt\":\"Haga clic para terminar de seleccionar el rango de fechas\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/et-EE.json
var $a5cb449787362ba2de4e4924f88b$exports = {};
$a5cb449787362ba2de4e4924f88b$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valitud\",\"finishRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimise lõpetamiseks\",\"next\":\"Järgmine\",\"previous\":\"Eelmine\",\"selectedDateDescription\":\"Valitud kuupäev: {date, date, full}\",\"selectedRangeDescription\":\"Valitud vahemik: {start, date, long} kuni {end, date, long}\",\"startRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimiseks\",\"todayDate\":\"Täna {date, date, full}\",\"todayDateSelected\":\"Täna {date, date, full} valitud\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/fi-FI.json
var $a13eb2ade8e373fd2bc52082$exports = {};
$a13eb2ade8e373fd2bc52082$exports = JSON.parse("{\"previous\":\"Edellinen\",\"next\":\"Seuraava\",\"selectedDateDescription\":\"Valittu päivämäärä: {date, date, full}\",\"selectedRangeDescription\":\"Valittu päivämääräalue: {start, date, long}-{end, date, long}\",\"todayDate\":\"Tänään, {date, date, full}\",\"todayDateSelected\":\"Tänään, {date, date, full} valittu\",\"dateSelected\":\"{date, date, full} valittu\",\"startRangeSelectionPrompt\":\"Napsauta aloittaaksesi ajan asettamisen\",\"finishRangeSelectionPrompt\":\"Napsauta lopettaaksesi päivämäärän valitsemisen\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/fr-FR.json
var $fed74c7501751e185712ca861bf5e1a3$exports = {};
$fed74c7501751e185712ca861bf5e1a3$exports = JSON.parse("{\"previous\":\"Précédent\",\"next\":\"Suivant\",\"selectedDateDescription\":\"Date sélectionnée: {date, date, full}\",\"selectedRangeDescription\":\"Plage de dates sélectionnée: {start, date, long} au {end, date, long}\",\"todayDate\":\"Aujourd’hui, {date, date, full}\",\"todayDateSelected\":\"Aujourd’hui, sélection de {date, date, full}\",\"dateSelected\":\"Sélection de {date, date, full}\",\"startRangeSelectionPrompt\":\"Cliquez pour commencer à sélectionner la période\",\"finishRangeSelectionPrompt\":\"Cliquez pour terminer la sélection de la période\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/he-IL.json
var $f571638c72ac25246aa6686003de6eef$exports = {};
$f571638c72ac25246aa6686003de6eef$exports = JSON.parse("{\"dateSelected\":\"התאריך {date, date, full} שנבחר\",\"finishRangeSelectionPrompt\":\"חץ כדי לסיים את בחירת טווח התאריכים\",\"next\":\"הבא\",\"previous\":\"הקודם\",\"selectedDateDescription\":\"התאריך שנבחר: {date, date, full}\",\"selectedRangeDescription\":\"הטווח שנבחר: מ-{start, date, long} ועד {end, date, long}\",\"startRangeSelectionPrompt\":\"לחץ כדי להתחיל בבחירת טווח התאריכים\",\"todayDate\":\"היום, {date, date, full}\",\"todayDateSelected\":\"היום, התאריך {date, date, full} שנבחר\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/hr-HR.json
var $a75c5d1428c2b2365d73e03edc3c18d$exports = {};
$a75c5d1428c2b2365d73e03edc3c18d$exports = JSON.parse("{\"dateSelected\":\"Odabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite raspon odabranih datuma\",\"next\":\"Sljedeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Odabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Odabrani raspon: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete raspon odabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, odabran {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/hu-HU.json
var $b0acd367e0ac8f6bcf73c1f7a16b435d$exports = {};
$b0acd367e0ac8f6bcf73c1f7a16b435d$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} kijelölve\",\"finishRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének befejezéséhez\",\"next\":\"Következő\",\"previous\":\"Előző\",\"selectedDateDescription\":\"Kijelölt dátum: {date, date, full}\",\"selectedRangeDescription\":\"Kijelölt tartomány: {start, date, long} – {end, date, long}\",\"startRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének indításához\",\"todayDate\":\"Ma, {date, date, full}\",\"todayDateSelected\":\"Ma, {date, date, full} kijelölve\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/it-IT.json
var $fc4b4136a6738764e9a040f9cd661b$exports = {};
$fc4b4136a6738764e9a040f9cd661b$exports = JSON.parse("{\"previous\":\"Precedente\",\"next\":\"Successivo\",\"selectedDateDescription\":\"Data selezionata: {date, date, full}\",\"selectedRangeDescription\":\"Intervallo di date selezionato: {start, date, long} a {end, date, long}\",\"todayDate\":\"Oggi, {date, date, full}\",\"todayDateSelected\":\"Oggi, {date, date, full} selezionati\",\"dateSelected\":\"{date, date, full} selezionati\",\"startRangeSelectionPrompt\":\"Fai clic per iniziare a selezionare l'intervallo di date\",\"finishRangeSelectionPrompt\":\"Fare clic per terminare la selezione dell'intervallo di date\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ja-JP.json
var $e820e8059e43233b28daa04ff39dc0$exports = {};
$e820e8059e43233b28daa04ff39dc0$exports = JSON.parse("{\"previous\":\"前へ\",\"next\":\"次へ\",\"selectedDateDescription\":\"選択した日付：{date, date, full}\",\"selectedRangeDescription\":\"選択した日付範囲: {start, date, long} ~ {end, date, long}\",\"todayDate\":\"今日、{date, date, full}\",\"todayDateSelected\":\"今日、{date, date, full} が選択されました\",\"dateSelected\":\"{date, date, full} が選択されました\",\"startRangeSelectionPrompt\":\"クリックすると日付範囲が選択されます\",\"finishRangeSelectionPrompt\":\"クリックすると日付範囲の選択が完了します\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ko-KR.json
var $cbde4ca9eba9467e036b5f7ff231225d$exports = {};
$cbde4ca9eba9467e036b5f7ff231225d$exports = JSON.parse("{\"previous\":\"이전으로\",\"next\":\"다음\",\"selectedDateDescription\":\"선택된 날짜 : {date, date, full}\",\"selectedRangeDescription\":\"선택한 기간 : {start, date, long} ~ {end, date, long}\",\"todayDate\":\"현재 {date, date, full}\",\"todayDateSelected\":\"현재 {date, date, full}이(가) 선택됨\",\"dateSelected\":\"{date, date, full}이(가) 선택됨\",\"startRangeSelectionPrompt\":\"기간 선택을 시작하려면 클릭하십시오.\",\"finishRangeSelectionPrompt\":\"날짜 범위 선택을 마치려면 클릭하십시오.\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/lt-LT.json
var $cf816c695d5ed3af1393be09906df9cc$exports = {};
$cf816c695d5ed3af1393be09906df9cc$exports = JSON.parse("{\"dateSelected\":\"Pasirinkta {date, date, full}\",\"finishRangeSelectionPrompt\":\"Spustelėkite, kad baigtumėte pasirinkti datų intervalą\",\"next\":\"Paskesnis\",\"previous\":\"Ankstesnis\",\"selectedDateDescription\":\"Pasirinkta data: {date, date, full}\",\"selectedRangeDescription\":\"Pasirinktas intervalas: nuo {start, date, long} iki {end, date, long}\",\"startRangeSelectionPrompt\":\"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą\",\"todayDate\":\"Šiandien, {date, date, full}\",\"todayDateSelected\":\"Šiandien, pasirinkta {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/lv-LV.json
var $dd3751d90515e59dc9ccc1fe97fa3cf2$exports = {};
$dd3751d90515e59dc9ccc1fe97fa3cf2$exports = JSON.parse("{\"dateSelected\":\"Atlasīts {date, date, full}\",\"finishRangeSelectionPrompt\":\"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi\",\"next\":\"Tālāk\",\"previous\":\"Atpakaļ\",\"selectedDateDescription\":\"Atlasītais datums: {date, date, full}\",\"selectedRangeDescription\":\"Atlasītais diapazons: {start, date, long} līdz {end, date, long}\",\"startRangeSelectionPrompt\":\"Noklikšķiniet, lai sāktu datumu diapazona atlasi\",\"todayDate\":\"Šodiena, {date, date, full}\",\"todayDateSelected\":\"Atlasīta šodiena, {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/nb-NO.json
var $ca83791cb2c2bcaf9ec9bc6cdf5dada$exports = {};
$ca83791cb2c2bcaf9ec9bc6cdf5dada$exports = JSON.parse("{\"previous\":\"Forrige\",\"next\":\"Neste\",\"selectedDateDescription\":\"Valgt dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgte datointervall: {start, date, long} til {end, date, long}\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\",\"dateSelected\":\"{date, date, full} valgt\",\"startRangeSelectionPrompt\":\"Klikk for å starte valg av datoperiode\",\"finishRangeSelectionPrompt\":\"Klikk for å fullføre datoperioden\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/nl-NL.json
var $ae20ff20c3663360f5e0f530b4d3a$exports = {};
$ae20ff20c3663360f5e0f530b4d3a$exports = JSON.parse("{\"previous\":\"Vorige\",\"next\":\"Volgende\",\"selectedDateDescription\":\"Geselecteerde datum: {date, date, full}\",\"selectedRangeDescription\":\"Geselecteerde datumbereik: {start, date, long} tot {end, date, long}\",\"todayDate\":\"Vandaag {date, date, full}\",\"todayDateSelected\":\"Vandaag {date, date, full} geselecteerd\",\"dateSelected\":\"{date, date, full} geselecteerd\",\"startRangeSelectionPrompt\":\"Klik om te beginnen met het selecteren van het datumbereik\",\"finishRangeSelectionPrompt\":\"Klik om het selecteren van het datumbereik te voltooien\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/pl-PL.json
var $ebc67cae7dd114ffff5ac7ea895$exports = {};
$ebc67cae7dd114ffff5ac7ea895$exports = JSON.parse("{\"previous\":\"Wstecz\",\"next\":\"Dalej\",\"selectedDateDescription\":\"Wybrana data: {date, date, full}\",\"selectedRangeDescription\":\"Wybrany zakres dat: {start, date, long} do {end, date, long}\",\"todayDate\":\"Dziś, {date, date, full}\",\"todayDateSelected\":\"Dziś, wybrano {date, date, full}\",\"dateSelected\":\"wybrano {date, date, full}\",\"startRangeSelectionPrompt\":\"Kliknij, aby rozpocząć wybór zakresu dat\",\"finishRangeSelectionPrompt\":\"Kliknij, aby zakończyć wybieranie zakresu dat\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/pt-BR.json
var $c64e56df4203b3b3d07$exports = {};
$c64e56df4203b3b3d07$exports = JSON.parse("{\"previous\":\"Anterior\",\"next\":\"Próximo\",\"selectedDateDescription\":\"Data selecionada: {date, date, full}\",\"selectedRangeDescription\":\"Intervalo de datas selecionado: {start, date, long} para {end, date, long}\",\"todayDate\":\"Hoje, {date, date, full}\",\"todayDateSelected\":\"Hoje, {date, date, full} selecionados\",\"dateSelected\":\"{date, date, full} selecionados\",\"startRangeSelectionPrompt\":\"Clique para começar a selecionar o intervalo de datas\",\"finishRangeSelectionPrompt\":\"Clique para terminar de selecionar o intervalo de datas\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ro-RO.json
var $cfbe9ab4205a731e02558d5bd6dae4b$exports = {};
$cfbe9ab4205a731e02558d5bd6dae4b$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selectată\",\"finishRangeSelectionPrompt\":\"Apăsaţi pentru a finaliza selecţia razei pentru dată\",\"next\":\"Următorul\",\"previous\":\"Înainte\",\"selectedDateDescription\":\"Dată selectată: {date, date, full}\",\"selectedRangeDescription\":\"Selectaţi raza: {start, date, long} la {end, date, long}\",\"startRangeSelectionPrompt\":\"Apăsaţi pentru a începe selecţia razei pentru dată\",\"todayDate\":\"Astăzi, {date, date, full}\",\"todayDateSelected\":\"Dată, {date, date, full} selectată\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ru-RU.json
var $e28d4bd0f24e47931dfe0f4ce5a$exports = {};
$e28d4bd0f24e47931dfe0f4ce5a$exports = JSON.parse("{\"previous\":\"Предыдущий\",\"next\":\"Следующий\",\"selectedDateDescription\":\"Выбранная дата: {date, date, full}\",\"selectedRangeDescription\":\"Выбранный диапазон дат: {start, date, long} до {end, date, long}\",\"todayDate\":\"Сегодня, {date, date, full}\",\"todayDateSelected\":\"Сегодня, {date, date, full}, выбрано\",\"dateSelected\":\"{date, date, full} выбрано\",\"startRangeSelectionPrompt\":\"Нажмите, чтобы начать выбирать диапазон дат.\",\"finishRangeSelectionPrompt\":\"Нажмите, чтобы закончить выбор диапазона дат.\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sk-SK.json
var $f1fa21db7f5bd96e96134309d1cbdad8$exports = {};
$f1fa21db7f5bd96e96134309d1cbdad8$exports = JSON.parse("{\"dateSelected\":\"Vybratý dátum {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výber rozsahu dátumov\",\"next\":\"Nasledujúce\",\"previous\":\"Predchádzajúce\",\"selectedDateDescription\":\"Vybratý dátum: {date, date, full}\",\"selectedRangeDescription\":\"Vybratý rozsah dátumov: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknutím spustíte výber rozsahu dátumov\",\"todayDate\":\"Dnešný dátum, {date, date, full}\",\"todayDateSelected\":\"Vybratý dnešný dátum, {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sl-SI.json
var $d209f467d457081b504031d7e42c06b$exports = {};
$d209f467d457081b504031d7e42c06b$exports = JSON.parse("{\"dateSelected\":\"izbrano: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite za dokončanje izbire datumskega obsega\",\"next\":\"Naprej\",\"previous\":\"Nazaj\",\"selectedDateDescription\":\"Izbrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izbrani razpon: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite za začetek izbire datumskega obsega\",\"todayDate\":\"Danes, {date, date, full}\",\"todayDateSelected\":\"Danes, izbrano: {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sr-SP.json
var $a9e31f7026f3c098c7f5a39df248d1dc$exports = {};
$a9e31f7026f3c098c7f5a39df248d1dc$exports = JSON.parse("{\"dateSelected\":\"Izabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite opseg izabranih datuma\",\"next\":\"Sledeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Izabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izabrani opseg: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete opseg izabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, izabran {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sv-SE.json
var $e8e0dd29381b632189fca24cc639d3$exports = {};
$e8e0dd29381b632189fca24cc639d3$exports = JSON.parse("{\"previous\":\"Föregående\",\"next\":\"Nästa\",\"selectedDateDescription\":\"Valda datum: {date, date, full}\",\"selectedRangeDescription\":\"Valt datumintervall: {start, date, long} till {end, date, long}\",\"todayDate\":\"Idag, {date, date, full}\",\"todayDateSelected\":\"Idag, {date, date, full} vald\",\"dateSelected\":\"{date, date, full} vald\",\"startRangeSelectionPrompt\":\"Klicka för att börja välja datumintervall\",\"finishRangeSelectionPrompt\":\"Klicka för att slutföra välja datumintervall\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/tr-TR.json
var $b439a507d0c0b745fc06364611f52fe0$exports = {};
$b439a507d0c0b745fc06364611f52fe0$exports = JSON.parse("{\"previous\":\"Önceki\",\"next\":\"İleri\",\"selectedDateDescription\":\"Seçilen Tarih: {date, date, full}\",\"selectedRangeDescription\":\"Seçilen Aralık: {start, date, long} ila {end, date, long}\",\"todayDate\":\"Bugün, {date, date, full}\",\"todayDateSelected\":\"Bugün, {date, date, full} seçildi\",\"dateSelected\":\"{date, date, full} seçildi\",\"startRangeSelectionPrompt\":\"Tarih aralığını seçmeye başlamak için tıklayın.\",\"finishRangeSelectionPrompt\":\"Tarih aralığının seçimini bitirmek için tıklayın.\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/uk-UA.json
var $c02b819666304673ecaffd2664761e$exports = {};
$c02b819666304673ecaffd2664761e$exports = JSON.parse("{\"dateSelected\":\"Вибрано: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натисніть, щоб завершити вибір діапазону дат\",\"next\":\"Наступний\",\"previous\":\"Попередній\",\"selectedDateDescription\":\"Вибрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Вибраний діапазон: від {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натисніть, щоб почати вибір діапазону дат\",\"todayDate\":\"Сьогодні: {date, date, full}\",\"todayDateSelected\":\"Сьогодні вибрано: {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/zh-CN.json
var $a72fb3ab2102fad411126e39d859f888$exports = {};
$a72fb3ab2102fad411126e39d859f888$exports = JSON.parse("{\"previous\":\"上一步\",\"next\":\"下一步\",\"selectedDateDescription\":\"所选日期: {date, date, full}\",\"selectedRangeDescription\":\"选定日期范围：{start, date, long}至{end, date, long}\",\"todayDate\":\"今天 {date, date, full}\",\"todayDateSelected\":\"已选定今天 {date, date, full}\",\"dateSelected\":\"已选定 {date, date, full}\",\"startRangeSelectionPrompt\":\"点击开始选择日期范围\",\"finishRangeSelectionPrompt\":\"点击完成选择日期范围\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/zh-TW.json
var $b53d528acee5b284c723b73129884718$exports = {};
$b53d528acee5b284c723b73129884718$exports = JSON.parse("{\"previous\":\"上一頁\",\"next\":\"下一頁\",\"selectedDateDescription\":\"選取的日期 {date, date, full}\",\"selectedRangeDescription\":\"選定日期範圍：{start, date, long}至{end, date, long}\",\"todayDate\":\"今天 {date, date, full}\",\"todayDateSelected\":\"今天，已選取 {date, date, full}\",\"dateSelected\":\"已選取 {date, date, full}\",\"startRangeSelectionPrompt\":\"點擊開始選擇日期範圍\",\"finishRangeSelectionPrompt\":\"點擊完成選擇日期範圍\"}");
// @ts-ignore
const $aab29d25852cbc1abfc898cac6554dc5$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b3d1873a10b51c61e0fe53054ebdeb$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($d270120dd3675c3f0f2f5207baa387d6$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($f2859539a632d104d935b1f8d79d34$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($a6b461c9add3e239a7f9688a896f$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($ecb7bac46525204a5a0ba5e9b90678f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($c8d883b68b00e9f39ef71f6038c8e9ba$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($ac06706e559d76298edf15cb628964a3$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($f1f132a4617eec58dc48e2c3f9a$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($a5cb449787362ba2de4e4924f88b$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($a13eb2ade8e373fd2bc52082$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($fed74c7501751e185712ca861bf5e1a3$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($f571638c72ac25246aa6686003de6eef$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($a75c5d1428c2b2365d73e03edc3c18d$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($b0acd367e0ac8f6bcf73c1f7a16b435d$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($fc4b4136a6738764e9a040f9cd661b$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($e820e8059e43233b28daa04ff39dc0$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($cbde4ca9eba9467e036b5f7ff231225d$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($cf816c695d5ed3af1393be09906df9cc$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($dd3751d90515e59dc9ccc1fe97fa3cf2$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($ca83791cb2c2bcaf9ec9bc6cdf5dada$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($ae20ff20c3663360f5e0f530b4d3a$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($ebc67cae7dd114ffff5ac7ea895$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($c64e56df4203b3b3d07$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($cfbe9ab4205a731e02558d5bd6dae4b$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($e28d4bd0f24e47931dfe0f4ce5a$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($f1fa21db7f5bd96e96134309d1cbdad8$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($d209f467d457081b504031d7e42c06b$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($a9e31f7026f3c098c7f5a39df248d1dc$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($e8e0dd29381b632189fca24cc639d3$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($b439a507d0c0b745fc06364611f52fe0$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c02b819666304673ecaffd2664761e$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($a72fb3ab2102fad411126e39d859f888$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($b53d528acee5b284c723b73129884718$exports).default
};

function $aab29d25852cbc1abfc898cac6554dc5$export$useCalendarBase(props, state, selectedDateDescription) {
  let {
    isReadOnly = false,
    isDisabled = false
  } = props;
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let formatMessage = useMessageFormatter($aab29d25852cbc1abfc898cac6554dc5$var$intlMessages);
  let monthFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric'
  });
  let calendarBody = useRef(null); // TODO: should this be in RSP?

  let calendarId = useId(props.id);
  let calendarTitleId = useId();
  let captionId = useId();
  let {
    direction
  } = useLocale(); // Announce when the current month changes

  useUpdateEffect(() => {
    // announce the new month with a change from the Previous or Next button
    if (!state.isFocused) {
      announce(monthFormatter.format(state.currentMonth));
    } // handle an update to the current month from the Previous or Next button
    // rather than move focus, we announce the new month value

  }, [state.currentMonth]); // Announce when the selected value changes

  useUpdateEffect(() => {
    if (selectedDateDescription) {
      announce(selectedDateDescription);
    } // handle an update to the caption that describes the currently selected range, to announce the new value

  }, [selectedDateDescription]);

  let onKeyDown = e => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        state.selectFocusedDate();
        break;

      case 'PageUp':
        e.preventDefault();

        if (e.shiftKey) {
          state.focusPreviousYear();
        } else {
          state.focusPreviousMonth();
        }

        break;

      case 'PageDown':
        e.preventDefault();

        if (e.shiftKey) {
          state.focusNextYear();
        } else {
          state.focusNextMonth();
        }

        break;

      case 'End':
        e.preventDefault();
        state.focusEndOfMonth();
        break;

      case 'Home':
        e.preventDefault();
        state.focusStartOfMonth();
        break;

      case 'ArrowLeft':
        e.preventDefault();

        if (direction === 'rtl') {
          state.focusNextDay();
        } else {
          state.focusPreviousDay();
        }

        break;

      case 'ArrowUp':
        e.preventDefault();
        state.focusPreviousWeek();
        break;

      case 'ArrowRight':
        e.preventDefault();

        if (direction === 'rtl') {
          state.focusPreviousDay();
        } else {
          state.focusNextDay();
        }

        break;

      case 'ArrowDown':
        e.preventDefault();
        state.focusNextWeek();
        break;
    }
  }; // aria-label logic


  let labelProps = useLabels({
    id: calendarId,
    'aria-label': props['aria-label'],
    'aria-labelledby': (props['aria-labelledby'] || '') + " " + (props['aria-label'] ? calendarId : '') + " " + calendarTitleId
  });
  return {
    calendarProps: mergeProps(domProps, _babelRuntimeHelpersEsmExtends({}, labelProps, {
      id: calendarId,
      role: 'group'
    })),
    calendarTitleProps: {
      id: calendarTitleId
    },
    nextButtonProps: {
      onPress: () => state.focusNextMonth(),
      'aria-label': formatMessage('next'),
      isDisabled: props.isDisabled || state.isNextMonthInvalid()
    },
    prevButtonProps: {
      onPress: () => state.focusPreviousMonth(),
      'aria-label': formatMessage('previous'),
      isDisabled: props.isDisabled || state.isPreviousMonthInvalid()
    },
    calendarBodyProps: {
      ref: calendarBody,
      role: 'grid',
      'aria-readonly': isReadOnly || null,
      'aria-disabled': isDisabled || null,
      'aria-labelledby': labelProps['aria-labelledby'],
      'aria-describedby': selectedDateDescription ? captionId : null,
      onKeyDown,
      onFocus: () => state.setFocused(true),
      onBlur: () => state.setFocused(false)
    },
    captionProps: {
      id: captionId,
      children: selectedDateDescription
    }
  };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
// @ts-ignore
const $c33b40c12dca506e63cdd9b4126ba0$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b3d1873a10b51c61e0fe53054ebdeb$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($d270120dd3675c3f0f2f5207baa387d6$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($f2859539a632d104d935b1f8d79d34$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($a6b461c9add3e239a7f9688a896f$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($ecb7bac46525204a5a0ba5e9b90678f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($c8d883b68b00e9f39ef71f6038c8e9ba$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($ac06706e559d76298edf15cb628964a3$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($f1f132a4617eec58dc48e2c3f9a$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($a5cb449787362ba2de4e4924f88b$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($a13eb2ade8e373fd2bc52082$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($fed74c7501751e185712ca861bf5e1a3$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($f571638c72ac25246aa6686003de6eef$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($a75c5d1428c2b2365d73e03edc3c18d$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($b0acd367e0ac8f6bcf73c1f7a16b435d$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($fc4b4136a6738764e9a040f9cd661b$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($e820e8059e43233b28daa04ff39dc0$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($cbde4ca9eba9467e036b5f7ff231225d$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($cf816c695d5ed3af1393be09906df9cc$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($dd3751d90515e59dc9ccc1fe97fa3cf2$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($ca83791cb2c2bcaf9ec9bc6cdf5dada$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($ae20ff20c3663360f5e0f530b4d3a$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($ebc67cae7dd114ffff5ac7ea895$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($c64e56df4203b3b3d07$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($cfbe9ab4205a731e02558d5bd6dae4b$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($e28d4bd0f24e47931dfe0f4ce5a$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($f1fa21db7f5bd96e96134309d1cbdad8$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($d209f467d457081b504031d7e42c06b$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($a9e31f7026f3c098c7f5a39df248d1dc$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($e8e0dd29381b632189fca24cc639d3$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($b439a507d0c0b745fc06364611f52fe0$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c02b819666304673ecaffd2664761e$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($a72fb3ab2102fad411126e39d859f888$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($b53d528acee5b284c723b73129884718$exports).default
};
export function useCalendar(props, state) {
  // Compute localized message for the selected date
  let formatMessage = useMessageFormatter($c33b40c12dca506e63cdd9b4126ba0$var$intlMessages);
  let selectedDateDescription = useMemo(() => state.value ? formatMessage('selectedDateDescription', {
    date: state.value
  }) : '', [formatMessage, state.value]);
  return $aab29d25852cbc1abfc898cac6554dc5$export$useCalendarBase(props, state, selectedDateDescription);
}
// @ts-ignore
const $aea4fdb8679d33e1353a2fd17$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b3d1873a10b51c61e0fe53054ebdeb$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($d270120dd3675c3f0f2f5207baa387d6$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($f2859539a632d104d935b1f8d79d34$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($a6b461c9add3e239a7f9688a896f$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($ecb7bac46525204a5a0ba5e9b90678f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($c8d883b68b00e9f39ef71f6038c8e9ba$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($ac06706e559d76298edf15cb628964a3$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($f1f132a4617eec58dc48e2c3f9a$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($a5cb449787362ba2de4e4924f88b$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($a13eb2ade8e373fd2bc52082$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($fed74c7501751e185712ca861bf5e1a3$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($f571638c72ac25246aa6686003de6eef$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($a75c5d1428c2b2365d73e03edc3c18d$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($b0acd367e0ac8f6bcf73c1f7a16b435d$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($fc4b4136a6738764e9a040f9cd661b$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($e820e8059e43233b28daa04ff39dc0$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($cbde4ca9eba9467e036b5f7ff231225d$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($cf816c695d5ed3af1393be09906df9cc$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($dd3751d90515e59dc9ccc1fe97fa3cf2$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($ca83791cb2c2bcaf9ec9bc6cdf5dada$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($ae20ff20c3663360f5e0f530b4d3a$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($ebc67cae7dd114ffff5ac7ea895$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($c64e56df4203b3b3d07$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($cfbe9ab4205a731e02558d5bd6dae4b$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($e28d4bd0f24e47931dfe0f4ce5a$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($f1fa21db7f5bd96e96134309d1cbdad8$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($d209f467d457081b504031d7e42c06b$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($a9e31f7026f3c098c7f5a39df248d1dc$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($e8e0dd29381b632189fca24cc639d3$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($b439a507d0c0b745fc06364611f52fe0$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c02b819666304673ecaffd2664761e$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($a72fb3ab2102fad411126e39d859f888$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($b53d528acee5b284c723b73129884718$exports).default
};
export function useRangeCalendar(props, state) {
  // Compute localized message for the selected date or range
  let formatMessage = useMessageFormatter($aea4fdb8679d33e1353a2fd17$var$intlMessages);
  let {
    start,
    end
  } = state.highlightedRange || {
    start: null,
    end: null
  };
  let selectedDateDescription = useMemo(() => {
    // No message if currently selecting a range, or there is nothing highlighted.
    if (!state.anchorDate && start && end) {
      // Use a single date message if the start and end dates are the same day,
      // otherwise include both dates.
      if (isSameDay(start, end)) {
        return formatMessage('selectedDateDescription', {
          date: start
        });
      } else {
        return formatMessage('selectedRangeDescription', {
          start,
          end
        });
      }
    }

    return '';
  }, [start, end, state.anchorDate, formatMessage]);

  let onKeyDown = e => {
    switch (e.key) {
      case 'Escape':
        // Cancel the selection.
        state.setAnchorDate(null);
        break;
    }
  };

  let res = $aab29d25852cbc1abfc898cac6554dc5$export$useCalendarBase(props, state, selectedDateDescription);
  res.calendarBodyProps = mergeProps(res.calendarBodyProps, {
    'aria-multiselectable': true,
    onKeyDown
  });
  return res;
}
// @ts-ignore
const $d88d16e98d90deb4488fdab10eee7838$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b3d1873a10b51c61e0fe53054ebdeb$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($d270120dd3675c3f0f2f5207baa387d6$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($f2859539a632d104d935b1f8d79d34$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($a6b461c9add3e239a7f9688a896f$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($ecb7bac46525204a5a0ba5e9b90678f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($c8d883b68b00e9f39ef71f6038c8e9ba$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($ac06706e559d76298edf15cb628964a3$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($f1f132a4617eec58dc48e2c3f9a$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($a5cb449787362ba2de4e4924f88b$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($a13eb2ade8e373fd2bc52082$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($fed74c7501751e185712ca861bf5e1a3$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($f571638c72ac25246aa6686003de6eef$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($a75c5d1428c2b2365d73e03edc3c18d$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($b0acd367e0ac8f6bcf73c1f7a16b435d$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($fc4b4136a6738764e9a040f9cd661b$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($e820e8059e43233b28daa04ff39dc0$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($cbde4ca9eba9467e036b5f7ff231225d$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($cf816c695d5ed3af1393be09906df9cc$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($dd3751d90515e59dc9ccc1fe97fa3cf2$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($ca83791cb2c2bcaf9ec9bc6cdf5dada$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($ae20ff20c3663360f5e0f530b4d3a$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($ebc67cae7dd114ffff5ac7ea895$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($c64e56df4203b3b3d07$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($cfbe9ab4205a731e02558d5bd6dae4b$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($e28d4bd0f24e47931dfe0f4ce5a$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($f1fa21db7f5bd96e96134309d1cbdad8$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($d209f467d457081b504031d7e42c06b$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($a9e31f7026f3c098c7f5a39df248d1dc$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($e8e0dd29381b632189fca24cc639d3$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($b439a507d0c0b745fc06364611f52fe0$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c02b819666304673ecaffd2664761e$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($a72fb3ab2102fad411126e39d859f888$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($b53d528acee5b284c723b73129884718$exports).default
};
export function useCalendarCell(props, state, ref) {
  let {
    date
  } = props;
  let formatMessage = useMessageFormatter($d88d16e98d90deb4488fdab10eee7838$var$intlMessages);
  let dateFormatter = useDateFormatter({
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  let isSelected = state.isSelected(date);
  let isFocused = state.isCellFocused(date);
  let isDisabled = state.isCellDisabled(date); // aria-label should be localize Day of week, Month, Day and Year without Time.

  let label = dateFormatter.format(date);

  if (isToday(date)) {
    // If date is today, set appropriate string depending on selected state:
    label = formatMessage(isSelected ? 'todayDateSelected' : 'todayDate', {
      date
    });
  } else if (isSelected) {
    // If date is selected but not today:
    label = formatMessage('dateSelected', {
      date
    });
  } // When a cell is focused and this is a range calendar, add a prompt to help
  // screenreader users know that they are in a range selection mode.


  if ('anchorDate' in state && isFocused && !state.isReadOnly) {
    let rangeSelectionPrompt = ''; // If selection has started add "click to finish selecting range"

    if (state.anchorDate) {
      rangeSelectionPrompt = formatMessage('finishRangeSelectionPrompt'); // Otherwise, add "click to start selecting range" prompt
    } else {
      rangeSelectionPrompt = formatMessage('startRangeSelectionPrompt');
    } // Append to aria-label


    if (rangeSelectionPrompt) {
      label = label + " (" + rangeSelectionPrompt + ")";
    }
  }

  let {
    pressProps
  } = usePress({
    onPress: () => {
      if (!isDisabled) {
        state.selectDate(date);
        state.setFocusedDate(date);
      }
    }
  });

  let onMouseEnter = () => {
    if ('highlightDate' in state) {
      state.highlightDate(date);
    }
  };

  let tabIndex = null;

  if (!isDisabled) {
    tabIndex = isSameDay(date, state.focusedDate) ? 0 : -1;
  } // Focus the button in the DOM when the state updates.


  useEffect(() => {
    if (isFocused && ref.current) {
      ref.current.focus();
    }
  }, [isFocused, ref]);
  return {
    cellProps: {
      onMouseEnter: isDisabled ? null : onMouseEnter,
      role: 'gridcell',
      'aria-disabled': isDisabled || null,
      'aria-selected': isSelected
    },
    buttonProps: _babelRuntimeHelpersEsmExtends({}, pressProps, {
      onFocus() {
        if (!isDisabled) {
          state.setFocusedDate(date);
        }
      },

      tabIndex,
      role: 'button',
      'aria-disabled': isDisabled || null,
      'aria-label': label
    })
  };
}
//# sourceMappingURL=module.js.map
