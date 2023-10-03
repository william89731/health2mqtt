#!/bin/bash

#HOST=$(uname -n)
#mkdir /tmp/$HOST
command -v sensors > /dev/null 2>&1 || MISSING_PACKAGE+=("sensors")
if [[ ! -z "$MISSING_PACKAGE" ]]; then
cpuUsage=$(top -bn1 | awk '/Cpu/ { print $2}')
memTotal=$(free -m | awk '/Mem/{print $2}')
memUsage=$(free -m | awk '/Mem/{print $3}')
memUsage=$(( (memUsage * 100) / memTotal ))
discUsage=$(df / |tail -1|tr -s ' '|cut -d ' ' -f5|tr -d '%')
echo "$cpuUsage" >| /tmp/cpu
echo "$memUsage" >| /tmp/ram
echo "$discUsage" >| /tmp/disc 
    else
    cpuUsage=$(top -bn1 | awk '/Cpu/ { print $2}')
    memTotal=$(free -m | awk '/Mem/{print $2}')
    memUsage=$(free -m | awk '/Mem/{print $3}')
    memUsage=$(( (memUsage * 100) / memTotal ))
    discUsage=$(df / |tail -1|tr -s ' '|cut -d ' ' -f5|tr -d '%')
    temperature=$(sensors | grep "Core 0" | cut -d + -f 2 | cut -d . -f1)
    echo "$cpuUsage" >| /tmp/cpu
    echo "$memUsage" >| /tmp/ram
    echo "$discUsage" >| /tmp/disc
    echo "$temperature" >| /tmp/temp
fi
