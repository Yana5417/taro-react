import React from 'react'
import { View, Text } from '@tarojs/components'
import RegionPicker from '../../components/RegionPicker'
import './index.scss'

const Index = () => {
  const onGetRegion = (region: string) => {
    // 参数region为选择的省市区
    console.log(region);
  }

  return (
    <View className="index">
      <Text>Hello world!</Text>

      <RegionPicker onGetRegion={onGetRegion} />
    </View>
  )
}

export default Index
