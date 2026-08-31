using System;
using System.Collections.Generic;
using System.Globalization;

namespace OnelinePatrika.Helpers
{
    public static class NepaliDateHelper
    {
        private static readonly string[] NepaliDigits = { "०", "१", "२", "३", "४", "५", "६", "७", "८", "९" };

        private static readonly string[] NepaliMonths = {
            "बैशाख", "जेठ", "असार", "श्रावण", "भदौ", "असोज",
            "कार्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत"
        };

        private static readonly string[] NepaliDaysOfWeek = {
            "आइतबार", "सोमबार", "मङ्गलबार", "बुधबार", "बिहीबार", "शुक्रबार", "शनिबार"
        };

        // Reference: 2000-01-01 AD was 2056-09-17 BS (Saturday)
        // Reference starting date for modern table: 2000-04-13 AD = 2057-01-01 BS
        private static readonly DateTime RefAdDate = new DateTime(2000, 4, 13);
        private const int RefBsYear = 2057;

        // BS Month day counts from 2057 BS to 2090 BS
        private static readonly Dictionary<int, int[]> BsMonthDays = new Dictionary<int, int[]>
        {
            { 2057, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2058, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2059, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2060, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 } },
            { 2061, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 } },
            { 2062, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 } },
            { 2063, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 } },
            { 2064, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2065, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2066, new[] { 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 } },
            { 2067, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 } },
            { 2068, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2069, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2070, new[] { 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2071, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2072, new[] { 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 } },
            { 2073, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 } },
            { 2074, new[] { 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2075, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2076, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 } },
            { 2077, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 } },
            { 2078, new[] { 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2079, new[] { 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 } },
            { 2080, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 } },
            { 2081, new[] { 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 } },
            { 2082, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 } },
            { 2083, new[] { 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 } },
            { 2084, new[] { 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 } },
            { 2085, new[] { 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30 } },
            { 2086, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 } },
            { 2087, new[] { 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 } },
            { 2088, new[] { 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30 } },
            { 2089, new[] { 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30 } },
            { 2090, new[] { 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 } }
        };

        public static string ToNepaliNumber(int number)
        {
            var str = number.ToString();
            foreach (var pair in new Dictionary<char, string>
            {
                {'0', "०"}, {'1', "१"}, {'2', "२"}, {'3', "३"}, {'4', "४"},
                {'5', "५"}, {'6', "६"}, {'7', "७"}, {'8', "८"}, {'9', "९"}
            })
            {
                str = str.Replace(pair.Key.ToString(), pair.Value);
            }
            return str;
        }

        public static (int Year, int Month, int Day, string MonthName, string DayOfWeek) ConvertToBs(DateTime adDate)
        {
            var totalDays = (int)(adDate.Date - RefAdDate.Date).TotalDays;
            if (totalDays < 0)
            {
                // Fallback for dates before reference
                return (adDate.Year + 57, adDate.Month, adDate.Day, NepaliMonths[(adDate.Month - 1) % 12], NepaliDaysOfWeek[(int)adDate.DayOfWeek]);
            }

            int bsYear = RefBsYear;
            int bsMonth = 1;
            int bsDay = 1;

            while (totalDays > 0)
            {
                if (!BsMonthDays.ContainsKey(bsYear))
                {
                    break;
                }

                int daysInCurrentMonth = BsMonthDays[bsYear][bsMonth - 1];
                if (totalDays >= daysInCurrentMonth)
                {
                    totalDays -= daysInCurrentMonth;
                    bsMonth++;
                    if (bsMonth > 12)
                    {
                        bsMonth = 1;
                        bsYear++;
                    }
                }
                else
                {
                    bsDay += totalDays;
                    totalDays = 0;
                }
            }

            string monthName = (bsMonth >= 1 && bsMonth <= 12) ? NepaliMonths[bsMonth - 1] : "";
            string dayOfWeek = NepaliDaysOfWeek[(int)adDate.DayOfWeek];

            return (bsYear, bsMonth, bsDay, monthName, dayOfWeek);
        }

        public static string GetCurrentDateString(bool isNepali, DateTime? date = null)
        {
            DateTime targetDate = date ?? DateTime.Now;

            if (isNepali)
            {
                var bs = ConvertToBs(targetDate);
                return $"वि.सं. {ToNepaliNumber(bs.Year)} {bs.MonthName} {ToNepaliNumber(bs.Day)}, {bs.DayOfWeek}";
            }
            else
            {
                return targetDate.ToString("MMMM d, yyyy, dddd", CultureInfo.InvariantCulture);
            }
        }
    }
}
