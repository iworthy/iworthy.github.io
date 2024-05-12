(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{413:function(a,s,t){"use strict";t.r(s);var e=t(12),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux下利用nohup后台运行jar文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux下利用nohup后台运行jar文件"}},[a._v("#")]),a._v(" linux下利用nohup后台运行jar文件")]),a._v(" "),s("p",[a._v("方式一")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" XXX.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("特点：当前ssh窗口被锁定，可按CTRL + C打断程序运行，或直接关闭窗口，程序退出")]),a._v(" "),s("p",[a._v("方式二")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" XXX.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("&代表在后台运行。")]),a._v(" "),s("p",[a._v("特定：当前ssh窗口不被锁定，但是当窗口关闭时，程序中止运行。")]),a._v(" "),s("p",[a._v("方式三")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" XXX.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("nohup 意思是不挂断运行命令,当账户退出或终端关闭时,程序仍然运行")]),a._v(" "),s("p",[a._v("当用 nohup 命令执行作业时，缺省情况下该作业的所有输出被重定向到nohup.out的文件中，除非另外指定了输出文件。")]),a._v(" "),s("p",[a._v("方式四")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("nohup")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" XXX.jar "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("temp.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("command >out.file是将command的输出重定向到out.file文件，即输出内容不打印到屏幕上，而是输出到out.file文件中。")]),a._v(" "),s("p",[a._v("可通过jobs命令查看后台运行任务")]),a._v(" "),s("p",[a._v("如果想将某个作业调回前台控制，只需要 fg + 编号即可。")]),a._v(" "),s("h1",{attrs:{id:"linux-kill命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-kill命令"}},[a._v("#")]),a._v(" Linux kill命令")]),a._v(" "),s("p",[a._v("Linux kill 命令用于删除执行中的程序或工作。")]),a._v(" "),s("p",[a._v("kill 可将指定的信息送至程序。预设的信息为 SIGTERM(15)，可将指定程序终止。若仍无法终止该程序，可使用 SIGKILL(9) 信息尝试强制删除程序。程序或工作的编号可利用 ps 指令或 jobs 指令查看。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("信息名称或编号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("程序"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("　或　"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-l "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("信息编号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("最常用的信号是：")]),a._v(" "),s("ul",[s("li",[a._v("1 (HUP)：重新加载进程。")]),a._v(" "),s("li",[a._v("9 (KILL)：杀死一个进程。")]),a._v(" "),s("li",[a._v("15 (TERM)：正常停止一个进程。")])]),a._v(" "),s("h1",{attrs:{id:"linux-查看端口占用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-查看端口占用情况"}},[a._v("#")]),a._v(" Linux 查看端口占用情况")]),a._v(" "),s("h2",{attrs:{id:"lsof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsof"}},[a._v("#")]),a._v(" lsof")]),a._v(" "),s("p",[a._v("lsof(list open files)是一个列出当前系统打开文件的工具。")]),a._v(" "),s("p",[a._v("lsof 查看端口占用语法格式：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("lsof")]),a._v(" -i:端口号\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"netstat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#netstat"}},[a._v("#")]),a._v(" netstat")]),a._v(" "),s("p",[s("strong",[a._v("netstat -tunlp")]),a._v(" 用于显示 tcp，udp 的端口和进程等相关情况。")]),a._v(" "),s("p",[a._v("netstat 查看端口占用语法格式：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tunlp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" 端口号\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("更多命令：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ntlp")]),a._v("   //查看当前所有tcp端口\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ntulp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("   //查看所有80端口使用情况\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ntulp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("   //查看所有3306端口使用情况\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);