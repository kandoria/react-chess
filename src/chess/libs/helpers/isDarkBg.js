import { includes } from 'ramda'
import { isEven } from '~/utils'
import parseTileName from './parseTileName'
import transformRank from './transformRank'
import { EVEN_TILES, ODD_TILES } from '../../constants'

/**
 * Is dark background?
 * @param  {string}  fileName
 * @param  {number}  rankNameNum
 * @return {boolean}
 */
function isDarkBg (tileName) {
  const { fileName, rankName } = parseTileName(tileName)
  const rankNameNum = transformRank(rankName)
  const tile = isEven(rankNameNum) ? EVEN_TILES : ODD_TILES

  return includes(fileName, tile)
}

export default isDarkBg