# SQL语言

[TOC]

### 完整性条件

- 列级完整性条件:字段的属性。
- 表级完整性条件

1. 可以取空值(NULL)
2. 不可以空值(NOT NULL)
3. 取值唯一(UNIQUE)
4. 主键(PRIMARY KEY (列名))
5. 外键(FOREIGN KEY(列名1) REFERENCES表名2(列名2))

### 创建表

```SQL

CREATE TABLE <table_name> (<column_name>[列级完整性条件]<表级完整性条件>,
下一列,
.....);
```

### 修改和删除

```sql

ALTER TABLE <表名>

ADD <新列名><类型><表级完整性>
DROP <列名/表级完整性>
MODIFY/CHANGE <列名><类型>
CHANGE <列名><新列名><类型>

DROP TABLE<表名>
```

### 数据更新

- 插入数据

```sql

INSERT INTO <表名> [<列1><列2>...] values (常量1),(常量2)....
```

- 更新数据

```sql

UPDATE <表名> SET <列名> = <表达式1> , <列名> = <表达式2>... WHERE[条件]
```

- 删除数据

```sql

DELETE FROM <表名> WHERE (条件)
```
