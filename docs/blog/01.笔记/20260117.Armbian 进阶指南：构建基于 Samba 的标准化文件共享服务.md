# Armbian 进阶指南：构建基于 Samba 的标准化文件共享服务

对于斐讯 N1 或其他运行 Armbian 的设备来说，搭建一个稳定、高效的文件共享服务（NAS）是其最核心的用途之一。

虽然安装 Samba 并不复杂，但要做到**目录结构规范**、**权限清晰**且**界面整洁**（没有乱七八糟的默认文件夹），则需要一些更细致的配置。本文将从零开始，带你部署一个符合 Linux 标准（FHS）的文件共享服务。

---

## 第一阶段：清理环境（如果需要）

如果你之前的配置由于多次修改而变得混乱，或者遇到莫名其妙的权限问题，最快的方法往往是“推倒重来”。

我们将彻底卸载 Samba 及其配置文件，但请放心，**这不会删除你硬盘里实际存储的视频或照片数据**。

```bash
# 停止相关服务
sudo systemctl stop smbd nmbd

# 彻底卸载软件及配置文件 (Purge)
sudo apt purge samba samba-common -y

# 清理不再需要的依赖包
sudo apt autoremove -y

```

---

## 第二阶段：规划与安装

### 1. 目录哲学的选择：/mnt 还是 /srv？

在大多数简易教程中，大家习惯将数据放在 `/mnt` 下。这通常是因为大家挂载外接硬盘时习惯使用 `/mnt` 或 `/media`。

但如果你追求 Linux 的**Filesystem Hierarchy Standard (FHS)** 标准，或者使用的是设备内部存储（如 EMMC），**`/srv` (Service Data)** 才是更专业的选择。它专门用于存放本机对外提供的服务数据。

在本指南中，我们将采用更规范的 `/srv` 路径（如果你挂载了外接硬盘，将其挂载到 `/srv/samba/data` 也是完全合规的）。

### 2. 安装与创建目录

首先，更新源并安装服务：

```bash
sudo apt update
sudo apt install samba -y

```

接着，建立标准化的目录结构：

```bash
# 创建符合规范的目录
sudo mkdir -p /srv/samba/nas_data

# 赋予读写权限 (为避免复杂的权限组配置，此处给予全权限，适合家庭局域网)
sudo chmod -R 777 /srv/samba/nas_data

```

---

## 第三阶段：核心配置 (smb.conf)

这是最关键的一步。我们将配置一个既能保护隐私，又不显示多余系统文件夹的纯净环境。

打开配置文件：

```bash
sudo nano /etc/samba/smb.conf

```

### 1. 净化环境：隐藏默认的 Home 和 Root

默认情况下，Samba 会自作聪明地把用户的“家目录”共享出来。这就导致了你用 `root` 登录时，会看到一个名为 `root` 的文件夹，里面塞满了系统文件，既不安全也碍眼。

在编辑器中按 `Ctrl+W` 搜索 `[homes]`，找到相关段落。**建议直接在整段前加 `;` 注释掉，或者直接删除整段内容：**

```ini
; [homes]
;    comment = Home Directories
;    browseable = no
;    ... (将整个 [homes] 板块注释掉)

```

### 2. 添加你的共享配置

在文件的**最末尾**，粘贴以下配置。这里提供“专用”和“公开”两种最常用的方案，二选一即可：

#### 方案 A：私有云模式（推荐，需要密码）

适合存放个人文档、备份，安全性高。

```ini
[NAS_Data]
    comment = My Private Storage
    path = /srv/samba/nas_data
    browseable = yes
    writable = yes
    valid users = root
    # 强制新建文件的权限，防止后续出现无法删除的情况
    create mask = 0777
    directory mask = 0777

```

#### 方案 B：家庭影院模式（公开，免密）

适合给电视盒子、客人手机读取电影，方便第一。

```ini
[Public_Share]
    comment = Public Media
    path = /srv/samba/nas_data
    browseable = yes
    writable = yes
    guest ok = yes
    # 强制将来访者映射为 root 身份操作，彻底解决权限烦恼
    force user = root
    create mask = 0777
    directory mask = 0777

```

*编辑完成后，按 `Ctrl+O` 保存，`Ctrl+X` 退出。*

---

## 第四阶段：账户与服务重启

如果你选择了上面的 **方案 A**，你需要为访问者设置密码。注意，Samba 的密码是独立于系统登录密码的。

```bash
# 将系统用户 root 加入 Samba 用户库并设置密码
# (输入命令后会提示你设置新密码)
sudo smbpasswd -a root

```

最后，重启服务让一切生效：

```bash
sudo systemctl restart smbd

```

---

## 第五阶段：客户端连接验证

现在，你的 Armbian 应该已经变身为一台标准的 NAS 了。

* **Mac 用户 (macOS):**
打开 Finder (访达) -> `Command + K` -> 输入 `smb://你的设备IP`。
*注：此时你应该只看得到 `NAS_Data` 文件夹，那个烦人的 `root` 文件夹应该已经消失了。*
* **Windows 用户:**
Win + R -> 输入 `\\你的设备IP`。
