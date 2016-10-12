import React from 'react';
import ReactDOM from 'react-dom';

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect,IndexLink} from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入单个页面（包括嵌套的子页面）
import Welcome from './welcome/welcome';
import ProductBase from './product_base/list';

// 引入Ant-Design样式 & Animate.CSS样式 & font-awesome样式
import 'antd/dist/antd.min.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

//// 引入主体样式
import './main.less';

// 配置整体组件
class Init extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }    
    handleClick = (e) => {
        this.setState({
           current: e.key,
           openKeys: e.keyPath.slice(1),
        });
    }
    onToggle = (info) => {
        this.setState({
           openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
    }

    render() {
        return (
            <div>
                <div id="leftMenu"> 
                    <img src='../images/logo.png' width="50" id="logo"/>  {/*logo图标*/}                
                    <Menu onClick={this.handleClick}
                        style={{ width: 240 }}
                        openKeys={this.state.openKeys}
                        onOpen={this.onToggle}
                        onClose={this.onToggle}
                        selectedKeys={[this.state.current]}
                        theme="dark"
                        mode="inline">
                        <Menu.Item key="1">                    
                            <IndexLink to="/"><span><Icon type="home" /><span>欢迎页</span></span></IndexLink>
                        </Menu.Item>    
                        <SubMenu key="sub2" title={<span><Icon type="windows" /><span>数据录入</span></span>}>
                            <Menu.Item key="2"><Link to="/product_base">银行理财产品基础总表</Link></Menu.Item>
                        </SubMenu>
                    </Menu>                    
                </div>
                <div id="rightWrap">
                    {this.props.children}                
                </div>
            </div>
        )
    }
}

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render((
    <Router history={hashHistory} >
        <Route path="/" component={Init}>
            <IndexRoute component={Welcome}/>
            <Route path="product_base" component={ProductBase} />
        </Route>
    </Router>
), document.querySelector('#init'));
