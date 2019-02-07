import { curry } from 'ramda'
import { parseLineupItem, parseSelected } from '~/chess/helpers'

/**
 * Get next lineup
 * @param  {string} selected
 * @param  {string} tile
 * @param  {Array}  lineup
 * @return {Array}
 */
function getNextLineup (selected, tile, lineup) {
  const { tile: selectedTile } = parseSelected(selected)

  return lineup.map((item) => {
    if (item.indexOf(selectedTile) > -1) {
      const { side, piece } = parseLineupItem(item)

      return `${side}${piece}${tile}`
    }

    return item
  })
}

export default curry(getNextLineup)