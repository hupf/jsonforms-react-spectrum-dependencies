var {
  usePress
} = require("@react-aria/interactions");

var {
  isSameDay,
  isToday
} = require("date-fns");

var {
  useDateFormatter,
  useLocale,
  useMessageFormatter
} = require("@react-aria/i18n");

var {
  useRef,
  useMemo,
  useEffect
} = require("react");

var {
  filterDOMProps,
  mergeProps,
  useId,
  useLabels,
  useUpdateEffect
} = require("@react-aria/utils");

var {
  announce
} = require("@react-aria/live-announcer");

var _babelRuntimeHelpersExtends = $parcel$interopDefault(require("@babel/runtime/helpers/extends"));

var _babelRuntimeHelpersInteropRequireDefault = $parcel$interopDefault(require("@babel/runtime/helpers/interopRequireDefault"));

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ar-AE.json
var $f45e45cadce9cd3c568d7b277ef435$exports = {};
$f45e45cadce9cd3c568d7b277ef435$exports = JSON.parse("{\"dateSelected\":\"تم تحديد {date, date, full}\",\"finishRangeSelectionPrompt\":\"انقر لإنهاء عملية تحديد نطاق التاريخ\",\"next\":\"التالي\",\"previous\":\"السابق\",\"selectedDateDescription\":\"التاريخ المحدد: {date, date, full}\",\"selectedRangeDescription\":\"النطاق المحدد: {start, date, long} إلى {end, date, long}\",\"startRangeSelectionPrompt\":\"انقر لبدء عملية تحديد نطاق التاريخ\",\"todayDate\":\"اليوم، {date, date, full}\",\"todayDateSelected\":\"اليوم، تم تحديد {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/bg-BG.json
var $bdf0f6034d0a3806494c0ac556dcb9a$exports = {};
$bdf0f6034d0a3806494c0ac556dcb9a$exports = JSON.parse("{\"dateSelected\":\"избрани {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натиснете, за да довършите избора на времеви интервал\",\"next\":\"Напред\",\"previous\":\"Назад\",\"selectedDateDescription\":\"Избрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Избран интервал: от {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натиснете, за да пристъпите към избора на времеви интервал\",\"todayDate\":\"Днес {date, date, full}\",\"todayDateSelected\":\"Днес са избрани {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/cs-CZ.json
var $d774c4230cc8c18e69a1d71874b7$exports = {};
$d774c4230cc8c18e69a1d71874b7$exports = JSON.parse("{\"previous\":\"Předchozí\",\"next\":\"Další\",\"selectedDateDescription\":\"Vybrané datum: {date, date, full}\",\"selectedRangeDescription\":\"Vybraný rozsah: {start, date, long} až {end, date, long}\",\"todayDate\":\"Dnes, {date, date, full}\",\"todayDateSelected\":\"Dnes je vybráno: {date, date, full}\",\"dateSelected\":\"Vybráno: {date, date, full}\",\"startRangeSelectionPrompt\":\"Kliknutím zahájíte výběr rozsahu dat\",\"finishRangeSelectionPrompt\":\"Klepnutím dokončíte výběr rozsahu dat\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/da-DK.json
var $b0cfbbb8dedaa3a82089fcb3c206fa70$exports = {};
$b0cfbbb8dedaa3a82089fcb3c206fa70$exports = JSON.parse("{\"previous\":\"Foregående\",\"next\":\"Næste\",\"selectedDateDescription\":\"Valgte dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgte datointerval: {start, date, long} til {end, date, long}\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\",\"dateSelected\":\"{date, date, full} valgt\",\"startRangeSelectionPrompt\":\"Klik for at starte valg af datointerval\",\"finishRangeSelectionPrompt\":\"Klik for at afslutte valg af datointerval\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/de-DE.json
var $bbc5179cfb9178714006c60e49eb71$exports = {};
$bbc5179cfb9178714006c60e49eb71$exports = JSON.parse("{\"previous\":\"Zurück\",\"next\":\"Weiter\",\"selectedDateDescription\":\"Ausgewähltes Datum: {date, date, full}\",\"selectedRangeDescription\":\"Ausgewählte Zeitraum: {start, date, long} bis {end, date, long}\",\"todayDate\":\"Heute, {date, date, full}\",\"todayDateSelected\":\"Heute, {date, date, full} ausgewählt\",\"dateSelected\":\"{date, date, full} ausgewählt\",\"startRangeSelectionPrompt\":\"Klicken Sie, um den Datumsbereich auszuwählen\",\"finishRangeSelectionPrompt\":\"Klicken Sie, um den Datumsbereich zu beenden\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/el-GR.json
var $eeca26f0f20f8653fbf55c606$exports = {};
$eeca26f0f20f8653fbf55c606$exports = JSON.parse("{\"dateSelected\":\"Επιλέχτηκε {date, date, full}\",\"finishRangeSelectionPrompt\":\"Κάντε κλικ για να ολοκληρώσετε την επιλογή εύρους ημερομηνιών\",\"next\":\"Επόμενο\",\"previous\":\"Προηγούμενο\",\"selectedDateDescription\":\"Επιλεγμένη ημερομηνία: {date, date, full}\",\"selectedRangeDescription\":\"Επιλεγμένο εύρος: {start, date, long} έως {end, date, long}\",\"startRangeSelectionPrompt\":\"Κάντε κλικ για να ξεκινήσετε την επιλογή εύρους ημερομηνιών\",\"todayDate\":\"Σήμερα, {date, date, full}\",\"todayDateSelected\":\"Σήμερα, επιλέχτηκε {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/en-US.json
var $af1446bd47b40213f2bd5f9caf2d1d30$exports = {};
$af1446bd47b40213f2bd5f9caf2d1d30$exports = JSON.parse("{\"previous\":\"Previous\",\"next\":\"Next\",\"selectedDateDescription\":\"Selected Date: {date, date, full}\",\"selectedRangeDescription\":\"Selected Range: {start, date, long} to {end, date, long}\",\"todayDate\":\"Today, {date, date, full}\",\"todayDateSelected\":\"Today, {date, date, full} selected\",\"dateSelected\":\"{date, date, full} selected\",\"startRangeSelectionPrompt\":\"Click to start selecting date range\",\"finishRangeSelectionPrompt\":\"Click to finish selecting date range\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/es-ES.json
var $c531b70f59996561c81c31f081cf94d5$exports = {};
$c531b70f59996561c81c31f081cf94d5$exports = JSON.parse("{\"previous\":\"Anterior\",\"next\":\"Siguiente\",\"selectedDateDescription\":\"Fecha seleccionada: {date, date, full}\",\"selectedRangeDescription\":\"Intervalo de fechas seleccionado: {start, date, long} a {end, date, long}\",\"todayDate\":\"Hoy, {date, date, full}\",\"todayDateSelected\":\"Hoy, {date, date, full} seleccionados\",\"dateSelected\":\"{date, date, full} seleccionados\",\"startRangeSelectionPrompt\":\"Haga clic para comenzar a seleccionar el rango de fechas\",\"finishRangeSelectionPrompt\":\"Haga clic para terminar de seleccionar el rango de fechas\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/et-EE.json
var $eb8316b956bfa6e56335a3cd74583f$exports = {};
$eb8316b956bfa6e56335a3cd74583f$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} valitud\",\"finishRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimise lõpetamiseks\",\"next\":\"Järgmine\",\"previous\":\"Eelmine\",\"selectedDateDescription\":\"Valitud kuupäev: {date, date, full}\",\"selectedRangeDescription\":\"Valitud vahemik: {start, date, long} kuni {end, date, long}\",\"startRangeSelectionPrompt\":\"Klõpsake kuupäevavahemiku valimiseks\",\"todayDate\":\"Täna {date, date, full}\",\"todayDateSelected\":\"Täna {date, date, full} valitud\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/fi-FI.json
var $f6a706481b0b2dc4adad5b1880946ff$exports = {};
$f6a706481b0b2dc4adad5b1880946ff$exports = JSON.parse("{\"previous\":\"Edellinen\",\"next\":\"Seuraava\",\"selectedDateDescription\":\"Valittu päivämäärä: {date, date, full}\",\"selectedRangeDescription\":\"Valittu päivämääräalue: {start, date, long}-{end, date, long}\",\"todayDate\":\"Tänään, {date, date, full}\",\"todayDateSelected\":\"Tänään, {date, date, full} valittu\",\"dateSelected\":\"{date, date, full} valittu\",\"startRangeSelectionPrompt\":\"Napsauta aloittaaksesi ajan asettamisen\",\"finishRangeSelectionPrompt\":\"Napsauta lopettaaksesi päivämäärän valitsemisen\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/fr-FR.json
var $cee76874e4b659414e42bf91b4c50754$exports = {};
$cee76874e4b659414e42bf91b4c50754$exports = JSON.parse("{\"previous\":\"Précédent\",\"next\":\"Suivant\",\"selectedDateDescription\":\"Date sélectionnée: {date, date, full}\",\"selectedRangeDescription\":\"Plage de dates sélectionnée: {start, date, long} au {end, date, long}\",\"todayDate\":\"Aujourd’hui, {date, date, full}\",\"todayDateSelected\":\"Aujourd’hui, sélection de {date, date, full}\",\"dateSelected\":\"Sélection de {date, date, full}\",\"startRangeSelectionPrompt\":\"Cliquez pour commencer à sélectionner la période\",\"finishRangeSelectionPrompt\":\"Cliquez pour terminer la sélection de la période\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/he-IL.json
var $d87045760e06330f93adc4f6198997$exports = {};
$d87045760e06330f93adc4f6198997$exports = JSON.parse("{\"dateSelected\":\"התאריך {date, date, full} שנבחר\",\"finishRangeSelectionPrompt\":\"חץ כדי לסיים את בחירת טווח התאריכים\",\"next\":\"הבא\",\"previous\":\"הקודם\",\"selectedDateDescription\":\"התאריך שנבחר: {date, date, full}\",\"selectedRangeDescription\":\"הטווח שנבחר: מ-{start, date, long} ועד {end, date, long}\",\"startRangeSelectionPrompt\":\"לחץ כדי להתחיל בבחירת טווח התאריכים\",\"todayDate\":\"היום, {date, date, full}\",\"todayDateSelected\":\"היום, התאריך {date, date, full} שנבחר\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/hr-HR.json
var $ee413075d146e3244d11a0e95b12e$exports = {};
$ee413075d146e3244d11a0e95b12e$exports = JSON.parse("{\"dateSelected\":\"Odabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite raspon odabranih datuma\",\"next\":\"Sljedeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Odabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Odabrani raspon: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete raspon odabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, odabran {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/hu-HU.json
var $d18c3f5a6825bdf60d9684149563fb7$exports = {};
$d18c3f5a6825bdf60d9684149563fb7$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} kijelölve\",\"finishRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének befejezéséhez\",\"next\":\"Következő\",\"previous\":\"Előző\",\"selectedDateDescription\":\"Kijelölt dátum: {date, date, full}\",\"selectedRangeDescription\":\"Kijelölt tartomány: {start, date, long} – {end, date, long}\",\"startRangeSelectionPrompt\":\"Kattintson a dátumtartomány kijelölésének indításához\",\"todayDate\":\"Ma, {date, date, full}\",\"todayDateSelected\":\"Ma, {date, date, full} kijelölve\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/it-IT.json
var $df66cf2256db421f2dcef54c13cf2c7$exports = {};
$df66cf2256db421f2dcef54c13cf2c7$exports = JSON.parse("{\"previous\":\"Precedente\",\"next\":\"Successivo\",\"selectedDateDescription\":\"Data selezionata: {date, date, full}\",\"selectedRangeDescription\":\"Intervallo di date selezionato: {start, date, long} a {end, date, long}\",\"todayDate\":\"Oggi, {date, date, full}\",\"todayDateSelected\":\"Oggi, {date, date, full} selezionati\",\"dateSelected\":\"{date, date, full} selezionati\",\"startRangeSelectionPrompt\":\"Fai clic per iniziare a selezionare l'intervallo di date\",\"finishRangeSelectionPrompt\":\"Fare clic per terminare la selezione dell'intervallo di date\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ja-JP.json
var $dac0ddeae7d6c34de0fcefae547189$exports = {};
$dac0ddeae7d6c34de0fcefae547189$exports = JSON.parse("{\"previous\":\"前へ\",\"next\":\"次へ\",\"selectedDateDescription\":\"選択した日付：{date, date, full}\",\"selectedRangeDescription\":\"選択した日付範囲: {start, date, long} ~ {end, date, long}\",\"todayDate\":\"今日、{date, date, full}\",\"todayDateSelected\":\"今日、{date, date, full} が選択されました\",\"dateSelected\":\"{date, date, full} が選択されました\",\"startRangeSelectionPrompt\":\"クリックすると日付範囲が選択されます\",\"finishRangeSelectionPrompt\":\"クリックすると日付範囲の選択が完了します\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ko-KR.json
var $c3b959b59ccbe182a939de6136$exports = {};
$c3b959b59ccbe182a939de6136$exports = JSON.parse("{\"previous\":\"이전으로\",\"next\":\"다음\",\"selectedDateDescription\":\"선택된 날짜 : {date, date, full}\",\"selectedRangeDescription\":\"선택한 기간 : {start, date, long} ~ {end, date, long}\",\"todayDate\":\"현재 {date, date, full}\",\"todayDateSelected\":\"현재 {date, date, full}이(가) 선택됨\",\"dateSelected\":\"{date, date, full}이(가) 선택됨\",\"startRangeSelectionPrompt\":\"기간 선택을 시작하려면 클릭하십시오.\",\"finishRangeSelectionPrompt\":\"날짜 범위 선택을 마치려면 클릭하십시오.\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/lt-LT.json
var $ccf6a1ee038460b3d682fe6caf0ac620$exports = {};
$ccf6a1ee038460b3d682fe6caf0ac620$exports = JSON.parse("{\"dateSelected\":\"Pasirinkta {date, date, full}\",\"finishRangeSelectionPrompt\":\"Spustelėkite, kad baigtumėte pasirinkti datų intervalą\",\"next\":\"Paskesnis\",\"previous\":\"Ankstesnis\",\"selectedDateDescription\":\"Pasirinkta data: {date, date, full}\",\"selectedRangeDescription\":\"Pasirinktas intervalas: nuo {start, date, long} iki {end, date, long}\",\"startRangeSelectionPrompt\":\"Spustelėkite, kad pradėtumėte pasirinkti datų intervalą\",\"todayDate\":\"Šiandien, {date, date, full}\",\"todayDateSelected\":\"Šiandien, pasirinkta {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/lv-LV.json
var $ae8ccc894943bddf2166bbfae6$exports = {};
$ae8ccc894943bddf2166bbfae6$exports = JSON.parse("{\"dateSelected\":\"Atlasīts {date, date, full}\",\"finishRangeSelectionPrompt\":\"Noklikšķiniet, lai pabeigtu datumu diapazona atlasi\",\"next\":\"Tālāk\",\"previous\":\"Atpakaļ\",\"selectedDateDescription\":\"Atlasītais datums: {date, date, full}\",\"selectedRangeDescription\":\"Atlasītais diapazons: {start, date, long} līdz {end, date, long}\",\"startRangeSelectionPrompt\":\"Noklikšķiniet, lai sāktu datumu diapazona atlasi\",\"todayDate\":\"Šodiena, {date, date, full}\",\"todayDateSelected\":\"Atlasīta šodiena, {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/nb-NO.json
var $fea14a0f53ecd185b1dab361692d7f65$exports = {};
$fea14a0f53ecd185b1dab361692d7f65$exports = JSON.parse("{\"previous\":\"Forrige\",\"next\":\"Neste\",\"selectedDateDescription\":\"Valgt dato: {date, date, full}\",\"selectedRangeDescription\":\"Valgte datointervall: {start, date, long} til {end, date, long}\",\"todayDate\":\"I dag, {date, date, full}\",\"todayDateSelected\":\"I dag, {date, date, full} valgt\",\"dateSelected\":\"{date, date, full} valgt\",\"startRangeSelectionPrompt\":\"Klikk for å starte valg av datoperiode\",\"finishRangeSelectionPrompt\":\"Klikk for å fullføre datoperioden\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/nl-NL.json
var $a50d2621c6244e65d9ef9b02a64add01$exports = {};
$a50d2621c6244e65d9ef9b02a64add01$exports = JSON.parse("{\"previous\":\"Vorige\",\"next\":\"Volgende\",\"selectedDateDescription\":\"Geselecteerde datum: {date, date, full}\",\"selectedRangeDescription\":\"Geselecteerde datumbereik: {start, date, long} tot {end, date, long}\",\"todayDate\":\"Vandaag {date, date, full}\",\"todayDateSelected\":\"Vandaag {date, date, full} geselecteerd\",\"dateSelected\":\"{date, date, full} geselecteerd\",\"startRangeSelectionPrompt\":\"Klik om te beginnen met het selecteren van het datumbereik\",\"finishRangeSelectionPrompt\":\"Klik om het selecteren van het datumbereik te voltooien\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/pl-PL.json
var $f2d23b4b01b266614bc7babb272a1607$exports = {};
$f2d23b4b01b266614bc7babb272a1607$exports = JSON.parse("{\"previous\":\"Wstecz\",\"next\":\"Dalej\",\"selectedDateDescription\":\"Wybrana data: {date, date, full}\",\"selectedRangeDescription\":\"Wybrany zakres dat: {start, date, long} do {end, date, long}\",\"todayDate\":\"Dziś, {date, date, full}\",\"todayDateSelected\":\"Dziś, wybrano {date, date, full}\",\"dateSelected\":\"wybrano {date, date, full}\",\"startRangeSelectionPrompt\":\"Kliknij, aby rozpocząć wybór zakresu dat\",\"finishRangeSelectionPrompt\":\"Kliknij, aby zakończyć wybieranie zakresu dat\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/pt-BR.json
var $e963f1978b8e534aca4cd36b160de$exports = {};
$e963f1978b8e534aca4cd36b160de$exports = JSON.parse("{\"previous\":\"Anterior\",\"next\":\"Próximo\",\"selectedDateDescription\":\"Data selecionada: {date, date, full}\",\"selectedRangeDescription\":\"Intervalo de datas selecionado: {start, date, long} para {end, date, long}\",\"todayDate\":\"Hoje, {date, date, full}\",\"todayDateSelected\":\"Hoje, {date, date, full} selecionados\",\"dateSelected\":\"{date, date, full} selecionados\",\"startRangeSelectionPrompt\":\"Clique para começar a selecionar o intervalo de datas\",\"finishRangeSelectionPrompt\":\"Clique para terminar de selecionar o intervalo de datas\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ro-RO.json
var $e5a27c807bf530b7053529614092ec81$exports = {};
$e5a27c807bf530b7053529614092ec81$exports = JSON.parse("{\"dateSelected\":\"{date, date, full} selectată\",\"finishRangeSelectionPrompt\":\"Apăsaţi pentru a finaliza selecţia razei pentru dată\",\"next\":\"Următorul\",\"previous\":\"Înainte\",\"selectedDateDescription\":\"Dată selectată: {date, date, full}\",\"selectedRangeDescription\":\"Selectaţi raza: {start, date, long} la {end, date, long}\",\"startRangeSelectionPrompt\":\"Apăsaţi pentru a începe selecţia razei pentru dată\",\"todayDate\":\"Astăzi, {date, date, full}\",\"todayDateSelected\":\"Dată, {date, date, full} selectată\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/ru-RU.json
var $b509722b3a1e293032af8cd3812ceae$exports = {};
$b509722b3a1e293032af8cd3812ceae$exports = JSON.parse("{\"previous\":\"Предыдущий\",\"next\":\"Следующий\",\"selectedDateDescription\":\"Выбранная дата: {date, date, full}\",\"selectedRangeDescription\":\"Выбранный диапазон дат: {start, date, long} до {end, date, long}\",\"todayDate\":\"Сегодня, {date, date, full}\",\"todayDateSelected\":\"Сегодня, {date, date, full}, выбрано\",\"dateSelected\":\"{date, date, full} выбрано\",\"startRangeSelectionPrompt\":\"Нажмите, чтобы начать выбирать диапазон дат.\",\"finishRangeSelectionPrompt\":\"Нажмите, чтобы закончить выбор диапазона дат.\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sk-SK.json
var $a89a1b295b13c7010d774e1851f45b08$exports = {};
$a89a1b295b13c7010d774e1851f45b08$exports = JSON.parse("{\"dateSelected\":\"Vybratý dátum {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknutím dokončíte výber rozsahu dátumov\",\"next\":\"Nasledujúce\",\"previous\":\"Predchádzajúce\",\"selectedDateDescription\":\"Vybratý dátum: {date, date, full}\",\"selectedRangeDescription\":\"Vybratý rozsah dátumov: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknutím spustíte výber rozsahu dátumov\",\"todayDate\":\"Dnešný dátum, {date, date, full}\",\"todayDateSelected\":\"Vybratý dnešný dátum, {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sl-SI.json
var $d6ed0f6e5486502035883b517e0dd65$exports = {};
$d6ed0f6e5486502035883b517e0dd65$exports = JSON.parse("{\"dateSelected\":\"izbrano: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite za dokončanje izbire datumskega obsega\",\"next\":\"Naprej\",\"previous\":\"Nazaj\",\"selectedDateDescription\":\"Izbrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izbrani razpon: {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite za začetek izbire datumskega obsega\",\"todayDate\":\"Danes, {date, date, full}\",\"todayDateSelected\":\"Danes, izbrano: {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sr-SP.json
var $a6096cd99c270ae0f1a5f4f0a98$exports = {};
$a6096cd99c270ae0f1a5f4f0a98$exports = JSON.parse("{\"dateSelected\":\"Izabran {date, date, full}\",\"finishRangeSelectionPrompt\":\"Kliknite da dovršite opseg izabranih datuma\",\"next\":\"Sledeći\",\"previous\":\"Prethodni\",\"selectedDateDescription\":\"Izabrani datum: {date, date, full}\",\"selectedRangeDescription\":\"Izabrani opseg: od {start, date, long} do {end, date, long}\",\"startRangeSelectionPrompt\":\"Kliknite da započnete opseg izabranih datuma\",\"todayDate\":\"Danas, {date, date, full}\",\"todayDateSelected\":\"Danas, izabran {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/sv-SE.json
var $f8cb71cf0912b7bed3b52c521a8421ba$exports = {};
$f8cb71cf0912b7bed3b52c521a8421ba$exports = JSON.parse("{\"previous\":\"Föregående\",\"next\":\"Nästa\",\"selectedDateDescription\":\"Valda datum: {date, date, full}\",\"selectedRangeDescription\":\"Valt datumintervall: {start, date, long} till {end, date, long}\",\"todayDate\":\"Idag, {date, date, full}\",\"todayDateSelected\":\"Idag, {date, date, full} vald\",\"dateSelected\":\"{date, date, full} vald\",\"startRangeSelectionPrompt\":\"Klicka för att börja välja datumintervall\",\"finishRangeSelectionPrompt\":\"Klicka för att slutföra välja datumintervall\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/tr-TR.json
var $bdc4691151758bbe4e2432c460e0126$exports = {};
$bdc4691151758bbe4e2432c460e0126$exports = JSON.parse("{\"previous\":\"Önceki\",\"next\":\"İleri\",\"selectedDateDescription\":\"Seçilen Tarih: {date, date, full}\",\"selectedRangeDescription\":\"Seçilen Aralık: {start, date, long} ila {end, date, long}\",\"todayDate\":\"Bugün, {date, date, full}\",\"todayDateSelected\":\"Bugün, {date, date, full} seçildi\",\"dateSelected\":\"{date, date, full} seçildi\",\"startRangeSelectionPrompt\":\"Tarih aralığını seçmeye başlamak için tıklayın.\",\"finishRangeSelectionPrompt\":\"Tarih aralığının seçimini bitirmek için tıklayın.\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/uk-UA.json
var $e7847564079fb003b130b357b54530f$exports = {};
$e7847564079fb003b130b357b54530f$exports = JSON.parse("{\"dateSelected\":\"Вибрано: {date, date, full}\",\"finishRangeSelectionPrompt\":\"Натисніть, щоб завершити вибір діапазону дат\",\"next\":\"Наступний\",\"previous\":\"Попередній\",\"selectedDateDescription\":\"Вибрана дата: {date, date, full}\",\"selectedRangeDescription\":\"Вибраний діапазон: від {start, date, long} до {end, date, long}\",\"startRangeSelectionPrompt\":\"Натисніть, щоб почати вибір діапазону дат\",\"todayDate\":\"Сьогодні: {date, date, full}\",\"todayDateSelected\":\"Сьогодні вибрано: {date, date, full}\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/zh-CN.json
var $e69406c909e273299264a98afd57$exports = {};
$e69406c909e273299264a98afd57$exports = JSON.parse("{\"previous\":\"上一步\",\"next\":\"下一步\",\"selectedDateDescription\":\"所选日期: {date, date, full}\",\"selectedRangeDescription\":\"选定日期范围：{start, date, long}至{end, date, long}\",\"todayDate\":\"今天 {date, date, full}\",\"todayDateSelected\":\"已选定今天 {date, date, full}\",\"dateSelected\":\"已选定 {date, date, full}\",\"startRangeSelectionPrompt\":\"点击开始选择日期范围\",\"finishRangeSelectionPrompt\":\"点击完成选择日期范围\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/calendar/intl/zh-TW.json
var $d78eedb3a175c715df9a9d3f11816f3$exports = {};
$d78eedb3a175c715df9a9d3f11816f3$exports = JSON.parse("{\"previous\":\"上一頁\",\"next\":\"下一頁\",\"selectedDateDescription\":\"選取的日期 {date, date, full}\",\"selectedRangeDescription\":\"選定日期範圍：{start, date, long}至{end, date, long}\",\"todayDate\":\"今天 {date, date, full}\",\"todayDateSelected\":\"今天，已選取 {date, date, full}\",\"dateSelected\":\"已選取 {date, date, full}\",\"startRangeSelectionPrompt\":\"點擊開始選擇日期範圍\",\"finishRangeSelectionPrompt\":\"點擊完成選擇日期範圍\"}");
// @ts-ignore
const $a5539aeb508d7ff28dd5626dbcfe28d1$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($f45e45cadce9cd3c568d7b277ef435$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bdf0f6034d0a3806494c0ac556dcb9a$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($d774c4230cc8c18e69a1d71874b7$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($b0cfbbb8dedaa3a82089fcb3c206fa70$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($bbc5179cfb9178714006c60e49eb71$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($eeca26f0f20f8653fbf55c606$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($af1446bd47b40213f2bd5f9caf2d1d30$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($c531b70f59996561c81c31f081cf94d5$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($eb8316b956bfa6e56335a3cd74583f$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($f6a706481b0b2dc4adad5b1880946ff$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($cee76874e4b659414e42bf91b4c50754$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($d87045760e06330f93adc4f6198997$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($ee413075d146e3244d11a0e95b12e$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($d18c3f5a6825bdf60d9684149563fb7$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($df66cf2256db421f2dcef54c13cf2c7$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($dac0ddeae7d6c34de0fcefae547189$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($c3b959b59ccbe182a939de6136$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($ccf6a1ee038460b3d682fe6caf0ac620$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($ae8ccc894943bddf2166bbfae6$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($fea14a0f53ecd185b1dab361692d7f65$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($a50d2621c6244e65d9ef9b02a64add01$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($f2d23b4b01b266614bc7babb272a1607$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($e963f1978b8e534aca4cd36b160de$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($e5a27c807bf530b7053529614092ec81$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($b509722b3a1e293032af8cd3812ceae$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($a89a1b295b13c7010d774e1851f45b08$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($d6ed0f6e5486502035883b517e0dd65$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($a6096cd99c270ae0f1a5f4f0a98$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($f8cb71cf0912b7bed3b52c521a8421ba$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($bdc4691151758bbe4e2432c460e0126$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($e7847564079fb003b130b357b54530f$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($e69406c909e273299264a98afd57$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($d78eedb3a175c715df9a9d3f11816f3$exports).default
};

function $a5539aeb508d7ff28dd5626dbcfe28d1$export$useCalendarBase(props, state, selectedDateDescription) {
  let {
    isReadOnly = false,
    isDisabled = false
  } = props;
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let formatMessage = useMessageFormatter($a5539aeb508d7ff28dd5626dbcfe28d1$var$intlMessages);
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
    calendarProps: mergeProps(domProps, _babelRuntimeHelpersExtends({}, labelProps, {
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
const $b84162c406836dc4432cd2c0d1d5e01e$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($f45e45cadce9cd3c568d7b277ef435$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bdf0f6034d0a3806494c0ac556dcb9a$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($d774c4230cc8c18e69a1d71874b7$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($b0cfbbb8dedaa3a82089fcb3c206fa70$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($bbc5179cfb9178714006c60e49eb71$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($eeca26f0f20f8653fbf55c606$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($af1446bd47b40213f2bd5f9caf2d1d30$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($c531b70f59996561c81c31f081cf94d5$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($eb8316b956bfa6e56335a3cd74583f$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($f6a706481b0b2dc4adad5b1880946ff$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($cee76874e4b659414e42bf91b4c50754$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($d87045760e06330f93adc4f6198997$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($ee413075d146e3244d11a0e95b12e$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($d18c3f5a6825bdf60d9684149563fb7$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($df66cf2256db421f2dcef54c13cf2c7$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($dac0ddeae7d6c34de0fcefae547189$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($c3b959b59ccbe182a939de6136$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($ccf6a1ee038460b3d682fe6caf0ac620$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($ae8ccc894943bddf2166bbfae6$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($fea14a0f53ecd185b1dab361692d7f65$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($a50d2621c6244e65d9ef9b02a64add01$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($f2d23b4b01b266614bc7babb272a1607$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($e963f1978b8e534aca4cd36b160de$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($e5a27c807bf530b7053529614092ec81$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($b509722b3a1e293032af8cd3812ceae$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($a89a1b295b13c7010d774e1851f45b08$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($d6ed0f6e5486502035883b517e0dd65$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($a6096cd99c270ae0f1a5f4f0a98$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($f8cb71cf0912b7bed3b52c521a8421ba$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($bdc4691151758bbe4e2432c460e0126$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($e7847564079fb003b130b357b54530f$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($e69406c909e273299264a98afd57$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($d78eedb3a175c715df9a9d3f11816f3$exports).default
};

function useCalendar(props, state) {
  // Compute localized message for the selected date
  let formatMessage = useMessageFormatter($b84162c406836dc4432cd2c0d1d5e01e$var$intlMessages);
  let selectedDateDescription = useMemo(() => state.value ? formatMessage('selectedDateDescription', {
    date: state.value
  }) : '', [formatMessage, state.value]);
  return $a5539aeb508d7ff28dd5626dbcfe28d1$export$useCalendarBase(props, state, selectedDateDescription);
}

exports.useCalendar = useCalendar;
// @ts-ignore
const $bb0e6043915d06b29f674014555f4d2$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($f45e45cadce9cd3c568d7b277ef435$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bdf0f6034d0a3806494c0ac556dcb9a$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($d774c4230cc8c18e69a1d71874b7$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($b0cfbbb8dedaa3a82089fcb3c206fa70$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($bbc5179cfb9178714006c60e49eb71$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($eeca26f0f20f8653fbf55c606$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($af1446bd47b40213f2bd5f9caf2d1d30$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($c531b70f59996561c81c31f081cf94d5$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($eb8316b956bfa6e56335a3cd74583f$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($f6a706481b0b2dc4adad5b1880946ff$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($cee76874e4b659414e42bf91b4c50754$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($d87045760e06330f93adc4f6198997$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($ee413075d146e3244d11a0e95b12e$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($d18c3f5a6825bdf60d9684149563fb7$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($df66cf2256db421f2dcef54c13cf2c7$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($dac0ddeae7d6c34de0fcefae547189$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($c3b959b59ccbe182a939de6136$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($ccf6a1ee038460b3d682fe6caf0ac620$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($ae8ccc894943bddf2166bbfae6$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($fea14a0f53ecd185b1dab361692d7f65$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($a50d2621c6244e65d9ef9b02a64add01$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($f2d23b4b01b266614bc7babb272a1607$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($e963f1978b8e534aca4cd36b160de$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($e5a27c807bf530b7053529614092ec81$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($b509722b3a1e293032af8cd3812ceae$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($a89a1b295b13c7010d774e1851f45b08$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($d6ed0f6e5486502035883b517e0dd65$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($a6096cd99c270ae0f1a5f4f0a98$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($f8cb71cf0912b7bed3b52c521a8421ba$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($bdc4691151758bbe4e2432c460e0126$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($e7847564079fb003b130b357b54530f$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($e69406c909e273299264a98afd57$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($d78eedb3a175c715df9a9d3f11816f3$exports).default
};

function useRangeCalendar(props, state) {
  // Compute localized message for the selected date or range
  let formatMessage = useMessageFormatter($bb0e6043915d06b29f674014555f4d2$var$intlMessages);
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

  let res = $a5539aeb508d7ff28dd5626dbcfe28d1$export$useCalendarBase(props, state, selectedDateDescription);
  res.calendarBodyProps = mergeProps(res.calendarBodyProps, {
    'aria-multiselectable': true,
    onKeyDown
  });
  return res;
}

exports.useRangeCalendar = useRangeCalendar;
// @ts-ignore
const $c3ce80c33f2602f3bb3139f1ecb53537$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($f45e45cadce9cd3c568d7b277ef435$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bdf0f6034d0a3806494c0ac556dcb9a$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($d774c4230cc8c18e69a1d71874b7$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($b0cfbbb8dedaa3a82089fcb3c206fa70$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($bbc5179cfb9178714006c60e49eb71$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($eeca26f0f20f8653fbf55c606$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($af1446bd47b40213f2bd5f9caf2d1d30$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($c531b70f59996561c81c31f081cf94d5$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($eb8316b956bfa6e56335a3cd74583f$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($f6a706481b0b2dc4adad5b1880946ff$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($cee76874e4b659414e42bf91b4c50754$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($d87045760e06330f93adc4f6198997$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($ee413075d146e3244d11a0e95b12e$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($d18c3f5a6825bdf60d9684149563fb7$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($df66cf2256db421f2dcef54c13cf2c7$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($dac0ddeae7d6c34de0fcefae547189$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($c3b959b59ccbe182a939de6136$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($ccf6a1ee038460b3d682fe6caf0ac620$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($ae8ccc894943bddf2166bbfae6$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($fea14a0f53ecd185b1dab361692d7f65$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($a50d2621c6244e65d9ef9b02a64add01$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($f2d23b4b01b266614bc7babb272a1607$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($e963f1978b8e534aca4cd36b160de$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($e5a27c807bf530b7053529614092ec81$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($b509722b3a1e293032af8cd3812ceae$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($a89a1b295b13c7010d774e1851f45b08$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($d6ed0f6e5486502035883b517e0dd65$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($a6096cd99c270ae0f1a5f4f0a98$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($f8cb71cf0912b7bed3b52c521a8421ba$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($bdc4691151758bbe4e2432c460e0126$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($e7847564079fb003b130b357b54530f$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($e69406c909e273299264a98afd57$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($d78eedb3a175c715df9a9d3f11816f3$exports).default
};

function useCalendarCell(props, state, ref) {
  let {
    date
  } = props;
  let formatMessage = useMessageFormatter($c3ce80c33f2602f3bb3139f1ecb53537$var$intlMessages);
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
    buttonProps: _babelRuntimeHelpersExtends({}, pressProps, {
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

exports.useCalendarCell = useCalendarCell;
//# sourceMappingURL=main.js.map
