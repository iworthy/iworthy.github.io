(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{436:function(n,t,e){"use strict";e.r(t);var r=e(12),s=Object(r.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("LNMP一键安装包是一个用Linux Shell编写的可以为CentOS/RHEL/Fedora/Aliyun/Amazon、Debian/Ubuntu/Raspbian/Deepin/Mint Linux VPS或独立主机安装LNMP(Nginx/MySQL/PHP)、LNMPA(Nginx/MySQL/PHP/Apache)、LAMP(Apache/MySQL/PHP)生产环境的Shell程序。")]),n._v(" "),t("p",[n._v("##安装lnmp##\n###1.使用putty或类似的SSH工具登陆VPS或服务器；###\n登陆后运行：screen -S lnmp\n如果提示screen: command not found 命令不存在可以执行：yum install screen 或 apt-get install screen安装，详细内容参考screen教程。\n####关于screen：####\nScreen是一款由GNU计划开发的用于命令行终端切换的自由软件。用户可以通过该软件同时连接多个本地或远程的命令行会话，并在其间自由切换。GNU Screen可以看作是窗口管理器的命令行界面版本。它提供了统一的管理多个会话的界面和相应的功能。在Screen环境下，所有的会话都独立的运行，并拥有各自的编号、输入、输出和窗口缓存。用户可以通过快捷键在不同的窗口下切换，并可以自由的重定向各个窗口的输入和输出\n当通过putty或者SecureCRT安装lnmp时，网络突然掉线或者不小心putty被关掉等等原因，为了防止lnmp安装过程被中断，只要在安装lnmp前执行screen命令就可以了。\n####screen安装方法：#####\nyum install screen b、执行：screen -S lnmp 创建screen会话。\n如果网络掉线，可以重新连接SSH，再执行 screen -r lnmp 就会看到你的lnmp安装进程。有时候screen异常退出可能会提示状态为Attached，可以执行：screen -D -r lnmp 进行恢复。有时候可能会创建了多个同名的screen会话，可以执行：screen -ls 查看对应会话的session id，然后使用screen -D -r sessionid 进行恢复。\n###2.下载并安装LNMP一键安装包：###")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("wget http://soft.vpser.net/lnmp/lnmp1.6.tar.gz -cO lnmp1.6.tar.gz && tar zxf lnmp1.6.tar.gz && cd lnmp1.6 && ./install.sh lnmp\n")])])]),t("p",[n._v('按照提示选择要安装的nginx，mysql，php版本\n提示"Press any key to install...or Press Ctrl+c to cancel"后，按回车键确认开始安装。\nLNMP脚本就会自动安装编译Nginx、MySQL、PHP、phpMyAdmin等软件及相关的组件。\n###3、安装完成###\n如果显示Nginx: OK，MySQL: OK，PHP: OK，并且Nginx、MySQL、PHP都是running，80和3306端口都存在，并提示安装使用的时间及Install lnmp V1.6 completed! enjoy it.的话，说明已经安装成功。\n'),t("img",{attrs:{src:"https://alist.worthy.cc/d/local/images/2019/10/06/1570362364.png",alt:"图1"}}),n._v("\n##安装后的配置##\n###4、默认LNMP是不安装FTP服务器的，安装FTP服务器###\n安装Pureftpd，LNMP一键安装包里安装后，使用命令lnmp ftp {add|del|edit}进行管理。\ncd lnmp1.6 进入lnmp解压后的目录，执行："),t("code",[n._v("./pureftpd.sh")]),n._v(" "),t("img",{attrs:{src:"https://alist.worthy.cc/d/local/images/2019/10/06/1570362448.png",alt:"图2"}}),n._v(" "),t("img",{attrs:{src:"https://alist.worthy.cc/d/local/images/2019/10/06/1570362459.png",alt:"图3"}}),n._v("\n安装的FTP服务器均为普通连接未加密、非TLS加密等连接，连接时请注意选择。\n卸载Pureftpd，执行："),t("code",[n._v("./pureftpd.sh uninstall")]),n._v(" 即可对pureftpd进行卸载。\n###5.LNMP添加、删除虚拟主机及伪静态使用###\n添加网站(虚拟主机)\n执行："),t("code",[n._v("lnmp vhost add")]),n._v(" "),t("img",{attrs:{src:"https://alist.worthy.cc/d/local/images/2019/10/06/1570362510.png",alt:"图4"}}),n._v(" "),t("img",{attrs:{src:"https://alist.worthy.cc/d/local/images/2019/10/06/1570362526.png",alt:"图5"}}),n._v("\n由于网络原因ssl证书失败，几次尝试之后成功！\n对于已存在的虚拟主机添加https站点，可以执行："),t("code",[n._v("lnmp ssl add")]),n._v(" 命令添加ssl证书\n###6.链接ftp上传网站文件，连接数据库上传数据库###\nFTP服务需要开放TCP：21端口和TCP：20000-30000随机端口。\n####linux tar解压命令：####")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("tar -xvf file.tar //解压 tar包\ntar -xzvf file.tar.gz //解压tar.gz\ntar -xjvf file.tar.bz2   //解压 tar.bz2\ntar -xZvf file.tar.Z   //解压tar.Z\nunrar e file.rar //解压rar\nunzip file.zip //解压zip\n")])])]),t("p",[n._v("####linux rm删除命令：####")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("rm  -rf   test.txt  //删除文件名 test.txt:\nrm  -rf   test/  //删除目录 test及文件\nrm  -rf *  // 删除当前目录下的所有文件及目录\n")])])]),t("p",[n._v("导入数据库时发现phpmyadmin未安装，使用lnmp手动升级命令安装\nLNMP1.2及更高版本： 统一使用"),t("code",[n._v("./upgrade.sh")]),n._v(" 进行升级工作。 使用方法："),t("code",[n._v("./upgrade.sh {nginx|mysql|mariadb|m2m|php|phpa|phpmyadmin}")])]),n._v(" "),t("p",[n._v("####LNMP相关软件安装目录####")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("Nginx 目录: /usr/local/nginx/\nMySQL 目录 : /usr/local/mysql/\nMySQL数据库所在目录：/usr/local/mysql/var/\nMariaDB 目录 : /usr/local/mariadb/\nMariaDB数据库所在目录：/usr/local/mariadb/var/\nPHP目录 : /usr/local/php/\n多PHP版本目录 : /usr/local/php5.5/ 其他版本前面5.5的版本号换成其他即可\nPHPMyAdmin目录 : 0.9版本为/home/wwwroot/phpmyadmin/ 1.0及以后版本为 /home/wwwroot/default/phpmyadmin/ 强烈建议将此目录重命名为其不容易猜到的名字。phpmyadmin可自己从官网下载新版替换。\n默认网站目录 : 0.9版本为 /home/wwwroot/ 1.0及以后版本为 /home/wwwroot/default/\nNginx日志目录：/home/wwwlogs/\n/root/vhost.sh添加的虚拟主机配置文件所在目录：/usr/local/nginx/conf/vhost/\nPureFtpd 目录：/usr/local/pureftpd/\nPureFtpd web管理目录： 0.9版为/home/wwwroot/default/ftp/ 1.0版为 /home/wwwroot/default/ftp/\nProftpd 目录：/usr/local/proftpd/\nRedis 目录：/usr/local/redis/\n")])])]),t("p",[n._v("####vim编辑器使用：####\n"),t("img",{attrs:{src:"https://alist.worthy.cc/d/local/images/2019/10/06/1570362642.gif",alt:"图片vim"}})]),n._v(" "),t("p",[n._v("###7.LNMP下实现http跳转https###")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("cd  /usr/local/nginx/conf/vhost/\nvim www.worthy.cc.conf\n")])])]),t("p",[n._v("首先修改80端口的配置：\nserver {\nlisten 80;\nserver_name worthy.cc www.worthy.cc;\nreturn 301 https://www.worthy.cc$request_uri;\n}")]),n._v(" "),t("p",[n._v("让https://worthy.cc也跳转到https://www.worthy.cc\n在443字块的server_name下加入如下代码")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("if ($host = 'worthy.cc') {\n  return 301 https://www.worthy.com$request_uri;\n}\n")])])]),t("p",[n._v("###8.lnmp无法删除.user.ini文件###\n出现提示rm: cannot remove `xxx.com/.user.ini’: Operation not permitted\n解决办法：解除文件权限锁定后再删除")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("chattr -i /home/wwwroot/www.worthy.cc/.user.ini\nrm -rf  /home/wwwroot/www.worthy.cc\n")])])]),t("p",[n._v("###9.nginx关闭默认站点/空主机头（禁止IP直接访问、防止域名恶意解析）\n修改/usr/local/nginx/conf/nginx.conf ，将里面的默认的虚拟主机server{}段修改为如下即可：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("server {\nlisten 80 default_server;\nserver_name _;\nreturn 500;\n}\n")])])]),t("p",[n._v("当然也可以将return 500;替换为rewrite ^(.*) https://www.worthy.cc permanent;   将流量导入到你指定的网站上。也可以改成return 444; 这样所有的访问都被直接丢弃。\n最后记住，"),t("code",[n._v("/usr/local/nginx/sbin/nginx -s reload")]),n._v("\n使用空主机头后，原默认虚拟主机下的文件，如PHPmyadmin将无法访问，需要你加个二级域名指向phpmyadmin目录就行了。\n对于开启了https的用户，未添加https站点的域名，也可以https访问，只是会访问默认的https网站并提示不安全、域名证书不匹配。\n开启SSL后https的空主机头的设置")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("server {\nlisten 443 default_server;\nserver_name _;\nssl_certificate 随便设置一个ssl证书;\nssl_certificate_key 随便设置一个ssl证书的key;\nreturn 500;\n}\n")])])]),t("p",[n._v("###10.linux下文件复制和移动###\n1.复制粘贴文件　　cp  [选项]  源文件或目录  目标文件或目录\n2.剪切粘贴文件　　mv [选项]  源文件或目录  目标文件或目录")])])}),[],!1,null,null,null);t.default=s.exports}}]);