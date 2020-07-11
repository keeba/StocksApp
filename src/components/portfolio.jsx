import React, { Component } from "react";
import PieChart, {
  Series,
  Label,
  Legend,
  Font,
} from "devextreme-react/pie-chart";

class Portfolio extends Component {
  render() {
    const data = this.getDataPoints();
    return (
      <PieChart
        id='pie'
        dataSource={data}
        palette='Bright'
        type='doughnut'
        title='Portfolio'
        onPointClick={this.pointClickHandler}
        onLegendClick={this.legendClickHandler}
        innerRadius={1.2}
      >
        <Legend
          orientation='horizontal'
          itemTextPosition='right'
          horizontalAlignment='center'
          verticalAlignment='bottom'
          columnCount={4}
        />
        <Series argumentField='type' valueField='value'>
          <Label visible={true} customizeText={this.customizeText}>
            <Font size={12} />
          </Label>
        </Series>
      </PieChart>
    );
  }

  customizeText(arg) {
    return `${arg.valueText} (${arg.percentText})`;
  }

  pointClickHandler(e) {
    this.toggleVisibility(e.target);
  }

  legendClickHandler(e) {
    let arg = e.target;
    let item = e.component.getAllSeries()[0].getPointsByArg(arg)[0];

    this.toggleVisibility(item);
  }

  toggleVisibility(item) {
    item.isVisible() ? item.hide() : item.show();
  }

  getDataPoints = () => {
    if (this.props.stocks) {
      const hCategories = {};
      this.props.stocks.forEach((stock) => {
        if (hCategories[stock.Type]) {
          hCategories[stock.Type] += parseInt(stock.InvestedAmount);
        } else {
          hCategories[stock.Type] = parseInt(stock.InvestedAmount);
        }
      });
      if (hCategories) {
        const data = [];
        Object.keys(hCategories).forEach((type) => {
          data.push({ type: type, value: hCategories[type] });
        });
        return data;
      }
    }
    return [];
  };
}

export default Portfolio;
