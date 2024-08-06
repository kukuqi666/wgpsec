(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{779:function(s,a,t){"use strict";t.r(a);var n=t(79),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[s._v("Git "),a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")])]),s._v(" "),a("h2",{attrs:{id:"版本控制"}},[s._v("版本控制 "),a("a",{staticClass:"header-anchor",attrs:{href:"#版本控制"}},[s._v("#")])]),s._v(" "),a("h3",{attrs:{id:"什么是版本控制"}},[s._v("什么是版本控制？ "),a("a",{staticClass:"header-anchor",attrs:{href:"#什么是版本控制"}},[s._v("#")])]),s._v(" "),a("p",[s._v("版本控制（Revision control）是一种在开发的过程中用于管理我们对文件、目录或工程等内容的修改历史，方便查看更改历史记录，备份以便恢复以前的版本的软件工程技术。")]),s._v(" "),a("ul",[a("li",[s._v("实现跨区域多人协同开发")]),s._v(" "),a("li",[s._v("追踪和记载一个或者多个文件的历史记录")]),s._v(" "),a("li",[s._v("组织和保护你的源代码和文档")]),s._v(" "),a("li",[s._v("统计工作量")]),s._v(" "),a("li",[s._v("并行开发、提高开发效率")]),s._v(" "),a("li",[s._v("跟踪记录整个软件的开发过程")]),s._v(" "),a("li",[s._v("减轻开发人员的负担，节省时间，同时降低人为错误")])]),s._v(" "),a("p",[s._v("简单说就是用于管理多人协同开发项目的技术。")]),s._v(" "),a("p",[s._v("没有进行版本控制或者版本控制本身缺乏正确的流程管理，在软件开发过程中将会引入很多问题，如软件代码的一致性、软件内容的冗余、软件过程的事物性、软件开发过程中的并发性、软件源代码的安全性，以及软件的整合等问题。")]),s._v(" "),a("p",[s._v("无论是工作还是学习，或者是自己做笔记，都经历过这样一个阶段！我们就迫切需要一个版本控制工具！")]),s._v(" "),a("h3",{attrs:{id:"版本控制分类"}},[s._v("版本控制分类 "),a("a",{staticClass:"header-anchor",attrs:{href:"#版本控制分类"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("分布式版本控制 Git")])]),s._v(" "),a("p",[s._v("每个人都拥有全部的代码！安全隐患！")]),s._v(" "),a("p",[s._v("所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。")]),s._v(" "),a("p",[s._v("不会因为服务器损坏或者网络问题，造成不能工作的情况！")]),s._v(" "),a("h2",{attrs:{id:"启动git"}},[s._v("启动Git "),a("a",{staticClass:"header-anchor",attrs:{href:"#启动git"}},[s._v("#")])]),s._v(" "),a("p",[s._v("安装成功后在开始菜单中会有Git项，菜单下有3个程序：任意文件夹下右键也可以看到对应的程序！")]),s._v(" "),a("p",[a("strong",[s._v("Git Bash")]),s._v("：Unix与Linux风格的命令行，使用最多，推荐最多")]),s._v(" "),a("p",[a("strong",[s._v("Git CMD")]),s._v("：Windows风格的命令行")]),s._v(" "),a("p",[a("strong",[s._v("Git GUI")]),s._v("：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令")]),s._v(" "),a("h3",{attrs:{id:"git配置"}},[s._v("Git配置 "),a("a",{staticClass:"header-anchor",attrs:{href:"#git配置"}},[s._v("#")])]),s._v(" "),a("p",[s._v("所有的配置文件，其实都保存在本地！")]),s._v(" "),a("p",[s._v("查看不同级别的配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统config")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--system")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前用户（global）配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--list")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 基本设置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("Git相关的配置文件：")])]),s._v(" "),a("p",[s._v("1）、Git\\etc\\gitconfig ：Git 安装目录下的 gitconfig --system 系统级")]),s._v(" "),a("p",[s._v("2）、C:\\Users\\Administrator\\ .gitconfig 只适用于当前登录用户的配置 --global 全局\n"),a("img",{attrs:{src:"https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy91SkRBVUtyR0M3S3N1OFVsSVR3TWxiWDNrTUd0WjlwMGhjSlMwcnhqM3FvQ1Z2ZkRLaDNXeHdRSmxTVjNQMTVFSVp1ZWpyYU93WExkaWM2TkNCOFg4b1EvNjQw?x-oss-process=image/format,png",alt:"img"}}),s._v("\n如图所示，.gitconfig可以直接编辑配置文件，通过命令设置后会响应到这里。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看配置信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--lsit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#缩写")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("配置用户信息")]),s._v("\n此节设置用户名与邮箱（用户标识，必要）。\n当你安装Git后首先要做的事情是设置你的用户名称和e-mail地址。这是非常重要的，因为每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wintrysec"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xksec@foxmail.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("只需要做一次这个设置，如果你传递了--global 选项，因为Git将总是会使用该信息来处理你在系统中所做的一切操作。如果你希望在一个特定的项目中使用不同的名称或e-mail地址，你可以在该项目中运行该命令而不要--global选项。总之--global为全局配置，不加为某个项目的特定配置。\n"),a("strong",[s._v("代理")]),s._v("\n1.设置 Git 全局代理\n您可以使用以下命令设置 Git 的全局代理：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" http.proxy http://proxy.example.com:8080\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" https.proxy https://proxy.example.com:8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果您需要取消全局代理，可以使用以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--unset")]),s._v(" http.proxy\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--unset")]),s._v(" https.proxy\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("2.设置 Git 单个仓库代理\n如果您只需要为单个 Git 仓库设置代理，可以在该仓库的根目录中运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config http.proxy http://proxy.example.com:8080\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config https.proxy https://proxy.example.com:8080\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_4个区域"}},[s._v("4个区域 "),a("a",{staticClass:"header-anchor",attrs:{href:"#_4个区域"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Git本地有4个工作区域：")]),s._v(" "),a("ul",[a("li",[s._v("Workspace：工作区，就是你平时存放项目代码的地方")]),s._v(" "),a("li",[s._v("Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息")]),s._v(" "),a("li",[s._v("Repository：仓库区（或本地仓库）**，就是安全存放数据的位置，这里面有你提交到所有版本的数据。其中HEAD指向最新放入仓库的版本")]),s._v(" "),a("li",[s._v("Remote：远程仓库，托管代码的服务器**，可以简单的认为是你项目组中的一台电脑用于远程数据交换\n"),a("img",{attrs:{src:"/images/git-base/Transformational-Relation.jpg",alt:""}})]),s._v(" "),a("li",[s._v("Directory：使用Git管理的一个目录，也就是一个仓库，包含我们的工作空间和Git的管理空间。")]),s._v(" "),a("li",[s._v("WorkSpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间。")]),s._v(" "),a("li",[s._v(".git：存放Git管理信息的目录，初始化仓库的时候自动创建。")]),s._v(" "),a("li",[s._v("Index/Stage：暂存区，或者叫待提交更新区，在提交进入repo之前，我们可以把所有的更新放在暂存区。")]),s._v(" "),a("li",[s._v("Local Repo：本地仓库，一个存放在本地的版本库；HEAD会只是当前的开发分支（branch）。")]),s._v(" "),a("li",[s._v("Stash：隐藏，是一个工作状态保存栈，用于保存/恢复WorkSpace中的临时状态。")])]),s._v(" "),a("h3",{attrs:{id:"工作流程"}},[s._v("工作流程 "),a("a",{staticClass:"header-anchor",attrs:{href:"#工作流程"}},[s._v("#")])]),s._v(" "),a("p",[s._v("git的工作流程一般是这样的：\n１、在工作目录中添加、修改文件；\n２、将需要进行版本管理的文件放入暂存区域；\n３、将暂存区域的文件提交到git仓库。")]),s._v(" "),a("p",[s._v("因此，git管理的文件有三种状态：\n已修改（modified）,\n已暂存（staged）,\n已提交(committed)")]),s._v(" "),a("h3",{attrs:{id:"工作目录"}},[s._v("工作目录 "),a("a",{staticClass:"header-anchor",attrs:{href:"#工作目录"}},[s._v("#")])]),s._v(" "),a("p",[s._v("工作目录（WorkSpace)一般就是你希望Git帮助你管理的文件夹，可以是你项目的目录，也可以是一个空目录，建议不要有中文。")]),s._v(" "),a("h2",{attrs:{id:"本地仓库搭建"}},[s._v("本地仓库搭建 "),a("a",{staticClass:"header-anchor",attrs:{href:"#本地仓库搭建"}},[s._v("#")])]),s._v(" "),a("p",[s._v("接下来，创建仓库。创建本地仓库的方法有两种：一种是创建全新的仓库，另一种是克隆远程仓库。")]),s._v(" "),a("h3",{attrs:{id:"初始化版本控制"}},[s._v("初始化版本控制 "),a("a",{staticClass:"header-anchor",attrs:{href:"#初始化版本控制"}},[s._v("#")])]),s._v(" "),a("p",[s._v("创建全新的仓库,需要用GIT管理的项目的根目录执行：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#每个项目只一次")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。")]),s._v(" "),a("h3",{attrs:{id:"克隆远程仓库"}},[s._v("克隆远程仓库 "),a("a",{staticClass:"header-anchor",attrs:{href:"#克隆远程仓库"}},[s._v("#")])]),s._v(" "),a("p",[s._v("另一种方式是克隆远程目录，由于是将远程服务器上的仓库完全镜像一份至本地！")]),s._v(" "),a("blockquote",[a("p",[s._v("克隆一个项目和它的整个代码历史(版本信息)")]),s._v(" "),a("p",[s._v("$ git clone  https://gitee.com/kuangstudy/openclass.git")])]),s._v(" "),a("h2",{attrs:{id:"git文件操作"}},[s._v("Git文件操作 "),a("a",{staticClass:"header-anchor",attrs:{href:"#git文件操作"}},[s._v("#")])]),s._v(" "),a("h3",{attrs:{id:"文件的四种状态"}},[s._v("文件的四种状态 "),a("a",{staticClass:"header-anchor",attrs:{href:"#文件的四种状态"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("版本控制就是对文件的版本控制，要对文件进行修改、提交等操作")]),s._v("，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Untracked")]),s._v(": 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.")]),s._v(" "),a("li",[a("strong",[s._v("Unmodify")]),s._v(": 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为Modified. 如果使用git rm移出版本库, 则成为Untracked文件")]),s._v(" "),a("li",[a("strong",[s._v("Modified")]),s._v(": 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存staged状态, 使用git checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改 !")]),s._v(" "),a("li",[a("strong",[s._v("Staged")]),s._v(": 暂存状态. 执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行git reset HEAD filename取消暂存, 文件状态为Modified")])]),s._v(" "),a("h3",{attrs:{id:"文件状态"}},[s._v("文件状态 "),a("a",{staticClass:"header-anchor",attrs:{href:"#文件状态"}},[s._v("#")])]),s._v(" "),a("p",[s._v("上面说文件有4种状态，通过如下命令可以查看到文件的状态：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将Modified的文件回滚至Unmodify的状态。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#例如：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- ReadMe.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("strong",[s._v("添加文件追踪")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此命令为添加所有文件到暂存区.或者也可以更新提交的时候写单个文件或目录名。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("提交文件 （-m 后表示说明内容，需要加引号）")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “这里是说明消息”    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交暂存区中的内容到本地仓库 -m 提交信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Aborting commit:按住shift，同时敲击2下z键.Aborting commit会导致Commit失败。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("若git push 报错Everything up to date, 检查是不是忘记git commit -m 了。\n"),a("strong",[s._v("查看当前修改状态")])]),s._v(" "),a("p",[s._v("常在执行 add 后，执行 commit 之前使用，也可以在 commit之后使用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看指定文件状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看所有文件状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("其它常用参数")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以下命令，在.git根目录工作区使用")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看历史记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对比两次提交的不同")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" commit_id\t\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换到历史版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset commit_id\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" HEAD^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看stash列表，保存到git栈的git 工作状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从git栈中弹出内容")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git stash list看不到的话")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .git/refs/stash\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#会有一个hash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" hash值\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#即可看到内容差异")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"忽略文件"}},[s._v("忽略文件 "),a("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件"}},[s._v("#")])]),s._v(" "),a("p",[s._v("有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等")]),s._v(" "),a("p",[s._v('在主目录下建立".gitignore"文件，此文件有如下规则：')]),s._v(" "),a("ul",[a("li",[s._v("忽略文件中的空行或以井号（#）开始的行将会被忽略。")]),s._v(" "),a("li",[s._v("可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。")]),s._v(" "),a("li",[s._v("如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。")]),s._v(" "),a("li",[s._v("如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。")]),s._v(" "),a("li",[s._v("如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。")])]),s._v(" "),a("div",{staticClass:"language-cmd line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#为注释\n*.txt        #忽略所有 .txt结尾的文件,这样的话上传就不会被选中！\n!lib.txt     #但lib.txt除外\n/temp        #仅忽略项目根目录下的TODO文件,不包括其它目录temp。/ 在前面代表忽略上面。\nbuild/       #忽略build/目录下的所有文件。 / 在后面代表忽略下面。\ndoc/*.txt    #会忽略 doc/notes.txt 但不包括 doc/server/arch.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"将远端文件下载到本地"}},[s._v("将远端文件下载到本地 "),a("a",{staticClass:"header-anchor",attrs:{href:"#将远端文件下载到本地"}},[s._v("#")])]),s._v(" "),a("p",[s._v("本地已建立仓库:pull即可\n本地无仓库:用不了pull。应使用clone，将远端仓库直接clone来。")]),s._v(" "),a("h3",{attrs:{id:"恢复本地被删文件"}},[s._v("恢复本地被删文件 "),a("a",{staticClass:"header-anchor",attrs:{href:"#恢复本地被删文件"}},[s._v("#")])]),s._v(" "),a("p",[s._v("当误删本地文件，可以使用命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" restore "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("请注意当文件名带有中文时，不要用git显示的转码文件名，应该直接用本来的中文名，否则恢复失败。")]),s._v(" "),a("h2",{attrs:{id:"远程仓库"}},[s._v("远程仓库 "),a("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库"}},[s._v("#")])]),s._v(" "),a("p",[a("strong",[s._v("1.登陆github账号")])]),s._v(" "),a("p",[a("strong",[s._v("2.创建 SSH Key")])]),s._v(" "),a("p",[s._v("【C盘—->用户/user—->Administrator（自己的用户名）】")]),s._v(" "),a("p",[s._v("看看有没有 .ssh 目录，如果有，再看看这个目录下有没有 id_rsa 和 id_rsa.pub")]),s._v(" "),a("p",[s._v("如果已经有了，可直接跳到下一步。")]),s._v(" "),a("p",[s._v("如果没有，打开 Shell（Windows下打开Git Bash），创建 SSH Key：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xksec@foxmail.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("3.登陆 GitHub，打开 “Settings”")])]),s._v(" "),a("p",[s._v("“SSH Keys” 页面，“New SSH key”，“粘贴公钥”")]),s._v(" "),a("p",[a("strong",[s._v("4.创建项目，并复制项目地址，添加远程仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://github.com/wintrysec/wintrysec.github.io.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("origin：指定要推送到的远程仓库的名称。origin 是默认的远程仓库名称，如果您没有为当前分支配置其他远程仓库，那么 origin 就是默认值。\n"),a("strong",[s._v("5.把所有推送到远端仓库")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"将workspace文件传送到remote"}},[s._v("将Workspace文件传送到Remote "),a("a",{staticClass:"header-anchor",attrs:{href:"#将workspace文件传送到remote"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始化")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建仓库。此步也可GUI完成。")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin https://gitee.com/用户个性地址/HelloGitee.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在新建仓库时，如果在 Gitee 平台仓库上已经存在 readme 或其他文件，在提交时可能会存在冲突，这时用户需要选择的是保留线上的文件或者舍弃线上的文件，如果您舍弃线上的文件，则在推送时选择强制推送，-f代表force，强制推送需要执行下面的命令(默认不推荐该行为)：")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果您选择保留线上的 readme 文件,则需要先执行：")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#若出现以下报错")]),s._v("\nerror: src refspec master does not match any\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#请使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#以检查文件状态是否都是commited")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"给开源项目提交pr"}},[s._v("给开源项目提交pr "),a("a",{staticClass:"header-anchor",attrs:{href:"#给开源项目提交pr"}},[s._v("#")])]),s._v(" "),a("p",[s._v("从 GitHub 上下载的 ZIP 文件不包含 Git 的版本控制信息。若想提交pr，不能直接下载zip，必须按照以下流程。")]),s._v(" "),a("h4",{attrs:{id:"_1-fork"}},[s._v("1.fork "),a("a",{staticClass:"header-anchor",attrs:{href:"#_1-fork"}},[s._v("#")])]),s._v(" "),a("p",[s._v('您需要先在 GitHub 上对该项目进行 "Fork"。Fork 会在您的 GitHub 账户下创建该项目的一个副本。然后，您可以克隆这个副本并在其基础上进行修改。以下是详细步骤：\n转到项目的 GitHub 页面，点击右上角的 "Fork" 按钮。这将在您的 GitHub 账户下创建一个该项目的副本。')]),s._v(" "),a("h4",{attrs:{id:"_2-clone"}},[s._v("2.clone "),a("a",{staticClass:"header-anchor",attrs:{href:"#_2-clone"}},[s._v("#")])]),s._v(" "),a("p",[s._v("将项目克隆到本地，然后在新分支上进行修改。以下是详细的操作步骤：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v('首先，找到项目的 GitHub 页面，点击 "Code" 按钮，复制仓库的 HTTPS 或 SSH 地址。')])]),s._v(" "),a("li",[a("p",[s._v("在本地计算机上克隆仓库：")]),s._v(" "),a("p",[s._v("bash")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/username/project.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或使用 SSH：")]),s._v(" "),a("p",[s._v("bash")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:username/project.git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"_3-创建一个新的分支"}},[s._v("3.创建一个新的分支 "),a("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建一个新的分支"}},[s._v("#")])]),s._v(" "),a("p",[s._v("创建一个新的分支，以便在其上进行更改。将 "),a("code",[s._v("<new_branch>")]),s._v(" 替换为您的分支名称：\n"),a("code",[s._v("css git checkout -b <new_branch>")])]),s._v(" "),a("h4",{attrs:{id:"_4-修改代码"}},[s._v("4.修改代码 "),a("a",{staticClass:"header-anchor",attrs:{href:"#_4-修改代码"}},[s._v("#")])]),s._v(" "),a("h4",{attrs:{id:"_5-文件操作"}},[s._v("5.文件操作 "),a("a",{staticClass:"header-anchor",attrs:{href:"#_5-文件操作"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v('```bash\ngit add .\ngit commit -m "Your commit message"\ngit push origin <new_branch>\n```\n')])])]),a("h5",{attrs:{id:"_5-1-使用github访问令牌-可选"}},[s._v("5.1  使用Github访问令牌（可选） "),a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-使用github访问令牌-可选"}},[s._v("#")])]),s._v(" "),a("p",[s._v("push至Github上，可能会要求输入访问令牌（Personal Access Token, 简称PAT）。若跳过输入访问令牌，则会要求输入Github账号密码，但即使输入正确，也会提示账号密码访问方式已被弃用，还是会提示输入访问令牌。这是因为 GitHub 在2021年8月13日已经移除了对密码认证的支持。")]),s._v(" "),a("ol",[a("li",[s._v("登录到您的 GitHub 账户。")]),s._v(" "),a("li",[s._v("点击右上角的个人头像，选择“Settings”（设置）。")]),s._v(" "),a("li",[s._v("在左侧菜单栏中，选择“Developer settings”（开发者设置）。")]),s._v(" "),a("li",[s._v("点击“Personal access tokens”（个人访问令牌）。")]),s._v(" "),a("li",[s._v('在您创建的访问令牌列表中找到相应的令牌，检查其权限范围。确保至少勾选了 "repo" 权限。')])]),s._v(" "),a("h4",{attrs:{id:"_6-pr"}},[s._v("6.PR "),a("a",{staticClass:"header-anchor",attrs:{href:"#_6-pr"}},[s._v("#")])]),s._v(" "),a("p",[s._v('转到项目的 GitHub 页面，您应该会看到一个提示，询问是否要创建新的 Pull Request。点击 "Compare & pull request"。在打开的页面上填写 PR 的标题和描述，确保您详细说明了您所做的更改。完成后，点击 "Create pull request"。\n此时，您已成功提交了一个 PR。项目的维护者将收到通知，他们可以查看、讨论和合并您的更改。如果他们要求进行任何修改，只需在本地继续修改您的分支，然后再次推送，PR 将自动更新。')]),s._v(" "),a("h2",{attrs:{id:"更新远程仓库"}},[s._v("更新远程仓库 "),a("a",{staticClass:"header-anchor",attrs:{href:"#更新远程仓库"}},[s._v("#")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拉取更新，每次必做防止团队合作干掉别人上传的代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新文件后添加追踪")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" “这里是说明消息”\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前修改状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#推送向远程仓库")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("分支管理")]),s._v(" "),a("strong",[s._v("分支在GIT中相对较难，分支就是科幻电影里面的平行宇宙")]),s._v("，如果两个平行宇宙互不干扰，那对现在的你也没啥影响。不过，在某个时间点，两个平行宇宙合并了，我们就需要处理一些问题了！")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前所有本地分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有远程分支。-r代表remote。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#列出所有分支，包含本地和remote，-a代表all ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建一个分支，但依然停留在当前分支")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" chechout aaa \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#切换分支aaa")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" chechout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" aaa "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本地创建 aaa分支，同时切换到aaa分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#只有提交的时候才会在服务端上创建一个分支")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 合并指定分支到当前分支")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除远程分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--delete")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch-name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("remote/branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("如果同一个文件在合并分支时都被修改了则会引起冲突：解决的办法是我们可以修改冲突文件后重新提交！选择要保留他的代码还是你的代码！")]),s._v(" "),a("p",[s._v("master主分支应该非常稳定，用来发布新版本，一般情况下不允许在上面工作，工作一般情况下在新建的dev分支上工作，工作完后，比如上要发布，或者说dev分支代码稳定后可以合并到主分支master上来。")])])}),[],!1,null,null,null);a.default=e.exports}}]);