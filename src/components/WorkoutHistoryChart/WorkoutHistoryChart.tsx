import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FC } from "react";

type WorkoutHistoryChartProps = {};

const WorkoutHistoryChart: FC<WorkoutHistoryChartProps> = () => {
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const workoutsPerMonth = [12, 19, 3, 5, 2, 3];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    BarElement,
    Tooltip,
    Legend
  );

  return (
    <div>
      <div className="mb-6">
        <div className="text-xl mb-2">Workout History</div>
        <div>
          <Bar
            data={{
              labels: MONTHS,
              datasets: [
                {
                  data: workoutsPerMonth,
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.4)",
                    "rgba(54, 162, 235, 0.4)",
                    "rgba(255, 206, 86, 0.4)",
                    "rgba(75, 192, 192, 0.4)",
                    "rgba(153, 102, 255, 0.4)",
                    "rgba(255, 159, 64, 0.4)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkoutHistoryChart;
