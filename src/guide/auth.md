# 权限

`meta` 对象中的`auth` 可填写 `''|login|admin`，不过关于页面权限模块基本上不需要进行修改，除非是开发新的模块

## 普通用户权限

在项目根目录，uniapp 专有的路由地址配置文件 `pages.json` 中需要授权访问的页面中加入`"meta": {"auth": "login" }` 标识该页面需要授权访问

```json
{
  "path": "pages/xxx_page_name",
  // 其他配置...
  "meta": {
    "auth": "login"
  }
}
```

## 后台管理权限

在项目根目录，uniapp 专有的路由地址配置文件 `pages.json` 中需要登录访问的页面中加入`"meta": {"auth": "admin" }` 标识该页面需要后台登录访问

```json
{
  "path": "pagesB/xxx_page_name",
  // 其他配置...
  "meta": {
    "auth": "admin"
  }
}
```
