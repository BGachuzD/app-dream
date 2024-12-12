import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekOfTheYear from 'dayjs/plugin/weekOfYear';
import { es } from 'dayjs/locale/es';

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('America/Mexico_City')
dayjs.locale('es');

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);

dayjs.extend(weekOfTheYear);

dayjs.updateLocale('es', {
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'hace unos segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
  weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
  weekdaysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
  weekStart: 1,
  months:
    'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
      '_'
    ),
  monthsShort: 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.'.split('_'),
  ordinal: (n) => `${n}º`,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY HH:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm',
  },
  meridiem: (hour, minute, isLowercase) => {
    if (hour < 12) {
      return 'am';
    } else {
      return 'pm';
    }
  },
});

export { dayjs };
