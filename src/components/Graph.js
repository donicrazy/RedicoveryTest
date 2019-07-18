import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import Rect from './Rect';
const subRectSize = 10;
var resizeControl = null; 
class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isResizing : false,
        }
    }
    resizeHover() {
        var el = d3.select(this), isEntering = d3.event.type === "mouseenter";
        el.classed("hovering", isEntering); 
    }
    rectResizeStartEnd() {
        var el = d3.select(this), isStarting = d3.event.type = "start";
        d3.select(this).classed('resizing', isStarting);
    }
    rectResizing() {
        // var dragX = d3.event.x;
        // var dragY = d3.event.y;
        // if ( d3.select(this).classed('topleft') ) {
        //     var newWidth = d.width + d.x - dragX;
        //     d.x += d.width - newWidth;
        //     d.width = newWidth;

        //     var newHeight = d.height + d.y - dragY;
        //     d.y = d.height - newHeight;
        //     d.height = newHeight;
        // }   
    }
    componentWillReceiveProps(nextProps) {
        // const curNum = this.props.selectNumber;
        // const nextNum = nextProps.selectNumber;
        // if ( curNum !== null ) {
        //     d3.select(`#g${curNum}`)
        //     .selectAll('rect').filter(function(d, i) {
        //         return i > 1;
        //     }).remove();
        // }

        // if ( nextNum !== null) {
        //     let selectedPos = nextProps.listPoints[nextNum];
        //     let subRectPos = [
        //         {x:0, y:0 },
        //         {x:0, y:selectedPos.height/2}, 
        //         {x:0, y:selectedPos.height},
        //         {x:selectedPos.width/2, y:0} ,
        //         {x:selectedPos.width/2, y:selectedPos.height},
        //         {x:selectedPos.width, y:0} , 
        //         {x:selectedPos.width, y:selectedPos.height/2}, 
        //         {x:selectedPos.width, y:selectedPos.height},            
        //     ]
        //     var selectedRect = d3.select(`#g${nextNum}`)
        //     selectedRect.selectAll('g')
        //     .data(subRectPos).enter()
        //     .append('rect')
        //     .attr("transform", d => "translate(" + (d.x-subRectSize/2) + "," + (d.y-subRectSize/2) + ")")
        //     .attr('width', 10)
        //     .attr('height', 10)
        //     .attr('fill', 'green')
        //     .style('cursor','pointer')
        //     .on('click', function(d, i){                
        //         d3.event.stopPropagation();
        //         resizeControl = i;                
        //     })
        //     .on('mousemove', function(d, i) {
        //         //d3.event.stopPropagation();
        //         console.log(resizeControl, d, i);
        //         if (resizeControl && i === resizeControl)
        //             console.log("resize is happening");
        //     });          
        // }
    }
    render() {
      const { selectNumber } = this.props;
      var boxes = [];
      this.props.listPoints.forEach(function(d,i) {
        if ( selectNumber !== null && i === selectNumber )
            boxes.push(<Rect dataitem={{...d,i}} selected={true} key={i}/>);
        else
            boxes.push(<Rect dataitem={{...d,i}} selected={false} key={i}/>);
      });
  
      return (
        <svg width="100%" height={window.innerHeight} border="1px solid black">
          <g>{boxes}</g>
        </svg>
      );
    }
}

export default Graph;