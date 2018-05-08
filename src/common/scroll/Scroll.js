// better-scroll的原理就是外层一个固定高度的元素，这个元素有一个子元素，当子元素的高度超过父元素时就可以发生滚动，
// 那么子元素里面的内容从何而来？React为我们提供了一个props的children属性用来获取组件的子组件，这样就可以用Scroll组件去包裹需要滚动的内容。
// 在Scroll组件内部的列表，会随着增加或减少原生而发生变化，这个时候元素的高度也会发生变化，better-scroll需要重新计算高度，
// better-scroll为我们提供了一个refresh方法用来重新计算以保证正常滚动，组件发生变化会触发React的componentDidUpdate周期函数，
// 所以我们在这个函数里面对better-scroll进行刷新操作，同时需要一个props来告诉Scroll是否刷新。
// 某些情况下我们需要手动调用Scroll组件去刷新better-scroll，这里对外暴露一个Scroll组件的refresh方法。
// better-scroll默认是禁止点击的，需要提供一个控制是否点击的props，为了监听滚动Scroll需要对外暴露一个函数，便于使用Scroll的组件监听滚动进行其他操作。
// 当组件销毁时我们把better-scroll绑定的事件取消以及better-scroll实例给销毁掉，释放资源

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './scroll.styl'

class Scroll extends React.Component {
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    refresh() {

    }

    render() {
        return (
            <div>
                {/*Scroll包裹的子组件将放置在此*/}
            </div>
        )
    }
}

export default Scroll