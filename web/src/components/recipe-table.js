import React, { useEffect, useState } from 'react'
import styles from './recipe-table.module.scss'
import { tableHeaders, dataFromObject, rowsFromArray, tableTitles } from '../utils/build-recipe'
import { celToFar } from '../lib/helpers'

const RecipeTableWrapper = ({ url }) => {
  if (!url || url === '') {
    return null
  }

  console.log(url)

  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState()

  const fetchRecipe = async () => {
    let response = await fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => jsonRes)
      .catch((error) => console.warn(error.message))

    response = response._type === 'batch' ? response.recipe : response

    // If we uplad a batch file, then look at response.recipe
    let { batchSize, boilTime, ibu, abv, color, fg, og } = response

    let fermentables = []
    let hops = []
    let yeast = []
    let mash = []

    response.fermentables.forEach((f, i) => {
      fermentables.push({
        name: f.name,
        amount: `${f.amount} ${response.defaults.weight}`,
        percentage: f.percentage,
      })
    })

    response.hops.map((h) =>
      hops.push({
        name: h.name,
        amount: `${h.amount} ${response.defaults.hop}`,
        time: h.time,
        use: h.use,
        form: h.type,
        alpha: h.alpha,
      })
    )

    response.yeasts.map((y) =>
      yeast.push({
        name: y.name,
        lab: y.laboratory,
        attenuation: y.attenuation,
        temperature:
          y.minTemp &&
          y.maxTemp &&
          `${y.minTemp} - ${y.maxTemp} º ${response.defaults.temp.toUpperCase()}`,
      })
    )

    response.mash.steps.map((m) =>
      mash.push({
        name: m.type,
        temperature: `${celToFar(m.stepTemp)} º ${response.defaults.temp.toUpperCase()}`,
        time: `${m.stepTime} min`,
      })
    )

    setRecipe({
      details: {
        batchSize: batchSize.toFixed(2),
        boilTime: boilTime,
        ibu: Math.round(ibu),
        abv: abv.toFixed(1),
        color: color,
        og: og.toFixed(3),
        fg: fg.toFixed(3),
      },
      fermentables,
      hops,
      yeast,
      mash,
    })
    setLoading(false)
  }

  const RecipeTable = ({ recipe }) => {
    return (
      <>
        <h4>Recipe Details</h4>
        <table className={styles.recipeTable}>
          <thead>
            <tr>
              {tableHeaders.details.map((d) => {
                return <th key={d}>{d}</th>
              })}
            </tr>
          </thead>
          <tbody>
            <tr>{dataFromObject(recipe.details)}</tr>
          </tbody>
        </table>
        <h4>Fermentables</h4>
        <table className={styles.recipeTable}>
          <thead>
            <tr>
              {tableHeaders.fermentables.map((f) => (
                <th key={f}>{f}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rowsFromArray(recipe.fermentables)}</tbody>
        </table>
        <h4>Hops</h4>
        <table className={styles.recipeTable}>
          <thead>
            <tr>
              {tableHeaders.hops.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rowsFromArray(recipe.hops)}</tbody>
        </table>
        <h4>Yeast</h4>
        <table className={styles.recipeTable}>
          <thead>
            <tr>
              {tableHeaders.yeast.map((y) => (
                <th key={y}>{y}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rowsFromArray(recipe.yeast)}</tbody>
        </table>
        <h4>Mash</h4>
        <table className={styles.recipeTable}>
          <thead>
            <tr>
              {tableHeaders.mash.map((m) => (
                <th key={m}>{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>{rowsFromArray(recipe.mash)}</tbody>
        </table>
      </>
    )
  }

  useEffect(() => {
    fetchRecipe()
  }, [])

  return (
    <div className={styles.recipeTableContainer}>
      {loading ? 'Loading...' : <RecipeTable recipe={recipe} />}
    </div>
  )
}

export default RecipeTableWrapper
