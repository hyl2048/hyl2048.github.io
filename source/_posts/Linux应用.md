---
title: Linux应用
top: false
cover: false
toc: true
mathjax: true
abbrlink: 59742
date: 2020-08-19 22:39:42
password:
summary:
tags:
categories: Basic
---

# Linux 概览



# Linux 常用命令

## 操作文件以及目录命令

ls:

pwd:

clear:

cd:

mkdir:

cp:

mv:

rm:

touch:创建一个空文件

**tar:**解压缩文件

​		常用参数：

​				-c 建立一个压缩文件的参数指令（create）

​				-x 解开一个压缩文件的参数指令（extract）

​				-z 是否需要用 gzip 压缩

​				-v 压缩的过程中显示文件（verbose）

​				-f 使用档名，在 f 之后要立即接档名（file）

cat: 

echo:显示变量的值；将内容写入指定文件，如果目标文件不存在，同时会把文件创建出来。

head/tail:查看文本中开头或结尾部分的内容

In:建立链接文件

​		常用参数：

​				-s 对源文件建立符号连接，而非硬连接（symbolic）

## 系统命令

find:在文件系统中查找指定的文件

​		语法：find 目录 -name 文件名称

**grep**:在指定的文本文件中查找指定的字符串；

​		语法：grep 文本内容 文件名称

​		例子：grep linux install.log

​				在前边命令的结果中查找内容；

​		语法：命令 | grep 文本内容

​		例子：ll | grep install

|:管道

​		例子：ls -l | grep java

​		ls -l 命令的输出，会作为grep java命令的输入。

**ps**

​		用途：显示瞬间的进程状态

​		常用参数：

​				-a 显示所有用户的所有进程（包括其它用户）

​				-u 按用户名和启动时间的顺序来显示进程

​				-x 显示无控制终端的进程

​		例子：ps aux | grep java

​     			**ps -ef | grep java**

**kill**

​		用途：杀死一个进程

​		语法：kill pid或者kill -9 pid（强制终止）

su:

​		用途：切换用户（使用su命令切换用户时，需要知道目标用户的密码）

​		语法：su -<user> 或者 su <user>

​		例子：su itcast

sudo:

​		用途：获取临时目标用户权限，默认是root用户（使用sudo命令获取临时，不需要知道目标用户的密码，只需要输入当前用户密码）

​		语法：sudo cd /root

​		

whoami:

​		用途：查看当前用户

​		语法：whoami

which:

​		用途：查看可执行文件在哪

​		语法：which 命令

​		例子：which mkdir

mount:

​		用途：挂载外设、挂载目录

​		语法：mount <源目录> <目标目录>

​		例子：mount /usr/local/mnt /mnt/temp

dirname：

​		用途：显示文件所在目录

​		语法：dirname <目录/文件>

​		例子：dirname /usr/local

top:

​		用途：显示当前系统中耗费资源最多的进程 

​		语法：top

Ctrl+c:

df:

​		用途：显示文件系统磁盘空间的使用情况

hostname:

​		用途：查看当前主机名

​		语法：hostname

free:

​		用途：显示当前内存和交换空间的使用情况

shutdown:

​		用途：关机/重启

​		常用参数：

​				-r 关机后立即重启

​				-h 关机后不重新启动

​				例子：shutdown -r 10     10分钟后重新启动

 

​				halt 关机后关闭电源 

​				reboot 重新启动

## 帮助命令

help

​		用途：查看帮助文档

​		语法：help 命令

​		例子：help if

## 固定IP网络配置

# VIM 文本编辑器

## VIM 工作模式

![vim_mode](/59742/vim_mode.png)

## 插入命令

## 定位命令

## 删除命令

## 复制粘贴

## 替换和取消

## 退出命令

# 用户和组账户管理

## 操作用户命令

## 操作用户组命令

# **权限管理**

## 三种基本权限

​			![image_right_stratagy](/59742/image_right_stratagy.png)

## 更改操作权限

语法：**chmod [options] mode files**

 

注意：只能[文件属主]或[特权用户]才能进行文件权限的更改。

 

l mode

n 可以是数字形式

n 可以用who opcode permission英文表达式表示。

注意：可指定多个mode，以逗号分隔。

l **options**

n -c，--changes

只输出被改变文件的信息

n -f，--silent，--quiet

当chmod不能改变文件模式时，不通知文件的用户

n --help

输出帮助信息。

n -R，--recursive

可递归遍历子目录，把修改应到目录下所有文件和子目录

n --reference=filename

参照filename的权限来设置权限

n -v，--verbose

无论修改是否成功，输出每个文件的信息

n --version

输出版本信息。

### 通过who opcode permission英文表达式修改权限

**who**

u:用户

g:组

o:其它

a:所有用户(默认)

 

**opcode**

+:增加权限

-:删除权限

=:重新分配权限

 

**permission**

r:读

w:写

x:执行

s:设置用户(或组)的ID号

t:设置粘着位(sticky bit)，防止文件或目录被非属主删除

u:用户的当前权限

g:组的当前权限

o:其他用户的当前权限

 

命令演示：

[root@redis01 ~]# chmod **u+x** file

### 通过数字修改权限

**可以使用三位[****八进制数字]****来表示权限**，比如：777,751等，就可以表示权限。

 

第一位数字指定属主的权限

第二位数字指定用户组的权限

第三位数字指定其他用户的权限。

 

每个位置的数字是通过4(读)、2(写)、1(执行)三种数值的和来确定的。

如：

6(4+2)代表有读、写权限。

7(4+2+1)代表有读、写和执行的权限。

 

还可设置第四位，它位于三位权限序列的前面，第四位数字取值是4，2，1，代表意思如下：

4：执行时设置用户ID，用于授权给基于文件属主的进程，而不是给创建此进程的用户。

2：执行时设置用户组ID，用于授权给基于文件所在组的进程，而不是基于创建此进程的用户。

1：设置粘着位。

示例:[root@hyl01 ~]# chmod 751 house

### 常用修该权限方式

$ chmod u+x file        　　　  给file的属主增加执行权限

$ chmod 751 file        　　　  给file的属主分配读、写、执行(7)的权限，给file的所在组分配读、执行(5)的权限，给其他用户分配执行(1)的权限

$ chmod u=rwx,g=rx,o=x file   上例的另一种形式

$ chmod =r file         　　　　为所有用户分配读权限

$ chmod 444 file       　　　　 同上例

$ chmod a-wx,a+r  file  　 　  同上例

$ chmod -R u+r directory    　  递归地给directory目录下所有文件和子目录的属主分配读的权限

$ chmod 4755             　　设置用户ID，给属主分配读、写和执行权限，给组和其他用户分配读、执行的权限，并且该文件除了属主，不能被其用户进行删除或移动操作。

# 软件安装命令

## 软件安装

## 防火墙

​		永久关闭

​		临时关闭

​		修该防火墙规则

# Shell脚本编写

[编写shell脚本教程](https://haldir65.github.io/2018/11/04/2018-11-04-how-to-write-shell-scripts/)

# 常见问题

1.[Linux统计文本行数](https://www.cnblogs.com/fullhouse/archive/2011/07/17/2108786.html)



