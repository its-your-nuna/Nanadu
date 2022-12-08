import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography  from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
const theme = createTheme();
const useStyles = makeStyles(() => ({
  about_section: {
    borderRadius: '10px',
    background:'rgba(211,211,211, 0.8)',
    marginTop: '50px',
    paddingBottom:'25px'
  },
  about_descriptions: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },
  },

}));
export default function SignIn() {
  const {
    about_section,
    leaderBoard_left_h1,
    
    images,
    about_image,
    about_descriptions,
    all
} = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };

  return (
    <>

      <Container className={about_section}  width="450px">
       
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
           <Typography sx={{fontFamily: 'Inter, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },}} component="p">
            Личные данные
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ФИО"
              name="name"
              autoComplete="name"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="birthday"
              label="Дата рождения"
              name="birthday"
              autoComplete="email"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Контактные данные"
              name="phone"
              autoComplete="phone"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Город проживания"
              name="address"
              autoComplete="address"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Город, в котором планируете открыть Nandu"
              name="address"
              autoComplete="address"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> */}
          
          </Box>
        </Box>
      </Container>
      <Container className={about_section}  width="450px">
       
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
           <Typography sx={{fontFamily: 'Inter, sans-serif',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    
    textAlign: 'center',
    color:'#202794',
    '@media (max-width: 500px)': {
      fontSize: '2.5rem',
    },}} component="p">
           Образование и профессиональный опыт
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="education"
              label="Образование и профессиональный опыт"
              name="education"
              autoComplete="education"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="birthday"
              label="В каких сферах работали и/или каким бизнесом управляли?"
              name="birthday"
              autoComplete="email"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Чем занимаетесь на данный момент?"
              name="phone"
              autoComplete="phone"
              autoFocus
              sx={{
                background:'white',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="address"
              label="Расскажите про ваш опыт в бизнесе или карьере"
              name="address"
              autoComplete="address"
              autoFocus
              sx={{
                background:'white',
              }}
            />
           
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button> */}
          
          </Box>
        </Box>
      </Container>
      <Container className={about_section} sx={{ marginBottom:'50px'}}  width="450px">
       
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
           
          }}
        >
           <Typography sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            
            textAlign: 'center',
            color:'#202794',
            '@media (max-width: 500px)': {
              fontSize: '2.5rem',
            },
           }} component="p">
            О франшизе
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="experience"
              label="У вас есть опыт работы в сфере общепита?"
              name="experience"
              autoComplete="experience"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="buis"
              label="Почему вас заинтересовала именно наша франшиза?"
              name="buis"
              autoComplete="buis"
              autoFocus
              sx={{
                background:'white',
              }}
            />
             <TextField
              margin="normal"
              required
              fullWidth
              id="partner"
              label="Планируете ли привлекать партнера для открытия филиала?"
              name="partner"
              autoComplete="partner"
              autoFocus
              sx={{
                background:'white',
                
              }}
            />
           
            
          
          </Box>
        </Box>
      </Container>
      <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{  width:'200px', margin:'0 auto' ,}}
            >
              Отправить
            </Button>
      </>
  );
}
