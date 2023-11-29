# classpath

[TOC]

classpath 是 JVM 所用到的一个环境变量，它指示了 JVM 要怎么去搜索 class

java 的源码文件是`.java`而编译后的`.class`才是可以被 JVM 解析并执行的文件，所以 classpath 就指示了 JVM 该去哪里找到对应的`.class`文件

> classpath 就是一组目录的集合，每个目录之间用';'分割

```txt
C:\work\project1\bin;C:\shared;"D:\My Documents\project1\bin"
```

如果当前的 classpath 为`".;D:/JV;D:/javaLearn/project"`时，并且要 JVM 找到 dedsec.ErrorHandler.handler 这个类时，JVM 通过 classpath 的寻找顺序依次是：

> <当前目录>/dedsec/ErrorHandler/handler.class
> D:/JV/dedsec/ErrorHandler/handler.class
> D:/javaLearn/project/ErrorHandler/handler.class

其中`.`表示当前目录

设置 classpath 的方式有两种：

- 环境变量设置
- 启动 JVM 时设置

其中不推荐在环境变量中去设置 classpath 因为这样会污染整个系统环境

启动 JVM 时设置 classpath 其实就是在 java 命令中添加`-classpath`或者`cp`参数。

**如果没有添加 classpath，JVM 默认寻找的就是当前的目录，相当于`.`**

## jar 包

当有很多`.class`文件的时候，散落在各层目录中，不便于管理，jar 包可以把 package 组织的目录层级，以及各个目录下的所有文件（包括.class 文件和其他文件）都打成一个 jar 文件，。jar 包实际上就是一个 zip 格式的压缩文件，而 jar 包相当于目录。如果我们要执行一个 jar 包的 class，就可以把 jar 包放到 classpath 中：

```bash
java -cp ./javaLearn.jar dedsec.ErrorHandler.handler
```

此时 JVM 会自动在 jar 包中去寻找该类

创建 jar 包：jar 包其实就是 zip 压缩包，将`.class`等文件进行压缩后将后缀改为`.jar`，就做好 jar 包了
