var {
  useSpinButton
} = require("@react-aria/spinbutton");

var {
  useFocusManager
} = require("@react-aria/focus");

var {
  useState
} = require("react");

var {
  usePress
} = require("@react-aria/interactions");

var {
  useMessageFormatter,
  useDateFormatter,
  useLocale
} = require("@react-aria/i18n");

var {
  filterDOMProps,
  mergeProps,
  useId,
  useLabels
} = require("@react-aria/utils");

var _babelRuntimeHelpersInteropRequireDefault = $parcel$interopDefault(require("@babel/runtime/helpers/interopRequireDefault"));

var _babelRuntimeHelpersExtends = $parcel$interopDefault(require("@babel/runtime/helpers/extends"));

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ar-AE.json
var $be926026280e076dd0b048671d4b$exports = {};
$be926026280e076dd0b048671d4b$exports = JSON.parse("{\"calendar\":\"التقويم\",\"date\":\"التاريخ\",\"dateRange\":\"نطاق التاريخ\",\"day\":\"اليوم\",\"dayPeriod\":\"الفترة خلال اليوم\",\"endDate\":\"تاريخ الانتهاء\",\"hour\":\"الساعة\",\"minute\":\"الدقيقة\",\"month\":\"الشهر\",\"second\":\"الثانية\",\"startDate\":\"تاريخ البدء\",\"year\":\"العام\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/bg-BG.json
var $bab398828901e91cda5ace996e16743$exports = {};
$bab398828901e91cda5ace996e16743$exports = JSON.parse("{\"calendar\":\"Календар\",\"date\":\"Дата\",\"dateRange\":\"Времеви интервал\",\"day\":\"Ден\",\"dayPeriod\":\"Период в дни\",\"endDate\":\"Крайна дата\",\"hour\":\"Час\",\"minute\":\"Минута\",\"month\":\"Месец\",\"second\":\"Секунда\",\"startDate\":\"Начална дата\",\"year\":\"Година\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/cs-CZ.json
var $a1b39c1203bddacb07ac8af1bf09f93d$exports = {};
$a1b39c1203bddacb07ac8af1bf09f93d$exports = JSON.parse("{\"calendar\":\"Kalendář\",\"date\":\"Datum\",\"dateRange\":\"Rozsah dat\",\"day\":\"Den\",\"dayPeriod\":\"Denní doba\",\"endDate\":\"Konečné datum\",\"hour\":\"Hodina\",\"minute\":\"Minuta\",\"month\":\"Měsíc\",\"second\":\"Sekunda\",\"startDate\":\"Počáteční datum\",\"year\":\"Rok\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/da-DK.json
var $de6d54fc6253e3aab217ab66cc92632$exports = {};
$de6d54fc6253e3aab217ab66cc92632$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Dato\",\"dateRange\":\"Datointerval\",\"day\":\"Dag\",\"dayPeriod\":\"Dagsperiode\",\"endDate\":\"Slutdato\",\"hour\":\"Time\",\"minute\":\"Minut\",\"month\":\"Måned\",\"second\":\"Sekund\",\"startDate\":\"Startdato\",\"year\":\"År\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/de-DE.json
var $c62d85e73a4bc4d2d79c4e5438a0a3$exports = {};
$c62d85e73a4bc4d2d79c4e5438a0a3$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Datum\",\"dateRange\":\"Datumsbereich\",\"day\":\"Tag\",\"dayPeriod\":\"Zeitraum\",\"endDate\":\"Enddatum\",\"hour\":\"Stunde\",\"minute\":\"Minute\",\"month\":\"Monat\",\"second\":\"Sekunde\",\"startDate\":\"Anfangsdatum\",\"year\":\"Jahr\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/el-GR.json
var $e7f2c17a4d052730760575ff7cf57df6$exports = {};
$e7f2c17a4d052730760575ff7cf57df6$exports = JSON.parse("{\"calendar\":\"Ημερολόγιο\",\"date\":\"Ημερομηνία\",\"dateRange\":\"Εύρος ημερομηνιών\",\"day\":\"Ημέρα\",\"dayPeriod\":\"Περίοδος ημερών\",\"endDate\":\"Ημερομηνία λήξης\",\"hour\":\"Ώρα\",\"minute\":\"Λεπτό\",\"month\":\"Μήνας\",\"second\":\"Δευτερόλεπτο\",\"startDate\":\"Ημερομηνία έναρξης\",\"year\":\"Έτος\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/en-US.json
var $adfdcb0b7f4822eaafecdabf45f751$exports = {};
$adfdcb0b7f4822eaafecdabf45f751$exports = JSON.parse("{\"year\":\"Year\",\"month\":\"Month\",\"day\":\"Day\",\"hour\":\"Hour\",\"minute\":\"Minute\",\"second\":\"Second\",\"dayPeriod\":\"Day Period\",\"calendar\":\"Calendar\",\"date\":\"Date\",\"dateRange\":\"Date Range\",\"startDate\":\"Start Date\",\"endDate\":\"End Date\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/es-ES.json
var $f9c516e0c25716b7d567ed2$exports = {};
$f9c516e0c25716b7d567ed2$exports = JSON.parse("{\"calendar\":\"Calendario\",\"date\":\"Fecha\",\"dateRange\":\"Intervalo de fecha\",\"day\":\"Día\",\"dayPeriod\":\"Periodo en días\",\"endDate\":\"Fecha final\",\"hour\":\"Hora\",\"minute\":\"Minuto\",\"month\":\"Mes\",\"second\":\"Segundo\",\"startDate\":\"Fecha de inicio\",\"year\":\"Año\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/et-EE.json
var $ba7274e4009469f7b66a9c93516dc421$exports = {};
$ba7274e4009469f7b66a9c93516dc421$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Kuupäev\",\"dateRange\":\"Kuupäevavahemik\",\"day\":\"Päev\",\"dayPeriod\":\"Päeva periood\",\"endDate\":\"Lõppkuupäev\",\"hour\":\"Tund\",\"minute\":\"Minut\",\"month\":\"Kuu\",\"second\":\"Sekund\",\"startDate\":\"Alguskuupäev\",\"year\":\"Aasta\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/fi-FI.json
var $c64b2869d31111b8a6212d3569c46edc$exports = {};
$c64b2869d31111b8a6212d3569c46edc$exports = JSON.parse("{\"calendar\":\"Kalenteri\",\"date\":\"Päivämäärä\",\"dateRange\":\"Päivämääräalue\",\"day\":\"Päivä\",\"dayPeriod\":\"Päiväalue\",\"endDate\":\"Päättymispäivä\",\"hour\":\"Tunti\",\"minute\":\"Minuutti\",\"month\":\"Kuukausi\",\"second\":\"Sekunti\",\"startDate\":\"Alkamispäivä\",\"year\":\"Vuosi\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/fr-FR.json
var $ba1e9adecce613badde3f8b2a91b9$exports = {};
$ba1e9adecce613badde3f8b2a91b9$exports = JSON.parse("{\"calendar\":\"Calendrier\",\"date\":\"Date\",\"dateRange\":\"Plage de dates\",\"day\":\"Jour\",\"dayPeriod\":\"Période\",\"endDate\":\"Date de fin\",\"hour\":\"Heure\",\"minute\":\"Minute\",\"month\":\"Mois\",\"second\":\"Seconde\",\"startDate\":\"Date de début\",\"year\":\"Année\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/he-IL.json
var $da5d80bcf16af82fe7b14fc1e9d9$exports = {};
$da5d80bcf16af82fe7b14fc1e9d9$exports = JSON.parse("{\"calendar\":\"לוח שנה\",\"date\":\"תאריך\",\"dateRange\":\"טווח תאריכים\",\"day\":\"יום\",\"dayPeriod\":\"תקופה בימים\",\"endDate\":\"תאריך סיום\",\"hour\":\"שעה\",\"minute\":\"דקה\",\"month\":\"חודש\",\"second\":\"שנייה\",\"startDate\":\"תאריך התחלה\",\"year\":\"שנה\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/hr-HR.json
var $c179e9a34711caa46568a537c351781$exports = {};
$c179e9a34711caa46568a537c351781$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"date\":\"Datum\",\"dateRange\":\"Raspon datuma\",\"day\":\"Dan\",\"dayPeriod\":\"Dnevno razdoblje\",\"endDate\":\"Datum završetka\",\"hour\":\"Sat\",\"minute\":\"Minuta\",\"month\":\"Mjesec\",\"second\":\"Drugi\",\"startDate\":\"Datum početka\",\"year\":\"Godina\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/hu-HU.json
var $a40a6dd4cfb1bd1de71f82470d8716$exports = {};
$a40a6dd4cfb1bd1de71f82470d8716$exports = JSON.parse("{\"calendar\":\"Naptár\",\"date\":\"Dátum\",\"dateRange\":\"Dátumtartomány\",\"day\":\"Nap\",\"dayPeriod\":\"Napszak\",\"endDate\":\"Befejező dátum\",\"hour\":\"Óra\",\"minute\":\"Perc\",\"month\":\"Hónap\",\"second\":\"Másodperc\",\"startDate\":\"Kezdő dátum\",\"year\":\"Év\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/it-IT.json
var $b9be9a4b72f2aadd1d314520c1acfc$exports = {};
$b9be9a4b72f2aadd1d314520c1acfc$exports = JSON.parse("{\"calendar\":\"Calendario\",\"date\":\"Data\",\"dateRange\":\"Intervallo date\",\"day\":\"Giorno\",\"dayPeriod\":\"Periodo di giorni\",\"endDate\":\"Data finale\",\"hour\":\"Ora\",\"minute\":\"Minuti\",\"month\":\"Mese\",\"second\":\"Secondi\",\"startDate\":\"Data iniziale\",\"year\":\"Anno\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ja-JP.json
var $b41d870af1ac3496d01f8698fb5c954$exports = {};
$b41d870af1ac3496d01f8698fb5c954$exports = JSON.parse("{\"calendar\":\"カレンダー\",\"date\":\"日付\",\"dateRange\":\"日付範囲\",\"day\":\"日\",\"dayPeriod\":\"期間\",\"endDate\":\"終了日\",\"hour\":\"時間\",\"minute\":\"分\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日\",\"year\":\"年\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ko-KR.json
var $fe0c574bf48312400dd82a37538c16ef$exports = {};
$fe0c574bf48312400dd82a37538c16ef$exports = JSON.parse("{\"calendar\":\"달력\",\"date\":\"날짜\",\"dateRange\":\"날짜 범위\",\"day\":\"요일\",\"dayPeriod\":\"일 기간\",\"endDate\":\"종료 날짜\",\"hour\":\"시간\",\"minute\":\"분\",\"month\":\"개월\",\"second\":\"초\",\"startDate\":\"시작 날짜\",\"year\":\"연도\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/lt-LT.json
var $b0ad35113dfe9f264970b85837$exports = {};
$b0ad35113dfe9f264970b85837$exports = JSON.parse("{\"calendar\":\"Kalendorius\",\"date\":\"Data\",\"dateRange\":\"Datų intervalas\",\"day\":\"Diena\",\"dayPeriod\":\"Dienos laikotarpis\",\"endDate\":\"Pabaigos data\",\"hour\":\"Valanda\",\"minute\":\"Minutė\",\"month\":\"Mėnuo\",\"second\":\"Sekundė\",\"startDate\":\"Pradžios data\",\"year\":\"Metai\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/lv-LV.json
var $c670847f13ef745cf51c4d927173b$exports = {};
$c670847f13ef745cf51c4d927173b$exports = JSON.parse("{\"calendar\":\"Kalendārs\",\"date\":\"Datums\",\"dateRange\":\"Datumu diapazons\",\"day\":\"Diena\",\"dayPeriod\":\"Dienu periods\",\"endDate\":\"Beigu datums\",\"hour\":\"Stunda\",\"minute\":\"Minūte\",\"month\":\"Mēnesis\",\"second\":\"Sekunde\",\"startDate\":\"Sākuma datums\",\"year\":\"Gads\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/nb-NO.json
var $d59ad4442794aa8d7415835505965b2$exports = {};
$d59ad4442794aa8d7415835505965b2$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Dato\",\"dateRange\":\"Datoområde\",\"day\":\"Dag\",\"dayPeriod\":\"Dagsperiode\",\"endDate\":\"Sluttdato\",\"hour\":\"Time\",\"minute\":\"Minutt\",\"month\":\"Måned\",\"second\":\"Sekund\",\"startDate\":\"Startdato\",\"year\":\"År\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/nl-NL.json
var $ea0bd7fd22f4939550fa7411df8295f2$exports = {};
$ea0bd7fd22f4939550fa7411df8295f2$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Datum\",\"dateRange\":\"Datumbereik\",\"day\":\"Dag\",\"dayPeriod\":\"Dagdeel\",\"endDate\":\"Einddatum\",\"hour\":\"Uur\",\"minute\":\"Minuut\",\"month\":\"Maand\",\"second\":\"Seconde\",\"startDate\":\"Startdatum\",\"year\":\"Jaar\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/pl-PL.json
var $c08613207efc8ea834b1fadda995620b$exports = {};
$c08613207efc8ea834b1fadda995620b$exports = JSON.parse("{\"calendar\":\"Kalendarz\",\"date\":\"Data\",\"dateRange\":\"Zakres dat\",\"day\":\"Dzień\",\"dayPeriod\":\"Okres dni\",\"endDate\":\"Data końcowa\",\"hour\":\"Godzina\",\"minute\":\"Minuta\",\"month\":\"Miesiąc\",\"second\":\"Sekunda\",\"startDate\":\"Data początkowa\",\"year\":\"Rok\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/pt-BR.json
var $c53c2ff9b6580a8da286c11a97f27c0c$exports = {};
$c53c2ff9b6580a8da286c11a97f27c0c$exports = JSON.parse("{\"calendar\":\"Calendário\",\"date\":\"Data\",\"dateRange\":\"Intervalo de datas\",\"day\":\"Dia\",\"dayPeriod\":\"Período do dia\",\"endDate\":\"Data final\",\"hour\":\"Hora\",\"minute\":\"Minuto\",\"month\":\"Mês\",\"second\":\"Segundo\",\"startDate\":\"Data inicial\",\"year\":\"Ano\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ro-RO.json
var $b374a5303a356023e59a4df3c152bebf$exports = {};
$b374a5303a356023e59a4df3c152bebf$exports = JSON.parse("{\"calendar\":\"Calendar\",\"date\":\"Dată\",\"dateRange\":\"Raza datei\",\"day\":\"Zi\",\"dayPeriod\":\"Perioada zilei\",\"endDate\":\"Dată final\",\"hour\":\"Oră\",\"minute\":\"Minut\",\"month\":\"Lună\",\"second\":\"Secundă\",\"startDate\":\"Dată început\",\"year\":\"An\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ru-RU.json
var $e72056058c9fa1ea634cd2d7f7700$exports = {};
$e72056058c9fa1ea634cd2d7f7700$exports = JSON.parse("{\"calendar\":\"Календарь\",\"date\":\"Дата\",\"dateRange\":\"Диапазон дат\",\"day\":\"День\",\"dayPeriod\":\"Период дня\",\"endDate\":\"Дата окончания\",\"hour\":\"Час\",\"minute\":\"Минута\",\"month\":\"Месяц\",\"second\":\"Секунда\",\"startDate\":\"Дата начала\",\"year\":\"Год\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sk-SK.json
var $ab8e21cbc487e19c15c39cc2df98aed6$exports = {};
$ab8e21cbc487e19c15c39cc2df98aed6$exports = JSON.parse("{\"calendar\":\"Kalendár\",\"date\":\"Dátum\",\"dateRange\":\"Rozsah dátumov\",\"day\":\"Deň\",\"dayPeriod\":\"Časť dňa\",\"endDate\":\"Dátum ukončenia\",\"hour\":\"Hodina\",\"minute\":\"Minúta\",\"month\":\"Mesiac\",\"second\":\"Sekunda\",\"startDate\":\"Dátum začatia\",\"year\":\"Rok\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sl-SI.json
var $a155de298a83a5c6e328091b4347a$exports = {};
$a155de298a83a5c6e328091b4347a$exports = JSON.parse("{\"calendar\":\"Koledar\",\"date\":\"Datum\",\"dateRange\":\"Datumski obseg\",\"day\":\"Dan\",\"dayPeriod\":\"Obdobje dneva\",\"endDate\":\"Datum konca\",\"hour\":\"Ura\",\"minute\":\"Minuta\",\"month\":\"Mesec\",\"second\":\"Sekunda\",\"startDate\":\"Datum začetka\",\"year\":\"Leto\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sr-SP.json
var $f93e8a2d2993e66b87975762a481$exports = {};
$f93e8a2d2993e66b87975762a481$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"date\":\"Datum\",\"dateRange\":\"Opseg datuma\",\"day\":\"Dan\",\"dayPeriod\":\"Dnevni period\",\"endDate\":\"Datum završetka\",\"hour\":\"Čas\",\"minute\":\"Minut\",\"month\":\"Mesec\",\"second\":\"Drugi\",\"startDate\":\"Datum početka\",\"year\":\"Godina\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sv-SE.json
var $d90bf5621eeb550e11f07fd645ee9375$exports = {};
$d90bf5621eeb550e11f07fd645ee9375$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Datum\",\"dateRange\":\"Datumintervall\",\"day\":\"Dag\",\"dayPeriod\":\"Dagsperiod\",\"endDate\":\"Slutdatum\",\"hour\":\"Timme\",\"minute\":\"Minut\",\"month\":\"Månad\",\"second\":\"Sekund\",\"startDate\":\"Startdatum\",\"year\":\"År\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/tr-TR.json
var $aa582d9ff36fb511de0ccb22bd9e2bb$exports = {};
$aa582d9ff36fb511de0ccb22bd9e2bb$exports = JSON.parse("{\"calendar\":\"Takvim\",\"date\":\"Tarih\",\"dateRange\":\"Tarih Aralığı\",\"day\":\"Gün\",\"dayPeriod\":\"Gün Aralığı\",\"endDate\":\"Bitiş Tarihi\",\"hour\":\"Saat\",\"minute\":\"Dakika\",\"month\":\"Ay\",\"second\":\"Saniye\",\"startDate\":\"Başlangıç Tarihi\",\"year\":\"Yıl\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/uk-UA.json
var $a1ed5505308b04ac9cd1c488538019c3$exports = {};
$a1ed5505308b04ac9cd1c488538019c3$exports = JSON.parse("{\"calendar\":\"Календар\",\"date\":\"Дата\",\"dateRange\":\"Діапазон дат\",\"day\":\"День\",\"dayPeriod\":\"Період дня\",\"endDate\":\"Дата завершення\",\"hour\":\"Година\",\"minute\":\"Хвилина\",\"month\":\"Місяць\",\"second\":\"Секунда\",\"startDate\":\"Дата початку\",\"year\":\"Рік\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/zh-CN.json
var $c6b9bcbebc7c1f385b7e70bbd744b53$exports = {};
$c6b9bcbebc7c1f385b7e70bbd744b53$exports = JSON.parse("{\"calendar\":\"日历\",\"date\":\"日期\",\"dateRange\":\"日期范围\",\"day\":\"日\",\"dayPeriod\":\"时段\",\"endDate\":\"结束日期\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"开始日期\",\"year\":\"年\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/zh-TW.json
var $ae51b3cde9961c4855b77ac499ea$exports = {};
$ae51b3cde9961c4855b77ac499ea$exports = JSON.parse("{\"calendar\":\"日曆\",\"date\":\"日期\",\"dateRange\":\"日期範圍\",\"day\":\"日\",\"dayPeriod\":\"日期間\",\"endDate\":\"結束日期\",\"hour\":\"小時\",\"minute\":\"分鐘\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日期\",\"year\":\"年\"}");
// @ts-ignore
const $faa51d1fd0ed7732821d1b830a6e9ae2$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($be926026280e076dd0b048671d4b$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bab398828901e91cda5ace996e16743$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($a1b39c1203bddacb07ac8af1bf09f93d$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($de6d54fc6253e3aab217ab66cc92632$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($c62d85e73a4bc4d2d79c4e5438a0a3$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($e7f2c17a4d052730760575ff7cf57df6$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($adfdcb0b7f4822eaafecdabf45f751$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($f9c516e0c25716b7d567ed2$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($ba7274e4009469f7b66a9c93516dc421$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($c64b2869d31111b8a6212d3569c46edc$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($ba1e9adecce613badde3f8b2a91b9$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($da5d80bcf16af82fe7b14fc1e9d9$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($c179e9a34711caa46568a537c351781$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($a40a6dd4cfb1bd1de71f82470d8716$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($b9be9a4b72f2aadd1d314520c1acfc$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($b41d870af1ac3496d01f8698fb5c954$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($fe0c574bf48312400dd82a37538c16ef$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($b0ad35113dfe9f264970b85837$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($c670847f13ef745cf51c4d927173b$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($d59ad4442794aa8d7415835505965b2$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($ea0bd7fd22f4939550fa7411df8295f2$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($c08613207efc8ea834b1fadda995620b$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($c53c2ff9b6580a8da286c11a97f27c0c$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($b374a5303a356023e59a4df3c152bebf$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($e72056058c9fa1ea634cd2d7f7700$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($ab8e21cbc487e19c15c39cc2df98aed6$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($a155de298a83a5c6e328091b4347a$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($f93e8a2d2993e66b87975762a481$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($d90bf5621eeb550e11f07fd645ee9375$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($aa582d9ff36fb511de0ccb22bd9e2bb$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($a1ed5505308b04ac9cd1c488538019c3$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($c6b9bcbebc7c1f385b7e70bbd744b53$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($ae51b3cde9961c4855b77ac499ea$exports).default
};

function useDatePicker(props, state) {
  let buttonId = useId();
  let dialogId = useId();
  let formatMessage = useMessageFormatter($faa51d1fd0ed7732821d1b830a6e9ae2$var$intlMessages);
  let labels = useLabels(props, formatMessage('date'));
  let labelledBy = labels['aria-labelledby'] || labels.id;
  let domProps = filterDOMProps(props, {
    labelable: true
  }); // When a touch event occurs on the date field, open the calendar instead.
  // The date segments are too small to interact with on a touch device.
  // TODO: time picker in popover??

  let {
    pressProps
  } = usePress({
    onPress: e => {
      // really should detect if there is a keyboard attached too, but not sure how to do that.
      if (e.pointerType === 'touch' || e.pointerType === 'pen') {
        state.setOpen(true);
      }
    }
  }); // Open the popover on alt + arrow down

  let onKeyDown = e => {
    if (e.altKey && e.key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      state.setOpen(true);
    }
  };

  return {
    comboboxProps: mergeProps(domProps, _babelRuntimeHelpersExtends({
      role: 'combobox',
      'aria-haspopup': 'dialog',
      'aria-expanded': state.isOpen,
      'aria-owns': state.isOpen ? dialogId : null,
      'aria-invalid': state.validationState === 'invalid' || null,
      'aria-errormessage': props['aria-errormessage'],
      'aria-disabled': props.isDisabled || null,
      'aria-readonly': props.isReadOnly || null,
      'aria-required': props.isRequired || null
    }, mergeProps(pressProps, {
      onKeyDown
    }), labels)),
    fieldProps: {
      'aria-labelledby': labelledBy
    },
    buttonProps: {
      excludeFromTabOrder: true,
      id: buttonId,
      'aria-haspopup': 'dialog',
      'aria-label': formatMessage('calendar'),
      'aria-labelledby': labelledBy + " " + buttonId
    },
    dialogProps: {
      id: dialogId
    }
  };
}

exports.useDatePicker = useDatePicker;
// @ts-ignore
const $aa03457fd9c10d7eb3ee10b0f3b23b$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($be926026280e076dd0b048671d4b$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bab398828901e91cda5ace996e16743$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($a1b39c1203bddacb07ac8af1bf09f93d$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($de6d54fc6253e3aab217ab66cc92632$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($c62d85e73a4bc4d2d79c4e5438a0a3$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($e7f2c17a4d052730760575ff7cf57df6$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($adfdcb0b7f4822eaafecdabf45f751$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($f9c516e0c25716b7d567ed2$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($ba7274e4009469f7b66a9c93516dc421$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($c64b2869d31111b8a6212d3569c46edc$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($ba1e9adecce613badde3f8b2a91b9$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($da5d80bcf16af82fe7b14fc1e9d9$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($c179e9a34711caa46568a537c351781$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($a40a6dd4cfb1bd1de71f82470d8716$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($b9be9a4b72f2aadd1d314520c1acfc$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($b41d870af1ac3496d01f8698fb5c954$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($fe0c574bf48312400dd82a37538c16ef$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($b0ad35113dfe9f264970b85837$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($c670847f13ef745cf51c4d927173b$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($d59ad4442794aa8d7415835505965b2$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($ea0bd7fd22f4939550fa7411df8295f2$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($c08613207efc8ea834b1fadda995620b$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($c53c2ff9b6580a8da286c11a97f27c0c$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($b374a5303a356023e59a4df3c152bebf$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($e72056058c9fa1ea634cd2d7f7700$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($ab8e21cbc487e19c15c39cc2df98aed6$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($a155de298a83a5c6e328091b4347a$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($f93e8a2d2993e66b87975762a481$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($d90bf5621eeb550e11f07fd645ee9375$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($aa582d9ff36fb511de0ccb22bd9e2bb$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($a1ed5505308b04ac9cd1c488538019c3$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($c6b9bcbebc7c1f385b7e70bbd744b53$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($ae51b3cde9961c4855b77ac499ea$exports).default
};

function useDateSegment(props, segment, state) {
  let [enteredKeys, setEnteredKeys] = useState('');
  let {
    direction
  } = useLocale();
  let messageFormatter = useMessageFormatter($aa03457fd9c10d7eb3ee10b0f3b23b$var$intlMessages);
  let focusManager = useFocusManager();
  let textValue = segment.text;
  let monthDateFormatter = useDateFormatter({
    month: 'long'
  });
  let hourDateFormatter = useDateFormatter({
    hour: 'numeric',
    hour12: state.dateFormatter.resolvedOptions().hour12
  });

  if (segment.type === 'month') {
    textValue = monthDateFormatter.format(state.value);
  } else if (segment.type === 'hour' || segment.type === 'dayPeriod') {
    textValue = hourDateFormatter.format(state.value);
  }

  let {
    spinButtonProps
  } = useSpinButton({
    value: segment.value,
    textValue,
    minValue: segment.minValue,
    maxValue: segment.maxValue,
    isDisabled: props.isDisabled,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    onIncrement: () => state.increment(segment.type),
    onDecrement: () => state.decrement(segment.type),
    onIncrementPage: () => state.incrementPage(segment.type),
    onDecrementPage: () => state.decrementPage(segment.type),
    onIncrementToMax: () => state.setSegment(segment.type, segment.maxValue),
    onDecrementToMin: () => state.setSegment(segment.type, segment.minValue)
  });

  let onKeyDown = e => {
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
      return;
    }

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();

        if (direction === 'rtl') {
          focusManager.focusNext();
        } else {
          focusManager.focusPrevious();
        }

        break;

      case 'ArrowRight':
        e.preventDefault();

        if (direction === 'rtl') {
          focusManager.focusPrevious();
        } else {
          focusManager.focusNext();
        }

        break;

      case 'Enter':
        e.preventDefault();

        if (segment.isPlaceholder && !props.isReadOnly) {
          state.confirmPlaceholder(segment.type);
        }

        focusManager.focusNext();
        break;

      case 'Tab':
        break;

      case 'Backspace':
        {
          e.preventDefault();

          if ($aa03457fd9c10d7eb3ee10b0f3b23b$var$isNumeric(segment.text) && !props.isReadOnly) {
            let newValue = segment.text.slice(0, -1);
            state.setSegment(segment.type, newValue.length === 0 ? segment.minValue : $aa03457fd9c10d7eb3ee10b0f3b23b$var$parseNumber(newValue));
            setEnteredKeys(newValue);
          }

          break;
        }

      default:
        e.preventDefault();
        e.stopPropagation();

        if (($aa03457fd9c10d7eb3ee10b0f3b23b$var$isNumeric(e.key) || /^[ap]$/.test(e.key)) && !props.isReadOnly) {
          onInput(e.key);
        }

    }
  };

  let onInput = key => {
    let newValue = enteredKeys + key;

    switch (segment.type) {
      case 'dayPeriod':
        // TODO: internationalize
        if (key === 'a') {
          state.setSegment('dayPeriod', 0);
        } else if (key === 'p') {
          state.setSegment('dayPeriod', 12);
        }

        focusManager.focusNext();
        break;

      case 'day':
      case 'hour':
      case 'minute':
      case 'second':
      case 'month':
      case 'year':
        {
          if (!$aa03457fd9c10d7eb3ee10b0f3b23b$var$isNumeric(newValue)) {
            return;
          }

          let numberValue = $aa03457fd9c10d7eb3ee10b0f3b23b$var$parseNumber(newValue);
          let segmentValue = numberValue;

          if (segment.type === 'hour' && state.dateFormatter.resolvedOptions().hour12 && numberValue === 12) {
            segmentValue = 0;
          } else if (numberValue > segment.maxValue) {
            segmentValue = $aa03457fd9c10d7eb3ee10b0f3b23b$var$parseNumber(key);
          }

          state.setSegment(segment.type, segmentValue);

          if (Number(numberValue + '0') > segment.maxValue) {
            setEnteredKeys('');
            focusManager.focusNext();
          } else {
            setEnteredKeys(newValue);
          }

          break;
        }
    }
  };

  let onFocus = () => {
    setEnteredKeys('');
  };

  let id = useId(props.id);
  return {
    segmentProps: mergeProps(spinButtonProps, {
      id,
      'aria-label': messageFormatter(segment.type),
      'aria-labelledby': props['aria-labelledby'] + " " + id,
      tabIndex: props.isDisabled ? undefined : 0,
      onKeyDown,
      onFocus,
      onMouseDown: e => e.stopPropagation()
    })
  };
} // Converts unicode number strings to real JS numbers.
// Numbers can be displayed and typed in many number systems, but JS
// only understands latin numbers.
// See https://www.fileformat.info/info/unicode/category/Nd/list.htm
// for a list of unicode numeric characters.
// Currently only Arabic and Latin numbers are supported, but more
// could be added here in the future.
// Keep this in sync with `isNumeric` below.


exports.useDateSegment = useDateSegment;

function $aa03457fd9c10d7eb3ee10b0f3b23b$var$parseNumber(str) {
  str = str // Arabic Indic
  .replace(/[\u0660-\u0669]/g, c => String(c.charCodeAt(0) - 0x0660)) // Extended Arabic Indic
  .replace(/[\u06f0-\u06f9]/g, c => String(c.charCodeAt(0) - 0x06f0));
  return Number(str);
} // Checks whether a unicode string could be converted to a number.
// Keep this in sync with `parseNumber` above.


function $aa03457fd9c10d7eb3ee10b0f3b23b$var$isNumeric(str) {
  return /^[0-9\u0660-\u0669\u06f0-\u06f9]+$/.test(str);
}

// @ts-ignore
const $c0c316ca7b85ce7d5daf5bd43fbd1c$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($be926026280e076dd0b048671d4b$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bab398828901e91cda5ace996e16743$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($a1b39c1203bddacb07ac8af1bf09f93d$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($de6d54fc6253e3aab217ab66cc92632$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($c62d85e73a4bc4d2d79c4e5438a0a3$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($e7f2c17a4d052730760575ff7cf57df6$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($adfdcb0b7f4822eaafecdabf45f751$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($f9c516e0c25716b7d567ed2$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($ba7274e4009469f7b66a9c93516dc421$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($c64b2869d31111b8a6212d3569c46edc$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($ba1e9adecce613badde3f8b2a91b9$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($da5d80bcf16af82fe7b14fc1e9d9$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($c179e9a34711caa46568a537c351781$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($a40a6dd4cfb1bd1de71f82470d8716$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($b9be9a4b72f2aadd1d314520c1acfc$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($b41d870af1ac3496d01f8698fb5c954$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($fe0c574bf48312400dd82a37538c16ef$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($b0ad35113dfe9f264970b85837$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($c670847f13ef745cf51c4d927173b$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($d59ad4442794aa8d7415835505965b2$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($ea0bd7fd22f4939550fa7411df8295f2$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($c08613207efc8ea834b1fadda995620b$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($c53c2ff9b6580a8da286c11a97f27c0c$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($b374a5303a356023e59a4df3c152bebf$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($e72056058c9fa1ea634cd2d7f7700$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($ab8e21cbc487e19c15c39cc2df98aed6$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($a155de298a83a5c6e328091b4347a$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($f93e8a2d2993e66b87975762a481$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($d90bf5621eeb550e11f07fd645ee9375$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($aa582d9ff36fb511de0ccb22bd9e2bb$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($a1ed5505308b04ac9cd1c488538019c3$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($c6b9bcbebc7c1f385b7e70bbd744b53$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($ae51b3cde9961c4855b77ac499ea$exports).default
};

function useDateField(props) {
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let formatMessage = useMessageFormatter($c0c316ca7b85ce7d5daf5bd43fbd1c$var$intlMessages);
  let fieldProps = useLabels(props, formatMessage('date'));
  let focusManager = useFocusManager(); // This is specifically for mouse events, not touch or keyboard.
  // Focus the last segment on mouse down in the field.

  let onMouseDown = e => {
    e.preventDefault();
    e.stopPropagation();
    focusManager.focusPrevious({
      from: e.target
    });
  };

  return {
    fieldProps: _babelRuntimeHelpersExtends({}, domProps, fieldProps, {
      onMouseDown
    }),
    segmentProps: {
      // Segments should be labeled by the input id if provided, otherwise the field itself
      'aria-labelledby': fieldProps['aria-labelledby'] || fieldProps.id
    }
  };
}

exports.useDateField = useDateField;

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
const $ddcda6963a16ac7df68e63c656b9bc76$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersInteropRequireDefault($be926026280e076dd0b048671d4b$exports).default,
  "bg-BG": _babelRuntimeHelpersInteropRequireDefault($bab398828901e91cda5ace996e16743$exports).default,
  "cs-CZ": _babelRuntimeHelpersInteropRequireDefault($a1b39c1203bddacb07ac8af1bf09f93d$exports).default,
  "da-DK": _babelRuntimeHelpersInteropRequireDefault($de6d54fc6253e3aab217ab66cc92632$exports).default,
  "de-DE": _babelRuntimeHelpersInteropRequireDefault($c62d85e73a4bc4d2d79c4e5438a0a3$exports).default,
  "el-GR": _babelRuntimeHelpersInteropRequireDefault($e7f2c17a4d052730760575ff7cf57df6$exports).default,
  "en-US": _babelRuntimeHelpersInteropRequireDefault($adfdcb0b7f4822eaafecdabf45f751$exports).default,
  "es-ES": _babelRuntimeHelpersInteropRequireDefault($f9c516e0c25716b7d567ed2$exports).default,
  "et-EE": _babelRuntimeHelpersInteropRequireDefault($ba7274e4009469f7b66a9c93516dc421$exports).default,
  "fi-FI": _babelRuntimeHelpersInteropRequireDefault($c64b2869d31111b8a6212d3569c46edc$exports).default,
  "fr-FR": _babelRuntimeHelpersInteropRequireDefault($ba1e9adecce613badde3f8b2a91b9$exports).default,
  "he-IL": _babelRuntimeHelpersInteropRequireDefault($da5d80bcf16af82fe7b14fc1e9d9$exports).default,
  "hr-HR": _babelRuntimeHelpersInteropRequireDefault($c179e9a34711caa46568a537c351781$exports).default,
  "hu-HU": _babelRuntimeHelpersInteropRequireDefault($a40a6dd4cfb1bd1de71f82470d8716$exports).default,
  "it-IT": _babelRuntimeHelpersInteropRequireDefault($b9be9a4b72f2aadd1d314520c1acfc$exports).default,
  "ja-JP": _babelRuntimeHelpersInteropRequireDefault($b41d870af1ac3496d01f8698fb5c954$exports).default,
  "ko-KR": _babelRuntimeHelpersInteropRequireDefault($fe0c574bf48312400dd82a37538c16ef$exports).default,
  "lt-LT": _babelRuntimeHelpersInteropRequireDefault($b0ad35113dfe9f264970b85837$exports).default,
  "lv-LV": _babelRuntimeHelpersInteropRequireDefault($c670847f13ef745cf51c4d927173b$exports).default,
  "nb-NO": _babelRuntimeHelpersInteropRequireDefault($d59ad4442794aa8d7415835505965b2$exports).default,
  "nl-NL": _babelRuntimeHelpersInteropRequireDefault($ea0bd7fd22f4939550fa7411df8295f2$exports).default,
  "pl-PL": _babelRuntimeHelpersInteropRequireDefault($c08613207efc8ea834b1fadda995620b$exports).default,
  "pt-BR": _babelRuntimeHelpersInteropRequireDefault($c53c2ff9b6580a8da286c11a97f27c0c$exports).default,
  "ro-RO": _babelRuntimeHelpersInteropRequireDefault($b374a5303a356023e59a4df3c152bebf$exports).default,
  "ru-RU": _babelRuntimeHelpersInteropRequireDefault($e72056058c9fa1ea634cd2d7f7700$exports).default,
  "sk-SK": _babelRuntimeHelpersInteropRequireDefault($ab8e21cbc487e19c15c39cc2df98aed6$exports).default,
  "sl-SI": _babelRuntimeHelpersInteropRequireDefault($a155de298a83a5c6e328091b4347a$exports).default,
  "sr-SP": _babelRuntimeHelpersInteropRequireDefault($f93e8a2d2993e66b87975762a481$exports).default,
  "sv-SE": _babelRuntimeHelpersInteropRequireDefault($d90bf5621eeb550e11f07fd645ee9375$exports).default,
  "tr-TR": _babelRuntimeHelpersInteropRequireDefault($aa582d9ff36fb511de0ccb22bd9e2bb$exports).default,
  "uk-UA": _babelRuntimeHelpersInteropRequireDefault($a1ed5505308b04ac9cd1c488538019c3$exports).default,
  "zh-CN": _babelRuntimeHelpersInteropRequireDefault($c6b9bcbebc7c1f385b7e70bbd744b53$exports).default,
  "zh-TW": _babelRuntimeHelpersInteropRequireDefault($ae51b3cde9961c4855b77ac499ea$exports).default
};

function useDateRangePicker(props, state) {
  let formatMessage = useMessageFormatter($ddcda6963a16ac7df68e63c656b9bc76$var$intlMessages); // @ts-ignore

  let {
    comboboxProps,
    buttonProps,
    fieldProps,
    dialogProps
  } = useDatePicker(_babelRuntimeHelpersExtends({}, props, useLabels(props, formatMessage('dateRange'))), state);
  let startFieldProps = useLabels({
    'aria-label': formatMessage('startDate'),
    'aria-labelledby': fieldProps['aria-labelledby']
  });
  let endFieldProps = useLabels({
    'aria-label': formatMessage('endDate'),
    'aria-labelledby': fieldProps['aria-labelledby']
  });
  return {
    comboboxProps,
    buttonProps,
    dialogProps,
    startFieldProps,
    endFieldProps
  };
}

exports.useDateRangePicker = useDateRangePicker;
//# sourceMappingURL=main.js.map
