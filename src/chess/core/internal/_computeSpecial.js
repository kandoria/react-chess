import { compose, curry, flip, prop } from 'ramda'
import { isExist } from '~/utils'
import convertAxisToTile from '../../helpers/convertAxisToTile'
import findCode from '../../helpers/findCode'

/**
 * Detect code inside axis (after converting to tile)
 * @param  {String}  snapshot
 * @param  {Array}   movableAxis
 * @return {Boolean}
 */
export const _hasCode = curry(function _hasCode (snapshot, movableAxis) {
  return compose(
    isExist,
    flip(findCode)(snapshot),
    convertAxisToTile,
    prop(0)
  )(movableAxis)
})
