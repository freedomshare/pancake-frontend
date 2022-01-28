import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Swap Crypto',
  description:
    'The most popular AMM on BSC by user count! Earn Swap Crypto through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Swap Crypto')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Swap Crypto')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Swap Crypto')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Swap Crypto')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Swap Crypto')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Swap Crypto')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Swap Crypto')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Swap Crypto')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Swap Crypto')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Swap Crypto')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Swap Crypto')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Swap Crypto')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Swap Crypto')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Swap Crypto')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Swap Crypto')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Swap Crypto')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Swap Crypto')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Swap Crypto')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap Info & Analytics')}`,
        description: 'View statistics for Swap Crypto exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Swap Crypto Info & Analytics')}`,
        description: 'View statistics for Swap Crypto exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Swap Crypto Info & Analytics')}`,
        description: 'View statistics for Swap Crypto exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Swap Crypto')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Swap Crypto')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('Swap Crypto')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('Swap Crypto')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Swap Crypto')}`,
      }
    default:
      return null
  }
}
