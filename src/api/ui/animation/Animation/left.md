# [Animation](./../Animation).left

设置 left 值。

### 参数

**number | string value**

长度值，如果传入 number 则默认使用 px

### 返回值

**[Animation](./../Animation)**

### Example

```ts
const anim = nz.createAnimation()
const animData = anim
  .left('20px')
  .step()
  .export()
```