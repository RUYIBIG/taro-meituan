import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import AddCut from '../addcut/addcut';
import './foodlist.less';
class FoodList extends Component {
  render() {
    let { selectName, currentList} = this.props;
    return (<View className="foodlist">
      <Text className="foodlist_name">{selectName ? selectName : ''}</Text>
      <View className="foodlist_forlist">
      {
        currentList.map((item, index) => {
            return (<View key={item.id} className="foodlist_item">
              <Image className="foodlist_item_img" src={item.img == 2 ? require('../../assets/img/2.jpg') : require('../../assets/img/1.jpg')}/>
              <View className="foodlist_item_info">
                <Text>{item.title}</Text>
                <Text>月售：{item.sole}</Text>
                <Text className="price">¥{item.price}</Text>
                <AddCut food={item}/>
              </View>
            </View>)
        })
      }
      </View>
    </View>)
  }
}

export default FoodList;