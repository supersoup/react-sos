import React from 'react';
import {
	Row, Col,
	Button, Form, Icon, Checkbox, DatePicker, Input, Select,
	Alert, Card, Collapse, Message, Modal, Popconfirm, Tooltip
	} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const Panel = Collapse.Panel;
const CheckboxGroup = Checkbox.Group;

class Condition extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			aaa: '',
			bbb: '',
			ccc: '',
			ddd: '',
			eee: '',
			fff: '',

			ggg: '',
			hhh: '',
			iii: '',
			jjj: '',
			kkk: '',
			lll: '',
			mmm: '',
			nnn: '',

			ooo: '',
			ppp: '',
			qqq: '',
			rrr: '',
			sss: '',
			ttt: '',

			uuu: '',
			vvv: '',
			www: '',
			xxx: '',
			yyy: '',
			zzz: '',
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);

	};

	render() {
		const formItemLayout = {
			labelCol: { span: 6 },
			wrapperCol: { span: 18 },
		};

		const formItemLayout2 = {
			labelCol: { span: 12 },
			wrapperCol: { span: 12 },
		};

		const formItemLayout3 = {
			labelCol: { span: 2 },
			wrapperCol: { span: 22 },
		};

		console.log(111);

		return (
			<div className="condition">
				<Form horizontal onSubmit={this.props.handleSubmit}>
					<Card title="搜索条件"
					      extra={
						      <div>
						        <Button type="primary" icon="search" onClick={this.handleSubmit}>搜索</Button>
						      </div>
					      }
						>
						<Collapse defaultActiveKey={['1', '2']}>
							<Panel header="基本信息类" key="1">
								<Row>
									<Col span="8">
										<FormItem {...formItemLayout} label="aaa">
											<Input onChange={(e)=>{this.setState({aaa:e.target.value})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="bbb">
											<Input onChange={(e)=>{this.setState({bbb:e.target.value})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="ccc">
											<Input onChange={(e)=>{this.setState({ccc:e.target.value})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="ddd">
											<Input onChange={(e)=>{this.setState({ddd:e.target.value})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="eee ">
											<Input onChange={(e)=>{this.setState({eee:e.target.value})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="eee ">
											<Input onChange={(e)=>{this.setState({fff:e.target.value})}}/>
										</FormItem>
									</Col>
								</Row>
							</Panel>
							<Panel header="日期类" key="2">
								<Row>
									<Col span="8">
										<FormItem {...formItemLayout} label="ggg">
											<DatePicker onChange={(v)=>{this.setState({ggg:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="hhh">
											<DatePicker onChange={(v)=>{this.setState({hhh:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="iii">
											<DatePicker onChange={(v)=>{this.setState({iii:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="jjj">
											<DatePicker onChange={(v)=>{this.setState({jjj:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="kkk">
											<DatePicker onChange={(v)=>{this.setState({kkk:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="lll">
											<DatePicker onChange={(v)=>{this.setState({lll:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="mmm">
											<DatePicker onChange={(v)=>{this.setState({mmm:v})}}/>
										</FormItem>
									</Col>
									<Col span="8">
										<FormItem {...formItemLayout} label="nnn">
											<DatePicker onChange={(v)=>{this.setState({nnn:v})}}/>
										</FormItem>
									</Col>
								</Row>
							</Panel>

							<Panel header="是否类" key="3">
								<Row>
									<Col span="4">
										<FormItem {...formItemLayout2} label="ooo">
											<Select  onChange={(v)=>{this.setState({ooo:v})}}>
												<Option value="1">ooo1</Option>
												<Option value="2">ooo2</Option>
												<Option value="3">ooo3</Option>
												<Option value="4">ooo4</Option>
												<Option value="5">ooo5</Option>
												<Option value="6">ooo6</Option>
											</Select>
										</FormItem>
									</Col>
									<Col span="4">
										<FormItem {...formItemLayout2} label="ppp">
											<Select  onChange={(v)=>{this.setState({ppp:v})}}>
												<Option value="1">ppp1</Option>
												<Option value="2">ppp2</Option>
												<Option value="3">ppp3</Option>
												<Option value="4">ppp4</Option>
												<Option value="5">ppp5</Option>
												<Option value="6">ppp6</Option>
											</Select>
										</FormItem>
									</Col>
									<Col span="4">
										<FormItem {...formItemLayout2} label="qqq">
											<Select  onChange={(v)=>{this.setState({qqq:v})}}>
												<Option value="1">qqq1</Option>
												<Option value="2">qqq2</Option>
												<Option value="3">qqq3</Option>
												<Option value="4">qqq4</Option>
												<Option value="5">qqq5</Option>
												<Option value="6">qqq6</Option>
											</Select>
										</FormItem>
									</Col>
									<Col span="4">
										<FormItem {...formItemLayout2} label="rrr">
											<Select  onChange={(v)=>{this.setState({rrr:v})}}>
												<Option value="1">rrr1</Option>
												<Option value="2">rrr2</Option>
												<Option value="3">rrr3</Option>
												<Option value="4">rrr4</Option>
												<Option value="5">rrr5</Option>
												<Option value="6">rrr6</Option>
											</Select>
										</FormItem>
									</Col>
									<Col span="4">
										<FormItem {...formItemLayout2} label="sss">
											<Select  onChange={(v)=>{this.setState({sss:v})}}>
												<Option value="1">sss1</Option>
												<Option value="2">sss2</Option>
												<Option value="3">sss3</Option>
												<Option value="4">sss4</Option>
												<Option value="5">sss5</Option>
												<Option value="6">sss6</Option>
											</Select>
										</FormItem>
									</Col>
									<Col span="4">
										<FormItem {...formItemLayout2} label="ttt">
											<Select  onChange={(v)=>{this.setState({ttt:v})}}>
												<Option value="1">ttt1</Option>
												<Option value="2">ttt2</Option>
												<Option value="3">ttt3</Option>
												<Option value="4">ttt4</Option>
												<Option value="5">ttt5</Option>
												<Option value="6">ttt6</Option>
											</Select>
										</FormItem>
									</Col>
								</Row>
							</Panel>

							<Panel header="多项选择类"  key="4">
								<Row>
									<Col span="24">
										<FormItem {...formItemLayout3} label="uuu">
											<CheckboxGroup onChange={(value)=>{this.setState({uuu:value})}} options={[
									 { label: 'uuu1', value: '1' },
									 { label: 'uuu2', value: '2' },
									 { label: 'uuu3', value: '3' },
									 { label: 'uuu4', value: '4' },
									 { label: 'uuu5', value: '5' },
									 { label: 'uuu6', value: '6' },
									 { label: 'uuu7', value: '7' },
									 { label: 'uuu8', value: '8' },
									 ]}/>
										</FormItem>
									</Col>
									<Col span="24">
										<FormItem {...formItemLayout3} label="vvv">
											<CheckboxGroup onChange={(value)=>{this.setState({vvv:value})}} options={[
									 { label: 'vvv1', value: '1' },
									 { label: 'vvv2', value: '2' },
									 { label: 'vvv3', value: '3' },
									 { label: 'vvv4', value: '4' },
									 { label: 'vvv5', value: '5' },
									 { label: 'vvv6', value: '6' },
									 { label: 'vvv7', value: '7' },
									 { label: 'vvv8', value: '8' },
									 ]}
												/>
										</FormItem>
									</Col>
									<Col span="24">
										<FormItem {...formItemLayout3} label="www">
											<CheckboxGroup onChange={(value)=>{this.setState({www:value})}} options={[
									 { label: 'www1', value: '1' },
									 { label: 'www2', value: '2' },
									 { label: 'www3', value: '3' },
									 { label: 'www4', value: '4' },
									 { label: 'www5', value: '5' },
									 { label: 'www6', value: '6' },
									 { label: 'www7', value: '7' },
									 { label: 'www8', value: '8' },
									 ]}
												/>
										</FormItem>
									</Col>
									<Col span="24">
										<FormItem {...formItemLayout3} label="xxx">
											<CheckboxGroup onChange={(value)=>{this.setState({xxx:value})}} options={[
									 { label: 'xxx1', value: '1' },
									 { label: 'xxx2', value: '2' },
									 { label: 'xxx3', value: '3' },
									 { label: 'xxx4', value: '4' },
									 { label: 'xxx5', value: '5' },
									 { label: 'xxx6', value: '6' },
									 { label: 'xxx7', value: '7' },
									 { label: 'xxx8', value: '8' },
									 ]}
												/>
										</FormItem>
									</Col>
									{/* TODO: 填入具体的币种 */}
									<Col span="24">
										<FormItem {...formItemLayout3} label="yyy">
											<CheckboxGroup onChange={(value)=>{this.setState({yyy:value})}} options={[
									 { label: 'yyy1', value: '1' },
									 { label: 'yyy2', value: '2' },
									 { label: 'yyy3', value: '3' },
									 { label: 'yyy4', value: '4' },
									 { label: 'yyy5', value: '5' },
									 { label: 'yyy6', value: '6' },
									 { label: 'yyy7', value: '7' },
									 { label: 'yyy8', value: '8' },
									]}
												/>
										</FormItem>
									</Col>
									<Col span="24">
										<FormItem {...formItemLayout3} label="zzz">
											<CheckboxGroup onChange={(value)=>{this.setState({zzz:value})}} options={[
									 { label: 'zzz1', value: '1' },
									 { label: 'zzz2', value: '2' },
									 { label: 'zzz3', value: '3' },
									 { label: 'zzz4', value: '4' },
									 { label: 'zzz5', value: '5' },
									 { label: 'zzz6', value: '6' },
									 { label: 'zzz7', value: '7' },
									 { label: 'zzz8', value: '8' },
									]}
												/>
										</FormItem>
									</Col>
								</Row>
							</Panel>
						</Collapse>
					</Card>
				</Form>
			</div>
		)
	}
}

export default Condition;