# t

Command line tool for showing time in different time zones and other temporal information.

```
pipx install --user myt
```

```
Usage: t [OPTIONS] COMMAND [ARGS]...

Options:
  -J, --json  Output in JSON
  --help      Show this message and exit.

Commands:
  m      Moon matrix
  s      Sun and moon
  t      Time in different zones
  z      24hrs in time zones (on date)
  zones  List common time zones and UTC offset (on date)
```

## t m

```
Usage: t m [OPTIONS]

Options:
  -y, --year TEXT  Year for calculation
  --help           Show this message and exit.
```

Example (alignment looks OK in terminal): 
```
t m
     Moon phases for year: 2021
     01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31
Jan  🌖 🌖 🌖 🌖 🌗 🌗 🌗 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖
Feb  🌖 🌖 🌗 🌗 🌗 🌗 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌕
Mar  🌖 🌖 🌖 🌖 🌗 🌗 🌗 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌖 🌖
Apr  🌖 🌖 🌗 🌗 🌗 🌗 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖
May  🌖 🌖 🌗 🌗 🌗 🌘 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌓 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖
Jun  🌗 🌗 🌗 🌗 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌖 🌖 🌖 🌖 🌗
Jul  🌗 🌗 🌗 🌘 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖 🌗 🌗
Aug  🌗 🌗 🌘 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌓 🌓 🌓 🌓 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖 🌖 🌗 🌗 🌗
Sep  🌗 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖 🌗 🌗 🌗 🌗
Oct  🌘 🌘 🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖 🌖 🌗 🌗 🌗 🌗 🌘
Nov  🌘 🌘 🌑 🌑 🌑 🌑 🌒 🌒 🌒 🌓 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖 🌖 🌗 🌗 🌗 🌘 🌘
Dec  🌘 🌘 🌑 🌑 🌑 🌒 🌒 🌒 🌒 🌓 🌓 🌓 🌔 🌔 🌔 🌔 🌔 🌕 🌕 🌕 🌖 🌖 🌖 🌖 🌖 🌗 🌗 🌗 🌘 🌘 🌘
```

## t s

```
Usage: t s [OPTIONS]

Options:
  -l, --location TEXT  Location as longitude,latitude (WGS84, dd)
  -t, --date TEXT      Date for calculation
  -f, --format TEXT    Output time format
  --help               Show this message and exit.
```

Example. Rise times are dawn, sunrise, end of golden hour, Set are emas:
```
t s -t "2021-04-24"
Location: -76.6963,39.0715
Rise: 05:51:28  06:19:41  06:56:02
Set:  19:16:19  19:52:39  20:20:52
Moon: 🌔 (0.40)
```

## t t

```
Usage: t t [OPTIONS]

  Time in different zones

Options:
  -t, --date TEXT   Date for calculation
  -z, --zones TEXT  Comma separated list of timezones
  --help            Show this message and exit.
```

Example:
```
t t -t "1 April 8pm"
Local             2021-04-01T20:00:00-0400
Europe/Copenhagen 2021-04-02T02:00:00+0200
UTC               2021-04-02T00:00:00+0000
US/Eastern        2021-04-01T20:00:00-0400
US/Central        2021-04-01T19:00:00-0500
US/Mountain       2021-04-01T18:00:00-0600
America/Phoenix   2021-04-01T17:00:00-0700
US/Pacific        2021-04-01T17:00:00-0700
US/Alaska         2021-04-01T16:00:00-0800
Pacific/Tahiti    2021-04-01T14:00:00-1000
Pacific/Auckland  2021-04-02T13:00:00+1300
Australia/Sydney  2021-04-02T11:00:00+1100
```

## t z

```
Usage: t z [OPTIONS]

  24hrs in time zones (on date)

Options:
  -f, --format TEXT  Output time format
  -t, --date TEXT    Date for calculation
  -z, --zones TEXT   Comma separated list of timezones
  --help             Show this message and exit.
```

Example:
```
t z
Local             07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03 04 05 06
Europe/Copenhagen 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03 04 05 06 07 08 09 10 11
UTC               11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03 04 05 06 07 08 09 10
US/Eastern        07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03 04 05 06
US/Central        06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03 04 05
US/Mountain       05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03 04
America/Phoenix   04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03
US/Pacific        04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02 03
US/Alaska         03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00 01 02
Pacific/Tahiti    01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 00
Pacific/Auckland  00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23
Australia/Sydney  22 23 00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21
```

## t zones

```
Usage: t zones [OPTIONS]

  List common time zones and UTC offset (on date)

Options:
  -t, --date TEXT  Date for calculation
  --help           Show this message and exit.
```

Example:
```
t zones -t "2021-12-21"
-11:00 Pacific/Midway
-11:00 Pacific/Niue
-11:00 Pacific/Pago_Pago
-10:00 America/Adak
-10:00 Pacific/Honolulu
-10:00 Pacific/Rarotonga
-10:00 Pacific/Tahiti
-10:00 US/Hawaii
-09:30 Pacific/Marquesas
...
+00:00 Europe/London
+00:00 GMT
+00:00 UTC
+01:00 Africa/Algiers
...
+13:45 Pacific/Chatham
+14:00 Pacific/Apia
+14:00 Pacific/Kiritimati
```


## Change Log

v0.5.6
- Added handling of bad response from location estimation

v0.5.5 
- Added T_LOCATION and T_LOGLEVEL environment variable options
- Cleaned up some math in suncalc
