import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/models/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import login_img from "../../assets/login.jpg";
import LoginStyled from "./LoginStyled";

interface RootState {
  user: {
    email: string;
    password: string;
  };
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const handleLogin = () => {
    if (user.email === email && user.password === password) {
      dispatch(login({ email, password }));
      toast.success("Login realizado com sucesso!");
    } else {
      toast.error("Email ou senha incorretos!");
    }
  };

  return (
    <LoginStyled>
      <Container
        maxWidth="md"
        style={{ display: "flex", alignItems: "center", borderRadius: '8px', boxShadow: '0 0 20px #b0b0b0', padding: '0 25px 0 0' }}
      >
        <Box
          component="img"
          src={login_img}
          alt="Login"
          sx={{ width: "50%", height: "auto", marginRight: 2, borderRadius: '8px 0 0 8px' }}
        />
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}
          >
            <LockOutlinedIcon style={{ marginRight: 8, backgroundColor: '#e61e5f', color: '#eee', padding: '10px', fontSize: '1.8em', borderRadius: '100px' }} />
            Sign In
          </Typography>
          <TextField
            label="Email*"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha*"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <Typography variant="body2" style={{ marginTop: 16, textAlign: 'center', color: '#1e1e1e', fontWeight: '500'}}>
            Não tem conta? <a href="/signup">Cadastre-se</a>
          </Typography>
          <ToastContainer />
        </Box>
      </Container>
    </LoginStyled>
  );
};

export default Login;
