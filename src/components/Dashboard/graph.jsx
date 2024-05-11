
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
const data = [
    {
        "label": "Jan",
        "revenue": 64854,
        "cost": 32652
    },
    {
        "label": "Feb",
        "revenue": 54628,
        "cost": 42393
    },
    {
        "label": "Mar",
        "revenue": 117238,
        "cost": 50262
    },
    {
        "label": "Apr",
        "revenue": 82830,
        "cost": 64731
    },
    {
        "label": "May",
        "revenue": 91208,
        "cost": 41893
    },
    {
        "label": "Jun",
        "revenue": 103609,
        "cost": 83809
    },
    {
        "label": "Jul",
        "revenue": 90974,
        "cost": 44772
    },
    {
        "label": "Aug",
        "revenue": 82919,
        "cost": 37590
    },
    {
        "label": "Sep",
        "revenue": 62407,
        "cost": 43349
    },
    {
        "label": "Oct",
        "revenue": 82528,
        "cost": 45324
    },
    {
        "label": "Nov",
        "revenue": 56979,
        "cost": 47978
    },
    {
        "label": "Dec",
        "revenue": 87436,
        "cost": 39175
    }
]
function Graph() {

    return (
        <>
            <div className="flex lg:flex-row lg:gap-5 flex-col mt-10">
                <div style={{ width: "100%" }} >
                    <Line
                        data={{
                            labels: data.map((data) => data.label),
                            datasets: [
                                {
                                    label: "Revenue",
                                    data: data.map((data) => data.revenue),
                                    backgroundColor: "#064FF0",
                                    borderColor: "#064FF0",
                                },
                                {
                                    label: "Cost",
                                    data: data.map((data) => data.cost),
                                    backgroundColor: "#FF3030",
                                    borderColor: "#FF3030",
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                            plugins: {
                                title: {
                                    text: "Monthly Revenue & Cost",
                                },
                            },
                        }}
                    />
                </div>
                <div>
                </div>
                <div style={{ width: "100%" }}>
                    <Bar
                        data={{
                            labels: data.map((data) => data.label),
                            datasets: [
                                {
                                    label: "Count",
                                    data: data.map((data) => data.revenue),
                                    backgroundColor: [
                                        "rgba(43, 63, 229, 0.8)",
                                        "rgba(250, 192, 19, 0.8)",
                                        "rgba(253, 135, 135, 0.8)",
                                    ],
                                    borderRadius: 5,
                                },
                            ],
                        }}
                        options={{
                            plugins: {
                                title: {
                                    text: "Revenue Source",
                                },
                            },
                        }}
                    />

                </div>
            </div>

        </>
    )
}
export default Graph