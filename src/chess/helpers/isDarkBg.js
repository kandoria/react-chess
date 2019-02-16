import { includes } from 'ramda'
import { isEven } from '~/utils'
import parseTile from './parseTile'
import transformRankToY from './transformRankToY'
import { DARK_TILES, LIGHT_TILES } from '~/chess/constants'

/**
 * Is dark background?
 * @param  {string}  tile
 * @return {boolean}
 */
function isDarkBg (tile) {
  const { file, rank } = parseTile(tile)
  const y = transformRankToY(rank)
  const dividedTile = isEven(y) ? DARK_TILES : LIGHT_TILES

  return includes(file, dividedTile)
}

export default isDarkBg
