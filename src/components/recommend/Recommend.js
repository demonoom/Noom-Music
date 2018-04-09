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
                console.log(res);
                if (res.code === CODE_SUCCESS) {
                    this.setState({
                        sliderList: res.data.slider
                    }), () => {
                        if (!this.sliderSwiper) {
                            //初始化轮播图
                            this.sliderSwiper = new Swiper('.slider-container', {
                                loop: true,
                                autoPlay: 3000,
                                autoplayDisableOnInteraction: false,
                                pagination: '.swiper-pagination'
                            })
                        }
                    }
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