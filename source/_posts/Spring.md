---
title: Spring
top: false
cover: false
toc: true
mathjax: true
abbrlink: 18155
date: 2020-09-03 11:00:51
password:
summary:
tags:
categories: About Spring
---

## Spring Framework



## Spring 体系结构

![image-20200910144056583](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200910144056583.png)



## IOC

什么是IOC容器

​		一个HashMap

如何创建IOC容器

 ***contextapplication

IOC容器如何初始化Bean实例

## 基于XML的IOC

## 基于XML的DI

依赖注入，

## 基于注解的IOC

## Spring纯注解实现方式

## Spring 与Junit

## Spring 分模块开发

## Spring AOP 原理

代理分为静态代理与动态代理，动态代理有JDK动态代理、CGLIB动态代理

JDK动态代理与CGLIB动态代理的区别

## Spring AOP基于XML和注解的实现

## Spring 应用-Spring JDBC 实现

## Spring 应用-JdbcDaoSupport

## Spring 应用-事务支持

## Spring 与 MyBatis

Spring 循环依赖

​		A 创建过程中需要 B，于是 A 将自己放到三级缓里面 ，去实例化 B B 实例化的时候发现需要 A，于是 B 先查一级缓存，没有，再查二级缓存，还是没有，再查三级缓存，找到了！ 然后把三级缓存里面的这个 A 放到二级缓存里面，并删除三级缓存里面的 A B 顺利初始化完毕，将自己放到一级缓存里面（此时B里面的A依然是创建中状态） 然后回来接着创建 A，此时 B 已经创建结束，直接从一级缓存里面拿到 B ，然后完成创建，并将自己放到一级缓存里面。

https://jishuin.proginn.com/p/763bfbd2c640

https://www.bilibili.com/read/cv3791985/  （可以关闭Spring默认支持的单例模式中的循环依赖）

https://developer.aliyun.com/article/766880

https://developer.51cto.com/art/202005/615924.htm

https://www.cnblogs.com/jajian/p/10241932.html

https://segmentfault.com/a/1190000015221968

属性注册编辑器

Spring 拦截器原理

Spring 事件监听

Spring异步注解

Spring 事件驱动编程使用

Spring aop织入过程分析



## Servlet

[servlet到Spring mvc的简化之路](https://juejin.im/post/6844903570681135117)



## Spring 源码

[Spring XML配置文件的解析流程](https://blog.csdn.net/u013510838/article/details/75092612)

[Spring的bean加载过程](https://blog.csdn.net/firefile/article/details/90735264)

[Spring AOP 源码分析 - 拦截器链的执行过程](http://www.tianxiaobo.com/2018/06/22/Spring-AOP-%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90-%E6%8B%A6%E6%88%AA%E5%99%A8%E9%93%BE%E7%9A%84%E6%89%A7%E8%A1%8C%E8%BF%87%E7%A8%8B/)

[Spring AOP源码分析（生成代理对象）](https://blog.csdn.net/zly9923218/article/details/51348583)

[Spring MVC过程](https://blog.csdn.net/win7system/article/details/90674757)

## 常见问题

BeanFactory和FactoryBean的区别

BeanFactory 与 ApplicationContext区别

Spring 中Bean的循环引用如何解决？

Spring注解是什么时候加载的？

IOC容器只存放单例吗？

[spring多个AOP执行先后顺序（面试问题：怎么控制多个aop的执行循序）](https://blog.csdn.net/hxpjava1/article/details/55504513/)

[spring AOP常见面试题目](https://shimo.im/docs/Nj0bcFUy3SYyYnbI/)

## 参考

[1] [Spring 官方文档](https://www.docs4dev.com/docs/en/spring-framework/5.1.3.RELEASE/reference/overview.html)

[2]  [Spring Framework Documentation](https://docs.spring.io/spring-framework/docs/current/spring-framework-reference/index.html)

[3] [Spring Framework 中文文档](https://www.docs4dev.com/docs/zh/spring-framework/5.1.3.RELEASE/reference)

[4] [SpringBoot中文社区](https://springboot.io/)

[5] [廖雪峰的官方网站-JAVA教程](https://www.liaoxuefeng.com/wiki/1252599548343744)







