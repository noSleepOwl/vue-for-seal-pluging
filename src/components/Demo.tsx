import Vue from 'vue'
import '@/assets/Demo.scss'
import pic from '@/assets/seal.png'

const MAX_STEP: number = 3;
const MODEL = {
    STEP: Symbol('STEP'),
    WAIT: Symbol('WAIT')
}


let controlCard = Vue.extend({
    name: 'qj-control-card',
    props: {
        pic: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            currentStep: 0,
            model: MODEL.WAIT,
            steps: [
                { title: '等待发起', index: 1 },
                { title: '等待确认', index: 2 },
                { title: '等待开启', index: 3 }
            ]
        }
    },
    methods: {
        nextStep() {
            console.log('step change start', this.currentStep)
            if (this.currentStep === MAX_STEP) return;
            this.currentStep++;
        },
        endStep() {
            this.model = MODEL.WAIT;
            this.currentStep = 0;
            this.$emit('end');
        },
        startStep() {
            this.model = MODEL.STEP;
            this.currentStep = 0;
            this.$emit('start');
        },
        toggleStep() {
            if (this.model === MODEL.WAIT) this.startStep();
            else this.endStep();
        },
        buttonMsg() {
            return this.model === MODEL.WAIT ? '发起开柜' : '终止开柜';
        },
        currentStepShow(step: number, show: string) {
            return step === (this.currentStep + 1) ? show : '';
        }
    },
    render(h, k): Vue.VNode {
        return <el-card shadow="hover">
            <el-image src={this.pic} fit="fill" />
            <div class="seal-conctrol-board">
                <el-row type="flex" justify="center" class="seal-control" >
                    <el-col span={24} >
                        <el-steps active={this.currentStep} finish-status="success" >
                            {this.steps.map((value) => {
                                return <el-step title={this.currentStepShow(value.index, value.title)} icon={this.currentStepShow(value.index, 'el-icon-loading')} />
                            })}
                        </el-steps>
                    </el-col>
                </el-row>
                <el-row type="flex" justify="center" >
                    <el-col span={24} >
                        <el-button size="mini" class="start-button" onClick={() => this.toggleStep()} >{this.buttonMsg()}</el-button>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    }
})

export default Vue.extend({
    name: 'demo-jsx',
    data() {
        return {
            dialogVisible: false,
            currentDate: new Date(),
            cards: [
                { pic: pic },
                { pic: pic },
                { pic: pic },
                { pic: pic },
                { pic: pic }
            ]
        }
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
        },
        toggleDialog() {
            if (this.dialogVisible)
                this.closeDialog();
            else
                this.openDialog();
        }
    },
    mounted() {
    },
    components: { controlCard },
    render: function (h, k): Vue.VNode {

        let cards = [];
        let cardsSub = [];
        let cardNumber = this.cards.length;
        for (let i = 0; i < cardNumber; i++) {
            let card = (<el-col span={6} key={i} >
                <controlCard ref={'card_' + i} pic={this.cards[i].pic} />
            </el-col>);
            cardsSub.push(card);
            if ((i + 1) % 4 === 0) {
                cards.push(cardsSub);
                cardsSub = [];
            } else if (i === (cardNumber - 1) && cardsSub.length != 0) {
                cards.push(cardsSub);
            }
        }

        let button = <el-button type="text" onClick={() => this.toggleDialog()} > 点击打开 Dialog</el-button>;

        let log = <el-dialog title="操作添加信息" visible={this.dialogVisible} center={true} width="80%" >
            {cards.map(value => <el-row gutter={50} >{value}</el-row>)}
            <span slot="footer" class="dialog-footer test">
                <el-button onClick={() => this.toggleDialog()}>取 消</el-button>
                <el-button type="primary" onClick={() => this.toggleDialog()} >确定</el-button >
            </span>
        </el-dialog>

        let content = <div>{button} {log} </div>
        return content;
    }
})