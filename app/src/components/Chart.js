import React from "react";
import { useSelector } from "react-redux";
import { Radar } from "@nivo/radar";

const theme = {
  axis: {
    ticks: {
      text: {
        fill: "rgba(255, 255, 255, .40)"
      }
    }
  },
  grid: {
    line: {
      stroke: "rgba(255, 255, 255, .40)",
      strokeDasharray: "6 6"
    }
  },
  dots: {
    text: {
      fill: "#000",
      fontSize: 12,
      fontWeight: 800
    }
  },
  tooltip: {
    container: {
      background: "#2d374d",
      color: "inherit",
      boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
      fontFamily: "monospace"
    }
  }
};

const Chart = () => {
  const urbanAreaScores = useSelector(state => state.urbanAreaScores);
  const isSearching = useSelector(state => state.isSearching);

  const renderChart = () => {
    const data = urbanAreaScores.categories.map(item => {
      return {
        name: item.name,
        Score:
          item.score_out_of_10 === 0
            ? "0"
            : Math.floor(item.score_out_of_10 * 10)
      };
    });

    return (
      <Radar
        width={800}
        height={500}
        margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
        data={data}
        indexBy="name"
        keys={["Score"]}
        colors={["#7d38dd"]}
        theme={theme}
        dotSize={30}
        enableDotLabel={true}
        dotLabelYOffset={4}
        gridShape="circular"
      />
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isSearching
        ? "Retrieving Data"
        : !isSearching && urbanAreaScores
        ? renderChart()
        : null}
    </div>
  );
};

export default Chart;