(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{410:function(s,a,t){"use strict";t.r(a);var n=t(12),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"weblogic-server安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#weblogic-server安装"}},[s._v("#")]),s._v(" WebLogic Server安装")]),s._v(" "),a("h2",{attrs:{id:"_1-安装java环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装java环境"}},[s._v("#")]),s._v(" 1.安装java环境")]),s._v(" "),a("h2",{attrs:{id:"_2-创建weblogic用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建weblogic用户"}},[s._v("#")]),s._v(" 2.创建weblogic用户")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# useradd weblogic")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# passwd weblogic")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su - weblogic")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-version")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_3-安装准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装准备"}},[s._v("#")]),s._v(" 3.安装准备")]),s._v(" "),a("p",[a("code",[s._v("$ vim wls.rsp #创建响应文件")])]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[s._v("[ENGINE]\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#DO NOT CHANGE THIS.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("Response")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("File Version=1.0.0.0.0")]),s._v("\n\n[GENERIC]\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#The oracle home location. This can be an existing Oracle Home or a new Oracle Home")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("ORACLE_HOME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/weblogic/oracle               #指定weblogic安装目录，自动创建")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Set this variable value to the Installation Type selected. e.g. WebLogic Server, Coherence, Complete with Examples.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("INSTALL_TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("WebLogic Server")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provide the My Oracle Support Username. If you wish to ignore Oracle Configuration Manager configuration provide empty string for user name.")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("MYORACLESUPPORT_USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provide the My Oracle Support Password")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("MYORACLESUPPORT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("<SECURE VALUE>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Set this to true if you wish to decline the security updates. Setting this to true and providing empty string for My Oracle Support username will ignore the Oracle Configuration Manager configuration")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("DECLINE_SECURITY_UPDATES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Set this to true if My Oracle Support Password is specified")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("SECURITY_UPDATES_VIA_MYORACLESUPPORT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provide the Proxy Host")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PROXY_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provide the Proxy Port")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PROXY_PORT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provide the Proxy Username")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PROXY_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Provide the Proxy Password")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("PROXY_PWD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("<SECURE VALUE>")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Type String (URL format) Indicates the OCM Repeater URL which should be of the format [scheme[Http/Https]]://[repeater host]:[repeater port]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("COLLECTOR_SUPPORTHUB_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("p",[a("code",[s._v("$ vim oraInst.loc #创建Loc文件")])]),s._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("inventory_loc=/home/weblogic/oraInventory\n\ninst_group=weblogic\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_4-安装weblogic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装weblogic"}},[s._v("#")]),s._v(" 4.安装weblogic")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp -r fmw_12.2.1.4.0_wls.jar /home/weblogic/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chown -R weblogic:weblogic /home/weblogic/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# su - weblogic")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x fmw_12.2.1.4.0_wls.jar\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-jar")]),s._v(" fmw_12.2.1.4.0_wls.jar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-silent")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-responseFile")]),s._v(" /home/weblogic/wls.rsp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-invPtrLoc")]),s._v(" /home/weblogic/oraInst.loc "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ORACLE_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/weblogic/oracle          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#静默安装，需要绝对路径")]),s._v("\n\nCopying Files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n-----------20%----------40%----------60%----------80%--------100%\n\nThe installation of WebLogic Server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.1")]),s._v(".2.0.0 completed successfully.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"_5-创建domain-域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-创建domain-域"}},[s._v("#")]),s._v(" 5.创建domain（域）")]),s._v(" "),a("h3",{attrs:{id:"纯命令行创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯命令行创建"}},[s._v("#")]),s._v(" 纯命令行创建：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MW_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/weblogic/oracle"')]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WL_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/weblogic/oracle/oracle_common"')]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/weblogic/oracle/wlserver/common/bin/\n\n$ ./commEnv.sh\n\n$ ./wlst.sh\n\nwls:/offline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" readTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/weblogic/oracle/wlserver/common/templates/wls/wls.jar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                             \n\nwls:/offline/base_domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Servers/AdminServer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline/base_domain/Server/AdminServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ListenAddress'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline/base_domain/Server/AdminServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("set"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ListenPort'")]),s._v(",7001"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline/base_domain/Server/AdminServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../..'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline/base_domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Security/base_domain/User/weblogic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用户为weblogic")]),s._v("\n\nwls:/offline/base_domain/Security/base_domain/User/weblogic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("cmo.setPassword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'weblogic1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#密码是weblogic1")]),s._v("\n\nwls:/offline/base_domain/Security/base_domain/User/weblogic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("setOption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OverwriteDomain'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline/base_domain/Security/base_domain/User/weblogic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("writeDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/weblogic/oracle/user_projects/domains/base_domain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline/base_domain/Security/base_domain/User/weblogic"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("closeTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nwls:/offline"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("h3",{attrs:{id:"参数文件创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数文件创建"}},[s._v("#")]),s._v(" 参数文件创建：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/weblogic/oracle/wlserver/common/bin/\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" create_domains.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("readTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/weblogic/oracle/wlserver/common/templates/wls/wls.jar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Servers/AdminServer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ListenAddress'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ListenPort'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Security/base_domain/User/weblogic'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ncmo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setPassword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'weblogic1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsetOption"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OverwriteDomain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nwriteDomain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/home/weblogic/oracle/user_projects/domains/base_domain'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ncloseTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nexit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ./wlst.sh ./create_domains.py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6-启动weblogic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-启动weblogic"}},[s._v("#")]),s._v(" 6.启动weblogic")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/weblogic/oracle/user_projects/domains/base_domain/bin/\n\n$ ./startWebLogic.sh\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lntp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("访问"),a("code",[s._v("http://ip:7001/console/login/LoginForm.jsp")]),s._v("，出现登录页面，输入用户密码登录")]),s._v(" "),a("h2",{attrs:{id:"参考内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考内容"}},[s._v("#")]),s._v(" 参考内容")]),s._v(" "),a("p",[s._v("https://blog.csdn.net/miss1181248983/article/details/90376302")]),s._v(" "),a("p",[s._v("https://www.javazxz.com/thread-7818-1-1.html")])])}),[],!1,null,null,null);a.default=e.exports}}]);