import { useSpinButton } from "@react-aria/spinbutton";
import { useFocusManager } from "@react-aria/focus";
import { useState } from "react";
import { usePress } from "@react-aria/interactions";
import { useMessageFormatter, useDateFormatter, useLocale } from "@react-aria/i18n";
import { filterDOMProps, mergeProps, useId, useLabels } from "@react-aria/utils";
import _babelRuntimeHelpersEsmInteropRequireDefault from "@babel/runtime/helpers/esm/interopRequireDefault";
import _babelRuntimeHelpersEsmExtends from "@babel/runtime/helpers/esm/extends";
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ar-AE.json
var $b935bd0cd08a5bbbb1abd3806a771dc4$exports = {};
$b935bd0cd08a5bbbb1abd3806a771dc4$exports = JSON.parse("{\"calendar\":\"التقويم\",\"date\":\"التاريخ\",\"dateRange\":\"نطاق التاريخ\",\"day\":\"اليوم\",\"dayPeriod\":\"الفترة خلال اليوم\",\"endDate\":\"تاريخ الانتهاء\",\"hour\":\"الساعة\",\"minute\":\"الدقيقة\",\"month\":\"الشهر\",\"second\":\"الثانية\",\"startDate\":\"تاريخ البدء\",\"year\":\"العام\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/bg-BG.json
var $fd4c1baa70755ee27b55d9d185ef9a9$exports = {};
$fd4c1baa70755ee27b55d9d185ef9a9$exports = JSON.parse("{\"calendar\":\"Календар\",\"date\":\"Дата\",\"dateRange\":\"Времеви интервал\",\"day\":\"Ден\",\"dayPeriod\":\"Период в дни\",\"endDate\":\"Крайна дата\",\"hour\":\"Час\",\"minute\":\"Минута\",\"month\":\"Месец\",\"second\":\"Секунда\",\"startDate\":\"Начална дата\",\"year\":\"Година\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/cs-CZ.json
var $ec5372c287a16045d039aa0470ed9fb2$exports = {};
$ec5372c287a16045d039aa0470ed9fb2$exports = JSON.parse("{\"calendar\":\"Kalendář\",\"date\":\"Datum\",\"dateRange\":\"Rozsah dat\",\"day\":\"Den\",\"dayPeriod\":\"Denní doba\",\"endDate\":\"Konečné datum\",\"hour\":\"Hodina\",\"minute\":\"Minuta\",\"month\":\"Měsíc\",\"second\":\"Sekunda\",\"startDate\":\"Počáteční datum\",\"year\":\"Rok\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/da-DK.json
var $f6d6f24ad9d284dd48723518690d0e39$exports = {};
$f6d6f24ad9d284dd48723518690d0e39$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Dato\",\"dateRange\":\"Datointerval\",\"day\":\"Dag\",\"dayPeriod\":\"Dagsperiode\",\"endDate\":\"Slutdato\",\"hour\":\"Time\",\"minute\":\"Minut\",\"month\":\"Måned\",\"second\":\"Sekund\",\"startDate\":\"Startdato\",\"year\":\"År\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/de-DE.json
var $cc3534ef504f0b7371d8c5aa254d877f$exports = {};
$cc3534ef504f0b7371d8c5aa254d877f$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Datum\",\"dateRange\":\"Datumsbereich\",\"day\":\"Tag\",\"dayPeriod\":\"Zeitraum\",\"endDate\":\"Enddatum\",\"hour\":\"Stunde\",\"minute\":\"Minute\",\"month\":\"Monat\",\"second\":\"Sekunde\",\"startDate\":\"Anfangsdatum\",\"year\":\"Jahr\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/el-GR.json
var $ebc142984d7760b9cffe23548bb$exports = {};
$ebc142984d7760b9cffe23548bb$exports = JSON.parse("{\"calendar\":\"Ημερολόγιο\",\"date\":\"Ημερομηνία\",\"dateRange\":\"Εύρος ημερομηνιών\",\"day\":\"Ημέρα\",\"dayPeriod\":\"Περίοδος ημερών\",\"endDate\":\"Ημερομηνία λήξης\",\"hour\":\"Ώρα\",\"minute\":\"Λεπτό\",\"month\":\"Μήνας\",\"second\":\"Δευτερόλεπτο\",\"startDate\":\"Ημερομηνία έναρξης\",\"year\":\"Έτος\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/en-US.json
var $f9cbab65725c7cb01e69dde93bd9a$exports = {};
$f9cbab65725c7cb01e69dde93bd9a$exports = JSON.parse("{\"year\":\"Year\",\"month\":\"Month\",\"day\":\"Day\",\"hour\":\"Hour\",\"minute\":\"Minute\",\"second\":\"Second\",\"dayPeriod\":\"Day Period\",\"calendar\":\"Calendar\",\"date\":\"Date\",\"dateRange\":\"Date Range\",\"startDate\":\"Start Date\",\"endDate\":\"End Date\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/es-ES.json
var $b069706710aa3fdbaa20a1b3449d63$exports = {};
$b069706710aa3fdbaa20a1b3449d63$exports = JSON.parse("{\"calendar\":\"Calendario\",\"date\":\"Fecha\",\"dateRange\":\"Intervalo de fecha\",\"day\":\"Día\",\"dayPeriod\":\"Periodo en días\",\"endDate\":\"Fecha final\",\"hour\":\"Hora\",\"minute\":\"Minuto\",\"month\":\"Mes\",\"second\":\"Segundo\",\"startDate\":\"Fecha de inicio\",\"year\":\"Año\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/et-EE.json
var $dc294c753448ff9c1809bca75ab74d1$exports = {};
$dc294c753448ff9c1809bca75ab74d1$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Kuupäev\",\"dateRange\":\"Kuupäevavahemik\",\"day\":\"Päev\",\"dayPeriod\":\"Päeva periood\",\"endDate\":\"Lõppkuupäev\",\"hour\":\"Tund\",\"minute\":\"Minut\",\"month\":\"Kuu\",\"second\":\"Sekund\",\"startDate\":\"Alguskuupäev\",\"year\":\"Aasta\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/fi-FI.json
var $d3f5f76480327eda035ed93c2$exports = {};
$d3f5f76480327eda035ed93c2$exports = JSON.parse("{\"calendar\":\"Kalenteri\",\"date\":\"Päivämäärä\",\"dateRange\":\"Päivämääräalue\",\"day\":\"Päivä\",\"dayPeriod\":\"Päiväalue\",\"endDate\":\"Päättymispäivä\",\"hour\":\"Tunti\",\"minute\":\"Minuutti\",\"month\":\"Kuukausi\",\"second\":\"Sekunti\",\"startDate\":\"Alkamispäivä\",\"year\":\"Vuosi\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/fr-FR.json
var $b627132da032b4209b5582508dfe332$exports = {};
$b627132da032b4209b5582508dfe332$exports = JSON.parse("{\"calendar\":\"Calendrier\",\"date\":\"Date\",\"dateRange\":\"Plage de dates\",\"day\":\"Jour\",\"dayPeriod\":\"Période\",\"endDate\":\"Date de fin\",\"hour\":\"Heure\",\"minute\":\"Minute\",\"month\":\"Mois\",\"second\":\"Seconde\",\"startDate\":\"Date de début\",\"year\":\"Année\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/he-IL.json
var $c3959c7b2e7e08ef514631ba3c2fdb$exports = {};
$c3959c7b2e7e08ef514631ba3c2fdb$exports = JSON.parse("{\"calendar\":\"לוח שנה\",\"date\":\"תאריך\",\"dateRange\":\"טווח תאריכים\",\"day\":\"יום\",\"dayPeriod\":\"תקופה בימים\",\"endDate\":\"תאריך סיום\",\"hour\":\"שעה\",\"minute\":\"דקה\",\"month\":\"חודש\",\"second\":\"שנייה\",\"startDate\":\"תאריך התחלה\",\"year\":\"שנה\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/hr-HR.json
var $ca3a95147a2664e1a3c49130ccfb87$exports = {};
$ca3a95147a2664e1a3c49130ccfb87$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"date\":\"Datum\",\"dateRange\":\"Raspon datuma\",\"day\":\"Dan\",\"dayPeriod\":\"Dnevno razdoblje\",\"endDate\":\"Datum završetka\",\"hour\":\"Sat\",\"minute\":\"Minuta\",\"month\":\"Mjesec\",\"second\":\"Drugi\",\"startDate\":\"Datum početka\",\"year\":\"Godina\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/hu-HU.json
var $fa6b6e78fd909c4deb0805c4ff5df60$exports = {};
$fa6b6e78fd909c4deb0805c4ff5df60$exports = JSON.parse("{\"calendar\":\"Naptár\",\"date\":\"Dátum\",\"dateRange\":\"Dátumtartomány\",\"day\":\"Nap\",\"dayPeriod\":\"Napszak\",\"endDate\":\"Befejező dátum\",\"hour\":\"Óra\",\"minute\":\"Perc\",\"month\":\"Hónap\",\"second\":\"Másodperc\",\"startDate\":\"Kezdő dátum\",\"year\":\"Év\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/it-IT.json
var $bb4837487a35e965bc77709590fda45$exports = {};
$bb4837487a35e965bc77709590fda45$exports = JSON.parse("{\"calendar\":\"Calendario\",\"date\":\"Data\",\"dateRange\":\"Intervallo date\",\"day\":\"Giorno\",\"dayPeriod\":\"Periodo di giorni\",\"endDate\":\"Data finale\",\"hour\":\"Ora\",\"minute\":\"Minuti\",\"month\":\"Mese\",\"second\":\"Secondi\",\"startDate\":\"Data iniziale\",\"year\":\"Anno\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ja-JP.json
var $f021a923ac58a1406a8f3f0bfd5f718$exports = {};
$f021a923ac58a1406a8f3f0bfd5f718$exports = JSON.parse("{\"calendar\":\"カレンダー\",\"date\":\"日付\",\"dateRange\":\"日付範囲\",\"day\":\"日\",\"dayPeriod\":\"期間\",\"endDate\":\"終了日\",\"hour\":\"時間\",\"minute\":\"分\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日\",\"year\":\"年\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ko-KR.json
var $e1a2895f7736c57623c5df88ed61$exports = {};
$e1a2895f7736c57623c5df88ed61$exports = JSON.parse("{\"calendar\":\"달력\",\"date\":\"날짜\",\"dateRange\":\"날짜 범위\",\"day\":\"요일\",\"dayPeriod\":\"일 기간\",\"endDate\":\"종료 날짜\",\"hour\":\"시간\",\"minute\":\"분\",\"month\":\"개월\",\"second\":\"초\",\"startDate\":\"시작 날짜\",\"year\":\"연도\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/lt-LT.json
var $ee477dd4ee39b2586e7d93e4241$exports = {};
$ee477dd4ee39b2586e7d93e4241$exports = JSON.parse("{\"calendar\":\"Kalendorius\",\"date\":\"Data\",\"dateRange\":\"Datų intervalas\",\"day\":\"Diena\",\"dayPeriod\":\"Dienos laikotarpis\",\"endDate\":\"Pabaigos data\",\"hour\":\"Valanda\",\"minute\":\"Minutė\",\"month\":\"Mėnuo\",\"second\":\"Sekundė\",\"startDate\":\"Pradžios data\",\"year\":\"Metai\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/lv-LV.json
var $c216567e87e3bd12ecb2f27ce189a5b$exports = {};
$c216567e87e3bd12ecb2f27ce189a5b$exports = JSON.parse("{\"calendar\":\"Kalendārs\",\"date\":\"Datums\",\"dateRange\":\"Datumu diapazons\",\"day\":\"Diena\",\"dayPeriod\":\"Dienu periods\",\"endDate\":\"Beigu datums\",\"hour\":\"Stunda\",\"minute\":\"Minūte\",\"month\":\"Mēnesis\",\"second\":\"Sekunde\",\"startDate\":\"Sākuma datums\",\"year\":\"Gads\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/nb-NO.json
var $d57cd730bb11b14bdcd692e702bb0e60$exports = {};
$d57cd730bb11b14bdcd692e702bb0e60$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Dato\",\"dateRange\":\"Datoområde\",\"day\":\"Dag\",\"dayPeriod\":\"Dagsperiode\",\"endDate\":\"Sluttdato\",\"hour\":\"Time\",\"minute\":\"Minutt\",\"month\":\"Måned\",\"second\":\"Sekund\",\"startDate\":\"Startdato\",\"year\":\"År\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/nl-NL.json
var $bd8f8fc2a02532c55851f18c8de3$exports = {};
$bd8f8fc2a02532c55851f18c8de3$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Datum\",\"dateRange\":\"Datumbereik\",\"day\":\"Dag\",\"dayPeriod\":\"Dagdeel\",\"endDate\":\"Einddatum\",\"hour\":\"Uur\",\"minute\":\"Minuut\",\"month\":\"Maand\",\"second\":\"Seconde\",\"startDate\":\"Startdatum\",\"year\":\"Jaar\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/pl-PL.json
var $d8e1a561b4b79d4ead55e4ee5ea09970$exports = {};
$d8e1a561b4b79d4ead55e4ee5ea09970$exports = JSON.parse("{\"calendar\":\"Kalendarz\",\"date\":\"Data\",\"dateRange\":\"Zakres dat\",\"day\":\"Dzień\",\"dayPeriod\":\"Okres dni\",\"endDate\":\"Data końcowa\",\"hour\":\"Godzina\",\"minute\":\"Minuta\",\"month\":\"Miesiąc\",\"second\":\"Sekunda\",\"startDate\":\"Data początkowa\",\"year\":\"Rok\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/pt-BR.json
var $d479a80df73293910fe373596d18f$exports = {};
$d479a80df73293910fe373596d18f$exports = JSON.parse("{\"calendar\":\"Calendário\",\"date\":\"Data\",\"dateRange\":\"Intervalo de datas\",\"day\":\"Dia\",\"dayPeriod\":\"Período do dia\",\"endDate\":\"Data final\",\"hour\":\"Hora\",\"minute\":\"Minuto\",\"month\":\"Mês\",\"second\":\"Segundo\",\"startDate\":\"Data inicial\",\"year\":\"Ano\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ro-RO.json
var $f25e8d5f5e9099b97d639d4f299ba$exports = {};
$f25e8d5f5e9099b97d639d4f299ba$exports = JSON.parse("{\"calendar\":\"Calendar\",\"date\":\"Dată\",\"dateRange\":\"Raza datei\",\"day\":\"Zi\",\"dayPeriod\":\"Perioada zilei\",\"endDate\":\"Dată final\",\"hour\":\"Oră\",\"minute\":\"Minut\",\"month\":\"Lună\",\"second\":\"Secundă\",\"startDate\":\"Dată început\",\"year\":\"An\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/ru-RU.json
var $da94598d7d1c854d87360883488$exports = {};
$da94598d7d1c854d87360883488$exports = JSON.parse("{\"calendar\":\"Календарь\",\"date\":\"Дата\",\"dateRange\":\"Диапазон дат\",\"day\":\"День\",\"dayPeriod\":\"Период дня\",\"endDate\":\"Дата окончания\",\"hour\":\"Час\",\"minute\":\"Минута\",\"month\":\"Месяц\",\"second\":\"Секунда\",\"startDate\":\"Дата начала\",\"year\":\"Год\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sk-SK.json
var $d1513dad87da1caa61156c979822ded2$exports = {};
$d1513dad87da1caa61156c979822ded2$exports = JSON.parse("{\"calendar\":\"Kalendár\",\"date\":\"Dátum\",\"dateRange\":\"Rozsah dátumov\",\"day\":\"Deň\",\"dayPeriod\":\"Časť dňa\",\"endDate\":\"Dátum ukončenia\",\"hour\":\"Hodina\",\"minute\":\"Minúta\",\"month\":\"Mesiac\",\"second\":\"Sekunda\",\"startDate\":\"Dátum začatia\",\"year\":\"Rok\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sl-SI.json
var $e16512e37a1c3ef90ecfc72d16793c1$exports = {};
$e16512e37a1c3ef90ecfc72d16793c1$exports = JSON.parse("{\"calendar\":\"Koledar\",\"date\":\"Datum\",\"dateRange\":\"Datumski obseg\",\"day\":\"Dan\",\"dayPeriod\":\"Obdobje dneva\",\"endDate\":\"Datum konca\",\"hour\":\"Ura\",\"minute\":\"Minuta\",\"month\":\"Mesec\",\"second\":\"Sekunda\",\"startDate\":\"Datum začetka\",\"year\":\"Leto\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sr-SP.json
var $f0f0ea292848c1c22e92d1c71347950$exports = {};
$f0f0ea292848c1c22e92d1c71347950$exports = JSON.parse("{\"calendar\":\"Kalendar\",\"date\":\"Datum\",\"dateRange\":\"Opseg datuma\",\"day\":\"Dan\",\"dayPeriod\":\"Dnevni period\",\"endDate\":\"Datum završetka\",\"hour\":\"Čas\",\"minute\":\"Minut\",\"month\":\"Mesec\",\"second\":\"Drugi\",\"startDate\":\"Datum početka\",\"year\":\"Godina\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/sv-SE.json
var $ddeb3363257d0b1fab7fb0169309987$exports = {};
$ddeb3363257d0b1fab7fb0169309987$exports = JSON.parse("{\"calendar\":\"Kalender\",\"date\":\"Datum\",\"dateRange\":\"Datumintervall\",\"day\":\"Dag\",\"dayPeriod\":\"Dagsperiod\",\"endDate\":\"Slutdatum\",\"hour\":\"Timme\",\"minute\":\"Minut\",\"month\":\"Månad\",\"second\":\"Sekund\",\"startDate\":\"Startdatum\",\"year\":\"År\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/tr-TR.json
var $e41e18d940cc1fd6ce3b548eaf26f$exports = {};
$e41e18d940cc1fd6ce3b548eaf26f$exports = JSON.parse("{\"calendar\":\"Takvim\",\"date\":\"Tarih\",\"dateRange\":\"Tarih Aralığı\",\"day\":\"Gün\",\"dayPeriod\":\"Gün Aralığı\",\"endDate\":\"Bitiş Tarihi\",\"hour\":\"Saat\",\"minute\":\"Dakika\",\"month\":\"Ay\",\"second\":\"Saniye\",\"startDate\":\"Başlangıç Tarihi\",\"year\":\"Yıl\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/uk-UA.json
var $c7fbfea59f1f84c3fbdb550bd45e1a8d$exports = {};
$c7fbfea59f1f84c3fbdb550bd45e1a8d$exports = JSON.parse("{\"calendar\":\"Календар\",\"date\":\"Дата\",\"dateRange\":\"Діапазон дат\",\"day\":\"День\",\"dayPeriod\":\"Період дня\",\"endDate\":\"Дата завершення\",\"hour\":\"Година\",\"minute\":\"Хвилина\",\"month\":\"Місяць\",\"second\":\"Секунда\",\"startDate\":\"Дата початку\",\"year\":\"Рік\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/zh-CN.json
var $c5ee38283255212ee41b3baf5b8304d$exports = {};
$c5ee38283255212ee41b3baf5b8304d$exports = JSON.parse("{\"calendar\":\"日历\",\"date\":\"日期\",\"dateRange\":\"日期范围\",\"day\":\"日\",\"dayPeriod\":\"时段\",\"endDate\":\"结束日期\",\"hour\":\"小时\",\"minute\":\"分钟\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"开始日期\",\"year\":\"年\"}");
// ASSET: /home/mburri/dev/jsonforms/react-spectrum/packages/@react-aria/datepicker/intl/zh-TW.json
var $e4f38d4b06a7a74952e9f6dec2e6e20$exports = {};
$e4f38d4b06a7a74952e9f6dec2e6e20$exports = JSON.parse("{\"calendar\":\"日曆\",\"date\":\"日期\",\"dateRange\":\"日期範圍\",\"day\":\"日\",\"dayPeriod\":\"日期間\",\"endDate\":\"結束日期\",\"hour\":\"小時\",\"minute\":\"分鐘\",\"month\":\"月\",\"second\":\"秒\",\"startDate\":\"開始日期\",\"year\":\"年\"}");
// @ts-ignore
const $c154dc72a1c6e7eac4dc4005915dd53b$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b935bd0cd08a5bbbb1abd3806a771dc4$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($fd4c1baa70755ee27b55d9d185ef9a9$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($ec5372c287a16045d039aa0470ed9fb2$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($f6d6f24ad9d284dd48723518690d0e39$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($cc3534ef504f0b7371d8c5aa254d877f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($ebc142984d7760b9cffe23548bb$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($f9cbab65725c7cb01e69dde93bd9a$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($b069706710aa3fdbaa20a1b3449d63$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($dc294c753448ff9c1809bca75ab74d1$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($d3f5f76480327eda035ed93c2$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($b627132da032b4209b5582508dfe332$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($c3959c7b2e7e08ef514631ba3c2fdb$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($ca3a95147a2664e1a3c49130ccfb87$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($fa6b6e78fd909c4deb0805c4ff5df60$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($bb4837487a35e965bc77709590fda45$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($f021a923ac58a1406a8f3f0bfd5f718$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($e1a2895f7736c57623c5df88ed61$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($ee477dd4ee39b2586e7d93e4241$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($c216567e87e3bd12ecb2f27ce189a5b$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($d57cd730bb11b14bdcd692e702bb0e60$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($bd8f8fc2a02532c55851f18c8de3$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($d8e1a561b4b79d4ead55e4ee5ea09970$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($d479a80df73293910fe373596d18f$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($f25e8d5f5e9099b97d639d4f299ba$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($da94598d7d1c854d87360883488$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($d1513dad87da1caa61156c979822ded2$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($e16512e37a1c3ef90ecfc72d16793c1$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($f0f0ea292848c1c22e92d1c71347950$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($ddeb3363257d0b1fab7fb0169309987$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($e41e18d940cc1fd6ce3b548eaf26f$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c7fbfea59f1f84c3fbdb550bd45e1a8d$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($c5ee38283255212ee41b3baf5b8304d$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($e4f38d4b06a7a74952e9f6dec2e6e20$exports).default
};
export function useDatePicker(props, state) {
  let buttonId = useId();
  let dialogId = useId();
  let formatMessage = useMessageFormatter($c154dc72a1c6e7eac4dc4005915dd53b$var$intlMessages);
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
    comboboxProps: mergeProps(domProps, _babelRuntimeHelpersEsmExtends({
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
// @ts-ignore
const $a3c737552b62dda3ec78a070d647$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b935bd0cd08a5bbbb1abd3806a771dc4$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($fd4c1baa70755ee27b55d9d185ef9a9$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($ec5372c287a16045d039aa0470ed9fb2$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($f6d6f24ad9d284dd48723518690d0e39$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($cc3534ef504f0b7371d8c5aa254d877f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($ebc142984d7760b9cffe23548bb$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($f9cbab65725c7cb01e69dde93bd9a$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($b069706710aa3fdbaa20a1b3449d63$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($dc294c753448ff9c1809bca75ab74d1$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($d3f5f76480327eda035ed93c2$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($b627132da032b4209b5582508dfe332$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($c3959c7b2e7e08ef514631ba3c2fdb$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($ca3a95147a2664e1a3c49130ccfb87$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($fa6b6e78fd909c4deb0805c4ff5df60$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($bb4837487a35e965bc77709590fda45$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($f021a923ac58a1406a8f3f0bfd5f718$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($e1a2895f7736c57623c5df88ed61$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($ee477dd4ee39b2586e7d93e4241$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($c216567e87e3bd12ecb2f27ce189a5b$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($d57cd730bb11b14bdcd692e702bb0e60$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($bd8f8fc2a02532c55851f18c8de3$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($d8e1a561b4b79d4ead55e4ee5ea09970$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($d479a80df73293910fe373596d18f$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($f25e8d5f5e9099b97d639d4f299ba$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($da94598d7d1c854d87360883488$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($d1513dad87da1caa61156c979822ded2$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($e16512e37a1c3ef90ecfc72d16793c1$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($f0f0ea292848c1c22e92d1c71347950$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($ddeb3363257d0b1fab7fb0169309987$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($e41e18d940cc1fd6ce3b548eaf26f$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c7fbfea59f1f84c3fbdb550bd45e1a8d$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($c5ee38283255212ee41b3baf5b8304d$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($e4f38d4b06a7a74952e9f6dec2e6e20$exports).default
};
export function useDateSegment(props, segment, state) {
  let [enteredKeys, setEnteredKeys] = useState('');
  let {
    direction
  } = useLocale();
  let messageFormatter = useMessageFormatter($a3c737552b62dda3ec78a070d647$var$intlMessages);
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

          if ($a3c737552b62dda3ec78a070d647$var$isNumeric(segment.text) && !props.isReadOnly) {
            let newValue = segment.text.slice(0, -1);
            state.setSegment(segment.type, newValue.length === 0 ? segment.minValue : $a3c737552b62dda3ec78a070d647$var$parseNumber(newValue));
            setEnteredKeys(newValue);
          }

          break;
        }

      default:
        e.preventDefault();
        e.stopPropagation();

        if (($a3c737552b62dda3ec78a070d647$var$isNumeric(e.key) || /^[ap]$/.test(e.key)) && !props.isReadOnly) {
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
          if (!$a3c737552b62dda3ec78a070d647$var$isNumeric(newValue)) {
            return;
          }

          let numberValue = $a3c737552b62dda3ec78a070d647$var$parseNumber(newValue);
          let segmentValue = numberValue;

          if (segment.type === 'hour' && state.dateFormatter.resolvedOptions().hour12 && numberValue === 12) {
            segmentValue = 0;
          } else if (numberValue > segment.maxValue) {
            segmentValue = $a3c737552b62dda3ec78a070d647$var$parseNumber(key);
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

function $a3c737552b62dda3ec78a070d647$var$parseNumber(str) {
  str = str // Arabic Indic
  .replace(/[\u0660-\u0669]/g, c => String(c.charCodeAt(0) - 0x0660)) // Extended Arabic Indic
  .replace(/[\u06f0-\u06f9]/g, c => String(c.charCodeAt(0) - 0x06f0));
  return Number(str);
} // Checks whether a unicode string could be converted to a number.
// Keep this in sync with `parseNumber` above.


function $a3c737552b62dda3ec78a070d647$var$isNumeric(str) {
  return /^[0-9\u0660-\u0669\u06f0-\u06f9]+$/.test(str);
}

// @ts-ignore
const $b90b69b9bc1d1018a09749feb$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b935bd0cd08a5bbbb1abd3806a771dc4$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($fd4c1baa70755ee27b55d9d185ef9a9$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($ec5372c287a16045d039aa0470ed9fb2$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($f6d6f24ad9d284dd48723518690d0e39$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($cc3534ef504f0b7371d8c5aa254d877f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($ebc142984d7760b9cffe23548bb$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($f9cbab65725c7cb01e69dde93bd9a$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($b069706710aa3fdbaa20a1b3449d63$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($dc294c753448ff9c1809bca75ab74d1$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($d3f5f76480327eda035ed93c2$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($b627132da032b4209b5582508dfe332$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($c3959c7b2e7e08ef514631ba3c2fdb$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($ca3a95147a2664e1a3c49130ccfb87$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($fa6b6e78fd909c4deb0805c4ff5df60$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($bb4837487a35e965bc77709590fda45$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($f021a923ac58a1406a8f3f0bfd5f718$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($e1a2895f7736c57623c5df88ed61$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($ee477dd4ee39b2586e7d93e4241$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($c216567e87e3bd12ecb2f27ce189a5b$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($d57cd730bb11b14bdcd692e702bb0e60$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($bd8f8fc2a02532c55851f18c8de3$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($d8e1a561b4b79d4ead55e4ee5ea09970$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($d479a80df73293910fe373596d18f$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($f25e8d5f5e9099b97d639d4f299ba$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($da94598d7d1c854d87360883488$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($d1513dad87da1caa61156c979822ded2$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($e16512e37a1c3ef90ecfc72d16793c1$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($f0f0ea292848c1c22e92d1c71347950$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($ddeb3363257d0b1fab7fb0169309987$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($e41e18d940cc1fd6ce3b548eaf26f$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c7fbfea59f1f84c3fbdb550bd45e1a8d$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($c5ee38283255212ee41b3baf5b8304d$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($e4f38d4b06a7a74952e9f6dec2e6e20$exports).default
};
export function useDateField(props) {
  let domProps = filterDOMProps(props, {
    labelable: true
  });
  let formatMessage = useMessageFormatter($b90b69b9bc1d1018a09749feb$var$intlMessages);
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
    fieldProps: _babelRuntimeHelpersEsmExtends({}, domProps, fieldProps, {
      onMouseDown
    }),
    segmentProps: {
      // Segments should be labeled by the input id if provided, otherwise the field itself
      'aria-labelledby': fieldProps['aria-labelledby'] || fieldProps.id
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
const $eb0a25d35efaafa331308f687b4f492$var$intlMessages = {
  "ar-AE": _babelRuntimeHelpersEsmInteropRequireDefault($b935bd0cd08a5bbbb1abd3806a771dc4$exports).default,
  "bg-BG": _babelRuntimeHelpersEsmInteropRequireDefault($fd4c1baa70755ee27b55d9d185ef9a9$exports).default,
  "cs-CZ": _babelRuntimeHelpersEsmInteropRequireDefault($ec5372c287a16045d039aa0470ed9fb2$exports).default,
  "da-DK": _babelRuntimeHelpersEsmInteropRequireDefault($f6d6f24ad9d284dd48723518690d0e39$exports).default,
  "de-DE": _babelRuntimeHelpersEsmInteropRequireDefault($cc3534ef504f0b7371d8c5aa254d877f$exports).default,
  "el-GR": _babelRuntimeHelpersEsmInteropRequireDefault($ebc142984d7760b9cffe23548bb$exports).default,
  "en-US": _babelRuntimeHelpersEsmInteropRequireDefault($f9cbab65725c7cb01e69dde93bd9a$exports).default,
  "es-ES": _babelRuntimeHelpersEsmInteropRequireDefault($b069706710aa3fdbaa20a1b3449d63$exports).default,
  "et-EE": _babelRuntimeHelpersEsmInteropRequireDefault($dc294c753448ff9c1809bca75ab74d1$exports).default,
  "fi-FI": _babelRuntimeHelpersEsmInteropRequireDefault($d3f5f76480327eda035ed93c2$exports).default,
  "fr-FR": _babelRuntimeHelpersEsmInteropRequireDefault($b627132da032b4209b5582508dfe332$exports).default,
  "he-IL": _babelRuntimeHelpersEsmInteropRequireDefault($c3959c7b2e7e08ef514631ba3c2fdb$exports).default,
  "hr-HR": _babelRuntimeHelpersEsmInteropRequireDefault($ca3a95147a2664e1a3c49130ccfb87$exports).default,
  "hu-HU": _babelRuntimeHelpersEsmInteropRequireDefault($fa6b6e78fd909c4deb0805c4ff5df60$exports).default,
  "it-IT": _babelRuntimeHelpersEsmInteropRequireDefault($bb4837487a35e965bc77709590fda45$exports).default,
  "ja-JP": _babelRuntimeHelpersEsmInteropRequireDefault($f021a923ac58a1406a8f3f0bfd5f718$exports).default,
  "ko-KR": _babelRuntimeHelpersEsmInteropRequireDefault($e1a2895f7736c57623c5df88ed61$exports).default,
  "lt-LT": _babelRuntimeHelpersEsmInteropRequireDefault($ee477dd4ee39b2586e7d93e4241$exports).default,
  "lv-LV": _babelRuntimeHelpersEsmInteropRequireDefault($c216567e87e3bd12ecb2f27ce189a5b$exports).default,
  "nb-NO": _babelRuntimeHelpersEsmInteropRequireDefault($d57cd730bb11b14bdcd692e702bb0e60$exports).default,
  "nl-NL": _babelRuntimeHelpersEsmInteropRequireDefault($bd8f8fc2a02532c55851f18c8de3$exports).default,
  "pl-PL": _babelRuntimeHelpersEsmInteropRequireDefault($d8e1a561b4b79d4ead55e4ee5ea09970$exports).default,
  "pt-BR": _babelRuntimeHelpersEsmInteropRequireDefault($d479a80df73293910fe373596d18f$exports).default,
  "ro-RO": _babelRuntimeHelpersEsmInteropRequireDefault($f25e8d5f5e9099b97d639d4f299ba$exports).default,
  "ru-RU": _babelRuntimeHelpersEsmInteropRequireDefault($da94598d7d1c854d87360883488$exports).default,
  "sk-SK": _babelRuntimeHelpersEsmInteropRequireDefault($d1513dad87da1caa61156c979822ded2$exports).default,
  "sl-SI": _babelRuntimeHelpersEsmInteropRequireDefault($e16512e37a1c3ef90ecfc72d16793c1$exports).default,
  "sr-SP": _babelRuntimeHelpersEsmInteropRequireDefault($f0f0ea292848c1c22e92d1c71347950$exports).default,
  "sv-SE": _babelRuntimeHelpersEsmInteropRequireDefault($ddeb3363257d0b1fab7fb0169309987$exports).default,
  "tr-TR": _babelRuntimeHelpersEsmInteropRequireDefault($e41e18d940cc1fd6ce3b548eaf26f$exports).default,
  "uk-UA": _babelRuntimeHelpersEsmInteropRequireDefault($c7fbfea59f1f84c3fbdb550bd45e1a8d$exports).default,
  "zh-CN": _babelRuntimeHelpersEsmInteropRequireDefault($c5ee38283255212ee41b3baf5b8304d$exports).default,
  "zh-TW": _babelRuntimeHelpersEsmInteropRequireDefault($e4f38d4b06a7a74952e9f6dec2e6e20$exports).default
};
export function useDateRangePicker(props, state) {
  let formatMessage = useMessageFormatter($eb0a25d35efaafa331308f687b4f492$var$intlMessages); // @ts-ignore

  let {
    comboboxProps,
    buttonProps,
    fieldProps,
    dialogProps
  } = useDatePicker(_babelRuntimeHelpersEsmExtends({}, props, useLabels(props, formatMessage('dateRange'))), state);
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
//# sourceMappingURL=module.js.map
