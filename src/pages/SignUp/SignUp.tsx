import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/models/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import signup_img from "../../assets/signup.jpg"; 
import SignUpStyled from "./SignUpStyled"; 

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = () => {
    if (validateForm()) {
      dispatch(signUp({ email, password }));
      toast.success("Usuário registrado com sucesso!");
    }
  };

  const validateForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|outlook)\.com$/;
    if (!emailRegex.test(email) || email.length < 3) {
      toast.error("Email inválido!");
      return false;
    }

    if (password.length < 4 || /(\d)\1{2,}/.test(password)) {
      toast.error(
        "Senha deve ter mais de 4 caracteres e não pode ser uma sequência."
      );
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas não coincidem!");
      return false;
    }

    return true;
  };

  return (
    <SignUpStyled>
      <Container
        maxWidth="md"
        style={{ display: "flex", alignItems: "center", borderRadius: '8px', boxShadow: '0 0 20px #b3b3b3', padding: '0 25px 0 0' }}
      >
        <Box
          component="img"
          src={signup_img}
          alt="Sign Up"
          sx={{ width: "50%", height: "auto", marginRight: 2, borderRadius: '8px 0 0 8px' }}
        />
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}
          >
            <VerifiedUserOutlinedIcon style={{ marginRight: 8, backgroundColor: '#4baf50', color: '#eee', padding: '10px', fontSize: '1.8em', borderRadius: '100px' }} />
            Sign Up
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
          <TextField
            label="Confirmação de Senha*"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUp}
          >
            Cadastrar
          </Button>
          <Typography variant="body2" style={{ marginTop: 16, textAlign: 'center', color: '#1e1e1e', fontWeight: '500'}}>
            Ja possui conta? <a href="/login">Vá para login</a>
          </Typography>
          <ToastContainer position="top-center" autoClose={5000} />
        </Box>
      </Container>
    </SignUpStyled>
  );
};

export default SignUp;
