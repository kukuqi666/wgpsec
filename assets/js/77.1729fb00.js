(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{828:function(s,n,e){"use strict";e.r(n);var a=e(79),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"前言"}},[s._v("前言 "),n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")])]),s._v(" "),n("blockquote",[n("p",[s._v("注：本文中的工具均来源自互联网，后门自查。工具可在pan.wgpsec.org 下载")])]),s._v(" "),n("p",[s._v("在进入目标域后，对域内主机进行存活探测是不可或缺的一步。")]),s._v(" "),n("h2",{attrs:{id:"_1、ping"}},[s._v("1、ping "),n("a",{staticClass:"header-anchor",attrs:{href:"#_1、ping"}},[s._v("#")])]),s._v(" "),n("p",[s._v("使用 ping 进行检测的优点是不容易触发检测规则，缺点是速度较慢，如果目标开启了禁止 ping 的策略，那这个方法就 gg 了。")]),s._v(" "),n("h3",{attrs:{id:"windows"}},[s._v("Windows "),n("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('for /l %i in (1,1,255) do @ping 192.168.7.%i -w 1 -n 1|find /i "ttl="\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('C:\\Users\\daniel10>for /l %i in (1,1,255) do @ping 192.168.7.%i -w 1 -n 1|find /i "ttl="\n来自 192.168.7.7 的回复: 字节=32 时间<1ms TTL=128\n来自 192.168.7.107 的回复: 字节=32 时间=1ms TTL=64\n来自 192.168.7.110 的回复: 字节=32 时间<1ms TTL=128\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"linux"}},[s._v("Linux "),n("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('for k in $( seq 1 255);do ping -c 1 192.168.7.$k|grep "ttl"|awk -F "[ :]+" \'{print $4}\'; done\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('teamssix@localhost:~#  for k in $( seq 1 255);do ping -c 1 192.168.7.$k|grep "ttl"|awk -F "[ :]+" \'{print $4}\'; done\n192.168.7.7\n192.168.7.107\n192.168.7.110\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"vbs"}},[s._v("VBS "),n("a",{staticClass:"header-anchor",attrs:{href:"#vbs"}},[s._v("#")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('strSubNet = "192.168.7."  \nSet objFSO= CreateObject("Scripting.FileSystemObject")  \nSet objTS = objfso.CreateTextFile("C:\\Result.txt")   \nFor i = 1 To 254  \nstrComputer = strSubNet & i  \nblnResult = Ping(strComputer)  \nIf blnResult = True Then  \nobjTS.WriteLine strComputer & " is alived ! :) "  \nEnd If  \nNext   \nobjTS.Close  \nWScript.Echo "All Ping Scan , All Done ! :) "    \nFunction Ping(strComputer)  \nSet objWMIService = GetObject("winmgmts:\\\\.\\root\\cimv2") \nSet colItems = objWMIService.ExecQuery("Select * From Win32_PingStatus Where Address=\'" & strComputer & "\'") \nFor Each objItem In colItems  \nSelect case objItem.StatusCode  \nCase 0  \nPing = True  \nCase Else  \nPing = False  \nEnd select  \nExit For  \nNext  \nEnd Function\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h2",{attrs:{id:"_2、powershell"}},[s._v("2、PowerShell "),n("a",{staticClass:"header-anchor",attrs:{href:"#_2、powershell"}},[s._v("#")])]),s._v(" "),n("h3",{attrs:{id:"tspingsweep"}},[s._v("TSPingSweep "),n("a",{staticClass:"header-anchor",attrs:{href:"#tspingsweep"}},[s._v("#")])]),s._v(" "),n("p",[s._v("PowerShell TSPingSweep 扫描脚本下载地址：")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://raw.githubusercontent.com/dwj7738/My-Powershell-Repository/master/Scripts/Invoke-TSPingSweep.ps1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://raw.githubusercontent.com/dwj7738/My-Powershell-Repository/master/Scripts/Invoke-TSPingSweep.ps1"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("[狼盘下载 Invoke-TSPingSweep.ps1](https://pan.wgpsec.org/d/public/4-后渗透 & 域渗透/主机发现/Invoke-TSPingSweep.ps1)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('powershell.exe -exec bypass -Command "Import-Module ./Invoke-TSPingSweep.ps1; Invoke-TSPingSweep -StartAddress 192.168.7.1 -EndAddress 192.168.7.254 -ResolveHost -ScanPort -Port 445,135"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://teamssix.oss-cn-hangzhou.aliyuncs.com/Snipaste_2021-02-23_21-02-52.png",alt:""}})]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('C:\\Users\\daniel10>powershell.exe -exec bypass -Command "Import-Module ./Invoke-TSPingSweep.ps1; Invoke-TSPingSweep -StartAddress 192.168.7.1 -EndAddress 192.168.7.254 -ResolveHost -ScanPort -Port 445,135"\nIPAddress     HostName             Ports\n---------     --------             -----\n192.168.7.7   dc.teamssix.com      {445, 135}\n192.168.7.107 DANIEL7.teamssix.com {445, 135}\n192.168.7.110 daniel10.teamssix... {445, 135}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"arpscan"}},[s._v("ARPScan "),n("a",{staticClass:"header-anchor",attrs:{href:"#arpscan"}},[s._v("#")])]),s._v(" "),n("p",[s._v("PowerShell ARPScan 扫描脚本下载地址："),n("a",{attrs:{href:"https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/situational_awareness/network/Invoke-ARPScan.ps1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://raw.githubusercontent.com/EmpireProject/Empire/master/data/module_source/situational_awareness/network/Invoke-ARPScan.ps1"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("[狼盘下载 Invoke-ARPScan.ps1](https://pan.wgpsec.org/d/public/4-后渗透 & 域渗透/主机发现/Invoke-ARPScan.ps1)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('powershell.exe -exec bypass -Command "Import-Module ./Invoke-ARPScan.ps1; Invoke-ARPScan -CIDR 192.168.7.0/24"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('C:\\Users\\daniel10>powershell.exe -exec bypass -Command "Import-Module ./Invoke-ARPScan.ps1; Invoke-ARPScan -CIDR 192.168.7.0/24"\nMAC               Address\n---               -------\n16:7D:DA:D7:8F:64 192.168.7.1\n00:0C:29:1D:82:CF 192.168.7.7\n00:0C:29:A9:62:98 192.168.7.107\n00:0C:29:DC:01:0D 192.168.7.110\n00:0C:29:DC:01:0D 192.168.7.255\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_3、arp-scan"}},[s._v("3、arp-scan "),n("a",{staticClass:"header-anchor",attrs:{href:"#_3、arp-scan"}},[s._v("#")])]),s._v(" "),n("p",[s._v("arp-scan 使用 ARP 协议进行探测。arp-scan Windows 下载地址："),n("a",{attrs:{href:"https://github.com/QbsuranAlang/arp-scan-windows-",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/QbsuranAlang/arp-scan-windows-"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://pan.wgpsec.org/public/4-%E5%90%8E%E6%B8%97%E9%80%8F%20&%20%E5%9F%9F%E6%B8%97%E9%80%8F/%E4%B8%BB%E6%9C%BA%E5%8F%91%E7%8E%B0/arp-scan",target:"_blank",rel:"noopener noreferrer"}},[s._v("狼盘下载"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\daniel10>arp-scan.exe -t 192.168.7.0/24\nReply that 16:7D:DA:D7:8F:64 is 192.168.7.1 in 11.278300\nReply that 00:0C:29:1D:82:CF is 192.168.7.7 in 16.140500\nReply that 00:0C:29:A9:62:98 is 192.168.7.107 in 15.233500\nReply that 00:0C:29:DC:01:0D is 192.168.7.110 in 0.080700\nReply that 00:0C:29:DC:01:0D is 192.168.7.255 in 0.071500\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"_4、arp-ping"}},[s._v("4、arp-ping "),n("a",{staticClass:"header-anchor",attrs:{href:"#_4、arp-ping"}},[s._v("#")])]),s._v(" "),n("p",[s._v("Arp-ping 基于 arp 协议，它可以 “ping” 受防火墙保护的主机，下载地址："),n("a",{attrs:{href:"https://www.elifulkerson.com/projects/arp-ping.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.elifulkerson.com/projects/arp-ping.php"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("[狼盘下载](https://pan.wgpsec.org/d/public/4-后渗透 & 域渗透/主机发现/arp-ping.exe)")]),s._v(" "),n("p",[s._v("由于 arp-ping 只能一次 ping 一台主机，但在测试过程中肯定不能一台一台的 ping ，所以这里参考上面的 ping 脚本写了一个 arp-ping 循环 ping 主机的脚本。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('for /l %i in (1,1,255) do @arp-ping.exe 192.168.7.%i -w 1 -n 1|find /i "Reply"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('C:\\Users\\daniel10>for /l %i in (1,1,255) do @arp-ping.exe 192.168.7.%i -w 1 -n 1|find /i "Reply"\nReply that 16:7D:DA:D7:8F:64 is 192.168.7.1 in 2.233ms\nReply that 00:0C:29:A9:62:98 is 192.168.7.107 in 16.857ms\nReply that 00:0C:29:DC:01:0D is 192.168.7.110 in 0.205ms\nReply that 00:0C:29:DC:01:0D is 192.168.7.255 in 0.200ms\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_5、empire"}},[s._v("5、Empire "),n("a",{staticClass:"header-anchor",attrs:{href:"#_5、empire"}},[s._v("#")])]),s._v(" "),n("p",[s._v("Empire 内置了arpscan 模块，该模块可利用 arp 协议对内网主机进行探测。将目标主机上线 Empire 后，使用 powershell/situational_awareness/network/arpscan 模块，设置扫描范围即可，具体如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("(Empire: listeners) > agents\n[*] Active agents:\n Name     La Internal IP     Machine Name      Username                Process            PID    Delay    Last Seen\n ----     -- -----------     ------------      --------                -------            ---    -----    ---------\n APDGSW9X ps 192.168.7.7     DC                *TEAMSSIX\\administrator powershell         3648   5/0.0    2021-02-23 20:43:27\n(Empire: agents) > usemodule powershell/situational_awareness/network/arpscan\n(Empire: powershell/situational_awareness/network/arpscan) > set Agent APDGSW9X\n(Empire: powershell/situational_awareness/network/arpscan) > set CIDR 192.168.7.0/24\n(Empire: powershell/situational_awareness/network/arpscan) > execute\nMAC               Address      \n---               -------      \n16:7D:DA:D7:8F:64 192.168.7.1  \n00:0C:29:1D:82:CF 192.168.7.7  \n00:0C:29:A9:62:98 192.168.7.107\n00:0C:29:DC:01:0D 192.168.7.110\n00:0C:29:1D:82:CF 192.168.7.255\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h2",{attrs:{id:"_6、nbtscan"}},[s._v("6、nbtscan "),n("a",{staticClass:"header-anchor",attrs:{href:"#_6、nbtscan"}},[s._v("#")])]),s._v(" "),n("p",[s._v("nbtscan 有 Windows 和 Linux 两个版本，使用 netbios 协议扫描本地或远程 TCP/IP 网络上的开放 NetBIOS 名称服务器。")]),s._v(" "),n("p",[s._v("nbtscan 下载地址："),n("a",{attrs:{href:"http://www.unixwiz.net/tools/nbtscan.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.unixwiz.net/tools/nbtscan.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://pan.wgpsec.org/public/4-%E5%90%8E%E6%B8%97%E9%80%8F%20&%20%E5%9F%9F%E6%B8%97%E9%80%8F/%E4%B8%BB%E6%9C%BA%E5%8F%91%E7%8E%B0/nbtscan",target:"_blank",rel:"noopener noreferrer"}},[s._v("狼盘下载"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\daniel10>nbtscan.exe 192.168.7.0/24\n192.168.7.1     \\DP\n192.168.7.7     TEAMSSIX\\DC                     SHARING DC\n192.168.7.107   TEAMSSIX\\DANIEL7                SHARING\n*timeout (normal end of scan)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"_7、unicornscan"}},[s._v("7、unicornscan "),n("a",{staticClass:"header-anchor",attrs:{href:"#_7、unicornscan"}},[s._v("#")])]),s._v(" "),n("p",[s._v("unicornscan 使用 UDP 协议，在 kali 下可以直接 apt-get 进行安装，这个使用起来感觉有点慢。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('teamssix@localhost:~# unicornscan -mU 192.168.7.7\nUDP open\t          domain[   53]\t\tfrom 192.168.7.7  ttl 127\n\nteamssix@localhost:~# for k in $( seq 1 255);do unicornscan -mU 192.168.7.$k|grep "open"|awk -F "[ :]+" \'{print $5}\'; done\n192.168.7.1\n192.168.7.7\n192.168.7.107\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"_8、scanline"}},[s._v("8、scanline "),n("a",{staticClass:"header-anchor",attrs:{href:"#_8、scanline"}},[s._v("#")])]),s._v(" "),n("p",[s._v("McAfee 出品，推荐 win 下使用（管理员执行），scanline 项目地址："),n("a",{attrs:{href:"www.mcafee.com/us/downloads/free-tools/termsofuse.aspx"}},[s._v("www.mcafee.com/us/downloads/free-tools/termsofuse.aspx")])]),s._v(" "),n("p",[s._v("但是项目地址的下载按钮貌似失效，其他的下载地址：[狼盘下载](https://pan.wgpsec.org/d/public/4-后渗透 & 域渗透/信息收集/端口探测/ScanLine.exe)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\daniel10>scanline.exe -n 192.168.7.0-255\nScanLine (TM) 1.01\nCopyright (c) Foundstone, Inc. 2002\nhttp://www.foundstone.com\nScan of 256 IPs started at Tue Feb 23 22:07:40 2021\n-------------------------------------------------------------------------------\n192.168.7.7\nResponded in 0 ms.\n0 hops away\nResponds with ICMP unreachable: No\n-------------------------------------------------------------------------------\n192.168.7.107\nResponded in 0 ms.\n0 hops away\nResponds with ICMP unreachable: No\n-------------------------------------------------------------------------------\n192.168.7.110\nResponded in 0 ms.\n0 hops away\nResponds with ICMP unreachable: No\n-------------------------------------------------------------------------------\nScan finished at Tue Feb 23 22:07:49 2021\n3 IPs and 0 ports scanned in 0 hours 0 mins 9.16 secs\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"_9、telnet"}},[s._v("9、telnet "),n("a",{staticClass:"header-anchor",attrs:{href:"#_9、telnet"}},[s._v("#")])]),s._v(" "),n("p",[s._v("通过 telnet 探测 445 端口或者其他端口判断主机存活。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("for /l %a in (1,1,254) do start /min /low telnet 192.168.7.%a 445\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_10、tcping"}},[s._v("10、tcping "),n("a",{staticClass:"header-anchor",attrs:{href:"#_10、tcping"}},[s._v("#")])]),s._v(" "),n("p",[s._v("tcping.exe 是一个命令行程序，其操作类似于“ping”，但它通过 TCP 工作，下载地址："),n("a",{attrs:{href:"https://elifulkerson.com/projects/tcping.php",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://elifulkerson.com/projects/tcping.php"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://pan.wgpsec.org/public/4-%E5%90%8E%E6%B8%97%E9%80%8F%20&%20%E5%9F%9F%E6%B8%97%E9%80%8F/%E4%B8%BB%E6%9C%BA%E5%8F%91%E7%8E%B0/tcping",target:"_blank",rel:"noopener noreferrer"}},[s._v("狼盘下载"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\daniel10>tcping.exe -n 1 192.168.7.7 445\n\nProbing 192.168.7.7:445/tcp - Port is open - time=1.719ms\nPing statistics for 192.168.7.7:445\n     1 probes sent.\n     1 successful, 0 failed.  (0.00% fail)\nApproximate trip times in milli-seconds:\n     Minimum = 1.719ms, Maximum = 1.719ms, Average = 1.719ms\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_11、cping"}},[s._v("11、cping "),n("a",{staticClass:"header-anchor",attrs:{href:"#_11、cping"}},[s._v("#")])]),s._v(" "),n("p",[s._v("k8 团队出品，下载地址："),n("a",{attrs:{href:"https://pan.wgpsec.org/public/4-%E5%90%8E%E6%B8%97%E9%80%8F%20&%20%E5%9F%9F%E6%B8%97%E9%80%8F/%E4%B8%BB%E6%9C%BA%E5%8F%91%E7%8E%B0/cping3.0",target:"_blank",rel:"noopener noreferrer"}},[s._v("狼盘下载"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("下载解压后可以看到很多个 exe 文件，其分别代表了.net 编译版本，编译版本对应系统如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("XP/2003(已淘汰,用户少,使用的大部分也会装.net,因为好多app需要连驱动都要.net,具体看安装版本一般2.0)\n\nVista       2.0(基本上也没多少用户)\nWin7/2008   2.0 3.0 3.5\nWin8/2012   4.0\nWin8.1      4.0 4.5\nWin10/2016  4.0 4.6 (4.5未测应该也行)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\daniel10>cping40.exe scan osver 192.168.7.1 192.168.7.255\nScan OS version\n192.168.7.1---192.168.7.255\n\nSegment: 192.168.7.0\n=============================================\nIP              MAC               HostName        OSver\n192.168.7.7     00-0C-29-1D-82-CF dc.teamssix.com [Win 2008 R2 Datacenter 7601 SP 1]\n192.168.7.110   00-0C-29-DC-01-0D daniel10.teamssix.com []\n192.168.7.107   00-0C-29-A9-62-98 daniel7.teamssix.com [Win 7 Professional 7601 SP 1]\n=============================================\nCount:3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"_12、fscan"}},[s._v("12、fscan "),n("a",{staticClass:"header-anchor",attrs:{href:"#_12、fscan"}},[s._v("#")])]),s._v(" "),n("p",[s._v("影舞者大佬写的一款工具，使用起来感觉很是方便，工具下载地址："),n("a",{attrs:{href:"https://github.com/shadow1ng/fscan",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/shadow1ng/fscan"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://pan.wgpsec.org/public/4-%E5%90%8E%E6%B8%97%E9%80%8F%20&%20%E5%9F%9F%E6%B8%97%E9%80%8F/%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86/%E7%AB%AF%E5%8F%A3%E6%8E%A2%E6%B5%8B/fscan",target:"_blank",rel:"noopener noreferrer"}},[s._v("狼盘下载"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("C:\\Users\\daniel10>fscan.exe -h 192.168.7.1-255 -p 22,445\n   ___                              _\n  / _ \\     ___  ___ _ __ __ _  ___| | __\n / /_\\/____/ __|/ __| '__/ _` |/ __| |/ /\n/ /_\\\\_____\\__ \\ (__| | | (_| | (__|   <\n\\____/     |___/\\___|_|  \\__,_|\\___|_|\\_\\\n                     fscan version: 1.5.1\nscan start\n(icmp) Target '192.168.7.7' is alive\n(icmp) Target '192.168.7.110' is alive\n(icmp) Target '192.168.7.107' is alive\nicmp alive hosts len is: 3\n192.168.7.110:445 open\n192.168.7.7:445 open\n192.168.7.107:445 open\n192.168.7.110 CVE-2020-0796 SmbGhost Vulnerable\n192.168.7.110  (Windows 10 Pro 18363)\n[+] 192.168.7.7 MS17-010        (Windows Server 2008 R2 Datacenter 7601 Service Pack 1)\n[+] 192.168.7.107       MS17-010        (Windows 7 Professional 7601 Service Pack 1)\nscan end\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("h2",{attrs:{id:"_13、nmap"}},[s._v("13、Nmap "),n("a",{staticClass:"header-anchor",attrs:{href:"#_13、nmap"}},[s._v("#")])]),s._v(" "),n("p",[s._v("提到扫描自然不能少了 nmap，nmap 支持多种协议的扫描，具体如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ARP 扫描：\t\t\tnmap -PR -sn 192.168.7.0/24\nICMP 扫描：\t\tnmap ‐sP ‐PI 192.168.7.0/24 ‐T4\nICMP 扫描：\t\tnmap ‐sn ‐PE ‐T4 192.168.7.0/24\nSNMP 扫描：\t\tnmap -sU --script snmp-brute 192.168.7.0/24 -T4\nUDP 扫描：\t\t\tnmap -sU -T5 -sV --max-retries 1 192.168.7.7 -p 500\nNetBIOS 扫描：\tnmap --script nbstat.nse -sU -p137 192.168.7.0/24 -T4\nSMB 扫描：\t\t\tnmap ‐sU ‐sS ‐‐script smb‐enum‐shares.nse ‐p 445 192.168.7.0/24\n……\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_14、msf"}},[s._v("14、MSF "),n("a",{staticClass:"header-anchor",attrs:{href:"#_14、msf"}},[s._v("#")])]),s._v(" "),n("p",[s._v("除了 Nmap 之外，万能的 MSF 自然也不能少，MSF 能够进行主机存活探测的模块如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("auxiliary/scanner/discovery/udp_probe\nauxiliary/scanner/discovery/udp_sweep\nauxiliary/scanner/discovery/arp_sweep\nauxiliary/scanner/netbios/nbname\nauxiliary/scanner/snmp/snmp_enum\nauxiliary/scanner/smb/smb_version\n……\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("除了上述工具外，还有 netdiscover、snscan 等工具可用于内网主机存活探测，在这其中有些工具因为使用起来感觉探测的不是很理想等原因，在此就不记录了，如果读者感兴趣的话可自行尝试玩玩。")]),s._v(" "),n("p",[s._v("参考文章：")]),s._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://soapffz.com/sec/21.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://soapffz.com/sec/21.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://micro8.gitbook.io/micro8/contents-1",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://micro8.gitbook.io/micro8/contents-1"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/xiaozi/p/13722474.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/xiaozi/p/13722474.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/-mo-/p/11908260.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/-mo-/p/11908260.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/weixin_42918771/article/details/108798729",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/weixin_42918771/article/details/108798729"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/qq_45366449/article/details/113650656",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/qq_45366449/article/details/113650656"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("a",{attrs:{href:"https://pingmaoer.github.io/2020/03/30/%E5%86%85%E7%BD%91%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86%E4%B8%80/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pingmaoer.github.io/2020/03/30/%E5%86%85%E7%BD%91%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86%E4%B8%80/"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);