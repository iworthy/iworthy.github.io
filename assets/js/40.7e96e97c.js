(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{422:function(a,s,r){"use strict";r.r(s);var e=r(12),t=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[a._v("#")]),a._v(" Docker")]),a._v(" "),s("h1",{attrs:{id:"docker-架构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-架构"}},[a._v("#")]),a._v(" Docker 架构")]),a._v(" "),s("p",[a._v("Docker 包括三个基本概念:")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("镜像（Image）")]),a._v("：Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:16.04 就包含了完整的一套 Ubuntu16.04 最小系统的 root 文件系统。")]),a._v(" "),s("li",[s("strong",[a._v("容器（Container）")]),a._v("：镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),a._v(" "),s("li",[s("strong",[a._v("仓库（Repository）")]),a._v("：仓库可看成一个代码控制中心，用来保存镜像。")])]),a._v(" "),s("h1",{attrs:{id:"容器使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器使用"}},[a._v("#")]),a._v(" 容器使用")]),a._v(" "),s("h2",{attrs:{id:"获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取镜像"}},[a._v("#")]),a._v(" 获取镜像")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull ubuntu\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"启动容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动容器"}},[a._v("#")]),a._v(" 启动容器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" ubuntu /bin/bash\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("参数说明：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("-i")]),a._v(": 交互式操作。")]),a._v(" "),s("li",[s("strong",[a._v("-t")]),a._v(": 终端。")]),a._v(" "),s("li",[s("strong",[a._v("ubuntu")]),a._v(": ubuntu 镜像。")]),a._v(" "),s("li",[s("strong",[a._v("/bin/bash")]),a._v("：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。")])]),a._v(" "),s("p",[a._v("要退出终端，直接输入 "),s("strong",[a._v("exit")])]),a._v(" "),s("h2",{attrs:{id:"启动已停止运行的容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动已停止运行的容器"}},[a._v("#")]),a._v(" 启动已停止运行的容器")]),a._v(" "),s("p",[a._v("查看所有的容器命令如下：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("使用 docker start 启动一个已停止的容器：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start Container ID \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"后台运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后台运行"}},[a._v("#")]),a._v(" 后台运行")]),a._v(" "),s("p",[a._v("在大部分的场景下，我们希望 docker 的服务是在后台运行的，我们可以过 "),s("strong",[a._v("-d")]),a._v(" 指定容器的运行模式。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" ubuntu-test ubuntu /bin/bash\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"停止一个容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#停止一个容器"}},[a._v("#")]),a._v(" 停止一个容器")]),a._v(" "),s("p",[a._v("停止容器的命令如下：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器 ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("停止的容器可以通过 docker restart 重启：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" restart "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器 ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"进入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),s("p",[a._v("在使用 "),s("strong",[a._v("-d")]),a._v(" 参数时，容器启动后会进入后台。此时想要进入容器，可以通过以下指令进入：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("docker attach")])]),a._v(" "),s("li",[s("strong",[a._v("docker exec")]),a._v("：推荐大家使用 docker exec 命令，因为此退出容器终端，不会导致容器的停止。")])]),a._v(" "),s("h2",{attrs:{id:"删除容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),s("p",[a._v("删除容器使用 "),s("strong",[a._v("docker rm")]),a._v(" 命令：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("容器 ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("清理掉所有处于终止状态的容器:")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container prune\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"查看-web-应用容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看-web-应用容器"}},[a._v("#")]),a._v(" 查看 WEB 应用容器")]),a._v(" "),s("p",[a._v("使用 docker ps 来查看我们正在运行的容器：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("runoob@runoob:~"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#  docker ps")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("可以通过 -p 参数来设置不一样的端口：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("runoob@runoob:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v(":5000 training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"列出镜像列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列出镜像列表"}},[a._v("#")]),a._v(" 列出镜像列表")]),a._v(" "),s("p",[a._v("我们可以使用 "),s("strong",[a._v("docker images")]),a._v(" 来列出本地主机上的镜像。")]),a._v(" "),s("p",[a._v("各个选项说明:")]),a._v(" "),s("ul",[s("li",[a._v("**REPOSITORY：**表示镜像的仓库源")]),a._v(" "),s("li",[a._v("**TAG：**镜像的标签")]),a._v(" "),s("li",[a._v("**IMAGE ID：**镜像ID")]),a._v(" "),s("li",[a._v("**CREATED：**镜像创建时间")]),a._v(" "),s("li",[a._v("**SIZE：**镜像大小")])]),a._v(" "),s("h2",{attrs:{id:"获取一个新的镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取一个新的镜像"}},[a._v("#")]),a._v(" 获取一个新的镜像")]),a._v(" "),s("p",[a._v("当我们在本地主机上使用一个不存在的镜像时 Docker 就会自动下载这个镜像。如果我们想预先下载这个镜像，我们可以使用 docker pull 命令来下载它。")]),a._v(" "),s("h2",{attrs:{id:"删除镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[a._v("#")]),a._v(" 删除镜像")]),a._v(" "),s("p",[a._v("镜像删除使用 "),s("strong",[a._v("docker rmi")]),a._v(" 命令，比如我们删除 hello-world 镜像：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi hello-world\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"docker-容器连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器连接"}},[a._v("#")]),a._v(" Docker 容器连接")]),a._v(" "),s("p",[a._v("容器中可以运行一些网络应用，要让外部也可以访问这些应用，可以通过 "),s("strong",[a._v("-P")]),a._v(" 或 "),s("strong",[a._v("-p")]),a._v(" 参数来指定端口映射。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("runoob@runoob:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v(":5000 training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("runoob@runoob:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:5001:5000 training/webapp python app.py\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("strong",[a._v("docker port")]),a._v(" 命令可以让我们快捷地查看端口的绑定情况。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("runoob@runoob:~$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" port adoring_stonebraker "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h1",{attrs:{id:"相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[a._v("#")]),a._v(" 相关链接：")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.runoob.com/docker/docker-resources.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker 教程"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.runoob.com/docker/docker-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Docker 命令大全"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=t.exports}}]);