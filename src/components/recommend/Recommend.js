import React from "react"
import Swiper from 'swiper'
import {getCarousel} from '../../api/recommend'
import {CODE_SUCCESS} from "../../api/config";
import 'swiper/dist/css/swiper.min.css'
import "./recommend.styl"

class Recommend extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sliderList: [],
        }
    }

    componentDidMount() {
        getCarousel().then((res) => {
            if (res) {
                if (res.code === CODE_SUCCESS) {
                    this.setState({
                        sliderList: res.data.slider
                    }, () => {      //setState第二个参数是一个回调函数，当组件更新完成后会立即调用，这个时候我们在回调函数里面初始化swiper
                        if (!this.sliderSwiper) {
                            //初始化轮播图
                            this.sliderSwiper = new Swiper('.slider-container', {
                                loop: true,   //开启loop模式,开启环路模式
                                autoplay: 3000,  //自动切换
                                autoplayDisableOnInteraction: false,  //用户操作swiper之后，是否禁止autoplay。默认为true：停止。如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
                                pagination: '.swiper-pagination'  //使用分页
                            })
                        }
                    })
                }
            }
        })
    }

    toLink(linkUrl) {
        /*使用闭包把参数变为局部变量使用*/
        return () => {
            window.location.href = linkUrl;
        }
    }

    render() {
        return (
            <div className="music-recommend">
                <div className="slider-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.sliderList.map(slider => {
                                return (
                                    <div className='swiper-slide' key={slider.id}>
                                        <a className='slider-nav' onClick={this.toLink(slider.linkUrl)}>
                                            <img src={slider.picUrl} alt="推荐" width='100%' height='100%'/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        )
    }
}

export default Recommend;