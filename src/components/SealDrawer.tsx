import Vue from 'vue'
import '@/assets/seal-draw.scss'
import { Button } from 'element-ui';
let SIZE = 1000;
export default Vue.extend({
    name: 'canvas-name',
    data() {
        return {
            canvas: this.$refs['canvas'],
            styles: {
                rule: {
                    width: '1000px',
                    height: '1000px'
                }
            }
        }
    },
    methods: {
        draw() {
            this.canvas = this.$refs['canvas'];
            let cav = this.canvas as HTMLCanvasElement;
            var ctx = cav.getContext("2d");
            let { width, height } = cav;
            let halfWidth = width / 2;
            let halfHeight = height / 2;

            if (ctx) {

                ctx.beginPath();
                ctx.arc(halfWidth, halfHeight, 50, 0, 2 * Math.PI);
                ctx.stroke();


                // ctx.fillRect(0, 0, cav.width / 2, cav.height / 2);
                // ctx.fillRect(cav.width / 2, cav.height / 2, cav.width / 2, cav.height / 2);
                // ctx.strokeRect(0, 0, cav.width, cav.height);
            }
        },
        sizeAdd() {
            let size = (SIZE += 10) + 'px';
            this.styles.rule.width = size;
            this.styles.rule.height = size;
            console.log(this.styles)
        },
        sizePlu() {
            let size = (SIZE -= 10) + 'px';
            this.styles.rule.width = size;
            this.styles.rule.height = size;
            console.log(this.styles)
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.draw();
        })
    },
    render(h, k): Vue.VNode {

        return (<div>
            <div>
                <button onClick={() => this.sizeAdd()}>++++</button>
                <button onClick={() => this.sizePlu()}>----</button>
            </div>
            <canvas ref="canvas" style={this.styles.rule}></canvas>
        </div>)
    }
})