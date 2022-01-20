export const todoStyle = {
  mainBoxStyle: {
    display: 'flex',
    justifyContent: 'center',
    gap: 1,
    height: 'fit-content'
  },
  checkBoxStyle: {
    '& .MuiSvgIcon-root': { fontSize: 28 },
    width: 56,
    height: 56,
    alignSelf: 'center'
  },
  textStyle1: {
    minHeight: 56,
    backgroundColor: 'gold',
    width: 695,
    wordBreak: 'break-word',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle2: {
    minHeight: 56,
    backgroundColor: 'gray',
    width: 695,
    wordBreak: 'break-word',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'line-through',
  },
  buttonStyle: {
    width: 150,
    height: 56,
    alignSelf: 'center'
  },
}