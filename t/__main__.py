import sys
import os
import logging
import datetime
import json
import click
import pytz
import dateparser
import t

W  = '\033[0m'  # white (normal)
R  = '\033[31m' # red
G  = '\033[32m' # green
O  = '\033[33m' # orange
B  = '\033[34m' # blue
P  = '\033[35m' # purple

T_FORMAT = "%d_%H"

DEFAULT_ZONES = [
    "Europe/Copenhagen",
    "UTC",
    "US/Eastern",
    "US/Central",
    "US/Mountain",
    "America/Phoenix",
    "US/Pacific",
    "US/Alaska",
    "Pacific/Tahiti",
    "Pacific/Auckland",
    "Australia/Sydney"
]

@click.group()
@click.pass_context
def main(ctx):
    ctx.ensure_object(dict)
    return 0

def _printRow(row, c1=W, c2=W):
    tz = row[0]
    line = f"{tz:17}"
    for v in row[1:]:
        if v.hour < 6 or v.hour > 18:
            sv = f" {O}{v.strftime(T_FORMAT)}{W}"
        else:
            sv = f" {G}{v.strftime(T_FORMAT)}{W}"
        line = line + sv
    line += W
    return line

@main.command("z", help="Show times in zones (on date)")
@click.option("-z", "--zones", default=None, help="Comma separated list of timezones")
@click.option("-t", "--date", default=None, help="Date for calculation")
@click.pass_context
def show_zones(ctx, zones, date):
    if date is None:
        for_date = datetime.datetime.now().astimezone()
    else:
        for_date = dateparser.parse(date, settings={"RETURN_AS_TIMEZONE_AWARE": True})
    if zones is None:
        zones = DEFAULT_ZONES
    t_zones = []
    for tz in zones:
        t_zones.append(pytz.timezone(tz))
    res = t.generateDayMatrix(t_zones, for_date)
    print(_printRow(res[0], W, P))
    for row in res[1:]:
        print(_printRow(row, B, W))

if __name__ == "__main__":
    sys.exit(main())