(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{464:function(t,e,_){"use strict";_.r(e);var v=_(12),o=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("教程:如何使用hexo+github搭建免费个人博客"),t._v("\n#使用hexo+github搭建免费个人博客详细教程#")]),t._v(" "),e("blockquote",[e("p",[t._v("本文基本内容取自源柳夏南的博客，亲身安装后进行了相关更改，如有需求请点击"),e("a",{attrs:{href:"http://blog.liuxianan.com/build-blog-website-by-hexo-github.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文连接"),e("OutboundLink")],1),t._v("，吃水不忘挖井人在这里感谢原作者。")])]),t._v(" "),e("p",[t._v("##前言##")]),t._v(" "),e("ul",[e("li",[t._v("什么是Github")])]),t._v(" "),e("p",[t._v("GitHub是一个通过Git进行版本控制的软件源代码托管服务，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、PJ Hyett和Tom Preston-Werner使用Ruby on Rails编写而成。")]),t._v(" "),e("ul",[e("li",[t._v("什么是GitHub pages")])]),t._v(" "),e("p",[t._v("Github Pages 是面向用户、组织和项目开放的公共静态页面搭建托管服务，站点可以被免费托管在Github 上，你可以选择使用Github Pages 默认提供的域名github.io 或者自定义域名来发布站点。")]),t._v(" "),e("ul",[e("li",[t._v("什么是Hexo")])]),t._v(" "),e("p",[t._v("Hexo 是一个快速、简洁且高效的博客框架。 Hexo 使用Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。")]),t._v(" "),e("ul",[e("li",[t._v("使用Github pages服务搭建博客的好处有：")])]),t._v(" "),e("ol",[e("li",[t._v("全是静态文件，访问速度快；")]),t._v(" "),e("li",[t._v("免费方便，不用花一分钱就可以搭建一个自由的个人博客，不需要服务器不需要后台；")]),t._v(" "),e("li",[t._v("可以随意绑定自己的域名，不仔细看的话根本看不出来你的网站是基于github的；")]),t._v(" "),e("li",[t._v("数据绝对安全，基于github的版本管理，想恢复到哪个历史版本都行；")]),t._v(" "),e("li",[t._v("博客内容可以轻松打包、转移、发布到其它平台；")]),t._v(" "),e("li",[t._v("等等；")])]),t._v(" "),e("p",[t._v("###准备工作###\n在开始一切之前，你必须已经：")]),t._v(" "),e("ul",[e("li",[t._v("有一个github账号，没有的话去注册一个；")]),t._v(" "),e("li",[t._v("安装了node.js、npm，并了解相关基础知识；")]),t._v(" "),e("li",[t._v("安装了git for windows（或者其它git客户端）")])]),t._v(" "),e("p",[t._v("本文所使用的环境：")]),t._v(" "),e("ul",[e("li",[t._v("Windows10专业版")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("node.js@6.11.2 LTS"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("git@2.14.1"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://hexo.io/zh-cn/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo@3.3.8"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("##搭建github博客##")]),t._v(" "),e("p",[t._v("###一、创建仓库###")]),t._v(" "),e("p",[t._v("新建一个名为你的"),e("strong",[t._v("用户名.github.io")]),t._v("的仓库，比如说，如果你的github用户名是test，那么你就新建"),e("strong",[t._v("test.github.io")]),t._v("的仓库（必须是你的用户名，其它名称无效），将来你的网站访问地址就是 http://test.github.io 了，是不是很方便？")]),t._v(" "),e("p",[t._v("由此可见，每一个github账户最多只能创建一个这样可以直接使用域名访问的仓库。")]),t._v(" "),e("p",[t._v("几个注意的地方：")]),t._v(" "),e("ol",[e("li",[t._v("注册的邮箱一定要验证，否则不会成功；")]),t._v(" "),e("li",[t._v("仓库名字必须是："),e("strong",[t._v("username.github.io")]),t._v("，其中"),e("strong",[t._v("username")]),t._v("是你的用户名；")]),t._v(" "),e("li",[t._v("仓库创建成功不会立即生效，需要过一段时间，大概10-30分钟，或者更久，我的等了半个小时才生效；")])]),t._v(" "),e("p",[t._v("创建成功后，默认会在你这个仓库里生成一些示例页面，以后你的网站所有代码都是放在这个仓库里啦。")]),t._v(" "),e("p",[t._v("###二、绑定域名###")]),t._v(" "),e("p",[t._v("当然，你不绑定域名肯定也是可以的，就用默认的 "),e("strong",[t._v("xxx.github.io")]),t._v(" 来访问，如果你想更个性一点，想拥有一个属于自己的域名，那也是OK的。")]),t._v(" "),e("p",[t._v("首先你要注册一个域名，域名注册以前总是推荐去"),e("strong",[t._v("godaddy")]),t._v("，现在觉得其实国内的阿里云也挺不错的，价格也不贵，毕竟是大公司，放心！")]),t._v(" "),e("p",[t._v("绑定域名分2种情况：带www和不带www的。")]),t._v(" "),e("p",[t._v("域名配置最常见有2种方式，CNAME和A记录，CNAME填写域名，A记录填写IP，由于不带www方式只能采用A记录，所以必须先ping一下"),e("strong",[t._v("你的用户名.github.io")]),t._v("的IP，然后到你的域名DNS设置页，将A记录指向你ping出来的IP，将CNAME指向"),e("strong",[t._v("你的用户名.github.io")]),t._v("，这样可以保证无论是否添加www都可以访问，如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081401.png",alt:""}})]),t._v(" "),e("p",[t._v("然后到你的github项目根目录新建一个名为CNAME的文件（无后缀），里面填写你的域名，加不加www看你自己喜好，因为经测试：")]),t._v(" "),e("ul",[e("li",[t._v("如果你填写的是没有www的，比如 mygit.me，那么无论是访问 http://www.mygit.me 还是 http://mygit.me ，都会自动跳转到 http://mygit.me")]),t._v(" "),e("li",[t._v("如果你填写的是带www的，比如 www.mygit.me ，那么无论是访问 http://www.mygit.me 还是 http://mygit.me ，都会自动跳转到 http://www.mygit.me")]),t._v(" "),e("li",[t._v("如果你填写的是其它子域名，比如 abc.mygit.me，那么访问 http://abc.mygit.me 没问题，但是访问 http://mygit.me ，不会自动跳转到 http://abc.mygit.me")])]),t._v(" "),e("p",[t._v("另外说一句，在你绑定了新域名之后，原来的"),e("strong",[t._v("你的用户名.github.io")]),t._v("并没有失效，而是会自动跳转到你的新域名。")]),t._v(" "),e("p",[t._v("##配置SSH key##")]),t._v(" "),e("p",[t._v("为什么要配置这个呢？因为你提交代码肯定要拥有你的github权限才可以，但是直接使用用户名和密码太不安全了，所以我们使用ssh key来解决本地和服务器的连接问题。")]),t._v(" "),e("p",[t._v("用git bash执行如下命令：")]),t._v(" "),e("p",[e("code",[t._v("$ cd ~/. ssh #检查本机已存在的ssh密钥")])]),t._v(" "),e("p",[t._v("如果提示：No such file or directory 说明你是第一次使用git。")]),t._v(" "),e("p",[e("code",[t._v('ssh-keygen -t rsa -C "邮件地址"')])]),t._v(" "),e("p",[t._v("然后连续3次回车，最终会生成一个文件在用户目录下，打开用户目录，找到**.ssh\\id_rsa.pub**文件，记事本打开并复制里面的内容，打开你的github主页，进入个人设置 -> SSH and GPG keys -> New SSH key：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081402.png",alt:""}})]),t._v(" "),e("p",[t._v("将刚复制的内容粘贴到key那里，title随便填，保存。")]),t._v(" "),e("p",[t._v("###测试是否成功###\n"),e("code",[t._v("$ ssh -T git@github.com # 注意邮箱地址不用改")])]),t._v(" "),e("p",[t._v("如果提示"),e("strong",[t._v("Are you sure you want to continue connecting (yes/no)?")]),t._v("，输入yes，然后会看到：")]),t._v(" "),e("blockquote",[e("p",[t._v("Hi liuxianan! You’ve successfully authenticated, but GitHub does not provide shell access.")])]),t._v(" "),e("p",[t._v("看到这个信息说明SSH已配置成功！")]),t._v(" "),e("p",[t._v("此时你还需要配置：")]),t._v(" "),e("p",[e("code",[t._v('$ git config --global user.name "liuxianan"// 你的github用户名，非昵称')]),t._v(" "),e("code",[t._v('$ git config --global user.email "xxx@qq.com"// 填写你的github注册邮箱')])]),t._v(" "),e("p",[t._v("具体这个配置是干嘛的我没仔细深究。")]),t._v(" "),e("p",[t._v("##使用hexo写博客##")]),t._v(" "),e("p",[t._v("###hexo简介###")]),t._v(" "),e("p",[t._v("Hexo是一个简单、快速、强大的基于 Github Pages 的博客发布工具，支持Markdown格式，有众多优秀插件和主题。")]),t._v(" "),e("p",[t._v("官网： "),e("a",{attrs:{href:"http://hexo.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://hexo.io"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("github: "),e("a",{attrs:{href:"https://github.com/hexojs/hexo",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/hexojs/hexo"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("###原理###")]),t._v(" "),e("p",[t._v("由于github pages存放的都是静态文件，博客存放的不只是文章内容，还有文章列表、分类、标签、翻页等动态内容，假如每次写完一篇文章都要手动更新博文目录和相关链接信息，相信谁都会疯掉，所以hexo所做的就是将这些md文件都放在本地，每次写完文章后调用写好的命令来批量完成相关页面的生成，然后再将有改动的页面提交到github。")]),t._v(" "),e("p",[t._v("###注意事项###")]),t._v(" "),e("p",[t._v("安装之前先来说几个注意事项：")]),t._v(" "),e("ol",[e("li",[t._v("很多命令既可以用Windows的cmd来完成，也可以使用git bash来完成，但是部分命令会有一些问题，为避免不必要的问题，建议全部使用git bash来执行；")]),t._v(" "),e("li",[t._v("hexo不同版本差别比较大，网上很多文章的配置信息都是基于2.x的，所以注意不要被误导；")]),t._v(" "),e("li",[t._v("hexo有2种_config.yml文件，一个是根目录下的全局的_config.yml，一个是各个theme下的；")])]),t._v(" "),e("p",[t._v("###安装###")]),t._v(" "),e("p",[e("code",[t._v("$ npm install -g hexo")])]),t._v(" "),e("h3",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),e("p",[t._v("在电脑的某个地方新建一个名为hexo的文件夹（名字可以随便取），比如我的是"),e("strong",[t._v("F:\\Workspaces\\hexo")]),t._v("，由于这个文件夹将来就作为你存放代码的地方，所以最好不要随便放。")]),t._v(" "),e("p",[e("code",[t._v("$ cd /f/Workspaces/hexo/")]),t._v(" "),e("code",[t._v("$ hexo init")])]),t._v(" "),e("p",[t._v("hexo会自动下载一些文件到这个目录，包括node_modules，目录结构如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081403.png",alt:""}})]),t._v(" "),e("p",[e("code",[t._v("$ hexo g # 生成")]),t._v(" "),e("code",[t._v("$ hexo s # 启动服务")])]),t._v(" "),e("p",[t._v("执行以上命令之后，hexo就会在public文件夹生成相关html文件，这些文件将来都是要提交到github去的：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081404.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("hexo s")]),t._v("是开启本地预览服务，打开浏览器访问 http://localhost:4000 即可看到内容，很多人会碰到浏览器一直在转圈但是就是加载不出来的问题，一般情况下是因为端口占用的缘故，因为4000这个端口太常见了，解决端口冲突问题请参考这篇文章：")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://blog.liuxianan.com/windows-port-bind.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://blog.liuxianan.com/windows-port-bind.html"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("第一次初始化的时候hexo已经帮我们写了一篇名为 Hello World 的文章，默认的主题比较丑，打开时就是这个样子：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081405.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"修改主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改主题"}},[t._v("#")]),t._v(" 修改主题")]),t._v(" "),e("p",[t._v("既然默认主题很丑，那我们别的不做，首先来替换一个好看点的主题。这是 "),e("a",{attrs:{href:"https://hexo.io/themes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方主题"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("个人比较喜欢的2个主题："),e("a",{attrs:{href:"https://github.com/pinggod/hexo-theme-jekyll",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-theme-jekyll"),e("OutboundLink")],1),t._v(" 和 "),e("a",{attrs:{href:"https://github.com/litten/hexo-theme-yilia",target:"_blank",rel:"noopener noreferrer"}},[t._v("hexo-theme-yilia"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("首先下载这个主题：")]),t._v(" "),e("p",[e("code",[t._v("$ cd /f/Workspaces/hexo/")]),t._v(" "),e("code",[t._v("$ git clone https://github.com/litten/hexo-theme-yilia.git themes/yilia")])]),t._v(" "),e("p",[t._v("下载后的主题都在这里：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081406.png",alt:""}})]),t._v(" "),e("p",[t._v("修改**_config.yml"),e("strong",[t._v("中的")]),t._v("theme: landscape"),e("strong",[t._v("改为")]),t._v("theme: yilia**，然后重新执行"),e("strong",[t._v("hexo g")]),t._v("来重新生成。")]),t._v(" "),e("p",[t._v("如果出现一些莫名其妙的问题，可以先执行"),e("strong",[t._v("hexo clean")]),t._v("来清理一下public的内容，然后再来重新生成和发布。")]),t._v(" "),e("h3",{attrs:{id:"上传之前"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传之前"}},[t._v("#")]),t._v(" 上传之前")]),t._v(" "),e("p",[t._v("在上传代码到github之前，一定要记得先把你以前所有代码下载下来（虽然github有版本管理，但备份一下总是好的），因为从hexo提交代码时会把你以前的所有代码都删掉。")]),t._v(" "),e("h3",{attrs:{id:"上传到github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传到github"}},[t._v("#")]),t._v(" 上传到github")]),t._v(" "),e("p",[t._v("如果你一切都配置好了，发布上传很容易，一句"),e("strong",[t._v("hexo d")]),t._v("就搞定，当然关键还是你要把所有东西配置好。")]),t._v(" "),e("p",[t._v("首先，"),e("strong",[t._v("ssh key")]),t._v("肯定要配置好。")]),t._v(" "),e("p",[t._v("其次，配置**_config.yml**中有关deploy的部分：")]),t._v(" "),e("p",[t._v("正确写法：")]),t._v(" "),e("p",[e("code",[t._v("deploy:")]),t._v(" "),e("code",[t._v("type: git")]),t._v(" "),e("code",[t._v("repository: git@github.com:liuxianan/liuxianan.github.io.git")]),t._v(" "),e("code",[t._v("branch: master")])]),t._v(" "),e("p",[t._v("错误写法：")]),t._v(" "),e("p",[e("code",[t._v("deploy:")]),t._v(" "),e("code",[t._v("type: github")]),t._v(" "),e("code",[t._v("repository: https://github.com/liuxianan/liuxianan.github.io.git")]),t._v(" "),e("code",[t._v("branch: master")])]),t._v(" "),e("p",[t._v("后面一种写法是hexo2.x的写法，现在已经不行了，无论是哪种写法，此时直接执行"),e("strong",[t._v("hexo d")]),t._v("的话一般会报如下错误：")]),t._v(" "),e("p",[e("code",[t._v("Deployer not found: github 或者 Deployer not found: git")]),t._v("\n原因是还需要安装一个插件：")]),t._v(" "),e("p",[e("code",[t._v("npm install hexo-deployer-git --save")])]),t._v(" "),e("p",[t._v("其它命令不确定，部署这个命令一定要用git bash，否则会提示"),e("strong",[t._v("Permission denied (publickey)")]),t._v(".")]),t._v(" "),e("p",[t._v("打开你的git bash，输入"),e("strong",[t._v("hexo d")]),t._v("就会将本次有改动的代码全部提交，没有改动的不会：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://yun.worthy.cc/worthy/2017081407.png",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yun.worthy.cc/worthy/2017081407.png"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"保留cname、readme-md等文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#保留cname、readme-md等文件"}},[t._v("#")]),t._v(" 保留CNAME、README.md等文件")]),t._v(" "),e("p",[t._v("提交之后网页上一看，发现以前其它代码都没了，此时不要慌，一些非md文件可以把他们放到source文件夹下，这里的所有文件都会原样复制（除了md文件）到public目录的：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081408.png",alt:""}})]),t._v(" "),e("p",[t._v("由于hexo默认会把所有md文件都转换成html，包括README.md，所有需要每次生成之后、上传之前，手动将README.md复制到public目录，并删除README.html。")]),t._v(" "),e("h3",{attrs:{id:"常用hexo命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用hexo命令"}},[t._v("#")]),t._v(" 常用hexo命令")]),t._v(" "),e("p",[t._v("常见命令")]),t._v(" "),e("p",[e("code",[t._v('hexo new "postName" #新建文章')]),t._v(" "),e("code",[t._v('hexo new page "pageName" #新建页面')]),t._v(" "),e("code",[t._v("hexo generate #生成静态页面至public目录")]),t._v(" "),e("code",[t._v("hexo server #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）")]),t._v(" "),e("code",[t._v("hexo deploy #部署到GitHub")]),t._v(" "),e("code",[t._v("hexo help # 查看帮助")]),t._v(" "),e("code",[t._v("hexo version #查看Hexo的版本")])]),t._v(" "),e("p",[t._v("缩写：")]),t._v(" "),e("p",[e("code",[t._v("hexo n == hexo new")]),t._v(" "),e("code",[t._v("hexo g == hexo generate")]),t._v(" "),e("code",[t._v("hexo s == hexo server")]),t._v(" "),e("code",[t._v("hexo d == hexo deploy")])]),t._v(" "),e("p",[t._v("组合命令：")]),t._v(" "),e("p",[e("code",[t._v("hexo s -g #生成并本地预览")]),t._v(" "),e("code",[t._v("hexo d -g #生成并上传")])]),t._v(" "),e("h3",{attrs:{id:"config-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-yml"}},[t._v("#")]),t._v(" _config.yml")]),t._v(" "),e("p",[t._v("这里面都是一些全局配置，每个参数的意思都比较简单明了，所以就不作详细介绍了。")]),t._v(" "),e("p",[t._v("需要特别注意的地方是，冒号后面必须有一个空格，否则可能会出问题。")]),t._v(" "),e("h3",{attrs:{id:"写博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写博客"}},[t._v("#")]),t._v(" 写博客")]),t._v(" "),e("p",[t._v("定位到我们的hexo根目录，执行命令：")]),t._v(" "),e("p",[e("code",[t._v("hexo new 'my-first-blog'")])]),t._v(" "),e("p",[t._v("hexo会帮我们在_posts下生成相关md文件：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081409.png",alt:""}})]),t._v(" "),e("p",[t._v("我们只需要打开这个文件就可以开始写博客了，默认生成如下内容：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081410.png",alt:""}})]),t._v(" "),e("p",[t._v("当然你也可以直接自己新建md文件，用这个命令的好处是帮我们自动生成了时间。")]),t._v(" "),e("p",[t._v("一般完整格式如下：")]),t._v(" "),e("p",[e("code",[t._v("----")]),t._v(" "),e("code",[t._v("title: postName #文章页面上的显示名称，一般是中文")]),t._v(" "),e("code",[t._v("date: 2013-12-02 15:30:16 #文章生成时间，一般不改，当然也可以任意修改")]),t._v(" "),e("code",[t._v("categories: 默认分类 #分类")]),t._v(" "),e("code",[t._v("tags: [tag1,tag2,tag3] #文章标签，可空，多标签请用格式，注意:后面有个空格")]),t._v(" "),e("code",[t._v("description: 附加一段文章摘要，字数最好在140字以内，会出现在meta的description里面")]),t._v(" "),e("code",[t._v("----")]),t._v(" "),e("code",[t._v("以下是正文")])]),t._v(" "),e("p",[t._v("那么**hexo new page 'postName'"),e("strong",[t._v("命令和")]),t._v("hexo new 'postName'**有什么区别呢？")]),t._v(" "),e("p",[e("code",[t._v('hexo new page "my-second-blog"')])]),t._v(" "),e("p",[t._v("生成如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081411.png",alt:""}})]),t._v(" "),e("p",[t._v("最终部署时生成："),e("strong",[t._v("hexo\\public\\my-second-blog\\index.html")]),t._v("，但是它不会作为文章出现在博文目录。")]),t._v(" "),e("h3",{attrs:{id:"小技巧如何让博文列表不显示全部内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小技巧如何让博文列表不显示全部内容"}},[t._v("#")]),t._v(" 小技巧如何让博文列表不显示全部内容")]),t._v(" "),e("p",[t._v("默认情况下，生成的博文目录会显示全部的文章内容，如何设置文章摘要的长度呢？")]),t._v(" "),e("p",[t._v("答案是在合适的位置加上**"),t._v("**即可，例如：")]),t._v(" "),e("p",[e("code",[t._v("# 前言")]),t._v(" "),e("code",[t._v("使用github pages服务搭建博客的好处有：")]),t._v(" "),e("code",[t._v("1. 全是静态文件，访问速度快；")]),t._v(" "),e("code",[t._v("2. 免费方便，不用花一分钱就可以搭建一个自由的个人博客，不需要服务器不需要后台；")]),t._v(" "),e("code",[t._v("3. 可以随意绑定自己的域名，不仔细看的话根本看不出来你的网站是基于github的；")]),t._v(" "),e("code",[t._v("\x3c!--more--\x3e")]),t._v(" "),e("code",[t._v("4. 数据绝对安全，基于github的版本管理，想恢复到哪个历史版本都行；")]),t._v(" "),e("code",[t._v("5. 博客内容可以轻松打包、转移、发布到其它平台；")]),t._v(" "),e("code",[t._v("6. 等等；")])]),t._v(" "),e("p",[t._v("最终效果：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://yun.worthy.cc/worthy/2017081412.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"后记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[t._v("#")]),t._v(" 后记")]),t._v(" "),e("ol",[e("li",[t._v("本文所有命令都是在git bash终端里进行。")]),t._v(" "),e("li",[t._v("总所周知的原因，npm下载过慢，这里推荐使用"),e("a",{attrs:{href:"https://npm.taobao.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("淘宝 NPM 镜像"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("搭建node.js时可能遇到问题，建议浏览"),e("a",{attrs:{href:"http://blog.oneapm.com/apm-tech/744.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在 Windows 10 中搭建 Node.js 环境？"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("相关参考："),e("a",{attrs:{href:"https://my.oschina.net/ryaneLee/blog/638440",target:"_blank",rel:"noopener noreferrer"}},[t._v("小白独立搭建博客--Github Pages和Hexo简明教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("知乎相关问题："),e("a",{attrs:{href:"https://www.zhihu.com/question/20962496",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何在 GitHub 上写博客？"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=o.exports}}]);