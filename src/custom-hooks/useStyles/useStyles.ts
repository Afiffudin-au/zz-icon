import { makeStyles } from '@material-ui/core/styles';
export const useStylesFormControl = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    marginTop : '10px',
    minWidth: 120,
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
  },
}));