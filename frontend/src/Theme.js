import { createTheme } from '@mui/material/styles';

 const theme = createTheme({
  palette: {
    primary: {
      logoColor: '#1d8ea2',
      main: '#3f50b5',
      dark: '#002884',
      LogoColor:"#27aae1",
      MainFont: 'Agdasima',
      Black: '#231F20',
      White: '#FFFFFF',
      Gray: '#E5E5E5',
      LightGray: '#E6E7E8',
      ParaColor:"#6d6e71",
      ButtonGredient:"linear-gradient(to bottom, rgba(109,110,113,1), rgba(0,0,0,1))",
      BackGredient:"linear-gradient(to bottom, rgba(43,57,144,.8), rgba(39,170,225,1) 65%)",
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
   
  },
});

export default theme;