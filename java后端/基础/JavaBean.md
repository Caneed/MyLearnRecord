# JavaBean

[TOC]

Java 中的 class 符合以下规范：

- 若干 private 字段
- 通过 public 来读写实例字段

符合这样条件的就叫作 javaBean

```java
public class Person {
    String name;
    Integer age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }
}

```

通过 getter 和 setter 方法来读写实例字段，符合 javaBean 规范

boolean 类型的字段比较特殊，javaBean 规范规定 boolean 类型的字段的 getter 方法必须以 is 开头

```java

    boolean isMale;

    public boolean isMale() {
        return isMale;
    }

    public void setMale(boolean male) {
        isMale = male;
    }

```

> 只有 getter 的属性称为只读属性（read-only）
> 类似的，只有 setter 的属性称为只写属性（write-only）

**如果要枚举一个 Bean 类的所有属性，可以使用 `Introspector`**

```java
        BeanInfo beanInfo= Introspector.getBeanInfo(PersonBean.class);
        System.out.println(beanInfo);
```
