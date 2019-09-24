import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { getAllFoodInfo, getEvent } from '../../utils/common';
let events = getEvent();
import './bottom.less';
class Bottom extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      Num: 10,
      sendPrice: 3,
      supportTakeBySelf: false,
      sendMustPrice: 50,
      allPrice: 0, //总价
    }
  }
  componentDidMount() {
    // 获取整体存储的菜品数据
    let {allPrice, allNum} = getAllFoodInfo();
    this.setState({
      allPrice: allPrice,
      Num: allNum,
    })
    events.on("addcut", () => {
      // 菜品发生变化
      let { allPrice, allNum } = getAllFoodInfo();
      this.setState({
        allPrice: allPrice,
        Num: allNum,
      })
    })
  }
  render() {
    let { allPrice,Num, sendPrice, supportTakeBySelf, sendMustPrice} = this.state;
    return (<View className="bottom">
      <View className="store_box">
        <Image className="store_img" src={Num ? require('../../assets/img/store.png') : require('../../assets/img/emptystore.png')}/>
        {Num ? <Text className="store_num">{Num}</Text> : null}
      </View>
      <View>
        {allPrice ? <Text className="price">{"¥" + allPrice+" "}</Text> : <Text>{sendPrice ? "另需配送费¥" + sendPrice + " " : ""}</Text>}
        <Text>{supportTakeBySelf ? "| 支持自取" : "| 不支持自取"}</Text>
      </View>
      <View>
        {allPrice >= sendMustPrice ? <Text className="goPay">去结算</Text> : <Text>{sendMustPrice ? "¥" + sendMustPrice + "起送" : ""}</Text>}
      </View>
    </View>)
  }
}

export default Bottom;