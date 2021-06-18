const { Tooltip, withStyles } = require('@material-ui/core')

export const DarkTooltip = withStyles((theme:any) => ({
  arrow: {
    color: '#242424',
  },
  tooltip: {
    backgroundColor: '#242424',
    color: 'white',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip)
