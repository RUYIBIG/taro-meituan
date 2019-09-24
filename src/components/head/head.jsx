import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Top from './top';
import Activity from './activity';
import './head.less';
class Head extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      store: {
        title: '青岛龙虾王',
        notice: '欢迎光临，很高兴为您服务 ~ ',
        tags: ['味道赞', '分量足', '主食不错'],
      }
    }
  }
  render() {
    let {store} = this.state;
    return (<View className="head">
      <Top />
      <Image className="back" src={require('../../assets/img/back.jpg')}/>
      <View className="store">
        <Image className="store_img" src={require('../../assets/img/store.jpg')}/>
        <View className="store_text">
          <Text>{store.title}</Text>
          <Text className="notice">{store.notice}</Text>
          <View>
            {store.tags.map((item, index) => {
              return <Text key={index} className="tags_text">"{item}"</Text>
            })}
          </View>
        </View>
      </View>
      <Activity />
    </View>)
  }
}

export default Head;