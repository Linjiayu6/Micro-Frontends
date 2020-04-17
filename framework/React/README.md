
# Virtual DOM
功能: 
- 本质: 是JS管理 DOM一套API
- Virtual DOM是JS的Object
- 管理DOM模型, 生命周期, diff算法等。

好处: 
当`数据更新`时候, diff去找 `要变更的DOM节点`, 只会对部分更新, 不会渲染整个DOM Tree。

## Virtual DOM 结构
```html
<div className="DIV_CLASSNAME" id="DIV_ID" style={{ color: 'red' }}>
  <span id="SPAN_ID_1">SPAN_TEXT1</span>
  <span id="SPAN_ID_2">SPAN_TEXT2</span>
</div>
```

```javascript
// 创建个Virtual Dom, 必要字段: 标签名, 属性, children, 其他还有namespace, key, .....
{
    tagName: 'div',
    properties: {
        class: 'DIV_CLASSNAME',
        id: 'DIV_ID',
        style: {
            color: 'red'
        }
    },
    children: [
        {
            tagName: 'span',
            properties: {
                id: 'SPAN_ID_1',
            },
            children: 'SPAN_TEXT1'
        },
        {
            tagName: 'span',
            properties: {
                id: 'SPAN_ID_2',
            },
            children: 'SPAN_TEXT2'
        },
    ]
}
```
