'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';
import easingTypes, { easeOutElastic } from 'tween-functions';

class App extends React.Component<any, any> {
  state = {
    slideIndex1: 0,
    slideIndex2: 0,
    list: []
  };

  componentDidMount(){
    this.setState({
      list:[1,2,3,4,5,6,7],
    })
  } 

  render() {
    return (<div>
      <Carousel
        style={{ minHeight: 100 }}
        autoplay
        wrapAround
        autoplayInterval={2000}
        resetAutoplay={false}
        slideIndex={this.state.slideIndex1}
        afterSlide={newSlideIndex => this.setState({ slideIndex1: newSlideIndex })}>
          {this.state.list.map((item)=><img src={`http://placehold.it/1000x400&text=slide${item}`} style={{ maxWidth: '100%' }} />)}
      </Carousel>
      <div style={{width: '50%', margin: 'auto'}}>
        <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
        <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
        <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
        <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
        <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
        <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
      </div>

      <Carousel
        className="space-carousel"
        cellSpacing={-60}
        autoplay
        wrapAround
        slideIndex={this.state.slideIndex2}
        afterSlide={newSlideIndex => this.setState({ slideIndex2: newSlideIndex })}>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/hCyqdPEXhsCRfOXJFQbC.png" />
        <img src="https://gw.alipayobjects.com/zos/rmsportal/QCuJKZxSjlRCtMzagoYS.png" />
        <img src="https://gw.alipayobjects.com/zos/rmsportal/YHuGiyKMKMHysahEdDNO.png" />
        <img src="https://gw.alipayobjects.com/zos/rmsportal/yUrSLGXUQPiyTTToFwQb.png" />
        <img src="https://gw.alipayobjects.com/zos/rmsportal/aKFkXZsPOaTsQfIHOEJy.png" />
      </Carousel>

      <h3>rtl 支持</h3>
      <Carousel
        style={{ minHeight: 100 }}
        direction='rtl'
        wrapAround
      >
        <div style={{ height:150, background: '#ccc', fontSize: 20, fontWeight: 'bold' }}>rtl test 1</div>
        <div style={{ height:150, background: '#ccc', fontSize: 20, fontWeight: 'bold' }}>rtl test 2</div>
        <div style={{ height:150, background: '#ccc', fontSize: 20, fontWeight: 'bold' }}>rtl test 3</div>
        <div style={{ height:150, background: '#ccc', fontSize: 20, fontWeight: 'bold' }}>rtl test 4</div>
      </Carousel>
      <style dangerouslySetInnerHTML={{
        __html: `.space-carousel img { max-width: 300px; margin: 0 auto }`
      }} />
    </div>);
  }
}

ReactDom.render(<App />, document.getElementById('__react-content'));
