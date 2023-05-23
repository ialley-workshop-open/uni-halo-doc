# vue 模板规范

## vue 写法

### 第一部分

#### template

### 第二部分

#### script

#### 一、import 的顺序, 依次按照下面的顺序

待补充...

#### 二、属性类型 props 必须添加校验类型

```javascript
export default {
  props :{
    params: {
      type:Object,
      default:()=>{}
    }
  }
}
```

#### 三、按照业务逻辑的变量、函数声明

```javascript
export default {
  methods :{
    fnGetData() {
      // do something...
    }
  }
}
```

更多待补充...
