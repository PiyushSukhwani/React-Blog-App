import React, { useMemo } from "react";
import { motion } from "framer-motion";

const Bar = ({ name, colour, ticketCount, height }) => {
  return (
    <motion.div
      className="bar"
      initial={{height: 0}}
      animate={{height: `${height}%`}}
      exit={{height: 0}}
      style={{
        backgroundColor: colour,
      }}
    >
      <div className="tooltip">
        {name} - {ticketCount}
      </div>
    </motion.div>
  );
};

function Chart({ data }) {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, [data]);

  return (
    <div className="chartContainer">
      <motion.div
      className="bar--container"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
      >
        {data.map((item) => {
          return (
            <Bar
              key={item.id}
              {...item}
              height={(item.ticketCount / maxTicketCount) * 100}
            />
          );
        })}
      </motion.div>

      <div className="y-axis">Y-axis</div>
      <div className="x-axis">X-axis</div>
    </div>
  );
}

export default Chart;