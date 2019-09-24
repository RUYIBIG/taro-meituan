import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './activity.less';
class Activity extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      activity: [
        {
          type: 'cut',
          info: [
            {total: 48, cut: 10},
            {total: 58, cut: 20},
            {total: 100, cut: 40},
          ]
        }
      ]
    };
  }
  getTextByType(type) {
    switch (type) {
      case "cut":
      return "减"
        break;
      default:
      return "减"
        break;
    }
  }
  getLine(arr) {
    if (arr.length < 1) {
      return [];
    }
    return arr.map((item, index) => `满${item.total}减${item.cut}`).join(';')
  }
  render() {
    let {activity:[firstItem]} = this.state;
    return (<View className="activity">
      <Text className="type">{this.getTextByType(firstItem.type)}</Text>
      <Text className="cut">{this.getLine(firstItem.info)}</Text>
      <Text className="length">{this.state.activity.length}个活动</Text>
    </View>)
  }
}

export default Activity;