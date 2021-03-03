import React from "react"

export const tableTitles = ["Recipe Details", "Fermentables", "Hops", "Yeast", "Mash"]

export const tableHeaders = {
  details: ["Batch Size", "Boil Time", "IBU", "ABV", "SRM", "Est. OG", "Est. FG"],
  fermentables: ["Name", "Amount", "%"],
  hops: ["Name", "Amount", "Time", "Use", "Form", "Alpha %"],
  yeast: ["Name", "Lab", "Attenuation", "Temperature"],
  mash: ["Type", "Temperature", "Time"],
}

// Celsius to Fahrenheit conversion
export const celToFar = (temp) => {
  return ((temp - 32) * (5 / 9)).toFixed()
}

export const dataFromObject = (d) => {
  return Object.entries(d).map(([key, value]) => <td key={key}>{value}</td>)
}

export const rowsFromArray = (a) => {
  return a.map((ao, i) => (
    <tr key={`${ao}-${i}`}>
      {Object.entries(ao).map(([key, value]) => (
        <td key={key}>{value}</td>
      ))}
    </tr>
  ))
}
