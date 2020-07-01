import Vue from 'vue'

let help = Vue.extend({
    props: {
        propName: {
            required: true,
            type: String
        }
    },
    functional: true,
    name: 'functional-test',
    render: function (h: Vue.CreateElement, context: Vue.RenderContext): Vue.VNode {
        // 函数式组件，没有this 。。。 只能通过 context 进行获取
        context.props.proName;
        return <h1>help test---</h1>
    }
})


export default Vue.extend({
    components: { help },
    data() {
        return {
            name: 'parent data name ---'
        }
    },
    methods: {
        hello() {
            alert('hello')
        }
    },
    render: function (h, k): Vue.VNode {
        return <div>
            <help propName=" from parent get " />
            help outter  world
            <button onClick={this.hello}>测试按钮</button>
        </div >
    }
});