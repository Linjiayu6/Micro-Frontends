const virtualDom = {
    key: null,
    type: 'div',
    props: {
        id: 'parent',
        class: 'parent-class',
        style: {
            color: 'green'
        },
        children: [
            {
                type: 'h3',
                props: {
                    id: 'children_id_1',
                    children: '3. 虚拟DOM'
                },
                
            },
            {
                type: 'button',
                props: {
                    id: 'children_id_2',
                    children: '点击我有惊喜',
                    onClick: function() { alert('HHHHHHHHHH') }
                },
            }
        ]
    },
}

class VNode {
    constructor (virtualDom) {
        const { type, props } = virtualDom
        this.virtualDom = virtualDom
        this.type = type
        this.props = props

        this.node = this.createElement(type)
    }

    init () {
        const propsKeys = Object.keys(this.props)

        propsKeys.forEach(key => {
            const val = this.props[key]
            if (key === 'children') {
                this.onChildren(val)
                return
            }
            if (key === 'onClick') {
                this.node.addEventListener('click', val)
                return
            }
            this.node.setAttribute(key, val)
        })
        return this.node
    }

    createElement (tagName) {
        return document.createElement(tagName)
    }

    appendChild (newNode) {
        this.node.appendChild(newNode)
    }

    onChildren (val) {
        if (typeof(val) === 'string') {
            this.node.innerText = val
        } else if (val instanceof Array) {
            val.forEach(item => {
                this.appendChild(new VNode(item).init())
            })
        }
    }
}

const DOM = new VNode(virtualDom).init()
export default DOM